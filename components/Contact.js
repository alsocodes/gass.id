import React, { useEffect, useMemo, useState } from 'react';
import { CiClock1, CiMail, CiMap, CiPaperplane, CiPhone } from 'react-icons/ci';
import ButtonPrimary from './misc/ButtonPrimary';
import Image from 'next/image';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import { useForm } from 'react-hook-form';
import { BiLogoWhatsapp, BiPaperPlane, BiSend } from 'react-icons/bi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { PiWhatsappLogoLight, PiWhatsappLogoThin } from 'react-icons/pi';
import Link from 'next/link';

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const [progress, setProgress] = useState(false);
  const [mailResult, setMailResult] = useState(null);
  const onSubmit = async (data) => {
    setProgress(true);
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setProgress(false);
        setMailResult({
          success: true,
          message: 'Thanks, we will response your message asap!',
          ts: new Date(),
        });
      })
      .catch(() => {
        setProgress(false);
        setMailResult({
          success: false,
          message: 'Email was not delivered, please try again!',
          ts: new Date(),
        });
      });
  };

  useEffect(() => {
    if (mailResult) reset();
  }, [mailResult]);
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
              <Link
                href={
                  'https://wa.me/6281289919090?text=Halo gass, saya ingin bertanya terkait kebutuhan .....'
                }
              >
                <a rel='noopener noreferrer' target='_blank'>
                  <PiWhatsappLogoLight className='mb-4 text-3xl md:text-5xl text-orange-500' />
                  {/* <strong className='font-medium'>Address</strong> */}
                  {/* Aroal Badri */}
                  {/* <br /> */}
                  0812 8991 9090
                </a>
              </Link>
            </div>
            <div className='bg-white-500 p-3 w-full lg:p-4 text-black-500'>
              <Link href={'mailto:info@gass.id'}>
                <a rel='noopener noreferrer' target='_blank'>
                  <CiMail className='mb-4 text-3xl md:text-5xl text-orange-500' />
                  {/* <strong className='font-medium'>Address</strong> */}
                  {/* aroal.badri@gass.id
              <br /> */}
                  info@gass.id
                </a>
              </Link>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-4'>
                <div>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    placeholder='Name'
                    className='w-full py-2.5 px-4 border border-gray-400 outline-none focus:border-gray-600 rounded text-black-500 focus:shadow'
                  />
                  <div className='text-orange-base text-sm font-thin italic h-4'>
                    {errors?.['name']?.message}
                  </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-3'>
                  <div className='w-full'>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Email format is not valid',
                        },
                      })}
                      type='email'
                      placeholder='Email'
                      className='w-full py-2.5 px-4 border border-gray-400 outline-none focus:border-gray-600 rounded text-black-500 focus:shadow'
                    />
                    <div className='text-orange-base text-sm font-thin italic h-4'>
                      {errors?.['email']?.message}
                    </div>
                  </div>

                  <div className='w-full'>
                    <input
                      {...register('phone', {
                        required: 'Phone/Whatsapp is required',
                      })}
                      placeholder='Phone/Whatsapp'
                      type='text'
                      className='w-full py-2.5 px-4 border border-gray-400 outline-none focus:border-gray-600 rounded text-black-500 focus:shadow'
                    />
                    <div className='text-orange-base text-sm font-thin italic h-4'>
                      {errors?.['phone']?.message}
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    {...register('subject', {
                      required: 'Subject is required',
                    })}
                    placeholder='Subject'
                    type='text'
                    className='w-full py-2.5 px-4 border border-gray-400 outline-none focus:border-gray-600 rounded text-black-500 focus:shadow'
                  />
                  <div className='text-orange-base text-sm font-thin italic h-4'>
                    {errors?.['subject']?.message}
                  </div>
                </div>
                <div>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                    })}
                    rows={3}
                    placeholder='Message'
                    className='w-full py-2.5 px-4 border border-gray-400 outline-none focus:border-gray-600 rounded text-black-500 focus:shadow'
                  />
                  <div className='text-orange-base text-sm font-thin italic h-4'>
                    {errors?.['message']?.message}
                  </div>
                </div>

                <ButtonPrimary
                  disabled={progress}
                  addClass='flex justify-center items-center gap-2 font-thin'
                >
                  {progress ? (
                    <div className='loaderx w-6 h-6' />
                  ) : (
                    <CiPaperplane className='text-2xl -rotate-45' />
                  )}
                  <div>Submit</div>
                </ButtonPrimary>
              </div>
              {mailResult ? (
                <p
                  className={`py-2 text-center ${
                    mailResult.success ? 'text-green-500' : 'text-orange-base'
                  }  font-light text-lg`}
                >
                  {mailResult.message}
                </p>
              ) : (
                ''
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
