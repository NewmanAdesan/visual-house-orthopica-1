import { useEffect } from 'react';
import ProgressBar from '../components/shared/ProgressBar';
import CustomCursor from '../components/shared/CustomCursor';

import '../styles/UserStories.css';
import USHeader from '../components/user-stories/USHeader';
import USPatient from '../components/user-stories/USPatient';
import USTherapist from '../components/user-stories/USTherapist';
import USAdmin from '../components/user-stories/USAdmin';
import USFooter from '../components/user-stories/USFooter';

export default function UserStoriesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add('light-mode');
        return () => document.body.classList.remove('light-mode');
    }, []);

    return (
        <div className="user-stories-layout">
            <CustomCursor />
            <ProgressBar />

            <USHeader />
            <div className="role-sections-container">
                <USPatient />
                <USTherapist />
                <USAdmin />
            </div>
            <USFooter />
        </div>
    );
}
