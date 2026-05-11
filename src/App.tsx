/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BirthSection from "./components/BirthSection";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Facts from "./components/Facts";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navigation />
      
      <main>
        <Hero />
        <BirthSection />
        <Timeline />
        <Gallery />
        <Facts />
        <Quiz />
      </main>

      <Footer />

      {/* Smooth Scroll Utility Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

