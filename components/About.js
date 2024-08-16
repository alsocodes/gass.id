import Image from 'next/image';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const missions = [
  'Kesejahteraan karyawan adalah prioritas',
  'Menjunjung tinggi program Keselamatan dan Kesehatan Kerja3. Memastikan kepuasan pelanggan',
  'Memberikan pelayanan yang prima dan bekerja optimal',
  'Berkontribusi pada realisasi ide dan inovasi pelanggan denganmenyediakan produk teknologi keamanan dan kenyamanan',
];

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto '
      id='about'
    >
      <div className='grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-20 my-12 '>
        <ScrollAnimationWrapper className='flex w-full justify-end '>
          <motion.div className='h-full w-full p-4' variants={scrollAnimation}>
            <Image
              // src='/assets/Illustration2.png'
              src='/assets/ilust1.png'
              alt='Gass Illustrasi'
              layout='responsive'
              quality={100}
              height={416}
              width={510}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className={' lg:pt-8'}>
          <motion.div
            className='flex flex-col items-end justify-center ml-auto w-full lg:w-9/12'
            variants={scrollAnimation}
          >
            <h3 className='text-3xl lg:text-4xl font-medium leading-relaxexd text-black-600 text-start w-full'>
              Our Vision
            </h3>
            <p className='my-2 text-black-500'>
              Menjadikan perusahaan sebagai motor penggerak penyediainformasi
              dan pendukung keselamatan melalui teknologi yang berkesinambungan.
            </p>
            <h3 className='text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 mt-4 w-full mb-2'>
              Our Mission
            </h3>
            <ul className='text-black-500 self-start list-inside ml-8'>
              {missions.map((feature, index) => (
                <motion.li
                  className='relative circle-check custom-list '
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default About;
