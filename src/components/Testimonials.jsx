import React from 'react';
import assets from '../assets/assets';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Anderson',
            role: 'CEO, TechCorp',
            image: assets.group_profile,
            rating: 5,
            text: 'Working with this agency transformed our digital presence. Their strategic approach and creative execution exceeded all expectations. Highly recommended!'
        },
        {
            name: 'Lisa Martinez',
            role: 'Founder, StartupHub',
            image: assets.group_profile,
            rating: 5,
            text: 'The team delivered exceptional results on time and within budget. Their attention to detail and commitment to excellence is unmatched.'
        },
        {
            name: 'Robert Kim',
            role: 'Marketing Director, GlobalBrand',
            image: assets.group_profile,
            rating: 5,
            text: 'Outstanding work! They understood our vision perfectly and brought it to life with creativity and precision. A true partner in success.'
        }
    ];

    return (
        <div id='testimonials' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 bg-gray-50 dark:bg-gray-900/50'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
                    Client <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Testimonials</span>
                </h2>
                <p className='text-gray-500 dark:text-white/60 max-w-2xl mx-auto'>
                    Don't just take our word for it - hear what our clients have to say
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className='bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                    >
                        {/* Stars */}
                        <div className='flex gap-1 mb-4'>
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className='w-5 h-5 fill-yellow-400'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                </svg>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className='text-gray-600 dark:text-white/70 mb-6 leading-relaxed italic'>
                            "{testimonial.text}"
                        </p>

                        {/* Client Info */}
                        <div className='flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800'>
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className='w-12 h-12 rounded-full object-cover'
                            />
                            <div>
                                <h4 className='font-bold text-gray-900 dark:text-white'>
                                    {testimonial.name}
                                </h4>
                                <p className='text-sm text-gray-600 dark:text-white/70'>
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
