import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import LiquidGlass from 'liquid-glass-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } // Apple ease
  }
};

const modalSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

export default function App() {
  const [activeEcosystemImage, setActiveEcosystemImage] = useState('/assets/images/ecosystem_digital.jpg');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const appRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div ref={appRef} className="bg-base text-primary min-h-screen font-sans selection:bg-accent/30 selection:text-primary">
      
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <ShaderGradientCanvas style={{ position: 'absolute', inset: 0 }}>
          <ShaderGradient
            control='query'
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23000000&color2=%231c1c1e&color3=%230071e3&envPreset=city&format=gif&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.1&uStrength=1.5&uTime=0.2&wireframe=false'
          />
        </ShaderGradientCanvas>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 md:px-12 md:py-6 flex justify-between items-center transition-all">
        <LiquidGlass 
          cornerRadius={24} 
          blurAmount={0.2} 
          saturation={120}
          className="w-full flex justify-between items-center bg-[#1C1C1E]/40"
          padding="16px 32px"
        >
          <div className="font-serif text-2xl tracking-wide cursor-pointer text-primary">Loka.</div>
          <div className="hidden md:flex gap-12 font-medium text-sm tracking-widest uppercase text-primary/80">
            <a href="#about" className="link-hover">Vision</a>
            <a href="#ecosystem" className="link-hover">Ecosystem</a>
            <a href="#portfolio" className="link-hover">Portfolio</a>
          </div>
          <button 
            className="text-sm font-medium uppercase tracking-widest text-primary hover:text-accent transition-colors duration-500"
            onClick={() => openModal('contact')}
          >
            Partner With Us
          </button>
        </LiquidGlass>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-12 pb-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-screen pointer-events-none">
             <iframe src="/liquid-logo/index.html" className="w-[120vw] h-[120vh] transform scale-150 border-none pointer-events-none" title="Liquid Logo WebGL" />
          </div>
          
          <div className="z-10 text-center space-y-12 max-w-5xl mx-auto mt-24">
              <motion.h1 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="font-sans font-medium text-[clamp(3.5rem,8vw,8rem)] leading-[1.05] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondaryLight"
              >
                  Premium Wellness<br />
                  Democratized.
              </motion.h1>
              
              <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                  className="flex flex-col items-center gap-8 pt-8"
              >
                  <p className="font-light text-secondaryLight text-xl md:text-2xl leading-relaxed max-w-2xl text-center">
                      We architect categories. A house of brands engineering the future of D2C wellness, beauty, and personal care.
                  </p>
                  
                  <div className="pt-8">
                    <LiquidGlass 
                      cornerRadius={999}
                      blurAmount={0.1}
                      elasticity={0.3}
                      className="bg-primary/10 hover:bg-primary/20 transition-colors"
                      padding="16px 32px"
                    >
                      <a href="#portfolio" className="inline-flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-primary">
                          Explore Portfolio
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </a>
                    </LiquidGlass>
                  </div>
              </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 md:py-48 px-6 md:px-12 relative">
          <div className="max-w-6xl mx-auto space-y-32">
              <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="font-light text-3xl md:text-5xl leading-[1.3] text-secondaryLight tracking-tight text-center max-w-4xl mx-auto"
              >
                  We believe that <span className="text-primary font-medium">clinical efficacy</span> shouldn't be a luxury. We build vertically integrated brands that deliver uncompromising quality to the modern Indian consumer.
              </motion.div>
              
              <div className="space-y-16">
                  <motion.h2 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                      className="font-sans font-medium text-5xl md:text-7xl leading-tight tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondaryLight"
                  >
                      Elevating the Everyday.
                  </motion.h2>
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                      className="mt-12 w-full h-[600px] overflow-hidden rounded-3xl"
                  >
                    <LiquidGlass blurAmount={0.3} cornerRadius={24} className="w-full h-full p-2 bg-surface/30">
                      <img src="/assets/images/curation_map.jpg" alt="Global Curation Network" className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-[2s] ease-out" />
                    </LiquidGlass>
                  </motion.div>
              </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
              <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
              >
                  <h2 className="font-sans font-medium text-6xl md:text-8xl tracking-tighter">The Portfolio.</h2>
                  <div className="w-full md:w-1/3 text-secondaryLight font-light text-xl">
                      A meticulously curated portfolio spanning skincare, haircare, and clinical wellness.
                  </div>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                      className="order-2 lg:order-1 space-y-8"
                  >
                      <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface/50 rounded-full text-xs font-medium uppercase tracking-widest text-primary/80">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> Flagship Brand
                      </div>
                      <h3 className="font-sans font-medium text-6xl md:text-7xl tracking-tighter">Zyrin</h3>
                      <p className="font-light text-secondaryLight text-xl leading-relaxed max-w-md">
                          Clinical-grade actives formulated for the Indian demographic. High-performance serums, barrier repair, and advanced sun protection.
                      </p>
                      
                      <div className="pt-8">
                        <LiquidGlass 
                          cornerRadius={999}
                          blurAmount={0.1}
                          className="bg-primary text-base inline-block cursor-pointer hover:bg-primary/90 transition-colors"
                          padding="16px 32px"
                          onClick={() => openModal('products')}
                        >
                          <span className="inline-flex items-center gap-4 text-sm font-medium uppercase tracking-widest">
                              View Formulations
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </span>
                        </LiquidGlass>
                      </div>
                  </motion.div>
                  
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                      className="order-1 lg:order-2 h-[600px] lg:h-[800px] w-full"
                  >
                    <LiquidGlass blurAmount={0.2} cornerRadius={32} className="w-full h-full p-2 bg-surface/30">
                      <img src="/assets/images/zyrin_serum.jpg" alt="Zyrin Serum" className="w-full h-full object-cover rounded-[28px]" />
                    </LiquidGlass>
                  </motion.div>
              </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section id="ecosystem" className="py-32 md:py-48 px-6 md:px-12 relative">
          <div className="max-w-7xl mx-auto">
              <motion.h2 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="font-sans font-medium text-6xl md:text-8xl tracking-tighter mb-24 text-center"
              >
                  The Loka Ecosystem.
              </motion.h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                  
                  <div className="lg:col-span-7 flex flex-col gap-6">
                      {[
                          { num: '01', title: 'Digital-First Experience', desc: 'A proprietary tech stack powering personalized recommendations, seamless checkout, and subscription management.', img: '/assets/images/ecosystem_digital.jpg' },
                          { num: '02', title: 'Marketplace Dominance', desc: 'Strategic presence across top e-commerce platforms, optimized by data-driven marketing and agile supply chains.', img: '/assets/images/ecosystem_marketplace.jpg' },
                          { num: '03', title: 'Retail Presence', desc: 'Omnichannel expansion through premium retail partnerships and experiential flagship stores.', img: '/assets/images/ecosystem_retail.jpg' },
                      ].map((item, idx) => (
                          <motion.div 
                              key={idx}
                              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                              onMouseEnter={() => setActiveEcosystemImage(item.img)}
                          >
                            <LiquidGlass 
                              cornerRadius={24}
                              blurAmount={0.15}
                              className="group cursor-pointer bg-surface/20 hover:bg-surface/50 transition-colors duration-500"
                              padding="32px"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                                <div className="md:col-span-2 font-serif text-3xl text-secondaryDark group-hover:text-accent transition-colors duration-500">{item.num}</div>
                                <div className="md:col-span-10">
                                  <div className="font-medium text-2xl text-primary mb-3 tracking-tight">{item.title}</div>
                                  <div className="font-light text-secondaryLight text-lg leading-relaxed">
                                      {item.desc}
                                  </div>
                                </div>
                              </div>
                            </LiquidGlass>
                          </motion.div>
                      ))}
                  </div>
                  
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                      className="hidden lg:block lg:col-span-5 sticky top-48 h-[600px] w-full"
                  >
                    <LiquidGlass blurAmount={0.2} cornerRadius={32} className="w-full h-full p-2 bg-surface/20">
                      <div className="w-full h-full bg-base/50 rounded-[28px] overflow-hidden relative">
                          <AnimatePresence mode="wait">
                              <motion.img 
                                  key={activeEcosystemImage}
                                  src={activeEcosystemImage}
                                  alt="Ecosystem Feature"
                                  initial={{ opacity: 0, scale: 1.05 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                                  className="absolute inset-0 w-full h-full object-cover"
                              />
                          </AnimatePresence>
                      </div>
                    </LiquidGlass>
                  </motion.div>
              </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="h-[600px] w-full"
              >
                <LiquidGlass blurAmount={0.2} cornerRadius={32} className="w-full h-full p-2 bg-surface/30">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Leadership & Advisory" className="w-full h-full object-cover rounded-[28px] mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-1000" />
                </LiquidGlass>
              </motion.div>
              
              <div className="space-y-10">
                  <motion.h2 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                      className="font-sans font-medium text-6xl md:text-7xl leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondaryLight"
                  >
                      Built by Visionaries.
                  </motion.h2>
                  
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                      className="space-y-6 font-light text-xl text-secondaryLight leading-relaxed"
                  >
                      <p>
                          Loka Brands is helmed by a serial entrepreneur with a proven track record in healthcare, biotech, SaaS, and Enterprise AI solutions. 
                      </p>
                      <p>
                          Backed and mentored by India's top-rated and most successful e-commerce guru, our leadership brings together deep clinical expertise with unparalleled digital growth strategies.
                      </p>
                  </motion.div>
                  
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }}
                      className="pt-8 flex flex-wrap gap-6"
                  >
                    <LiquidGlass cornerRadius={999} blurAmount={0.1} padding="16px 32px" className="bg-primary text-base cursor-pointer hover:bg-primary/90" onClick={() => openModal('careers')}>
                        <span className="text-sm font-medium uppercase tracking-widest">Join the Team</span>
                    </LiquidGlass>
                    <LiquidGlass cornerRadius={999} blurAmount={0.1} padding="16px 32px" className="bg-surface/50 text-primary cursor-pointer hover:bg-surface/80" onClick={() => openModal('contact')}>
                        <span className="text-sm font-medium uppercase tracking-widest">Press & Media</span>
                    </LiquidGlass>
                  </motion.div>
              </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-6 md:px-12 border-t border-surface relative z-10 bg-base/50 backdrop-blur-3xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
              <div className="md:col-span-2">
                  <div className="font-serif text-4xl mb-6 text-primary">Loka.</div>
                  <p className="font-light text-secondaryLight max-w-sm text-lg">
                      Premium wellness democratized.<br/>
                      A house of brands engineered for the future.
                  </p>
              </div>
              
              <div className="space-y-6">
                  <h4 className="text-sm font-medium uppercase tracking-widest text-secondaryDark">Brands</h4>
                  <ul className="space-y-4 font-light text-secondaryLight">
                      <li><a href="#" className="hover:text-primary transition-colors">Zyrin</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Upcoming</a></li>
                  </ul>
              </div>
              
              <div className="space-y-6">
                  <h4 className="text-sm font-medium uppercase tracking-widest text-secondaryDark">Company</h4>
                  <ul className="space-y-4 font-light text-secondaryLight">
                      <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                      <li><button onClick={() => openModal('careers')} className="hover:text-primary transition-colors">Careers</button></li>
                      <li><button onClick={() => openModal('contact')} className="hover:text-primary transition-colors">Contact</button></li>
                  </ul>
              </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-surface flex flex-col md:flex-row justify-between items-center gap-4 font-light text-sm text-secondaryDark">
              <div>&copy; 2026 Loka Brands. All rights reserved.</div>
              <div className="flex gap-8">
                  <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                  <a href="#" className="hover:text-primary transition-colors">Terms</a>
              </div>
          </div>
        </footer>

        {/* Modals */}
        <AnimatePresence>
          {modalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-base/60 backdrop-blur-xl" 
                onClick={() => setModalOpen(false)}
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={modalSpring}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden"
              >
                <LiquidGlass cornerRadius={32} blurAmount={0.3} className="w-full h-full p-12 md:p-16 bg-surface/60 overflow-y-auto custom-scrollbar">
                  <button 
                    onClick={() => setModalOpen(false)} 
                    className="absolute top-8 right-8 text-secondaryLight hover:text-primary transition-colors bg-surface/50 p-2 rounded-full"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                  
                  <div id="modal-body" className="relative z-10">
                    {modalType === 'products' && (
                      <div>
                        <h2 className="font-sans font-medium tracking-tighter text-5xl mb-6">Zyrin Formulations</h2>
                        <p className="font-light text-secondaryLight text-xl mb-12">Formulated with clinically dosed active ingredients.</p>
                        <div className="space-y-8">
                            <div className="border-b border-surface pb-8">
                                <h4 className="text-2xl font-medium mb-2 tracking-tight">Snow Mushroom Intense Hydration</h4>
                                <p className="font-light text-secondaryLight mb-4">Tremella Fuciformis extracted at high molecular weight.</p>
                                <span className="text-accent text-sm font-medium uppercase tracking-widest">Value: ₹899</span>
                            </div>
                            <div className="border-b border-surface pb-8">
                                <h4 className="text-2xl font-medium mb-2 tracking-tight">Bio-Active Peptide Barrier Repair</h4>
                                <p className="font-light text-secondaryLight mb-4">Copper tri-peptide-1 for structural integrity.</p>
                                <span className="text-accent text-sm font-medium uppercase tracking-widest">Value: ₹1,199</span>
                            </div>
                        </div>
                      </div>
                    )}
                    {modalType === 'careers' && (
                      <div>
                        <h2 className="font-sans font-medium tracking-tighter text-5xl mb-12">Open Positions</h2>
                        <div className="space-y-0 border-t border-surface">
                            <div className="py-8 border-b border-surface flex justify-between items-center group">
                                <div>
                                    <h4 className="text-2xl font-medium mb-1 tracking-tight group-hover:text-accent transition-colors">Head of D2C Growth</h4>
                                    <p className="font-light text-secondaryLight">Warangal HQ</p>
                                </div>
                                <button className="text-sm font-medium uppercase tracking-widest text-primary hover:text-accent transition-colors" onClick={() => alert('Application started')}>Apply</button>
                            </div>
                            <div className="py-8 border-b border-surface flex justify-between items-center group">
                                <div>
                                    <h4 className="text-2xl font-medium mb-1 tracking-tight group-hover:text-accent transition-colors">Formulation Chemist</h4>
                                    <p className="font-light text-secondaryLight">Warangal HQ</p>
                                </div>
                                <button className="text-sm font-medium uppercase tracking-widest text-primary hover:text-accent transition-colors" onClick={() => alert('Application started')}>Apply</button>
                            </div>
                        </div>
                      </div>
                    )}
                    {modalType === 'contact' && (
                      <div>
                        <h2 className="font-sans font-medium tracking-tighter text-5xl mb-10">Contact Us</h2>
                        <form onSubmit={(e) => { e.preventDefault(); setModalOpen(false); alert('Message sent successfully!'); }} className="space-y-8">
                            <div>
                                <input type="text" placeholder="Full Name" required className="w-full bg-base/30 border border-surface py-4 px-6 font-light focus:outline-none focus:border-primary transition-colors placeholder:text-secondaryDark rounded-2xl" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email Address" required className="w-full bg-base/30 border border-surface py-4 px-6 font-light focus:outline-none focus:border-primary transition-colors placeholder:text-secondaryDark rounded-2xl" />
                            </div>
                            <div>
                                <textarea placeholder="Your Message" rows="4" required className="w-full bg-base/30 border border-surface py-4 px-6 font-light focus:outline-none focus:border-primary transition-colors placeholder:text-secondaryDark resize-none rounded-2xl"></textarea>
                            </div>
                            <button type="submit" className="bg-primary text-base px-8 py-5 text-sm font-medium uppercase tracking-widest hover:bg-primary/80 transition-colors duration-500 w-full rounded-2xl">
                                Send Message
                            </button>
                        </form>
                      </div>
                    )}
                  </div>
                </LiquidGlass>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
