import React, { useState, useEffect } from 'react';

const PodcastPage = () => {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPodcasts = async () => {
            const url = 'https://itunes.apple.com/search?term=workplace&entity=podcast';
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setPodcasts(result.results);
                // console.log(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching podcast data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchPodcasts();
    }, []);

    if (loading) {
        return <div>Loading podcasts...</div>;
    }

    if (error) {
        return <div>Error loading podcasts: {error.message}</div>;
    }

    return (
        <div className="podcast-page bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Workplace Podcasts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {podcasts.map((podcast, index) => (
                        <div key={index} className="podcast-card flex flex-col p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="flex-grow mb-4">
                                <div className="flex items-center mb-4">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 mr-4">
                                        {/* Optional: Add podcast cover image here */}
                                        <img src={podcast.artworkUrl600} alt={podcast.collectionName} className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{podcast.collectionName}</h3>
                                        <p className="text-gray-600 mb-4">{podcast.artistName === 'Unknown' ? podcast.artistName = 'iTunes' : podcast.artistName}</p>
                                    </div>
                                </div>
                                {podcast.genres && (
                                    <ul className="flex flex-wrap gap-2 mb-4">
                                        {podcast.genres.map((genre, index) => (
                                            <li key={index} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                                                {genre}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <a
                                href={podcast.collectionViewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-blue-600 text-white py-2 px-4 rounded text-center font-medium transition-colors hover:bg-blue-700"
                            >
                                Listen
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default PodcastPage;