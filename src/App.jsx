import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ProposalPage from './pages/ProposalPage';
import UserStoriesPage from './pages/UserStoriesPage';

export default function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProposalPage />} />
                    <Route path="/user-stories" element={<UserStoriesPage />} />
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    );
}
