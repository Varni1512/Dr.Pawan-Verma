import React, { useState } from 'react';

const BookPublished = () => {
    const [selectedCategory, setSelectedCategory] = useState("Non - Fiction"); 

    const categories = ['Non - Fiction', 'Romance', 'Paranormal'];

    const books = [
        {
            id: 1,
            title: 'The Adventure of a Lifetime',
            subtitle: 'WHY YOU MUST HAVE SOLO TRAVELS & SINGLES HOLIDAYS AT LEAST ONCE',
            author: 'Malini White',
            image: '/book1.png',
            category: 'Non - Fiction',
            buyLink: 'https://www.amazon.in/gp/product/B01DA43J2I'
        },
        {
            id: 2,
            title: 'Acne Cure',
            subtitle: 'A PRACTICAL GUIDE TO NATURAL CURE FOR ACNE',
            author: 'Malini White',
            image: '/book2.png',
            category: 'Non - Fiction',
            buyLink: 'https://www.amazon.in/gp/product/B01GVF1KC4/'
        },
        {
            id: 3,
            title: 'Anti Aging',
            subtitle: 'STOP THAT TICKING CLOCK',
            author: 'Malini White',
            image: '/book3.png',
            category: 'Non - Fiction',
            buyLink: 'https://www.amazon.in/gp/product/B01AGFREWA/'
        },
        {
            id: 8,
            title: 'No Closure No Forgiveness',
            subtitle: '',
            author: '',
            image: '/book6.png',
            category: 'Romance',
            buyLink: 'https://www.amazon.com/Billionaires-Seduction-Adult-Romance-Erotica-ebook/dp/B01ENZP4US'
        },
        {
            id: 9,
            title: 'No Closure No Forgiveness',
            subtitle: '',
            author: '',
            image: '/book7.png',
            category: 'Romance',
            buyLink: 'https://www.amazon.in/gp/product/B01FKLOI88/'
        },
        {
            id: 10,
            title: 'No Closure No Forgiveness',
            subtitle: '',
            author: '',
            image: '/book8.png',
            category: 'Romance',
            buyLink: 'https://www.amazon.in/gp/product/B01F5D5O2A/'
        },
        {
            id: 11,
            title: 'No Closure No Forgiveness',
            subtitle: '',
            author: '',
            image: '/book9.png',
            category: 'Romance',
            buyLink: 'https://www.amazon.in/gp/product/B01FH3IR8Q/'
        },
        {
            id: 12,
            title: 'No Closure No Forgiveness',
            subtitle: '',
            author: '',
            image: '/book10.png',
            category: 'Romance',
            buyLink: 'https://www.amazon.com/Billionaires-Obsession-Love-Too-Close-ebook/dp/B01E604U1O'
        },
        {
            id: 13,
            title: 'No Closure No Forgiveness',
            subtitle: '',
            author: '',
            image: '/book11.png',
            category: 'Romance',
            buyLink: 'https://www.amazon.in/gp/product/B01EG9B7M0/'
        },
        {
            id: 14,
            title: 'No Closure No Forgiveness',
            subtitle: '',
            author: '',
            image: '/book12.png',
            category: 'Romance',
            buyLink: 'https://www.amazon.in/gp/product/B01G26424U/'
        },
        {
            id: 14,
            title: 'Unbroken',
            subtitle: '',
            author: 'Pawan Verma',
            image: '/book13.png',
            category: 'Paranormal',
            buyLink: 'https://www.amazon.in/gp/product/B01I5P6XK2/'
        },
    ];

    const filteredBooks = selectedCategory
        ? books.filter(book => book.category === selectedCategory)
        : [];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 pt-3">
            {/* Book Published Section with Title */}
            <div className="mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">
                    E-Books
                </h2>

                <div className="flex justify-center mb-8 sm:mb-12">
                    <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold font-['Instrument_Sans'] transition-colors relative flex items-center text-sm sm:text-base
        ${selectedCategory === category
                                    ? 'bg-[#F1BF1C] text-black'
                                    : 'bg-gray-100 text-black hover:bg-[#F1BF1C]'
                                }`}
                        >
                            {selectedCategory === category && (
                                <div className="mr-2">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 36" fill="currentColor">
                                        <path d="M3,0 L21,0 L21,36 L12,30 L3,36 Z"></path>
                                    </svg>
                                </div>
                            )}
                            {category}
                        </button>
                    ))}
                </div>


                {/* Show message if no category selected */}
                {!selectedCategory && (
                    <p className="text-center text-gray-500"></p>
                )}

                {/* Books Grid */}
                {selectedCategory && (
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {filteredBooks.map((book) => (
                            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
                                <div className="w-[140px] sm:w-[168px] h-[210px] sm:h-[252px] relative">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-full h-full object-cover rounded-[9px] absolute top-0 left-0"
                                    />
                                </div>
                                <div className="p-2 sm:p-3 w-full">
                                    <a
                                        href={book.buyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[#F1BF1C] text-center py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium flex items-center justify-center gap-2"
                                    >
                                        Buy on Amazon
                                        <img src="/shope.png" alt="shop icon" className="w-5 h-5 object-contain" />
                                    </a>


                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookPublished;
