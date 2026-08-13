import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation configs
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const modalSpring = {
  type: "spring",
  stiffness: 300,
  damping: 25
};

export default function App() {
  const [activeEcosystemImage, setActiveEcosystemImage] = useState('assets/images/ecosystem_digital.jpg');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  // Handle escape key for modals
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
    <div className="bg-base text-primary min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 mix-blend-difference text-[#FAFAF9] p-6 md:p-12 flex justify-between items-center pointer-events-none">
        <div className="font-serif text-2xl tracking-wide pointer-events-auto cursor-pointer">Loka.</div>
        <div className="hidden md:flex gap-12 font-medium text-sm tracking-widest uppercase pointer-events-auto">
          <a href="#about" className="link-hover">Vision</a>
          <a href="#ecosystem" className="link-hover">Ecosystem</a>
          <a href="#portfolio" className="link-hover">Portfolio</a>
        </div>
        <button 
          className="pointer-events-auto border border-[#FAFAF9] px-6 py-2 rounded-none text-sm font-medium uppercase tracking-widest hover:bg-[#FAFAF9] hover:text-[#1C1917] transition-colors duration-500"
          onClick={() => openModal('contact')}
        >
          Partner With Us
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end p-6 md:p-12 pb-24 border-b-4 border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
            
            <div className="lg:col-span-7 space-y-12 z-10">
                <motion.h1 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="font-serif text-[clamp(4rem,9vw,10rem)] leading-[0.9] tracking-tight"
                >
                    Premium<br />
                    <span className="italic text-secondaryLight/80">Wellness</span><br />
                    Democratized.
                </motion.h1>
                
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                    className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-primary border-b-2"
                >
                    <div className="max-w-xs space-y-4">
                        <div className="w-2 h-2 bg-accent rounded-none"></div>
                        <p className="font-light text-secondaryLight text-lg leading-relaxed">
                            We architect categories. A house of brands engineering the future of D2C wellness, beauty, and personal care.
                        </p>
                    </div>
                    <div className="pt-4">
                        <a href="#portfolio" className="group inline-flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-primary">
                            <span className="link-hover">Explore Portfolio</span>
                            <div className="w-10 h-10 rounded-none border border-primary border-b-2 flex items-center justify-center group-hover:bg-primary group-hover:text-base transition-all duration-500">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
            
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                className="lg:col-span-5 relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-none shadow-none border border-primary border-b-2"
            >
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4" type="video/mp4" />
                </video>
            </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-48 px-6 md:px-12 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="font-light text-2xl md:text-4xl leading-[1.4] text-secondaryLight"
            >
                We believe that <span className="text-primary font-medium">clinical efficacy</span> shouldn't be a luxury. We build vertically integrated brands that deliver uncompromising quality to the modern Indian consumer.
            </motion.div>
            
            <div className="space-y-16">
                <motion.h2 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                    className="font-serif text-5xl md:text-7xl leading-tight"
                >
                    Elevating the<br />
                    <span className="italic text-base/70">Everyday.</span>
                </motion.h2>
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                    className="mt-12 w-full h-[600px] overflow-hidden rounded-none shadow-none border border-primary border-b-2"
                >
                    <img src="assets/images/curation_map.jpg" alt="Global Curation Network" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]" />
                </motion.div>
            </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 md:py-48 px-6 md:px-12 bg-primary text-base">
        <div className="max-w-7xl mx-auto">
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
            >
                <h2 className="font-serif text-6xl md:text-8xl">The<br/><span className="italic text-secondaryLight">Portfolio.</span></h2>
                <div className="w-full md:w-1/3 text-secondaryDark font-light text-lg">
                    A meticulously curated portfolio spanning skincare, haircare, and clinical wellness.
                </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                    className="order-2 lg:order-1 space-y-8"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-secondaryLight/30 rounded-none text-xs font-medium uppercase tracking-widest text-secondaryDark">
                        <span className="w-2 h-2 rounded-none bg-accent"></span> Flagship Brand
                    </div>
                    <h3 className="font-serif text-5xl md:text-7xl">Zyrin</h3>
                    <p className="font-light text-secondaryLight text-xl leading-relaxed max-w-md">
                        Clinical-grade actives formulated for the Indian demographic. High-performance serums, barrier repair, and advanced sun protection.
                    </p>
                    
                    <div className="pt-8">
                        <button onClick={() => openModal('products')} className="group inline-flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-base">
                            <span className="link-hover">View Formulations</span>
                            <div className="w-10 h-10 rounded-none border border-secondaryLight/30 flex items-center justify-center group-hover:bg-base group-hover:text-primary transition-all duration-500">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                        </button>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                    className="order-1 lg:order-2 h-[600px] lg:h-[800px] w-full border border-base border-b-2"
                >
                    <img src="assets/images/zyrin_serum.jpg" alt="Zyrin Serum" className="w-full h-full object-cover rounded-none" />
                </motion.div>
            </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-32 md:py-48 px-6 md:px-12 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto">
            <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="font-serif text-5xl md:text-7xl mb-24"
            >
                The Loka<br/><span className="italic text-secondaryLight">Ecosystem.</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                
                <div className="lg:col-span-7 flex flex-col gap-0 border-t border-primary border-b-2">
                    {[
                        { num: '01', title: 'Digital-First\nExperience', desc: 'A proprietary tech stack powering personalized recommendations, seamless checkout, and subscription management.', img: 'assets/images/ecosystem_digital.jpg' },
                        { num: '02', title: 'Marketplace\nDominance', desc: 'Strategic presence across top e-commerce platforms, optimized by data-driven marketing and agile supply chains.', img: 'assets/images/ecosystem_marketplace.jpg' },
                        { num: '03', title: 'Retail\nPresence', desc: 'Omnichannel expansion through premium retail partnerships and experiential flagship stores.', img: 'assets/images/ecosystem_retail.jpg' },
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-12 border-b border-primary border-b-2 hover:bg-surface transition-colors duration-500 group cursor-pointer px-4 md:px-0"
                            onMouseEnter={() => setActiveEcosystemImage(item.img)}
                        >
                            <div className="md:col-span-2 font-serif text-4xl text-[#AFAAB9] group-hover:text-accent transition-colors duration-500">{item.num}</div>
                            <div className="md:col-span-4 font-medium text-2xl text-primary whitespace-pre-line">{item.title}</div>
                            <div className="md:col-span-6 font-light text-secondaryLight text-lg leading-[1.7]">
                                {item.desc}
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                    className="hidden lg:block lg:col-span-5 sticky top-32 h-[500px] w-full border border-primary border-b-2"
                >
                    <div className="w-full h-full bg-surface rounded-none overflow-hidden flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={activeEcosystemImage}
                                src={activeEcosystemImage}
                                alt="Ecosystem Feature"
                                initial={{ opacity: 0.3, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0.3, scale: 0.96 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-32 md:py-48 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="h-[600px] w-full border border-primary border-b-2"
            >
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Leadership & Advisory" className="w-full h-full object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-1000" />
            </motion.div>
            
            <div className="space-y-10">
                <motion.h2 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                    className="font-serif text-5xl md:text-7xl leading-tight"
                >
                    Built by <span className="italic text-secondaryLight">Visionaries.</span>
                </motion.h2>
                
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                    className="space-y-6 font-light text-lg text-secondaryLight leading-relaxed"
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
                    className="pt-8 flex flex-wrap gap-4"
                >
                    <button onClick={() => openModal('careers')} className="bg-primary text-base px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-accent transition-colors duration-500 rounded-none border border-transparent">
                        Join the Team
                    </button>
                    <button onClick={() => openModal('contact')} className="bg-transparent text-primary border border-primary border-b-2 px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-base transition-colors duration-500 rounded-none">
                        Press & Media
                    </button>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-base py-24 px-6 md:px-12 border-t border-primary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
            <div className="md:col-span-2">
                <div className="font-serif text-4xl mb-6">Loka.</div>
                <p className="font-light text-secondaryDark max-w-sm">
                    Premium wellness democratized.<br/>
                    A house of brands engineered for the future.
                </p>
            </div>
            
            <div className="space-y-6">
                <h4 className="text-sm font-medium uppercase tracking-widest text-secondaryLight">Brands</h4>
                <ul className="space-y-4 font-light text-secondaryDark">
                    <li><a href="#" className="hover:text-accent transition-colors">Zyrin</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Upcoming</a></li>
                </ul>
            </div>
            
            <div className="space-y-6">
                <h4 className="text-sm font-medium uppercase tracking-widest text-secondaryLight">Company</h4>
                <ul className="space-y-4 font-light text-secondaryDark">
                    <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                    <li><button onClick={() => openModal('careers')} className="hover:text-accent transition-colors">Careers</button></li>
                    <li><button onClick={() => openModal('contact')} className="hover:text-accent transition-colors">Contact</button></li>
                </ul>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-secondaryLight/20 flex flex-col md:flex-row justify-between items-center gap-4 font-light text-sm text-secondaryLight">
            <div>&copy; 2026 Loka Brands. All rights reserved.</div>
            <div className="flex gap-8">
                <a href="#" className="hover:text-base transition-colors">Privacy</a>
                <a href="#" className="hover:text-base transition-colors">Terms</a>
            </div>
        </div>
      </footer>

      {/* Modal Overlay via AnimatePresence */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md" 
              onClick={() => setModalOpen(false)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={modalSpring}
              className="relative bg-base w-full max-w-3xl max-h-[90vh] overflow-y-auto p-12 md:p-16 rounded-none shadow-none border border-primary border-b-4"
            >
              <button 
                onClick={() => setModalOpen(false)} 
                className="absolute top-6 right-6 text-secondaryLight hover:text-primary transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
              
              <div id="modal-body">
                {modalType === 'products' && (
                  <div>
                    <h2 className="font-serif text-4xl mb-6">Zyrin Formulations</h2>
                    <p className="font-light text-secondaryLight mb-12">Formulated with clinically dosed active ingredients.</p>
                    <div className="space-y-8">
                        <div className="border-b border-primary border-b-2 pb-8">
                            <h4 className="text-xl font-medium mb-2">Snow Mushroom Intense Hydration</h4>
                            <p className="font-light text-secondaryLight mb-4">Tremella Fuciformis extracted at high molecular weight.</p>
                            <span className="text-accent text-sm font-medium">Value: ₹899</span>
                        </div>
                        <div className="border-b border-primary border-b-2 pb-8">
                            <h4 className="text-xl font-medium mb-2">Bio-Active Peptide Barrier Repair</h4>
                            <p className="font-light text-secondaryLight mb-4">Copper tri-peptide-1 for structural integrity.</p>
                            <span className="text-accent text-sm font-medium">Value: ₹1,199</span>
                        </div>
                    </div>
                  </div>
                )}
                {modalType === 'careers' && (
                  <div>
                    <h2 className="font-serif text-4xl mb-12">Open Positions</h2>
                    <div className="space-y-0 border-t border-primary border-b-2">
                        <div className="py-8 border-b border-primary border-b-2 flex justify-between items-center group">
                            <div>
                                <h4 className="text-xl font-medium mb-1 group-hover:text-accent transition-colors">Head of D2C Growth</h4>
                                <p className="font-light text-secondaryLight text-sm">Warangal HQ</p>
                            </div>
                            <button className="text-sm font-medium uppercase tracking-widest link-hover" onClick={() => alert('Application started')}>Apply</button>
                        </div>
                        <div className="py-8 border-b border-primary border-b-2 flex justify-between items-center group">
                            <div>
                                <h4 className="text-xl font-medium mb-1 group-hover:text-accent transition-colors">Formulation Chemist</h4>
                                <p className="font-light text-secondaryLight text-sm">Warangal HQ</p>
                            </div>
                            <button className="text-sm font-medium uppercase tracking-widest link-hover" onClick={() => alert('Application started')}>Apply</button>
                        </div>
                    </div>
                  </div>
                )}
                {modalType === 'contact' && (
                  <div>
                    <h2 className="font-serif text-4xl mb-10">Contact Us</h2>
                    <form onSubmit={(e) => { e.preventDefault(); setModalOpen(false); alert('Message sent successfully!'); }} className="space-y-8">
                        <div>
                            <input type="text" placeholder="Full Name" required className="w-full bg-transparent border-b border-primary border-b-2 py-4 font-light focus:outline-none focus:border-primary transition-colors placeholder:text-secondaryLight rounded-none" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-primary border-b-2 py-4 font-light focus:outline-none focus:border-primary transition-colors placeholder:text-secondaryLight rounded-none" />
                        </div>
                        <div>
                            <textarea placeholder="Your Message" rows="3" required className="w-full bg-transparent border-b border-primary border-b-2 py-4 font-light focus:outline-none focus:border-primary transition-colors placeholder:text-secondaryLight resize-none rounded-none"></textarea>
                        </div>
                        <button type="submit" className="bg-primary text-base px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-accent transition-colors duration-500 w-full rounded-none">
                            Send Message
                        </button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
