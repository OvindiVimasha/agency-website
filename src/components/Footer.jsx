import React from 'react';
import assets from '../assets/assets';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: 'About Us', href: '#about' },
            { label: 'Our Team', href: '#team' },
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Contact', href: '#contact' }
        ],
        services: [
            { label: 'Digital Marketing', href: '#services' },
            { label: 'Content Creation', href: '#services' },
            { label: 'Social Media', href: '#services' },
            { label: 'Paid Advertising', href: '#services' }
        ],
        resources: [
            { label: 'Blog', href: '#' },
            { label: 'Case Studies', href: '#portfolio' },
            { label: 'Testimonials', href: '#testimonials' },
            { label: 'FAQ', href: '#' }
        ]
    };

    return (
        <footer className='bg-gray-900 text-white'>
            <div className='px-4 sm:px-12 lg:px-24 xl:px-40 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12'>
                    {/* Brand Section */}
                    <div className='lg:col-span-2'>
                        <img src={assets.logo} alt="Agency Logo" className='h-8 mb-4 dark:hidden' />
                        <img src={assets['logo-dark']} alt="Agency Logo" className='h-8 mb-4 hidden dark:block' />
                        <p className='text-white/70 mb-6 leading-relaxed'>
                            Transforming businesses through innovative digital solutions. We create experiences that inspire and deliver results.
                        </p>
                        <div className='flex gap-4'>
                            <a href='#' className='w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#5044E5] hover:to-[#4d8cea] flex items-center justify-center transition-all duration-300'>
                                <img src={assets.linkedin_icon} alt="LinkedIn" className='w-5 h-5' />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#5044E5] hover:to-[#4d8cea] flex items-center justify-center transition-all duration-300'>
                                <img src={assets.twitter_icon} alt="Twitter" className='w-5 h-5' />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#5044E5] hover:to-[#4d8cea] flex items-center justify-center transition-all duration-300'>
                                <img src={assets.facebook_icon} alt="Facebook" className='w-5 h-5' />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#5044E5] hover:to-[#4d8cea] flex items-center justify-center transition-all duration-300'>
                                <img src={assets.instagram_icon} alt="Instagram" className='w-5 h-5' />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className='font-bold text-lg mb-4'>Company</h4>
                        <ul className='space-y-3'>
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className='text-white/70 hover:text-white transition-colors'>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className='font-bold text-lg mb-4'>Services</h4>
                        <ul className='space-y-3'>
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className='text-white/70 hover:text-white transition-colors'>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className='font-bold text-lg mb-4'>Resources</h4>
                        <ul className='space-y-3'>
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className='text-white/70 hover:text-white transition-colors'>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className='border-t border-white/10 pt-8 mb-8'>
                    <div className='max-w-md'>
                        <h4 className='font-bold text-lg mb-3'>Subscribe to our newsletter</h4>
                        <p className='text-white/70 mb-4 text-sm'>
                            Get the latest updates and insights delivered to your inbox
                        </p>
                        <form className='flex gap-2'>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                className='flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                            <button
                                type='submit'
                                className='px-6 py-3 rounded-lg bg-gradient-to-r from-[#5044E5] to-[#4d8cea] font-semibold hover:shadow-xl transition-all duration-300'
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-white/70 text-sm'>
                        © {currentYear} Digital Agency. All rights reserved.
                    </p>
                    <div className='flex gap-6 text-sm'>
                        <a href='#' className='text-white/70 hover:text-white transition-colors'>
                            Privacy Policy
                        </a>
                        <a href='#' className='text-white/70 hover:text-white transition-colors'>
                            Terms of Service
                        </a>
                        <a href='#' className='text-white/70 hover:text-white transition-colors'>
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
