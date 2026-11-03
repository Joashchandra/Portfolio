import AboutMe from '@/components/pages/AboutMe';
import HeroSection from '@/components/pages/HeroSection';
import SkillsetSection from '@/components/pages/SkillsetSection';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center font-sans'>
      <main className='flex flex-1 w-full flex-col items-center justfy-between bg-white'>
        <HeroSection />
        <AboutMe />
        <SkillsetSection />
      </main>
    </div>
  );
}
