import React, { useEffect,useState } from 'react'

import tmdbApi,{category,movieType}from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './hero-slider.scss';
import SwiperCore,{ Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
const HeroSlider = () => {
    SwiperCore.use([Autoplay]);
    const [movieItems,setMovieItems] = useState([]);

    useEffect(() => {
    const getMovies = async () => {
        const params={page:1}
        try{
            const response = await tmdbApi.getMoviesList(movieType.popular,{params});
            setMovieItems(response.results.slice(0,4));
            console.log(response);
        }catch{
            console.log("error")
        }
    }
    getMovies()
    },[]);
  return (
    <div className='hero-slider'>
    <Swiper
  modules={[Autoplay]}
  grabCursor={true}
  spaceBetween={0}
  slidesPerView={1}
  autoplay={{ delay: 3000 }} // Add this line
>
        {
            movieItems.map((item,i) => (
                <SwiperSlide key={i}>
                    {({ isActive }) => (
                        <img src={apiConfig.originalImage(item.backdrop_path)}/>
                    )}
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default HeroSlider;
