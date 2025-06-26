import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Style.css';
import React from 'react'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";


export default function Sass() {
  // const swiper = new Swiper('.swiper', {
  //   Autoplay:{
  //     delay: 5000,
  //   }
  // })
  return (
   <div className="container">
      <h1 className="heading">Featured Products</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        autoplay={{
          delay:500,
          disableOnInteraction:false
        }}
        modules={[Autoplay,EffectCoverflow,Pagination,Navigation]}
        // className="swiper_container"
      >
        <SwiperSlide>
            {/* <div className="slide">
         <div className="slide-text">
              <p className="product-name">Sony WH-XB910N</p>
             <h1 className="headline">Give Your Favourite<br />Music A Boost.</h1>
              <p className="price">
                Rs. 13,489 <span className="old-price">Rs. 19,990</span>
               </p>
               <button className="shop-now">Shop Now</button>
            </div>
            <div> */}
            <h3>boAt EarPhones 110</h3>
          <img src='/images/products/boat110-1.png' alt="boat110-1" />
          <h3>Rs.999<del>Rs.449</del></h3>
          {/* </div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
            <h3>boAt Airdopes 131</h3>
          <img src='/images/products/boat131-1.png' alt="boat131-1" />
          <h3>Rs.1099<del>Rs.2990</del></h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="h3">boAt Airdopes 203</h3>
          <img src='/images/products/boat203-1.png' alt="boat203-1" />
          <h3>Rs.1,074<del>Rs.3,999Rs.1,074</del></h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Sony WH-CH710N</h3>
          <img src="/images/products/sonyCh710n-2.png" alt="sonyCh710n-2" />
          <h3>8520<del>14990</del></h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>boAt Rockerz 518</h3>
          <img src='/images/products/boat518-1.png' alt="boat518-1" />
          <h3>Rs.1299<del>Rs.3990</del></h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>boAt Airdopes 381</h3>
          <img src='/images/products/boat381-1.png' alt="boat381-1" />
          <h3>Rs.1699<del>Rs.4990</del></h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>boAt Rockerz 410</h3>
          <img src='/images/products/boat410-1.png' alt="boat410-1" />
          <h3>2990<del>1599</del></h3>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div> 
  );
}
