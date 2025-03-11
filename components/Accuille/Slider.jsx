import { Suspense, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import '@styles/swipy.css';

import Img from '@components/Helpers/Img';

const Slider = ({ comments,width,height }) => {


    return (
        <div className=' w-full flex justify-center'>
            <div className='w-full md:w-2/3'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-8">
                    {
                        comments.map((comment, index) => (

                            <SwiperSlide key={index}>
                                <div className='md:py-8 relative'>
                                    <div className="relative  md:mt-0 border-gray-200   rounded-xl flex flex-col justify-center items-center  ">
                                        <Img img={comment} width={width} height={height} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Slider