import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('es'); // Default to Spanish
    const toggleLanguage = () => setLanguage(prev => prev === 'es' ? 'en' : 'es');
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
