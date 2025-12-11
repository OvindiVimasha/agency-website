import React from 'react';
import assets from '../assets/assets';

const Team = () => {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Creative Director',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
            social: {
                linkedin: '#',
                twitter: '#'
            }
        },
        {
            name: 'Michael Chen',
            role: 'Lead Developer',
            image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=faces',
            social: {
                linkedin: '#',
                twitter: '#'
            }
        },
        {
            name: 'Emily Rodriguez',
            role: 'UX Designer',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
            social: {
                linkedin: '#',
                twitter: '#'
            }
        },
        {
            name: 'David Park',
            role: 'Marketing Strategist',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
            social: {
                linkedin: '#',
                twitter: '#'
            }
        }
    ];

    return (
        <div id='team' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white/80'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
                    Meet Our <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Team</span>
                </h2>
                <p className='text-gray-500 dark:text-white/60 max-w-2xl mx-auto'>
                    Talented individuals passionate about creating exceptional digital experiences
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className='group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
                    >
                        <div className='relative overflow-hidden aspect-square'>
                            {/* Profile Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6'>
                                <div className='flex gap-4'>
                                    <a
                                        href={member.social.linkedin}
                                        className='w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors'
                                    >
                                        <img src={assets.linkedin_icon} alt="LinkedIn" className='w-5 h-5' />
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        className='w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors'
                                    >
                                        <img src={assets.twitter_icon} alt="Twitter" className='w-5 h-5' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 text-center'>
                            <h3 className='text-xl font-bold mb-1 text-gray-900 dark:text-white'>
                                {member.name}
                            </h3>
                            <p className='text-gray-600 dark:text-white/70 text-sm'>
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
