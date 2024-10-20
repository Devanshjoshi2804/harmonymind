import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchAnalysisData } from '../services/analysis';

const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchAnalysisData(token)
                .then(data => {
                    setAnalysis(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Failed to fetch analysis data', error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <AnalysisContext.Provider value={{ analysis, loading }}>
            {children}
        </AnalysisContext.Provider>
    );
};

export const useAnalysis = () => useContext(AnalysisContext);
