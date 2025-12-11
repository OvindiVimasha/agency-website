import React from 'react';
import assets from '../assets/assets';

const Services = () => {
    const services = [
        {
            icon: assets.marketing_icon,
            title: 'Digital Marketing',
            description: 'Strategic campaigns that drive engagement and convert audiences into loyal customers through data-driven insights.'
        },
        {
            icon: assets.content_icon,
            title: 'Content Creation',
            description: 'Compelling stories and visuals that resonate with your audience and elevate your brand presence.'
        },
        {
            icon: assets.social_icon,
            title: 'Social Media',
            description: 'Build meaningful connections across platforms with authentic content and community management.'
        },
        {
            icon: assets.ads_icon,
            title: 'Paid Advertising',
            description: 'Maximize ROI with targeted ad campaigns optimized for performance across all major platforms.'
        }
    ];

    return (
        <div id='services' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white/80'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
                    Our <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Services</span>
                </h2>
                <p className='text-gray-500 dark:text-white/60 max-w-2xl mx-auto'>
                    Comprehensive digital solutions tailored to transform your business and drive measurable results
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className='group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2'
                    >
                        <div className='mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#5044E5]/10 to-[#4d8cea]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                            <img src={service.icon} alt={service.title} className='w-8 h-8' />
                        </div>
                        <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
                            {service.title}
                        </h3>
                        <p className='text-gray-600 dark:text-white/70 text-sm leading-relaxed'>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
