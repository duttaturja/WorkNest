import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import p1 from "../assets/person1.jpg"
import p2 from "../assets/person2.jpg"
import p3 from "../assets/person3.jpg"
import p4 from "../assets/person4.jpg"
import p5 from "../assets/person5.jpg"
import p6 from "../assets/person6.jpg"
import p7 from "../assets/person7.jpg"


export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={2}
          spaceBetween={50}
          modules={[Pagination]}
          className="mySwiper"
      >
        <SwiperSlide><div className='grid grid-col-4 bg-gray-200 rounded-md ml-3 mt-2'><img src={p1} className='m-4 border-3 border-transparent rounded-full'/><div className='col-span-3 p-4 mx-3'><h1 className='text-3xl font-semibold'>John Doe</h1><h3 className='text-2xl font-medium py-4'>Reseach Analyst</h3><p>"I had been searching for a new job for months with no luck until I discovered WorkNest. The platform's extensive job listings and company reviews helped me find a role that was the perfect fit for my skills and career goals. Now, I am a Project Manager at a company that truly values its employees. WorkNest made my job search stress-free and successful."</p></div></div></SwiperSlide>
        <SwiperSlide><div className='grid grid-col-4 bg-gray-200 rounded-md ml-3 mt-2'><img src={p2} className='m-4 border-3 border-transparent rounded-full'/><div className='col-span-3 p-4 mx-3'><h1 className='text-3xl font-semibold'>Michael K.</h1><h3 className='text-2xl font-medium py-4'>Web Developer</h3><p>"WorkNest exceeded my expectations in every way. The job alerts feature kept me updated on new opportunities that matched my criteria, and the application process was seamless. The best part? The support team was always there to answer my questions. I am now a Web Developer at a company where I can let my creativity shine. Thank you, WorkNest!"</p></div></div></SwiperSlide>
        <SwiperSlide><div className='grid grid-col-4 bg-gray-200 rounded-md ml-3 mt-2'><img src={p3} className='m-4 border-3 border-transparent rounded-full'/><div className='col-span-3 p-4 mx-3'><h1 className='text-3xl font-semibold'>John M.</h1><h3 className='text-2xl font-medium py-4'>Software Developer</h3><p>"As a recent college graduate, I was overwhelmed by the job search process. WorkNest made everything so much simpler. Their advanced search filters allowed me to find positions that matched my skills and interests perfectly. Thanks to WorkNest, I am now a Software Engineer at a tech firm that values innovation and creativity. I couldn't have asked for a better start to my career!"</p></div></div></SwiperSlide>
        <SwiperSlide><div className='grid grid-col-4 bg-gray-200 rounded-md ml-3 mt-2'><img src={p4} className='m-4 border-3 border-transparent rounded-full'/><div className='col-span-3 p-4 mx-3'><h1 className='text-3xl font-semibold'>David P.</h1><h3 className='text-2xl font-medium py-4'>Talent Acquisition Specialist at Creative Minds</h3><p>"I was feeling stuck in my career and didn't know where to turn. That's when I found WorkNest. The platform's user-friendly interface made it easy to upload my resume and apply for jobs. Within a week, I had several interviews lined up, and within a month, I landed my dream job as a Marketing Manager at a company I've always admired. WorkNest truly transformed my job search experience!"</p></div></div></SwiperSlide>
        <SwiperSlide><div className='grid grid-col-4 bg-gray-200 rounded-md ml-3 mt-2'><img src={p5} className='m-4 border-3 border-transparent rounded-full'/><div className='col-span-3 p-4 mx-3'><h1 className='text-3xl font-semibold'>Erik Chong</h1><h3 className='text-2xl font-medium py-4'>HR Manager at TechSolutions</h3><p>"WorkNest has been a game-changer for our hiring needs. The platform's ease of use and targeted search capabilities have enabled us to quickly find and connect with highly qualified candidates. We filled our critical Marketing Manager position with a candidate who exceeded all our expectations. Thanks to WorkNest, we've significantly improved our time-to-hire and overall recruitment efficiency."</p></div></div></SwiperSlide>
        <SwiperSlide><div className='grid grid-col-4 bg-gray-200 rounded-md ml-3 mt-2'><img src={p6} className='m-4 border-3 border-transparent rounded-full'/><div className='col-span-3 p-4 mx-3'><h1 className='text-3xl font-semibold'>Lisa M.</h1><h3 className='text-2xl font-medium py-4'>Data Analyst</h3><p>"After relocating to a new city, I was worried about finding a job that suited my background in data analysis. WorkNest came to the rescue! The portal's comprehensive resources, including resume tips and interview preparation guides, were incredibly helpful. I secured a position as a Data Analyst at an innovative startup, all thanks to WorkNest's fantastic platform. Highly recommend!"</p></div></div></SwiperSlide>
        <SwiperSlide><div className='grid grid-col-4 bg-gray-200 rounded-md ml-3 mt-2'><img src={p7} className='m-4 border-3 border-transparent rounded-full'/><div className='col-span-3 p-4 mx-3'><h1 className='text-3xl font-semibold'>Ravi Sharma.</h1><h3 className='text-2xl font-medium py-4'>Head of Recruitment at GreenFuture</h3><p>"At GreenFuture, we prioritize finding candidates who are not only skilled but also share our values. WorkNest's comprehensive candidate profiles and insightful reviews have been instrumental in helping us make informed hiring decisions. We recently found an exceptional Project Manager through the platform who is a perfect cultural fit. WorkNest has enhanced our recruitment process and helped us build a stronger team."</p></div></div></SwiperSlide>
      </Swiper>
    </>
  );
};
