import React from 'react';

const BookAtGlance = () => {
    const glanceBooks = [
        {
            id: 1,
            title: 'The 10X Leader',
            subtitle: 'Breaking the Rules of Conventional Leadership',
            image: '/NonFiction.png',
            buyLink: 'https://www.amazon.in/10X-Leader-Breaking-Conventional-Leadership-ebook/dp/B0D9H7QZ2G'
        },
        {
            id: 2,
            title: 'Age of the Imperfect Leader',
            subtitle: 'Leading From Strength',
            image: '/book5.png',
            buyLink: 'https://www.amazon.in/Age-Imperfect-Leader-Leading-Strength/dp/9353336449'
        },
        {
            id: 3,
            title: 'Unbroken',
            subtitle: 'A Journey of Resilience and Redemption',
            image: '/book4.png',
            buyLink: 'https://www.amazon.in/Unbroken-Pawan-Verma/dp/B09MWGHDZQ'
        },
        {
            id: 4,
            title: 'No Closure No Forgiveness',
            subtitle: 'A Gripping Psychological Thriller',
            image: '/Fiction.png',
            buyLink: 'https://www.amazon.in/Thriller-Closure-Forgiveness-Murder-Revenge-ebook/dp/B01BCG3FKW'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <div className="flex justify-center items-center gap-4 mb-6">
                    <div className="w-24 h-1 bg-[#D9A61E]"></div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-black font-['Instrument_Sans']">Books at a Glance</h2>
                    <span className="text-4xl">📚</span>
                    <div className="w-24 h-1 bg-[#D9A61E]"></div>
                </div>
                <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg font-[Inter]">
                    Discover our curated collection of insightful books that will transform your perspective
                    on leadership, personal growth, and professional development.
                </p>
            </div>

            {/* Horizontal Scroll on Mobile, Grid on Desktop */}
            {/* Horizontal Scroll on Mobile, Grid on Desktop */}
            <div className="overflow-x-auto scrollbar-hide md:overflow-visible">
                <div className="flex flex-col md:grid md:grid-cols-4 gap-8 justify-items-center pb-4">
                    {glanceBooks.map((book) => (
                        <div key={book.id} className="flex flex-col items-center min-w-[250px] text-center">
                            <div className="w-[168px] h-[252px] relative">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-[168px] h-[252px] object-cover rounded-md shadow-md hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="w-1/2 sm:w-full border-t-4 border-yellow-500 pt-4 mb-4 mt-2 mx-auto"></div>

                            <h3 className="font-bold text-xl font-['Inter']">{book.title}</h3>
                            <p className="text-[#7B7B7B] text-sm mt-1 font-[Inter]">{book.subtitle}</p>

                            <a
                                href={book.buyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded transition-colors mt-4 w-[140px]"
                            >
                                <img src="/openbook.png" alt="Buy Icon" className="w-4 h-4" />
                                Buy Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BookAtGlance;
