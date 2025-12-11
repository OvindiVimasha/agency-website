import React, { useState } from 'react';
import assets from '../assets/assets';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div id='contact' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white/80'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
                    Get In <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Touch</span>
                </h2>
                <p className='text-gray-500 dark:text-white/60 max-w-2xl mx-auto'>
                    Have a project in mind? Let's discuss how we can help bring your vision to life
                </p>
            </div>

            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12'>
                {/* Contact Info */}
                <div className='space-y-8'>
                    <div>
                        <h3 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
                            Let's talk about your project
                        </h3>
                        <p className='text-gray-600 dark:text-white/70 leading-relaxed mb-8'>
                            We're here to help and answer any questions you might have. We look forward to hearing from you!
                        </p>
                    </div>

                    <div className='space-y-6'>
                        <div className='flex items-start gap-4'>
                            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#5044E5]/10 to-[#4d8cea]/10 flex items-center justify-center flex-shrink-0'>
                                <img src={assets.email_icon} alt="Email" className='w-6 h-6' />
                            </div>
                            <div>
                                <h4 className='font-bold mb-1 text-gray-900 dark:text-white'>Email</h4>
                                <p className='text-gray-600 dark:text-white/70'>hello@agency.com</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#5044E5]/10 to-[#4d8cea]/10 flex items-center justify-center flex-shrink-0'>
                                <img src={assets.person_icon} alt="Phone" className='w-6 h-6' />
                            </div>
                            <div>
                                <h4 className='font-bold mb-1 text-gray-900 dark:text-white'>Phone</h4>
                                <p className='text-gray-600 dark:text-white/70'>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className='pt-6'>
                            <h4 className='font-bold mb-4 text-gray-900 dark:text-white'>Follow Us</h4>
                            <div className='flex gap-4'>
                                <a href='#' className='w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#5044E5] hover:to-[#4d8cea] transition-all duration-300 group'>
                                    <img src={assets.linkedin_icon} alt="LinkedIn" className='w-5 h-5 group-hover:brightness-0 group-hover:invert' />
                                </a>
                                <a href='#' className='w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#5044E5] hover:to-[#4d8cea] transition-all duration-300 group'>
                                    <img src={assets.twitter_icon} alt="Twitter" className='w-5 h-5 group-hover:brightness-0 group-hover:invert' />
                                </a>
                                <a href='#' className='w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#5044E5] hover:to-[#4d8cea] transition-all duration-300 group'>
                                    <img src={assets.facebook_icon} alt="Facebook" className='w-5 h-5 group-hover:brightness-0 group-hover:invert' />
                                </a>
                                <a href='#' className='w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#5044E5] hover:to-[#4d8cea] transition-all duration-300 group'>
                                    <img src={assets.instagram_icon} alt="Instagram" className='w-5 h-5 group-hover:brightness-0 group-hover:invert' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl'>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium mb-2 text-gray-900 dark:text-white'>
                                Your Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                                placeholder='John Doe'
                            />
                        </div>

                        <div>
                            <label htmlFor='email' className='block text-sm font-medium mb-2 text-gray-900 dark:text-white'>
                                Email Address
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                                placeholder='john@example.com'
                            />
                        </div>

                        <div>
                            <label htmlFor='subject' className='block text-sm font-medium mb-2 text-gray-900 dark:text-white'>
                                Subject
                            </label>
                            <input
                                type='text'
                                id='subject'
                                name='subject'
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                                placeholder='Project Inquiry'
                            />
                        </div>

                        <div>
                            <label htmlFor='message' className='block text-sm font-medium mb-2 text-gray-900 dark:text-white'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows='5'
                                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none'
                                placeholder='Tell us about your project...'
                            ></textarea>
                        </div>

                        <button
                            type='submit'
                            className='w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
