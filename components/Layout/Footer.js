import React from 'react';
import LogoVPN from '../../public/assets/Logo.svg';
import Facebook from '../../public/assets/Icon/facebook.svg';
import Twitter from '../../public/assets/Icon/twitter.svg';
import Instagram from '../../public/assets/Icon/instagram.svg';
import Image from 'next/image';
import Link from 'next/link';
const products = [
  'Emergency Shutdown (Log out Tag Out)',
  'Safety Cone with Bracket',
  'Rotary Lamp',
  'Radio Komunikasi',
  'APAR with Bracket',
  'Backup Alarm',
];
const Footer = () => {
  return (
    <div className='bg-white-300 pt-24 pb-12'>
      <div className='max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-2'>
        <div className='w-full lg:w-6/12 flex-shrink'>
          <div className='w-[80px] h-[40px] relative mb-2'>
            <Image
              src={`/assets/logo-gass-bl-sm.png`}
              layout='fill'
              quality={100}
              alt='logo-gass'
            />
          </div>
          <p className='mb-4'>
            <strong className='font-medium'>GASS.ID</strong> is PT Global
            Andalan Solusi Sukses, Innovation Systems & Safety Solutions
          </p>
          <div className='flex w-full mt-2 mb-8 -mx-2'>
            <div className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'>
              <Facebook className='h-6 w-6' />
            </div>
            <div className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'>
              <Twitter className='h-6 w-6' />
            </div>
            <div className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'>
              <Instagram className='h-6 w-6' />
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row w-full lg:w-6/12 gap-2'>
          <div className='w-full sm:w-8/12 flex-shrink'>
            <p className='text-black-600 mb-4 font-medium text-lg'>Product</p>
            <ul className='text-black-500 '>
              {products?.map((product, key) => (
                <li
                  key={key}
                  className='my-2 hover:text-orange-500 cursor-pointer transition-all'
                >
                  {product}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full sm:w-4/12 flex-shrink'>
            <p className='text-black-600 mb-4 font-medium text-lg'>Menu</p>
            <ul className='text-black-500'>
              <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                About
              </li>
              <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                Product
              </li>
              <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-2'>
        <p className='text-gray-400'>©{new Date().getFullYear()} - Gass.id</p>
      </div>
    </div>
  );
};

export default Footer;
