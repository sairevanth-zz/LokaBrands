import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } 
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
    <div ref={appRef} className="bg-[#000000] text-[#F5F5F7] min-h-screen font-sans selection:bg-[#0071E3]/30 selection:text-white">
      
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 z-0 ambient-mesh opacity-90 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-4 md:px-8 md:py-4 transition-all">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center glass-panel rounded-full px-8 py-4 border border-white/10 shadow-2xl backdrop-blur-3xl">
          <div className="font-serif text-2xl tracking-wide cursor-pointer text-white">Loka.</div>
          <div className="hidden md:flex gap-12 font-medium text-sm tracking-widest uppercase text-white/80">
            <a href="#about" className="hover:text-white transition-colors duration-300">Vision</a>
            <a href="#ecosystem" className="hover:text-white transition-colors duration-300">Ecosystem</a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</a>
          </div>
          <button 
            className="text-sm font-medium uppercase tracking-widest text-white hover:text-white/70 transition-colors duration-500"
            onClick={() => openModal('contact')}
          >
            Partner With Us
          </button>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-12 pb-24">
          
          <div className="z-10 text-center space-y-8 max-w-5xl mx-auto mt-24">
              <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full flex justify-center items-center h-64 md:h-80 lg:h-96 -mb-8"
              >
                  <iframe src="/liquid-logo/index.html" className="w-[500px] h-[500px] border-none pointer-events-auto" title="Loka Liquid Logo" />
              </motion.div>
              
              <motion.h1 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="font-sans font-medium text-[clamp(3.5rem,8vw,8rem)] leading-[1.05] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-2xl relative z-10 pointer-events-none"
              >
                  Premium Wellness<br />
                  Democratized.
              </motion.h1>
              
              <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                  className="flex flex-col items-center gap-8 pt-8"
              >
                  <p className="font-light text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl text-center">
                      We architect categories. A house of brands engineering the future of D2C wellness, beauty, and personal care.
                  </p>
                  
                  <div className="pt-8">
                    <a href="#portfolio" className="glass-panel inline-flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                        Explore Portfolio
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
              </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 md:py-48 px-6 md:px-12 relative">
          <div className="max-w-6xl mx-auto space-y-32">
              <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="font-light text-3xl md:text-5xl leading-[1.3] text-white/60 tracking-tight text-center max-w-4xl mx-auto"
              >
                  We believe that <span className="text-white font-medium">clinical efficacy</span> shouldn't be a luxury. We build vertically integrated brands that deliver uncompromising quality to the modern Indian consumer.
              </motion.div>
              
              <div className="space-y-16">
                  <motion.h2 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                      className="font-sans font-medium text-5xl md:text-7xl leading-tight tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"
                  >
                      Elevating the Everyday.
                  </motion.h2>
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                      className="mt-12 w-full h-[600px] rounded-[2.5rem] p-2 glass-panel relative overflow-hidden group"
                  >
                    <img src="/assets/images/curation_map.jpg" alt="Global Curation Network" className="w-full h-full object-cover rounded-[2rem] group-hover:scale-[1.02] transition-transform duration-[2s] ease-out" />
                    
                    <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-auto glass-panel p-8 md:p-10 rounded-[2rem] max-w-lg border border-white/10 shadow-2xl backdrop-blur-3xl">
                        <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Borderless Curation.</h3>
                        <p className="font-light text-white/70 text-lg leading-relaxed">We traverse the globe to source the most potent, clinically-proven actives, bringing world-class formulations to the modern Indian consumer.</p>
                    </div>
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
                  <div className="w-full md:w-1/3 text-white/60 font-light text-xl">
                      A meticulously curated portfolio spanning skincare, haircare, and clinical wellness.
                  </div>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                      className="order-2 lg:order-1 space-y-8"
                  >
                      <div className="inline-flex items-center gap-3 px-4 py-2 glass-panel rounded-full text-xs font-medium uppercase tracking-widest text-white/80">
                          <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-pulse"></span> Flagship Brand
                      </div>
                      <h3 className="font-sans font-medium text-6xl md:text-7xl tracking-tighter">Zyrin</h3>
                      <p className="font-light text-white/60 text-xl leading-relaxed max-w-md">
                          Clinical-grade actives formulated for the Indian demographic. High-performance serums, barrier repair, and advanced sun protection.
                      </p>
                      
                      <div className="pt-8">
                        <button 
                          className="glass-panel text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-4 text-sm font-medium uppercase tracking-widest"
                          onClick={() => openModal('products')}
                        >
                          View Formulations
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                      </div>
                  </motion.div>
                  
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                      className="order-1 lg:order-2 h-[600px] lg:h-[800px] w-full rounded-[2.5rem] p-2 glass-panel"
                  >
                    <img src="/assets/images/zyrin_serum.jpg" alt="Zyrin Serum" className="w-full h-full object-cover rounded-[2rem]" />
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
                              className="group cursor-pointer glass-panel p-8 rounded-[2rem] hover:bg-white/5 transition-colors duration-500"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                              <div className="md:col-span-2 font-serif text-3xl text-white/30 group-hover:text-[#0071E3] transition-colors duration-500">{item.num}</div>
                              <div className="md:col-span-10">
                                <div className="font-medium text-2xl text-white mb-3 tracking-tight">{item.title}</div>
                                <div className="font-light text-white/60 text-lg leading-relaxed">
                                    {item.desc}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                      ))}
                  </div>
                  
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                      className="hidden lg:block lg:col-span-5 sticky top-48 h-[600px] w-full rounded-[2.5rem] p-2 glass-panel"
                  >
                      <div className="w-full h-full bg-black/50 rounded-[2rem] overflow-hidden relative">
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
                  </motion.div>
              </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="h-[600px] w-full rounded-[2.5rem] p-2 glass-panel"
              >
                <img src="/assets/images/founder.jpg" alt="Leadership & Advisory" className="w-full h-full object-cover rounded-[2rem] mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-1000" />
              </motion.div>
              
              <div className="space-y-10">
                  <motion.h2 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                      className="font-sans font-medium text-6xl md:text-7xl leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"
                  >
                      Built by Visionaries.
                  </motion.h2>
                  
                  <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                      className="space-y-6 font-light text-xl text-white/60 leading-relaxed"
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
                    <button className="glass-panel text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-flex items-center text-sm font-medium uppercase tracking-widest" onClick={() => openModal('careers')}>
                        Join the Team
                    </button>
                    <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-flex items-center text-sm font-medium uppercase tracking-widest" onClick={() => openModal('contact')}>
                        Press & Media
                    </button>
                  </motion.div>
              </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-6 md:px-12 border-t border-white/10 relative z-10 glass-panel">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
              <div className="md:col-span-2">
                  <div className="font-serif text-4xl mb-6 text-white">Loka.</div>
                  <p className="font-light text-white/60 max-w-sm text-lg">
                      Premium wellness democratized.<br/>
                      A house of brands engineered for the future.
                  </p>
              </div>
              
              <div className="space-y-6">
                  <h4 className="text-sm font-medium uppercase tracking-widest text-white/40">Brands</h4>
                  <ul className="space-y-4 font-light text-white/60">
                      <li><a href="#" className="hover:text-white transition-colors">Zyrin</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Upcoming</a></li>
                  </ul>
              </div>
              
              <div className="space-y-6">
                  <h4 className="text-sm font-medium uppercase tracking-widest text-white/40">Company</h4>
                  <ul className="space-y-4 font-light text-white/60">
                      <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                      <li><button onClick={() => openModal('careers')} className="hover:text-white transition-colors">Careers</button></li>
                      <li><button onClick={() => openModal('contact')} className="hover:text-white transition-colors">Contact</button></li>
                  </ul>
              </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-light text-sm text-white/40">
              <div>&copy; 2026 Loka Brands. All rights reserved.</div>
              <div className="flex gap-8">
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
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
                className="absolute inset-0 bg-black/60 backdrop-blur-xl" 
                onClick={() => setModalOpen(false)}
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={modalSpring}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden"
              >
                <div className="w-full h-full p-12 md:p-16 glass-panel rounded-[2rem] overflow-y-auto custom-scrollbar border border-white/20">
                  <button 
                    onClick={() => setModalOpen(false)} 
                    className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                  
                  <div id="modal-body" className="relative z-10 text-white">
                    {modalType === 'products' && (
                      <div>
                        <h2 className="font-sans font-medium tracking-tighter text-5xl mb-6">Zyrin Formulations</h2>
                        <p className="font-light text-white/60 text-xl mb-12">Formulated with clinically dosed active ingredients.</p>
                        <div className="space-y-8">
                            <div className="border-b border-white/10 pb-8">
                                <h4 className="text-2xl font-medium mb-2 tracking-tight">Snow Mushroom Intense Hydration</h4>
                                <p className="font-light text-white/60 mb-4">Tremella Fuciformis extracted at high molecular weight.</p>
                                <span className="text-[#0071E3] text-sm font-medium uppercase tracking-widest">Value: ₹899</span>
                            </div>
                            <div className="border-b border-white/10 pb-8">
                                <h4 className="text-2xl font-medium mb-2 tracking-tight">Bio-Active Peptide Barrier Repair</h4>
                                <p className="font-light text-white/60 mb-4">Copper tri-peptide-1 for structural integrity.</p>
                                <span className="text-[#0071E3] text-sm font-medium uppercase tracking-widest">Value: ₹1,199</span>
                            </div>
                        </div>
                      </div>
                    )}
                    {modalType === 'careers' && (
                      <div>
                        <h2 className="font-sans font-medium tracking-tighter text-5xl mb-12">Open Positions</h2>
                        <div className="space-y-0 border-t border-white/10">
                            <div className="py-8 border-b border-white/10 flex justify-between items-center group">
                                <div>
                                    <h4 className="text-2xl font-medium mb-1 tracking-tight group-hover:text-[#0071E3] transition-colors">Head of D2C Growth</h4>
                                    <p className="font-light text-white/60">Warangal HQ</p>
                                </div>
                                <button className="text-sm font-medium uppercase tracking-widest text-white hover:text-[#0071E3] transition-colors" onClick={() => alert('Application started')}>Apply</button>
                            </div>
                            <div className="py-8 border-b border-white/10 flex justify-between items-center group">
                                <div>
                                    <h4 className="text-2xl font-medium mb-1 tracking-tight group-hover:text-[#0071E3] transition-colors">Formulation Chemist</h4>
                                    <p className="font-light text-white/60">Warangal HQ</p>
                                </div>
                                <button className="text-sm font-medium uppercase tracking-widest text-white hover:text-[#0071E3] transition-colors" onClick={() => alert('Application started')}>Apply</button>
                            </div>
                        </div>
                      </div>
                    )}
                    {modalType === 'contact' && (
                      <div>
                        <h2 className="font-sans font-medium tracking-tighter text-5xl mb-10">Contact Us</h2>
                        <form onSubmit={(e) => { e.preventDefault(); setModalOpen(false); alert('Message sent successfully!'); }} className="space-y-8">
                            <div>
                                <input type="text" placeholder="Full Name" required className="w-full bg-black/30 border border-white/10 py-4 px-6 font-light focus:outline-none focus:border-white transition-colors placeholder:text-white/30 rounded-2xl" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email Address" required className="w-full bg-black/30 border border-white/10 py-4 px-6 font-light focus:outline-none focus:border-white transition-colors placeholder:text-white/30 rounded-2xl" />
                            </div>
                            <div>
                                <textarea placeholder="Your Message" rows="4" required className="w-full bg-black/30 border border-white/10 py-4 px-6 font-light focus:outline-none focus:border-white transition-colors placeholder:text-white/30 resize-none rounded-2xl"></textarea>
                            </div>
                            <button type="submit" className="bg-white text-black px-8 py-5 text-sm font-medium uppercase tracking-widest hover:bg-white/80 transition-colors duration-500 w-full rounded-2xl">
                                Send Message
                            </button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
