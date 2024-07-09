import React from 'react';
import img1 from '../../../assets/banner/banner1.jpg';
import img3 from '../../../assets/banner/banner2.jpg';
import img4 from '../../../assets/banner/banner3.jpg';
import img5 from '../../../assets/banner/banner4.jpg';
import img2 from '../../../assets/banner/banner5.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const banners = [img1,img2,img3,img4,img5];
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <section className='max-w-screen-2xl mx-auto -z-1  img-mask -mb-90'>
        <Slider {...settings}>
        {banners.map((el,i)=>(
            <img key={i} draggable="false" src={el} alt="banners" />
        ))}
        </Slider>
       
    </section>
  )
}

export default Banner