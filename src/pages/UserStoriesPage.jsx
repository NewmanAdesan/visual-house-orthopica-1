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
    // Ensure we start at the top on loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="user-stories-layout">
            <CustomCursor />
            <ProgressBar />

            <USHeader />
            <USPatient />
            <USTherapist />
            <USAdmin />
            <USFooter />
        </div>
    );
}
