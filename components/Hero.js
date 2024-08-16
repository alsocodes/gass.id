import React, { act, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import ButtonPrimary from './misc/ButtonPrimary';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Hero = ({
  listUser = [
    {
      name: 'Home',
      number: '390',
      icon: '/assets/Icon/heroicons_sm-user.svg',
    },
    {
      name: 'About',
      number: '20',
      icon: '/assets/Icon/gridicons_location.svg',
    },
    {
      name: 'Product',
      number: '50',
      icon: '/assets/Icon/bx_bxs-server.svg',
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const heros = ['bg-hero1', 'bg-hero2', 'bg-hero3', 'bg-hero4'];
  const [active, setActive] = useState(0);

  const play = (k) => {
    const sto = setTimeout(() => {
      const act = k < heros.length - 1 ? k + 1 : 0;
      console.log(act);
      setActive(act);
      play(act);
    }, 5000);

    return () => clearTimeout(sto);
  };

  useEffect(() => {
    play(active);
  }, []);

  return (
    <div className={`w-full h-screen relative bg-[#000]`} id='hero'>
      {heros?.map((bg, key) => (
        <div
          key={key}
          className={`w-full h-full ${bg} bg-no-repeat bg-cover bg-center absolute left-0 top-0 transition-all ease-in-out duration-1000
            ${active === key ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}

      <div className='w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-[#000] bg-opacity-60 z-20 '>
        <div className='max-w-screen-xl px-8 xl:px-16 mx-auto h-full flex items-center justify-center '>
          <ScrollAnimationWrapper>
            <motion.div
              className='grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-1 gap-8 py-6 sm:py-16 h-full'
              variants={scrollAnimation}
            >
              <div className='flex flex-col justify-center items-center h-full row-start-2 sm:row-start-1 gap-4'>
                <div className='w-[200px] h-[100px] relative mb-6'>
                  <Image
                    src={`/assets/logo-gass-wh-sm.png`}
                    layout='fill'
                    quality={100}
                    alt='logo-gass'
                  />
                </div>
                <h1 className='text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 leading-normal text-center'>
                  PT Global Andalan Solusi Sukses
                </h1>
                <p className='text-white-300 mt-4 mb-6'>
                  Innovation Systems & Safety Solutions
                </p>
                {/* <ButtonPrimary>Get Started</ButtonPrimary> */}
              </div>
              {/* <div className="flex w-full">
                <motion.div
                  className="h-full w-full"
                  variants={scrollAnimation}
                >
                  <Image
                    className="rounded-lg"
                    src="/assets/hero-1.png"
                    alt="gass-ilustration"
                    quality={100}
                    width={500}
                    height={500}
                    layout="fixed"
                  />
                </motion.div>
              </div> */}
            </motion.div>
          </ScrollAnimationWrapper>
          {/* <div className="relative w-full flex">
          <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
            {listUser.map((listUsers, index) => (
              <motion.div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                    <img src={listUsers.icon} className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-black-600 font-bold">
                      {listUsers.number}+
                    </p>
                    <p className="text-lg text-black-500">{listUsers.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: 'blur(114px)' }}
          ></div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
