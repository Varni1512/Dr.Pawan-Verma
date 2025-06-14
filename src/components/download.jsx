import React, { useState } from 'react';
import { FileText, Palette, Rocket } from 'lucide-react';


export default function DownloadPage() {
    const [downloadStatus, setDownloadStatus] = useState({});

    const downloadFile = (type) => {
        setDownloadStatus((prev) => ({ ...prev, [type]: 'downloading' }));

        setTimeout(() => {
            setDownloadStatus((prev) => ({ ...prev, [type]: 'completed' }));

            let filename = '';
            switch (type) {
                case 'resume':
                    filename = '/Dr.-Pawan-Verma-A-Profile.pdf';
                    break;
                case 'flyer1':
                    filename = 'Creative_Services_Flyer.pdf';
                    break;
                case 'flyer2':
                    filename = 'Business_Solutions_Flyer.pdf';
                    break;
            }

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

            setTimeout(() => {
                setDownloadStatus((prev) => ({ ...prev, [type]: null }));
            }, 2000);
        }, 1000);
    };

    const getButtonText = (type) => {
        const status = downloadStatus[type];
        if (status === 'downloading') return 'Downloading...';
        if (status === 'completed') return 'Downloaded!';

        switch (type) {
            case 'resume':
                return 'Download Resume';
            case 'flyer1':
            case 'flyer2':
                return 'Download Flyer';
            default:
                return 'Download';
        }
    };

    const getButtonClass = (type) => {
        const status = downloadStatus[type];
        let baseClass =
            'w-full px-6 py-4 rounded-xl font-semibold text-lg cursor-pointer transition-all duration-300 transform relative overflow-hidden ';

        if (status === 'completed') {
            return baseClass + 'bg-gradient-to-br from-green-500 to-emerald-500 text-white';
        }

        return (
            baseClass +
            'bg-gradient-to-br from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0'
        );
    };

    return (
        <div className="min-h-screen py-20 bg-gradient-to-b from-white to-[#f5e9d1] relative overflow-hidden">
            {/* Background image overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg')] bg-cover bg-center z-0"></div>

            <div className="relative z-10 max-w-6xl mx-auto bg-white bg-opacity-95 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm">
                {/* Header */}
                <header className="relative bg-[#4d3e1f] p-10 text-center text-white overflow-hidden">
                    <img
                        src="gallery03.png"
                        alt="Author"
                        className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-6 object-cover shadow-2xl"
                    />
                    <h1 className="text-5xl font-bold mb-3">Download Center</h1>
                    <p className="text-xl opacity-90">Professional Resources & Documents</p>
                </header>

                {/* Main Content */}
                <main className="p-16">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4 relative inline-block">
                            Available Downloads
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded-full"></div>
                        </h2>
                    </div>

                    {/* Downloads Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Resume Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-t-4 border-yellow-500 group">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FileText className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Professional Resume</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Download my comprehensive professional resume showcasing my experience, skills, and achievements.
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
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-t-4 border-yellow-500 group">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Palette className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Flyer 1</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Explore my creative services portfolio flyer featuring design capabilities and project samples.
                            </p>
                            <button
                                className={getButtonClass('flyer1')}
                                onClick={() => downloadFile('flyer1')}
                                disabled={downloadStatus.flyer1 === 'downloading'}
                            >
                                {getButtonText('flyer1')}
                            </button>
                        </div>

                        {/* Flyer 2 Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-t-4 border-yellow-500 group">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Rocket className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Flyer 2</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Discover comprehensive business solutions and consulting services in this concise flyer.
                            </p>
                            <button
                                className={getButtonClass('flyer2')}
                                onClick={() => downloadFile('flyer2')}
                                disabled={downloadStatus.flyer2 === 'downloading'}
                            >
                                {getButtonText('flyer2')}
                            </button>
                        </div>
                    </div>

                    {/* Stats Section */}
                    {/* <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
              <div className="stat-item">
                <div className="text-4xl font-bold text-yellow-600 mb-2">1,250+</div>
                <div className="text-gray-600">Downloads</div>
              </div>
              <div className="stat-item">
                <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="stat-item">
                <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
                <div className="text-gray-600">Availability</div>
              </div>
            </div>
          </div> */}
                </main>
            </div>
        </div>
    );
}
