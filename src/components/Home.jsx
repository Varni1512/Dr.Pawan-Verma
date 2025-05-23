import React from 'react'
import Hero from '../components/NewHome/Hero'
import FictionBookPage from '../components/NewHome/FictionBookPage'
import NonFictionBookPage from '../components/NewHome/NonFictionBookPage'
import BookPublished from '../components/NewHome/BookPublished'
import BookAtGlance from '../components/NewHome/BookAtGlance'
import EventsAndActivities from '../components/NewHome/EventsAndActivities'
import ProfessionalSpeaker from '../components/NewHome/ProfessionalSpeaker'
import ManagementConsultant from '../components/NewHome/ManagementConsultant'
import HeroSection from '../components/NewHome/HeroSection'
import AwardsSection from '../components/NewHome/AwardsSection'
import BlogsSection from '../components/NewHome/BlogsSection'
import TestimonialsSection from '../components/NewHome/TestimonialsSection'
import SocialMediaSection from '../components/NewHome/SocialMediaSection'

export default function Home() {
  return (
    // <div>
    //   <Hero />
    //   {/* <PowerfulWords/> */}
    //   <Gallery />
    //   <BookAtGlance />
    //   <VideoTestimonials/>
    //   <Videos />
    //   <Blogs />
    //   <Testimonials/>
    // </div>
    <div>
      <Hero />
      <section id="non-fiction">
        <NonFictionBookPage />
      </section>

      <FictionBookPage />
      <BookAtGlance />
      <BookPublished />
      <EventsAndActivities />
      <ProfessionalSpeaker />
      <ManagementConsultant />
      <HeroSection />
      <AwardsSection />
      <BlogsSection />
      <TestimonialsSection />
      <SocialMediaSection />
    </div>
  )
}
