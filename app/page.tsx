// src/app/page.tsx

import Hero from './components/Hero';

import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';

import Footer from './components/Footer';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import SignupCTA from './components/SignupCTA';



export default function HomePage() {
  return (
    <main>


      <Hero />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <Benefits />
      <SignupCTA />
      <Footer /> 

    

    </main>
  );
}
