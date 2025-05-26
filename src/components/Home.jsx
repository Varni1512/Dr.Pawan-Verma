import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/NewHome/Hero';
import FictionBookPage from '../components/NewHome/FictionBookPage';
import NonFictionBookPage from '../components/NewHome/NonFictionBookPage';
import BookPublished from '../components/NewHome/BookPublished';
import BookAtGlance from '../components/NewHome/BookAtGlance';
import EventsAndActivities from '../components/NewHome/EventsAndActivities';
import ProfessionalSpeaker from '../components/NewHome/ProfessionalSpeaker';
import ManagementConsultant from '../components/NewHome/ManagementConsultant';
import HeroSection from '../components/NewHome/HeroSection';
import AwardsSection from '../components/NewHome/AwardsSection';
import BlogsSection from '../components/NewHome/BlogsSection';
import TestimonialsSection from '../components/NewHome/TestimonialsSection';
import SocialMediaSection from '../components/NewHome/SocialMediaSection';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        // Delay to ensure DOM is rendered before scrolling
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      
      <section id="nonfiction">
        <NonFictionBookPage />
      </section>

      <FictionBookPage />
      <BookAtGlance />
      <BookPublished />
      
      <ProfessionalSpeaker />
      <ManagementConsultant />
      <HeroSection />
      <AwardsSection />
      <EventsAndActivities />
      <BlogsSection />
      <TestimonialsSection />
      <SocialMediaSection />
    </div>
  );
}
