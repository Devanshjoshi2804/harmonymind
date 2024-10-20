import React, { useState, useEffect } from 'react';

const ArticlePage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const articlesPerPage = 9; // Adjust the number of articles per page
    const totalResults = 100; // This would typically be returned by your API response

    useEffect(() => {
        const fetchArticles = async () => {
            const url = `https://newsapi.org/v2/everything?q=mental+wellbeing+good+health&page=${currentPage}&pageSize=${articlesPerPage}&apiKey=9792be9fa41746278b1eab17c1fdb75d`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setArticles(result.articles);
                console.log(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchArticles();
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage * articlesPerPage < totalResults) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const openArticle = (article) => {
        setSelectedArticle(article);
    };

    const closeArticle = () => {
        setSelectedArticle(null);
    };

    if (loading) {
        return <div>Loading articles...</div>;
    }

    if (error) {
        return <div>Error loading articles: {error.message}</div>;
    }

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Articles</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="article-card p-6 bg-white rounded-lg shadow-lg flex flex-col h-full">
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-40 object-cover rounded-t-lg mb-4"
                            />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                                <p className="text-gray-600 mb-4">{article.description}</p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-semibold">Author:</span> {article.author || 'Unknown'}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-semibold">Source:</span> {article.source.name}
                                </p>
                            </div>
                            <button
                                onClick={() => openArticle(article)}
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center"
                            >
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`mr-4 py-2 px-4 rounded bg-blue-500 text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage * articlesPerPage >= totalResults}
                        className={`py-2 px-4 rounded bg-blue-500 text-white ${currentPage * articlesPerPage >= totalResults ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Modal for viewing the full article */}
            {selectedArticle && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-11/12 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            <span className="font-semibold">Author:</span> {selectedArticle.author || 'Unknown'}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                            <span className="font-semibold">Source:</span> {selectedArticle.source.name}
                        </p>
                        <img
                            src={selectedArticle.urlToImage}
                            alt={selectedArticle.title}
                            className="w-full h-60 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700 mb-4">{selectedArticle.content || selectedArticle.description}</p>
                        <button
                            onClick={closeArticle}
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticlePage;