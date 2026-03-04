import { useEffect } from 'react';
import Navbar from '../components/shared/Navbar';
import ProgressBar from '../components/shared/ProgressBar';
import CustomCursor from '../components/shared/CustomCursor';

import Hero from '../components/proposal/Hero';
import Understanding from '../components/proposal/Understanding';
import StoryArc from '../components/proposal/StoryArc';
import DemoTracking from '../components/proposal/DemoTracking';
import Observations from '../components/proposal/Observations';
import DemoSaccades from '../components/proposal/DemoSaccades';
import Questions from '../components/proposal/Questions';
import Architecture from '../components/proposal/Architecture';
import AmbientBreak from '../components/proposal/AmbientBreak';
import UserStoriesPreview from '../components/proposal/UserStoriesPreview';
import Team from '../components/proposal/Team';
import Timeline from '../components/proposal/Timeline';
import Closing from '../components/proposal/Closing';

export default function ProposalPage() {
    // Ensure starting at the top when navigating here
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <CustomCursor />
            <ProgressBar />
            <Navbar />

            <Hero />
            <Understanding />
            <StoryArc />
            <DemoTracking />
            <Observations />
            <DemoSaccades />
            <Questions />
            <Architecture />
            <AmbientBreak />
            <UserStoriesPreview />
            <Team />
            <Timeline />
            <Closing />
        </>
    );
}
