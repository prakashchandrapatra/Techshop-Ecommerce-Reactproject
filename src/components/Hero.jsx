import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Style.css';
import React from 'react'
import { Autoplay,  Navigation, Pagination } from "swiper/modules";
import productsData from "../Data/ProductsData";


export default function Hero() {
  // const swiper = new Swiper('.swiper', {
  //   Autoplay:{
  //     delay: 5000,
  //   }
  // })
  return (
   <div className="container">
      
      <Swiper
        // effect={'coverflow'}
        // grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        // products={productsData.toString()}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 2.5,
        // }}
        
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
        // 
        modules={[Autoplay,Pagination,Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
            <div className="containertext text-dark">
            <div id='JBL'></div>
            <div className='me-5'></div>
            <div className='text-start ms-5 mt-5' id='content'>
              <h4 className='mt-5 ms-5'>JBL Live 660NC</h4>
              <div className='mt-3 ms-5 fs-1 fw-bold textDisplay'>Keep The Noise Out <br /> Or In. You Choose </div>
              <p className='mt-5 ms-5 fs-4 fw-bold'>Rs. 9,999 <strike className=' strike fs-5 text-secondary'>Rs.14,999</strike></p>
              <button className='btn mt-4 ms-5 text-light' id='btn'>Shop Now</button>
            </div>
            <div id='overlap'>Over Ear</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="container text-dark">
              <div id='boat'></div>
              <div className='text-start ms-5 mt-5' id='content'>
                <h4 className='mt-5 ms-5'>boAt Airdopes 131</h4>
                <div className='mt-3 ms-5 fs-1 fw-bold textDisplay'>Featherweight For <br /> Comfort All-Day.</div>
                <p className='mt-5 ms-5 fs-4 fw-bold'>Rs. 1,099 <strike className='fs-5 text-secondary'>Rs.2,990</strike></p>
                <button className='btn mt-4 ms-5 text-light' id='btn'>Shop Now</button>
              </div>
              <div id='overlap1'>In Ear</div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide>
           <div className="container text-dark">
            <div id='sony'></div>
            <div className='text-start ms-5 mt-5' id='content'>
              <h4 className='mt-5 ms-5'>Sony WH-XB910N</h4>
              <div className='mt-3 ms-5 fs-1 fw-bold textDisplay'>Give Your Favourite <br /> Music A Boost.</div>
              <p className='mt-5 ms-5 fs-4 fw-bold'>Rs. 13,489 <strike className='fs-5 text-secondary'>Rs.19,990</strike></p>
              <button className='btn mt-4 ms-5 text-light' id='btn'>Shop Now</button>
            </div>
            <div id='overlap'>Over Ear</div>
          </div>
        </SwiperSlide>
       

        <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div> */}
          {/* <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div> 
  );
}







































// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import './Style.css';

// function Hero() {
//   return (
//     <div className="hero-carousel">
//       <Carousel controls={false} indicators={false} fade>
//         <Carousel.Item interval={2000}>
//           <div className="slide-container">
//             <div className="slide-text">
//               <p className="product-name">Sony WH-XB910N</p>
//               <h1 className="headline">Give Your Favourite<br />Music A Boost.</h1>
//               <p className="price">
//                 Rs. 13,489 <span className="old-price">Rs. 19,990</span>
//               </p>
//               <button className="shop-now">Shop Now</button>
//             </div>
//             <div className="slide-image">
//               <img src="/images/products/jbl660nc-1.png" alt="Sony WH-XB910N" />
//             </div>
//           </div>
//         </Carousel.Item>

//         <Carousel.Item interval={4000}>
//           <div className="slide-container">
//             <div className="slide-text">
//               <p className="product-name">JBL Tune 760NC</p>
//               <h1 className="headline">Block The Noise.<br />Feel The Bass.</h1>
//               <p className="price">
//                 Rs. 6,999 <span className="old-price">Rs. 7,999</span>
//               </p>
//               <button className="shop-now">Shop Now</button>
//             </div>
//             <div className="slide-image">
//               <img src="/images/products/jbl760nc-1.png" alt="JBL Tune 760NC" />
//             </div>
//           </div>
//         </Carousel.Item>

//         <Carousel.Item interval={3000}>
//           <div className="slide-container">
//             <div className="slide-text">
//               <p className="product-name">Boat Rockerz 450</p>
//               <h1 className="headline">Wireless Freedom.<br />Unmatched Comfort.</h1>
//               <p className="price">
//                 Rs. 1,499 <span className="old-price">Rs. 3,990</span>
//               </p>
//               <button className="shop-now">Shop Now</button>
//             </div>
//             <div className="slide-image">
//               <img src="/images/products/boat450-1.png" alt="Boat Rockerz 450" />
//             </div>
//           </div>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Hero;


