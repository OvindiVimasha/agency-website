import React, { useState } from 'react';
import assets from '../assets/assets';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            image: assets.work_mobile_app,
            title: 'Furniture Shopping App',
            category: 'mobile',
            description: 'Secure and intuitive shopping experience'
        },
        {
            image: assets.work_dashboard_management,
            title: 'Analytics Dashboard',
            category: 'web',
            description: 'Real-time data visualization platform'
        },
        {
            image: assets.work_fitness_app,
            title: 'Fitness Tracking App',
            category: 'mobile',
            description: 'Health and wellness companion'
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Apps' },
        { id: 'mobile', label: 'Mobile Apps' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div id='portfolio' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white/80'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
                    Our <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Portfolio</span>
                </h2>
                <p className='text-gray-500 dark:text-white/60 max-w-2xl mx-auto mb-8'>
                    Explore our latest projects and see how we've helped businesses achieve their digital goals
                </p>

                {/* Filter Buttons */}
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white shadow-lg'
                                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white/70 hover:bg-gray-300 dark:hover:bg-gray-700'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className='group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
                    >
                        <div className='relative overflow-hidden aspect-video'>
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>

                        <div className='p-6'>
                            <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                                {project.title}
                            </h3>
                            <p className='text-gray-600 dark:text-white/70 text-sm'>
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
