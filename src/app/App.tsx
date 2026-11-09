import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AppExperienceSection from './components/AppExperienceSection';
import RoleSelectionSection from './components/RoleSelectionSection';
import TrustSection from './components/TrustSection';
import ExpertsShowcaseSection from './components/ExpertsShowcaseSection';
import FaqSection from './imports/FaqSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main>
        <div id="home" className="relative">
          <Header />
          <HeroSection />
        </div>
        <div id="features">
          <AppExperienceSection />
          <RoleSelectionSection />
        </div>
        <div id="about">
          <TrustSection />
          <ExpertsShowcaseSection />
          <FaqSection />
        </div>
        <section className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <TestimonialsSection />
          </div>
        </section>
        <section id="blog" className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlogSection />
          </div>
        </section>
        <section className="relative min-h-[400px] md:min-h-[527px]">
          <CTASection />
        </section>
        <section className="relative">
          <Footer />
        </section>
      </main>
    </div>
  );
}