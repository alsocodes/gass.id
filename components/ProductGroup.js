import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import { BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi';

const ProductGroup = () => {
  const products = [
    {
      name: 'Speed Limiter',
      images: [
        'speed-limiter-1.png',
        'speed-limiter-2.png',
        'speed-limiter-3.png',
      ],
    },

    {
      name: 'Fatigue Warning',
      images: [
        'fatigue-1.png',
        'fatigue-2.png',
        'fatigue-3.png',
        'fatigue-4.png',
      ],
    },
    {
      name: 'Emergency Shutdown (Log out Tag Out)',
      images: ['loto-1.png', 'loto-2.png', 'loto-3.png'],
    },
    {
      name: 'Safety Cone with Bracket',
      images: ['safety-cone-1.png', 'safety-cone-3.png'],
    },
    {
      name: 'APAR with Bracket',
      images: ['apar-1.png', 'apar-2.png'],
    },
    {
      name: 'Rotary Lamp',
      images: ['rotary-lamp-1.png', 'rotary-lamp-2.png', 'rotary-lamp-3.png'],
    },

    {
      name: 'Radio Komunikasi',
      images: ['radio-1.png', 'radio-3.png'],
    },
    {
      name: 'Backup Alarm',
      images: [
        'backup-alarm-1.png',
        'backup-alarm-1.png',
        'backup-alarm-1.png',
      ],
    },
    {
      name: 'Autolube System',
      images: ['autolube-1.png', 'autolube-2.png', 'autolube-3.png'],
    },
    {
      name: 'WheelChuck Bracket',
      images: ['wheelchuck-1.png', 'wheelchuck-2.png'],
    },
    {
      name: 'P3K Box',
      images: ['p3k-1.png'],
    },
  ];
  //'apar-3.png'
  // 'safety-cone-2.png',

  const shimmer = (w = '100%', h = '100%') => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [act, setAct] = useState({ p: 0, i: 0 });

  const onNext = () => {
    const maxI = products[act.p].images.length - 1;
    const maxP = products.length - 1;
    if (act.i < maxI) setAct({ ...act, i: act.i + 1 });
    else {
      if (act.p < maxP) setAct({ p: act.p + 1, i: 0 });
      else setAct({ p: 0, i: 0 });
    }
  };

  const onPrev = () => {
    if (act.i > 0) setAct({ ...act, i: act.i - 1 });
    else {
      const maxP = products.length - 1;
      if (act.p > 0) {
        const maxI = products[act.p - 1].images.length - 1;
        setAct({ p: act.p - 1, i: maxI });
      } else setAct({ p: maxP, i: products[maxP].images.length - 1 });
    }
  };

  const [preview, setPreview] = useState(false);

  return (
    <div
      className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14 border-b border-b-gray-100'
      id='product'
    >
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 w-screen h-screen bg-[#000] bg-opacity-90 z-50 flex ${
          preview
            ? 'opacity-100 pointer-events-auto'
            : ' opacity-0 pointer-events-none'
        } transition-all ease-in-out duration-300`}
      >
        <div className='flex w-full h-full justify-center items-center max-w-screen-lg mx-auto max-h-[80%]  lg:max-h-[800px] my-auto self-center'>
          <div className='w-full h-full relative border-white-500'>
            {products[act.p]?.images.map((image, key) => (
              <Image
                placeholder='blur'
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
                key={key}
                src={`/assets/products/${image}`}
                layout='fill'
                objectFit='contain'
                className={`transition-all ease-out duration-300 ${
                  act.i === key ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          <div className='text-white-500 bg-orange-500 absolute bottom-0 z-10 w-full'>
            <div className='max-w-screen-xl mx-auto py-2 md:py-2.5 lg:py-3 text-center text-sm md:text-md lg:text-lg font-light'>
              {products[act.p]?.name}
            </div>
          </div>
          <div className='absolute top-0 w-full flex justify-between px-2 lg:px-6 py-2'>
            <button
              onClick={() => setPreview(false)}
              className='pointer-events-auto w-10 h-10 bg-gray-400 bg-opacity-60 rounded-full flex justify-center items-center 
              opacity-40 hover:opacity-100 cursor-pointer z-50'
            >
              <BiX className='text-3xl' />
            </button>
          </div>
          <div className='flex w-full justify-between pointer-events-none absolute px-2 lg:px-6'>
            <button
              onClick={() => onPrev()}
              className='pointer-events-auto w-10 h-10 bg-gray-400 bg-opacity-60 rounded-full flex justify-center items-center 
              opacity-40 hover:opacity-100 cursor-pointer'
            >
              <BiChevronLeft className='text-3xl' />
            </button>
            <button
              onClick={() => onNext()}
              className='pointer-events-auto w-10 h-10 bg-gray-400 bg-opacity-60 rounded-full flex justify-center items-center 
              opacity-40 hover:opacity-100 cursor-pointer'
            >
              <BiChevronRight className='text-3xl' />
            </button>
          </div>
        </div>
      </div>
      <div className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full py-8 gap-8'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed'
            >
              Product
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center'
            >
              {/* Let's choose the package that is best for you and explore it
              happily and cheerfully. */}
            </motion.p>
          </ScrollAnimationWrapper>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12'>
            {products.map(({ name, images }, key) => (
              <ScrollAnimationWrapper
                key={`${key}`}
                onClick={() => {
                  setPreview(true);
                  setAct({ p: key, i: 0 });
                }}
                className='w-full relative rounded md:rounded-lg overflow-hidden shadow-md '
              >
                <h3 className='text-sm md:text-lg text-white-500 font-light capitalize absolute bottom-0 left-0 right-0 z-10 bg-orange-500 py-1.5 md:py-2.5 px-4 truncate'>
                  {name}
                </h3>
                <motion.div
                  variants={scrollAnimation}
                  className='flex flex-col justify-center items-center w-full aspect-square relative'
                >
                  <Image
                    src={`/assets/products/sm-${images[0]}`}
                    // src='/assets/products/300-loto-1.png'
                    className='hover:scale-125 hover:cursor-pointer transition-all ease-in-out duration-500'
                    alt={`${name}-${key}`}
                    layout='fill'
                    quality={100}
                  />
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGroup;
