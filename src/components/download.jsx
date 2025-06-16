import React, { useState } from 'react';
import { FileText, Mic, Briefcase } from 'lucide-react';


export default function DownloadPage() {
    const [downloadStatus, setDownloadStatus] = useState({});

    const downloadFile = (type) => {
        setDownloadStatus(prev => ({ ...prev, [type]: 'downloading' }));

        setTimeout(() => {
            setDownloadStatus(prev => ({ ...prev, [type]: 'completed' }));

            // Create download link
            let filename = '';
            switch (type) {
                case 'resume':
                    filename = 'profile.pdf';
                    break;
                case 'flyer1':
                    filename = 'Speaking.pdf';
                    break;
                case 'flyer2':
                    filename = 'Consulting.pdf';
                    break;
            }

            // For demo purposes, create a simple text file
            const content = `This is a demo download for: ${filename}\n\nIn a real application, this would be your actual ${type} file.`;
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            // Reset after 2 seconds
            setTimeout(() => {
                setDownloadStatus(prev => ({ ...prev, [type]: null }));
            }, 2000);
        }, 1000);
    };

    const getButtonText = (type) => {
        const status = downloadStatus[type];
        if (status === 'downloading') return 'Downloading...';
        if (status === 'completed') return 'Downloaded!';

        switch (type) {
            case 'resume': return 'Download Resume';
            case 'flyer1': return 'Download Flyer';
            case 'flyer2': return 'Download Flyer';
            default: return 'Download';
        }
    };

    const getButtonClass = (type) => {
        const status = downloadStatus[type];
        let baseClass = "w-full px-6 py-4 rounded-xl font-semibold text-lg cursor-pointer transition-all duration-300 transform relative overflow-hidden ";

        if (status === 'completed') {
            return baseClass + "bg-gradient-to-br from-green-500 to-emerald-500 text-white";
        }

        return baseClass + "bg-gradient-to-br from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0";
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#f5e9d1] relative overflow-hidden">
            {/* Background image overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg')] bg-cover bg-center z-0"></div>

            <div className="relative z-10 min-h-screen bg-white bg-opacity-95 backdrop-blur-sm">
                {/* Header */}
                <header className="relative bg-[#4d3e1f] p-16 text-center text-white overflow-hidden">
                    <img
                        src="/gallery03.png"
                        alt="Author"
                        className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-6 object-cover shadow-2xl relative z-10"
                    />
                    <h1 className="text-5xl font-bold mb-3 text-shadow relative z-10">
                        Download Center
                    </h1>
                    <p className="text-xl opacity-90 relative z-10">
                        Professional Resources & Documents
                    </p>
                </header>

                {/* Main Content */}
                <main className="px-16 py-20 min-h-[calc(100vh-320px)]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4 relative inline-block">
                            Available Downloads
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded-full"></div>
                        </h2>
                    </div>

                    {/* Downloads Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
                        {/* Resume Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-t-4 border-yellow-500 group min-h-[400px] flex flex-col">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FileText className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
                                Professional Resume
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                                Download my comprehensive professional resume showcasing my experience, skills, and achievements. Perfect for employers and business partners.
                            </p>
                            <button
                                className={getButtonClass('resume')}
                                onClick={() => downloadFile('resume')}
                                disabled={downloadStatus.resume === 'downloading'}
                            >
                                {getButtonText('resume')}
                            </button>
                        </div>

                        {/* Flyer 1 Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-t-4 border-yellow-500 group min-h-[400px] flex flex-col">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Mic className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
                                Speaking Profile
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                                This flyer showcases expertise in public speaking, motivational sessions, technical workshops, and thought leadership talks tailored for diverse audiences.
                            </p>
                            <button
                                className={getButtonClass('flyer1')}
                                onClick={() => downloadFile('flyer1')}
                                disabled={downloadStatus.flyer1 === 'downloading'}
                            >
                                {getButtonText('')}
                            </button>
                        </div>

                        {/* Flyer 2 Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-t-4 border-yellow-500 group min-h-[400px] flex flex-col">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Briefcase className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
                                Consulting Profile
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                                This flyer highlights expertise in strategic planning, digital transformation, product development, and hands-on implementation for long-term impact.
                            </p>
                            <button
                                className={getButtonClass('flyer2')}
                                onClick={() => downloadFile('flyer2')}
                                disabled={downloadStatus.flyer2 === 'downloading'}
                            >
                                {getButtonText('')}
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

