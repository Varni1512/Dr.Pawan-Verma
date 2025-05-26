import React from 'react';

const ManagementConsultant = () => {
    const consultingServices = [
        {
            id: 1,
            title: 'Strategic Leadership',
            description: 'Developing leadership capabilities and strategic thinking at all levels of your organization to drive sustainable growth.',
            image: '/Management1.png'
        },
        {
            id: 2,
            title: 'Organizational Transformation',
            description: 'Guiding organizations through complex change initiatives with a focus on culture, structure, and leadership alignment.',
            image: '/Management2.png'
        },
        {
            id: 3,
            title: 'Innovation & Growth',
            description: 'Building innovation capabilities and growth strategies for businesses looking to expand or enter new markets.',
            image: '/Management3.png'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Management Consultant</h2>
            <div className="flex justify-center mb-8 sm:mb-12">
                <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg font-[Inter] text-center">
                Dr. Pawan Verma is an independent Management Consultant and Trainer, and is associated with a number of national and international platforms in the consulting space. He has done both on-site & off-site consulting for Indian and a few select Asian markets on a range of issues, including insurance regulations, organization-restructuring & development, market entry & expansion strategies, global business strategies & dimensions, marketing Strategies & future outlook, etc
            </p>
            
            {/* Consulting Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 pt-12">
                {consultingServices.map((service) => (
                    <div key={service.id} className="overflow-hidden bg-gray-50 shadow-lg  rounded-2xl">
                        <div className="relative h-40 ">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-[395px] h-[159px] object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-1 pl-6">{service.title}</h3>
                        <p className="mb-4 pl-6" style={{ fontFamily: "Inter, sans-serif", color: "#7B7B7B" }}>{service.description}</p>
                        <a href="#" className="text-[#D9A61E] hover:text-[#D9A61E] flex items-center font-medium pl-6 pb-8">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ManagementConsultant;
