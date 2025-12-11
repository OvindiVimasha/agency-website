import React from 'react';
import assets from '../assets/assets';

const About = () => {
    return (
        <div id='about' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 bg-gray-50 dark:bg-gray-900/50'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div className='relative'>
                        <div className='relative z-10'>
                            <img
                                src={assets.hero_img}
                                alt="About Us"
                                className='rounded-2xl shadow-2xl'
                            />
                        </div>
                        <div className='absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#5044E5] to-[#4d8cea] rounded-2xl -z-0 dark:opacity-20'></div>
                    </div>

                    <div className='space-y-6'>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white'>
                            About <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Our Agency</span>
                        </h2>

                        <p className='text-gray-600 dark:text-white/70 text-lg leading-relaxed'>
                            We are a team of passionate digital innovators dedicated to transforming businesses through cutting-edge technology and creative excellence.
                        </p>

                        <p className='text-gray-600 dark:text-white/70 leading-relaxed'>
                            Since our founding, we've helped over 500+ companies achieve their digital goals, from startups to Fortune 500 enterprises. Our approach combines strategic thinking, creative design, and technical expertise to deliver solutions that don't just meet expectations—they exceed them.
                        </p>

                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            <div className='space-y-2'>
                                <h4 className='text-3xl font-bold bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>500+</h4>
                                <p className='text-gray-600 dark:text-white/70'>Projects Completed</p>
                            </div>
                            <div className='space-y-2'>
                                <h4 className='text-3xl font-bold bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>98%</h4>
                                <p className='text-gray-600 dark:text-white/70'>Client Satisfaction</p>
                            </div>
                            <div className='space-y-2'>
                                <h4 className='text-3xl font-bold bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>50+</h4>
                                <p className='text-gray-600 dark:text-white/70'>Team Members</p>
                            </div>
                            <div className='space-y-2'>
                                <h4 className='text-3xl font-bold bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>15+</h4>
                                <p className='text-gray-600 dark:text-white/70'>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
