import HeroSection from '@/containers/home-page/hero-section';
import dynamic from 'next/dynamic';

const SolutionSection = dynamic(() => import('@/containers/home-page/solution-section'));
const BenefitSection = dynamic(() => import('@/containers/home-page/benefit-section'));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionSection />
      <BenefitSection />
    </>
  );
}
