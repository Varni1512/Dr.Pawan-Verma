import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-gray-300 mt-4 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    {/* Left Column: Branding Content */}
                    <div className="flex flex-col items-center space-y-3">
                        <div>
                            <img src="/new-logo.jpg" alt="Logo" className="w-80 h-auto" />
                        </div>

                        <div className="flex space-x-3 mt-4">
                            <a
                                href="https://www.linkedin.com/in/pawanv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
                            >
                                <Linkedin size={22} />
                            </a>
                            <a
                                href="https://twitter.com/pawankverma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
                            >
                                <Twitter size={22} />
                            </a>
                            <a
                                href="https://www.instagram.com/pawan.amrev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
                            >
                                <Instagram size={22} />
                            </a>
                            <a
                                href="https://www.facebook.com/AuthorPawan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
                            >
                                <Facebook size={22} />
                            </a>
                        </div>
                    </div>



                    {/* Quick Links */}
                    <div className="space-y-6 flex flex-col items-center">
                        <h3 className="text-white text-lg font-bold">Quick Links</h3>

                        <div className="flex space-x-10 text-gray-400">
                            <ul className="space-y-3">
                                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="/book/no-closure-no-forgiveness" className="hover:text-white transition-colors">Books</a></li>
                                <li><a href="/speaking" className="hover:text-white transition-colors">Speaking</a></li>
                            </ul>

                            <ul className="space-y-3">
                                <li><a href="/Consulting" className="hover:text-white transition-colors">Consulting</a></li>
                                <li><a href="/blogs" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>



                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-white text-lg font-bold mb-2">Phone Number</h3>
                            <p className="text-gray-400">Mobile: (+91) 9322249691</p>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-bold mb-2">Email Address</h3>
                            <p className="text-gray-400">office.pawanverma@gmail.com</p>
                            <p className="text-gray-400">office@pawanverma.in</p>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-6"></div>

                {/* Copyright */}
                <div className="text-center space-y-1">
                    <p className="text-gray-400">© {currentYear} Pawan Verma. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
