import React from 'react';

const EventsAndActivities = () => {
    const events = [
        {
            id: 1,
            title: 'The 10X Leader Book Launch',
            description: 'An exclusive event at the Grand Hyatt featuring industry leaders and management professionals discussing the principles of 10X leadership.',
            date: 'May 15, 2025',
            image: '/Event1.png'
        },
        {
            id: 2,
            title: 'Leadership Masterclass',
            description: 'A full-day workshop for executives and aspiring leaders on implementing the 10X leadership principles in their organizations.',
            date: 'June 22, 2025',
            image: '/Event2.png'
        },
        {
            id: 3,
            title: 'International Literary Festival',
            description: 'Join Dr. Verma at the prestigious International Literary Festival where he will discuss his journey from finance to fiction writing.',
            date: 'July 8-10, 2025',
            image: '/Event2.png'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Events and Activities at a Glance</h2>
                <div className="flex justify-center mb-8 sm:mb-12">
                    <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
                </div>
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {events.map((event) => (
                    <div key={event.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className="relative h-64">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-[407px] h-[278px] object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 pt-3">{event.title}</h3>
                            <p className="text-gray-600 mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#7B7B7B" }}>{event.description}</p>
                            <div className="flex items-center" style={{ fontFamily: "Inter, sans-serif", color: "#7B7B7B" }}>
                                <span className="text-sm">
                                    <img src="/calender.png" alt="openbook" className="w-4 h-4" />
                                </span>
                                <span>{event.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Events Button */}
            <div className="flex justify-center">
                <button className="bg-black text-white px-12 py-4 text-lg font-semibold rounded hover:bg-gray-800 transition-colors">
                    <a href="/media">View All Events</a>
                </button>
            </div>

        </div>
    );
};

export default EventsAndActivities;