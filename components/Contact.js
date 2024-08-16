import React, { useMemo } from 'react';
import { CiClock1, CiMail, CiMap, CiPhone } from 'react-icons/ci';
import ButtonPrimary from './misc/ButtonPrimary';
import Image from 'next/image';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className='w-full bg-gradient-to-b from-transparent to-gray-450'
      id='contact'
    >
      <div className='max-w-screen-xl px-6 pt-20 pb-32 sm:px-8 lg:px-16 mx-auto w-full relative overflow-hidden'>
        <div className='w-[500px] h-[170px] absolute top-24 -right-72 lg:-right-36 -z-10 overflow-hidden'>
          <Image
            src={'/assets/dots.png'}
            width={500}
            height={238}
            layout='responsive'
          />
        </div>
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed py-4'
          >
            Contact
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className='leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center'
          >
            {/* Let's choose the package that is best for you and explore it
              happily and cheerfully. */}
          </motion.p>
        </ScrollAnimationWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
            <div className='bg-white-500 p-3 w-full lg:p-4 text-black-500'>
              <CiMap className='mb-4 text-3xl md:text-5xl text-orange-500' />
              {/* <strong className='font-medium'>Address</strong> */}
              Ruko RJA Jl. Wibawa Mukti 2, RT.04 RW.04
              <br />
              Kel. Jatisari Kec. Jatiasih Kota Bekasi Jawa Barat 17423
            </div>

            <div className='bg-white-500 p-3 w-full lg:p-4 text-black-500'>
              <CiPhone className='mb-4 text-3xl md:text-5xl text-orange-500' />
              {/* <strong className='font-medium'>Address</strong> */}
              Aroal Badri
              <br />
              0812 8991 9090
            </div>
            <div className='bg-white-500 p-3 w-full lg:p-4 text-black-500'>
              <CiMail className='mb-4 text-3xl md:text-5xl text-orange-500' />
              {/* <strong className='font-medium'>Address</strong> */}
              aroal.badri@gass.id
              <br />
              info@gass.id
            </div>
            <div className='bg-white-500 p-3 w-full lg:p-4 text-black-500'>
              <CiClock1 className='mb-4 text-3xl md:text-5xl text-orange-500 font-light' />
              {/* <strong className='font-medium'>Address</strong> */}
              Monday - Friday
              <br />
              09:00 - 17:00
            </div>
          </div>

          <div className='bg-white-500 p-8'>
            <div className='flex flex-col gap-8'>
              <input
                placeholder='Name'
                className='w-full py-2.5 px-4 border border-gray-400 outline-none focus:border-gray-600 rounded text-black-500 focus:shadow'
              />
              <input
                placeholder='Email'
                className='w-full py-2.5 px-4 border border-gray-400 outline-none focus:border-gray-600 rounded text-black-500 focus:shadow'
              />
              <input
                placeholder='Subject'
                className='w-full py-2.5 px-4 border border-gray-400 outline-none focus:border-gray-600 rounded text-black-500 focus:shadow'
              />

              <textarea
                rows={3}
                placeholder='Message'
                className='w-full py-2.5 px-4 border border-gray-400 outline-none focus:border-gray-600 rounded text-black-500 focus:shadow'
              />
              <ButtonPrimary>Submit</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
