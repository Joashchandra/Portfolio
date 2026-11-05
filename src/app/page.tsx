import AboutMe from '@/components/pages/AboutMeSection';
import ComparisonSection from '@/components/pages/ComparisonSection';
import ExperienceSection from '@/components/pages/ExperienceSection';
import FaqSection from '@/components/pages/FaqSection';
import HeroSection from '@/components/pages/HeroSection';
import PortfolioSection from '@/components/pages/PortfolioSection';
import SkillsetSection from '@/components/pages/SkillsetSection';
import TestimonialSection from '@/components/pages/TestimonialSection';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center font-sans'>
      <main className='flex flex-1 w-full flex-col items-center justfy-between bg-white'>
        <HeroSection />
        <AboutMe />
        <SkillsetSection />
        <ComparisonSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialSection />
        <FaqSection />
      </main>
    </div>
  );
}
