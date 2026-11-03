import AboutMe from '@/components/pages/AboutMe';
import SkillsetSection from '@/components/pages/SkillsetSection';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center font-sans'>
      <main className='flex flex-1 w-full flex-col items-center justify-between bg-white sm:items-start'>
        <AboutMe />
        <SkillsetSection />
      </main>
    </div>
  );
}
