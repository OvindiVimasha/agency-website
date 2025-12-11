import React, { useState, useEffect } from 'react';

const Stats = () => {
    const [counts, setCounts] = useState({
        projects: 0,
        clients: 0,
        awards: 0,
        satisfaction: 0
    });

    const finalCounts = {
        projects: 500,
        clients: 250,
        awards: 35,
        satisfaction: 98
    };

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
                projects: Math.floor(finalCounts.projects * progress),
                clients: Math.floor(finalCounts.clients * progress),
                awards: Math.floor(finalCounts.awards * progress),
                satisfaction: Math.floor(finalCounts.satisfaction * progress)
            });

            if (currentStep >= steps) {
                clearInterval(timer);
                setCounts(finalCounts);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const stats = [
        {
            count: counts.projects,
            suffix: '+',
            label: 'Projects Completed'
        },
        {
            count: counts.clients,
            suffix: '+',
            label: 'Happy Clients'
        },
        {
            count: counts.awards,
            suffix: '+',
            label: 'Awards Won'
        },
        {
            count: counts.satisfaction,
            suffix: '%',
            label: 'Client Satisfaction'
        }
    ];

    return (
        <div className='relative px-4 sm:px-12 lg:px-24 xl:px-40 py-12 bg-gradient-to-br from-[#5044E5] to-[#4d8cea] text-white overflow-hidden'>
            {/* Decorative Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
                <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl'></div>
            </div>

            {/* Decorative Dots Pattern */}
            <div className='absolute inset-0 opacity-5' style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className='relative max-w-7xl mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className='text-center group'
                        >
                            {/* Counter */}
                            <div className='mb-1'>
                                <span className='text-4xl sm:text-5xl font-bold drop-shadow-lg'>
                                    {stat.count}
                                </span>
                                <span className='text-3xl sm:text-4xl font-bold drop-shadow-lg'>
                                    {stat.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <div className='text-white/90 font-medium text-sm sm:text-base px-2'>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;

