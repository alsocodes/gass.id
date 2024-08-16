import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Import react scroll
import { Link as LinkScroll } from 'react-scroll';
import ButtonOutline from '../misc/ButtonOutline.';
import LogoVPN from '../../public/assets/Logo.svg';
import Image from 'next/image';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 30);
    });
  }, []);

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header
        className={
          'fixed top-0 w-full  z-30  transition-all' +
          (scrollActive ? ' shadow-sm pt-0 bg-white-500' : ' pt-4')
        }
      >
        {/* <nav className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'> */}
        <nav className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto py-3 sm:py-4 flex justify-between items-center'>
          <div className='mb-1'>
            <div className='w-[80px] h-[40px] relative -mb-3'>
              <Image
                src={`/assets/logo-gass-${scrollActive ? 'bl' : 'wh'}-sm.png`}
                layout='fill'
                quality={100}
                alt='logo-gass'
              />
            </div>
          </div>

          <ul className='hidden lg:flex'>
            <LinkScroll
              activeClass='active'
              to='hero'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('hero');
              }}
              className={
                'hidden lg:px-4 py-2 mx-2 cursor-pointer animation-hover inline-blockx relative' +
                (activeLink === 'hero'
                  ? ' text-orange-500 animation-active '
                  : scrollActive
                  ? ' text-black-500 hover:text-orange-500'
                  : ' text-white-300 hover:text-orange-500')
              }
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('about');
              }}
              className={
                'lg:px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'about'
                  ? ' text-orange-500 animation-active '
                  : scrollActive
                  ? ' text-black-500 hover:text-orange-500'
                  : ' text-white-300 hover:text-orange-500')
              }
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='product'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('product');
              }}
              className={
                'lg:px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'product'
                  ? ' text-orange-500 animation-active '
                  : scrollActive
                  ? ' text-black-500 hover:text-orange-500 '
                  : ' text-white-300 hover:text-orange-500 ')
              }
            >
              Products
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('contact');
              }}
              className={
                'lg:px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'contact'
                  ? ' text-orange-500 animation-active '
                  : scrollActive
                  ? ' text-black-500 hover:text-orange-500 '
                  : ' text-white-300 hover:text-orange-500 ')
              }
            >
              Contact
            </LinkScroll>
          </ul>
          <div className='lg:hidden relative'>
            <button
              className='flex items-center justify-center w-8 h-8'
              onClick={() => setToggle(!toggle)}
            >
              <label
                className={`lg:hidden ${
                  scrollActive ? 'text-orange-base' : 'text-white-500'
                } font-bold self-end mb-1`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h7'
                  ></path>
                </svg>
              </label>
            </button>
            <div
              className={`w-[220px] min-h-[200px] ${
                toggle
                  ? 'opacity-100 pointer-events-auto h-auto'
                  : 'opacity-0 pointer-events-none h-0'
              } overflow-hidden absolute right-0 top-12 ${
                scrollActive ? 'bg-white-500 shadow-md' : ''
              }  py-4 px-4 transition-all ease-in-out duration-200 rounded-md`}
            >
              <ul className='justify-end text-right flex flex-col'>
                <LinkScroll
                  onClick={() => setToggle(false)}
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink('about');
                  }}
                  className={
                    ' my-1 mx-3 cursor-pointer animation-hover relative text-md self-end' +
                    (activeLink === 'about'
                      ? ' text-orange-500 animation-active '
                      : scrollActive
                      ? ' text-black-500 hover:text-orange-500 '
                      : ' text-white-300 hover:text-orange-500 ')
                  }
                >
                  About
                </LinkScroll>
                <LinkScroll
                  onClick={() => setToggle(false)}
                  activeClass='active'
                  to='product'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink('product');
                  }}
                  className={
                    ' my-1 mx-3 cursor-pointer animation-hover relative text-md self-end' +
                    (activeLink === 'product'
                      ? ' text-orange-500 animation-active '
                      : scrollActive
                      ? ' text-black-500 hover:text-orange-500 '
                      : ' text-white-300 hover:text-orange-500 ')
                  }
                >
                  Product
                </LinkScroll>
                <LinkScroll
                  onClick={() => setToggle(false)}
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink('contact');
                  }}
                  className={
                    ' my-1 mx-3 cursor-pointer animation-hover relative text-md self-end' +
                    (activeLink === 'contact'
                      ? ' text-orange-500 animation-active '
                      : scrollActive
                      ? ' text-black-500 hover:text-orange-500 '
                      : ' text-white-300 hover:text-orange-500 ')
                  }
                >
                  Contact
                </LinkScroll>
              </ul>
            </div>
          </div>
          {/* <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Sign In
              </a>
            </Link>
            <ButtonOutline>Sign Up</ButtonOutline>
          </div> */}
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav
        className={`fixed hidden ${
          scrollActive ? 'bottom-0' : '-bottom-full'
        } left-0 right-0 z-20 shadow-t transition-all ease-in-out duration-200`}
      >
        <div className='bg-white-500 sm:px-3'>
          <ul className='flex w-full justify-between items-center text-black-500'>
            <LinkScroll
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('about');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'about'
                  ? '  border-orange-500 text-orange-500'
                  : ' border-transparent')
              }
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              About
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='feature'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('feature');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'feature'
                  ? '  border-orange-500 text-orange-500'
                  : ' border-transparent ')
              }
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                />
              </svg>
              Feature
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='pricing'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('pricing');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'pricing'
                  ? '  border-orange-500 text-orange-500'
                  : ' border-transparent ')
              }
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='testimoni'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('testimoni');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'testimoni'
                  ? '  border-orange-500 text-orange-500'
                  : ' border-transparent ')
              }
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
              Testimonial
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
