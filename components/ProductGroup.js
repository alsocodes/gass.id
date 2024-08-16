import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

// const products = [

// ];

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
    images: ['safety-cone-1.png', 'safety-cone-2.png', 'safety-cone-3.png'],
  },
  {
    name: 'APAR with Bracket',
    images: ['apar-1.png', 'apar-2.png', 'apar-3.png'],
  },
  {
    name: 'Rotary Lamp',
    images: ['rotary-lamp-1.png', 'rotary-lamp-2.png', 'rotary-lamp-3.png'],
  },

  {
    name: 'Radio Komunikasi',
    images: ['radio-1.png', 'radio-2.png', 'radio-3.png'],
  },
  {
    name: 'Backup Alarm',
    images: ['backup-alarm-1.png', 'backup-alarm-1.png', 'backup-alarm-1.png'],
  },
];

const ProductGroup = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14 border-b border-b-gray-100'
      id='product'
    >
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
                className='w-full relative rounded md:rounded-lg overflow-hidden shadow-md '
              >
                <h3 className='text-md md:text-lg text-white-500 font-medium capitalize absolute bottom-0 left-0 right-0 z-10 bg-orange-500 py-2.5 px-4 truncate'>
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

          {/* {products.map(({ name, images }, key) => (
            <div key={key} className='mb-2'>
              <div className='text-blacsk-600 mb-2 font-medium text-md text-left py-2'>
                {name}
              </div>
              <div className='grid grid-cols-3 gap-1.5 lg:gap-12'>
                {images?.map((image, index) => (
                  
                ))}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProductGroup;
