import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Ensure you run: npm install framer-motion
import {
  MessageSquare, MapPin, Stethoscope, ShieldCheck,
  Zap, ChevronRight, CreditCard, Activity, UserPlus, Watch
} from 'lucide-react';

const StreetDoctorLanding = () => {
  const WHATSAPP_NUMBER = "+15551667174";

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`;
    window.open(url, '_blank');
  };

  const comingSoonAlert = () => {
    alert("This feature is coming soon!");
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] font-sans text-slate-900 overflow-x-hidden">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 15 }}
            className="bg-emerald-500 p-2 rounded-lg"
          >
            <Stethoscope className="text-white" size={24} />
          </motion.div>
          <span className="text-xl font-bold tracking-tight">Street Doctor</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          {["How it Works", "AI Engine", "Join"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-emerald-600 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <button
          onClick={openWhatsApp}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 shadow-md"
        >
          <MessageSquare size={18} /> <span className="hidden sm:inline">Open WhatsApp</span>
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative px-6 py-16 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-emerald-700 uppercase bg-emerald-100 rounded-full">
            ✨ The Future of Decentralized Care
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
            Your Personal Hospital, <br />
            <span className="text-emerald-600">On WhatsApp.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg">
            AI-powered triage, real-time smartwatch monitoring, and specialist matching within 50km. All through a single chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={comingSoonAlert} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl shadow-emerald-200">
              Start a Consultation
            </button>
            <button onClick={comingSoonAlert} className="bg-white border-2 border-slate-200 hover:border-emerald-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              I am a Doctor
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Hero Image */}
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl animate-float">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
              alt="Telemedicine interface"
              className="w-full h-auto"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full -z-10 blur-2xl"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-50 rounded-full -z-10 blur-3xl"></div>
        </motion.div>
      </header>

      {/* Stats Section with Count-up style feel */}
      <section className="bg-emerald-900 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { val: "50KM", label: "Specialist Radius" },
            { val: "24/7", label: "AI Triage Active" },
            { val: "100%", label: "Secure Vitals Sync" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileInView={{ scale: [0.9, 1] }}
              className="text-center"
            >
              <div className="text-4xl font-black text-emerald-400 mb-2">{stat.val}</div>
              <div className="text-emerald-100/70 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works with Images */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-slate-800">The Connected Care Loop</h2>
          <p className="text-slate-500">A seamless experience from symptoms to recovery.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {[
            {
              icon: <Watch className="text-emerald-500" />,
              title: "Sync",
              desc: "Connect your watch for 24/7 vitals.",
              img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=500" // Smartwatch focus
            },
            {
              icon: <MapPin className="text-teal-500" />,
              title: "Locate",
              desc: "Find specialists within 50km.",
              img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=500" // Map/Data focus
            },
            {
              icon: <Activity className="text-emerald-600" />,
              title: "Triage",
              desc: "AI severity assessment.",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300" // Doctor with tablet
            },
            {
              icon: <CreditCard className="text-teal-600" />,
              title: "Pay",
              desc: "Secure chat-based payments.",
              img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=500" // Payment focus
            },
            {
              icon: <Zap className="text-emerald-400" />,
              title: "Resolve",
              desc: "Fast prescriptions & delivery.",
              img: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=500" // Pharmacy/Medicine focus
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="h-32 overflow-hidden bg-slate-200">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 bg-emerald-50 w-10 h-10 flex items-center justify-center rounded-lg">{item.icon}</div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* AI Deep Dive Section */}
      <section id="features" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 italic text-emerald-400">The Street Doctor AI Engine</h2>
            <div className="space-y-8">
              {[
                { icon: <Watch />, title: "Proactive Bio-Monitoring", desc: "Instant alerts for abnormal heart rates or O2 levels." },
                { icon: <ShieldCheck />, title: "Clinical Second Opinion", desc: "Diagnostic suggestions based on live wearable data." },
                { icon: <MessageSquare />, title: "Smart Summaries", desc: "Structured medical notes from chat history." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-5">
                  <div className="text-emerald-500 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl italic mb-1">{feature.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-slate-800 p-8 rounded-[2rem] border border-slate-700 shadow-2xl font-mono">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 ml-4">System: Diagnostic_Terminal_v4.0</span>
              </div>
              <div className="space-y-6 text-sm">
                <div className="flex justify-between items-center bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                  <span className="text-red-400 font-bold">SEVERITY: CRITICAL</span>
                  <span className="text-emerald-400 flex items-center gap-2 animate-pulse"><Watch size={16} /> 112 BPM</span>
                </div>
                <div className="text-emerald-100/90 leading-relaxed">
                  <span className="text-emerald-500">SUMMARY:</span> Patient 442 reports acute abdominal pain. Location: Sector 7G (2.4km).
                </div>
                <div className="text-emerald-400 bg-emerald-400/5 p-4 rounded-lg italic">
                  "Rule out appendicitis. Watch data shows rising core temp (38.2°C)."
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/50"
                >
                  Transmit Data to Specialist
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join the Care Network</h2>
          <p className="text-slate-500">Empowering health professionals with real-time data.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 bg-white rounded-[2.5rem] text-left border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <UserPlus className="text-emerald-600" size={32} />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-slate-800">For Doctors</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">Access live patient vitals, set your own fees, and let AI handle your clinical documentation.</p>
            <button onClick={comingSoonAlert} className="flex items-center gap-2 font-bold text-emerald-600 hover:gap-4 transition-all">
              Register Practice <ChevronRight size={20} />
            </button>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 bg-slate-900 rounded-[2.5rem] text-left shadow-xl shadow-slate-900/20"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
              <Stethoscope className="text-emerald-400" size={32} />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-white">For Hospitals</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Remote post-op monitoring to reduce readmissions and automate emergency triage flows.</p>
            <button onClick={comingSoonAlert} className="flex items-center gap-2 font-bold text-emerald-400 hover:gap-4 transition-all">
              Onboard Facility <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-100 bg-white text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="bg-emerald-500 p-1.5 rounded-md">
            <Stethoscope className="text-white" size={18} />
          </div>
          <span className="font-bold text-lg">Street Doctor AI</span>
        </div>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          © 2026 Street Doctor AI. Licensed practitioners provide all medical consultations. All data is encrypted and HIPAA compliant.
        </p>
      </footer>

      {/* Global CSS for the Floating Animation */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default StreetDoctorLanding;