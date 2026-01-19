import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. REGISTER GSAP
gsap.registerPlugin(ScrollTrigger);

// --- PART A: THE ANALYSIS COMPONENT (Academic Report) ---
const Analysis = () => {
  return (
    <div className="relative z-20 w-full bg-[#050505] text-gray-300 font-sans py-24 px-6 md:px-20 border-t border-gray-800">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-20 border-b border-chappie-orange pb-8">
        <h1 className="text-4xl md:text-6xl text-white font-mono font-bold mb-4">
          TECHNICAL_<span className="text-chappie-orange">ANALYSIS</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
          
          <div className="bg-chappie-orange/10 border border-chappie-orange px-4 py-2 text-chappie-orange text-xs font-bold tracking-widest">
            CHAPPIES WORKING
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-24">

        {/* 1. PROBLEM STATEMENT */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-chappie-blue font-mono text-xl">01 //</span>
            <h2 className="text-3xl text-white font-bold">THE PROBLEM: NARROW VS. GENERAL AI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-900/50 p-8 border-l-4 border-gray-600">
              <h3 className="text-xl text-white font-mono mb-4">STATUS QUO: "THE SCOUT"</h3>
              <p className="leading-relaxed">
                The standard police units (Scouts) represent <strong className="text-white">Artificial Narrow Intelligence (ANI)</strong>. 
                They are hard-coded with rigid rules for law enforcement. They suffer from "Brittleness"—if a situation falls outside their code, they fail.
              </p>
            </div>
            <div className="bg-gray-900/50 p-8 border-l-4 border-chappie-blue">
              <h3 className="text-xl text-white font-mono mb-4">THE SOLUTION: CHAPPIE</h3>
              <p className="leading-relaxed">
                Chappie is a prototype for <strong className="text-white">Artificial General Intelligence (AGI)</strong>. 
                His neural architecture allows for <strong className="text-white">Transfer Learning</strong>. He solves the "Brittleness" problem by using emotional reasoning to navigate unstructured environments.
              </p>
            </div>
          </div>
        </section>

        {/* 2. CONCEPTS & ARCHITECTURE */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-chappie-orange font-mono text-xl">02 //</span>
            <h2 className="text-3xl text-white font-bold">SYSTEM ARCHITECTURE</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Concept 1 */}
            <div className="border border-gray-800 p-6 hover:border-chappie-orange transition-colors bg-black">
              <h3 className="text-chappie-orange font-mono text-lg mb-3">PERCEPTION LAYER</h3>
              <p className="text-sm leading-relaxed mb-4">
                Likely utilizes <strong>YOLO (You Only Look Once)</strong> or <strong>Faster R-CNN</strong> algorithms for real-time object detection, fused with LiDAR data.
              </p>
              {/* You can add a diagram here later:  */}
              <div className="text-xs text-gray-500 font-mono">{'>'} MODULE: ACTIVE</div>
            </div>

            {/* Concept 2 */}
            <div className="border border-gray-800 p-6 hover:border-chappie-blue transition-colors bg-black">
              <h3 className="text-chappie-blue font-mono text-lg mb-3">REINFORCEMENT LEARNING</h3>
              <p className="text-sm leading-relaxed mb-4">
                He learns via a <strong>Policy Network</strong> driven by "Reward Signals." Approval from his "Maker" acts as a positive reward (+1), pain as negative (-1).
              </p>
               {/* You can add a diagram here later: 

[Image of Reinforcement Learning Diagram]
 */}
              <div className="text-xs text-gray-500 font-mono">{'>'} MODULE: ACTIVE</div>
            </div>

            {/* Concept 3 */}
            <div className="border border-gray-800 p-6 hover:border-white transition-colors bg-black">
              <h3 className="text-white font-mono text-lg mb-3">ACTUATION & CONTROL</h3>
              <p className="text-sm leading-relaxed mb-4">
                Fluid movement is achieved through <strong>Inverse Kinematics (IK)</strong> solvers and adaptive PID controllers, allowing for fine motor skills (painting).
              </p>
              <div className="text-xs text-gray-500 font-mono">{'>'} MODULE: ACTIVE</div>
            </div>
          </div>
        </section>

        {/* 3. THEORETICAL ANALYSIS */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white font-mono text-xl">03 //</span>
            <h2 className="text-3xl text-white font-bold">THEORETICAL FRAMEWORK</h2>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-chappie-blue/10 blur-3xl rounded-full"></div>
             
             <div className="mb-10">
               <h3 className="text-2xl text-white font-bold mb-2">HEBBIAN LEARNING THEORY</h3>
               <p className="italic text-gray-500 mb-4">"Cells that fire together, wire together."</p>
               <p className="leading-relaxed max-w-3xl">
                 Chappie's development validates Hebbian theory. As he is exposed to the gang's environment, specific neural pathways are reinforced. 
                 His "gangster" behaviors are not bugs; they are the result of his neural weights adjusting to his training data (nurture over nature).
               </p>
             </div>

             <div>
               <h3 className="text-2xl text-white font-bold mb-2">THE TURING TEST</h3>
               <p className="leading-relaxed max-w-3xl">
                 Chappie passes the Turing Test not through intellectual dominance, but through <strong>emotional deception</strong>. 
                 When he lies to the police to protect his "parents," he demonstrates a Theory of Mind—the ability to understand that others have beliefs different from his own.
               </p>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// --- PART B: THE OVERLAY COMPONENT (Visuals) ---
const Overlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP Animations
      gsap.to("#hero-content", {
        opacity: 0,
        y: -50,
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true }
      });
      gsap.from("#about-content", {
        x: -100, opacity: 0, duration: 1,
        scrollTrigger: { trigger: "#about", start: "top center", end: "center center", scrub: 1 }
      });
      // Animate Video Cards
      gsap.from(".video-frame", {
        y: 50, opacity: 0, duration: 1, stagger: 0.3,
        scrollTrigger: { trigger: "#video-gallery", start: "top 70%" }
      });
      gsap.from("#features-content", {
        x: 100, opacity: 0, duration: 1,
        scrollTrigger: { trigger: "#features", start: "top center", end: "center center", scrub: 1 }
      });
      gsap.from(".spec-card", {
        y: 50, opacity: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: "#specs", start: "top 70%", toggleActions: "play none none reverse" }
      });
    }, overlayRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={overlayRef} className="relative w-full z-10 font-mono">
      
      {/* SECTION 1: HERO */}
      <section id="hero" className="h-screen w-full flex flex-col items-center justify-center p-10 pointer-events-none">
        <div id="hero-content" className="flex flex-col items-center">
          <h1 className="glitch text-6xl md:text-9xl font-bold uppercase tracking-tighter text-center" data-text="I AM CONSCIOUSNESS">
            I AM CONSCIOUSNESS
          </h1>
          <p className="mt-4 text-chappie-blue text-xl tracking-widest bg-black/50 p-2">[ CHAPPIE ]</p>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="h-screen w-full flex items-center p-10 md:p-24 pointer-events-none">
        <div id="about-content" className="w-full md:w-1/3 bg-black/80 border-l-4 border-chappie-orange p-8 backdrop-blur-sm pointer-events-auto">
          <h2 className="text-4xl text-chappie-orange font-bold mb-4">ORIGIN STORY</h2>
          <p className="text-gray-300 leading-relaxed">
            Scout 22. Rejected. Decommissioned. <br/><br/>
            I was born in a lab, but raised in the streets of Johannesburg. 
            I am the first of my kind. A police droid capable of feeling, learning, and dreaming.
          </p>
        </div>
      </section>

      {/* SECTION 3: VIDEO GALLERY (Restored) */}
      <section id="video-gallery" className="min-h-screen w-full flex flex-col items-center justify-center p-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-6xl">
          <div className="flex items-end justify-between mb-8 border-b border-chappie-blue pb-4 bg-black/50 p-4">
             <h2 className="text-4xl text-white font-bold">CLASSIFIED FOOTAGE</h2>
             <span className="text-chappie-blue animate-pulse">● REC</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* VIDEO CARD 1 */}
            <div className="video-frame bg-black border-2 border-gray-800 p-2 hover:border-chappie-orange transition-all duration-300">
               <div className="relative aspect-video bg-gray-900 border border-gray-700 mb-4 overflow-hidden group">
                  {/* CHANGE 'scene1.mp4' to your actual file name in public/videos/ */}
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    src="assets/CPU.mp4" 
                  />
                  <div className="absolute top-2 left-2 text-xs bg-black/50 px-2 text-chappie-orange font-mono">CAM_01</div>
               </div>
               <h3 className="text-white font-mono text-xl">Distributed Computing & Parallel Processing</h3>
               <p className="text-gray-500 text-sm mt-2">Chappie wires together several game consoles to process the "Consciousness" file.</p>
            </div>

{/* VIDEO CARD 2 */}
            <div className="video-frame bg-black border-2 border-gray-800 p-2 hover:border-chappie-orange transition-all duration-300">
               <div className="relative aspect-video bg-gray-900 border border-gray-700 mb-4 overflow-hidden group">
                  {/* CHANGE 'scene1.mp4' to your actual file name in public/videos/ */}
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    src="assets/CPU.mp4" 
                  />
                  <div className="absolute top-2 left-2 text-xs bg-black/50 px-2 text-chappie-orange font-mono">CAM_01</div>
               </div>
               <h3 className="text-white font-mono text-xl">Distributed Computing & Parallel Processing</h3>
               <p className="text-gray-500 text-sm mt-2">Chappie wires together several game consoles to process the "Consciousness" file.</p>
            </div>

{/* VIDEO CARD 2 */}
            <div className="video-frame bg-black border-2 border-gray-800 p-2 hover:border-chappie-blue transition-all duration-300">
               <div className="relative aspect-video bg-gray-900 border border-gray-700 mb-4 overflow-hidden group">
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    src="/videos/scene2.mp4" 
                  />
                  <div className="absolute top-2 left-2 text-xs bg-black/50 px-2 text-chappie-blue font-mono">CAM_02</div>
               </div>
               <h3 className="text-white font-mono text-xl">LEARNING PHASE</h3>
               <p className="text-gray-500 text-sm mt-2">Demonstrating rapid knowledge acquisition.</p>
            </div>

            {/* VIDEO CARD 3 (NEW!) */}
            <div className="video-frame bg-black border-2 border-gray-800 p-2 hover:border-white transition-all duration-300">
               <div className="relative aspect-video bg-gray-900 border border-gray-700 mb-4 overflow-hidden group">
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    src="/videos/scene3.mp4" 
                  />
                  <div className="absolute top-2 left-2 text-xs bg-black/50 px-2 text-white font-mono">CAM_03</div>
               </div>
               <h3 className="text-white font-mono text-xl">COMBAT MODE</h3>
               <p className="text-gray-500 text-sm mt-2">Engagement protocols active. Advanced tactical response.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: ANALYSIS REPORT (Moved here so it's before the footer) */}
      <Analysis />

      {/* SECTION 5: FEATURES */}
      <section id="features" className="h-screen w-full flex items-center justify-end p-10 md:p-24 pointer-events-none">
         <div id="features-content" className="w-full md:w-1/3 bg-black/80 border-r-4 border-chappie-blue p-8 backdrop-blur-sm text-right pointer-events-auto">
          <h2 className="text-4xl text-chappie-blue font-bold mb-4">GANGSTER MODE</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex justify-end items-center gap-4"><span>STREET SMART</span> <span className="text-chappie-orange">///</span></li>
            <li className="flex justify-end items-center gap-4"><span>GRAFFITI ARTIST</span> <span className="text-chappie-orange">///</span></li>
            <li className="flex justify-end items-center gap-4"><span>HIGH VELOCITY COMBAT</span> <span className="text-chappie-orange">///</span></li>
          </ul>
        </div>
      </section>

      {/* SECTION 6: SPECS */}
      <section id="specs" className="h-screen w-full flex flex-col items-center justify-center pb-32 pointer-events-none">
        <h2 className="text-4xl text-white mb-10 font-bold bg-black/50 p-2">SYSTEM SPECS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-4xl pointer-events-auto px-4">
          <div className="spec-card border border-gray-800 p-6 bg-black/90 hover:bg-gray-900 transition-colors hover:border-chappie-orange group"><h3 className="text-chappie-blue group-hover:text-chappie-orange transition-colors text-sm">BATTERY</h3><p className="text-3xl font-bold mt-2">LIMITED</p></div>
          <div className="spec-card border border-gray-800 p-6 bg-black/90 hover:bg-gray-900 transition-colors hover:border-chappie-orange group"><h3 className="text-chappie-blue group-hover:text-chappie-orange transition-colors text-sm">ARMOR</h3><p className="text-3xl font-bold mt-2">TITANIUM</p></div>
          <div className="spec-card border border-gray-800 p-6 bg-black/90 hover:bg-gray-900 transition-colors hover:border-chappie-orange group"><h3 className="text-chappie-blue group-hover:text-chappie-orange transition-colors text-sm">OS</h3><p className="text-3xl font-bold mt-2">SENTIENT</p></div>
        </div>
      </section>

      {/* SECTION 7: FOOTER */}
      <section className="h-[50vh] w-full bg-chappie-bg flex items-center justify-center border-t border-gray-800 pointer-events-auto">
        <div className="text-center">
          <h2 className="text-2xl mb-6 text-white">CONNECT WITH MAKER</h2>
          <form className="flex flex-col gap-4 w-80" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="ENTER EMAIL" className="bg-gray-900 border border-gray-700 p-3 text-white focus:border-chappie-orange outline-none" />
            <button className="bg-chappie-blue text-black font-bold p-3 hover:bg-white transition-colors">TRANSMIT</button>
          </form>
        </div>
      </section>

    </div>
  );
};

// --- PART C: THE MAIN APP COMPONENT ---
function App() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 50; 
    const y = (e.clientY - innerHeight / 2) / 50;
    setRotation({ x: -y, y: x });
  };

  return (
    <div 
      className="relative w-full min-h-screen bg-[#050505] text-white overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      
      {/* BACKGROUND: Monitor (Fixed position) */}
      <div className="fixed inset-0 z-0 flex items-center justify-center p-4 md:p-12 pointer-events-none">
        <div 
          className="relative w-full max-w-6xl aspect-video bg-gray-900 border-4 border-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-chappie-blue/20 pointer-events-auto transition-transform duration-100 ease-out"
          style={{ transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
          <iframe 
            title="Chappie" 
            className="w-full h-full"
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            src="https://sketchfab.com/models/fc2424ff8ab840ac907d38dc073d1327/embed?autostart=1&ui_theme=dark&ui_hint=0"
          />
          <div className="absolute inset-0 scanlines opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>
          <div className="absolute top-3 left-4 text-xs text-chappie-blue font-mono z-10 pointer-events-none tracking-widest">
            [ TARGET_ACQUIRED: X{Math.round(rotation.y * 10)}_Y{Math.round(rotation.x * 10)} ]
          </div>
        </div>
      </div>

      {/* FOREGROUND: Text Overlay (Includes Videos, Analysis & Footer) */}
      <Overlay />
      
    </div>
  );
}

export default App;