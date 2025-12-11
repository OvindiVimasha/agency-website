import React from 'react';

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Discovery',
            description: 'We dive deep into understanding your business goals, target audience, and project requirements.'
        },
        {
            number: '02',
            title: 'Strategy',
            description: 'Our team develops a comprehensive roadmap tailored to your objectives and market positioning.'
        },
        {
            number: '03',
            title: 'Design',
            description: 'We create stunning visuals and user experiences that captivate and convert your audience.'
        },
        {
            number: '04',
            title: 'Development',
            description: 'Our developers bring designs to life with clean, scalable code and cutting-edge technology.'
        },
        {
            number: '05',
            title: 'Launch',
            description: 'We ensure a smooth deployment and provide ongoing support to maximize your success.'
        }
    ];

    return (
        <div id='process' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 bg-gray-50 dark:bg-gray-900/50'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
                    Our <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Process</span>
                </h2>
                <p className='text-gray-500 dark:text-white/60 max-w-2xl mx-auto'>
                    A proven methodology that ensures exceptional results every time
                </p>
            </div>

            <div className='max-w-5xl mx-auto'>
                <div className='relative'>
                    {/* Timeline line */}
                    <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#5044E5] to-[#4d8cea]'></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                <div className='bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                    <h3 className='text-2xl font-bold mb-3 text-gray-900 dark:text-white'>
                                        {step.title}
                                    </h3>
                                    <p className='text-gray-600 dark:text-white/70 leading-relaxed'>
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Number circle */}
                            <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#5044E5] to-[#4d8cea] items-center justify-center shadow-lg z-10'>
                                <span className='text-white font-bold text-lg'>{step.number}</span>
                            </div>

                            {/* Mobile number */}
                            <div className='md:hidden mb-4'>
                                <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#5044E5] to-[#4d8cea] flex items-center justify-center shadow-lg'>
                                    <span className='text-white font-bold'>{step.number}</span>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className='hidden md:block w-5/12'></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
