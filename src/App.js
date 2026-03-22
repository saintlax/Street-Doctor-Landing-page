import React, { useState } from 'react';
import { 
  MessageSquare, 
  MapPin, 
  Stethoscope, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  CreditCard, 
  Activity,
  UserPlus,
  Watch // Added for the new feature
} from 'lucide-react';

const StreetDoctorLanding = () => {
  const [activeTab, setActiveTab] = useState('patient');
  const WHATSAPP_NUMBER = "+15551667174";

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`;
    window.open(url, '_blank');
  };

  const comingSoonAlert = () => {
    alert("This feature is coming soon!");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Stethoscope className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">Street Doctor</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#how-it-works" className="hover:text-blue-600 transition">How it Works</a>
          <a href="#features" className="hover:text-blue-600 transition">AI Engine</a>
          <a href="#join" className="hover:text-blue-600 transition">Join the Network</a>
        </div>
        <button 
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 transition shadow-md"
        >
          <MessageSquare size={18} /> Open WhatsApp
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-16 md:py-24 max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
          The Future of Decentralized Care
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Your Personal Hospital, <br />
          <span className="text-blue-600">On WhatsApp.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          AI-powered triage, **real-time smartwatch monitoring**, and specialist matching within 50km. All through a single chat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={comingSoonAlert}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg"
          >
            Start a Consultation
          </button>
          <button 
            onClick={comingSoonAlert}
            className="bg-white border-2 border-slate-200 hover:border-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition"
          >
            I am a Doctor
          </button>
        </div>
      </header>

      {/* Stats/Summary Section */}
      <section className="bg-white py-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">50KM</div>
            <div className="text-slate-500 font-medium">Local Specialist Radius</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">LIVE</div>
            <div className="text-slate-500 font-medium">Smart Watch Vitals Sync</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">AI-Verified</div>
            <div className="text-slate-500 font-medium">Severity Triage</div>
          </div>
        </div>
      </section>

      {/* How It Works (The Triangulation Process) */}
      <section id="how-it-works" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">The Connected Care Loop</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { icon: <Watch className="text-purple-500" />, title: "Sync", desc: "Wear your Street Doctor watch to track vitals 24/7." },
            { icon: <MapPin className="text-red-500" />, title: "Triangulate", desc: "Share location via WhatsApp to find nearby doctors." },
            { icon: <Activity className="text-orange-500" />, title: "Triage", desc: "AI combines your watch data with symptoms for a summary." },
            { icon: <CreditCard className="text-green-500" />, title: "Secure Pay", desc: "Pay the consultation fee directly via chat." },
            { icon: <Zap className="text-blue-500" />, title: "Resolve", desc: "Get a prescription or doorstep delivery instantly." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="mb-4 bg-slate-50 w-12 h-12 flex items-center justify-center rounded-xl">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Intelligence Deep Dive */}
      <section id="features" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 italic text-blue-400">The Street Doctor AI Engine</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Watch className="text-orange-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg italic">Proactive Bio-Monitoring</h4>
                  <p className="text-slate-400">Doctors receive alerts if your smart watch detects abnormal heart rates or O2 levels.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <ShieldCheck className="text-green-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg italic">Clinical Second Opinion</h4>
                  <p className="text-slate-400">Real-time diagnostic suggestions for doctors based on live wearable data.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageSquare className="text-blue-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg italic">Conversation Summaries</h4>
                  <p className="text-slate-400">Turns long patient chats into structured medical notes in seconds.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 shadow-2xl">
             <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
               <span className="text-xs text-slate-500 ml-2 italic underline">Internal Doctor Dashboard - AI Insights</span>
             </div>
             <div className="space-y-4 font-mono text-sm">
               <div className="flex justify-between">
                 <span className="text-red-400">SEVERITY: HIGH</span>
                 <span className="text-orange-400 flex items-center gap-1 animate-pulse"><Watch size={14}/> LIVE: 112 BPM</span>
               </div>
               <div className="text-blue-300">SUMMARY: Patient reports acute abdominal pain. Geolocation: 2.4km away.</div>
               <div className="text-green-400">AI RECOMMENDATION: Rule out appendicitis. Watch data shows rising core temp.</div>
               <div className="bg-blue-600 text-white p-2 rounded text-center mt-6 cursor-pointer hover:bg-blue-500 transition">
                 CLICK TO TRANSMIT TO PATIENT
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to join the network?</h2>
        <p className="text-slate-600 mb-10">Whether you are an independent doctor looking to grow your practice or a hospital seeking to reduce wait times, Street Doctor is for you.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-blue-50 rounded-2xl text-left border border-blue-100">
            <h3 className="font-bold text-xl mb-4 text-blue-800">For Independent Doctors</h3>
            <p className="text-slate-700 mb-6">Access live patient vitals, set your own fees, and let the AI handle your paperwork.</p>
            <button onClick={comingSoonAlert} className="flex items-center gap-2 font-bold text-blue-600 hover:underline">Register Practice <ChevronRight size={16}/></button>
          </div>
          <div className="p-8 bg-slate-100 rounded-2xl text-left border border-slate-200">
            <h3 className="font-bold text-xl mb-4 text-slate-800">For Hospitals</h3>
            <p className="text-slate-700 mb-6">Remote monitoring for post-op patients to reduce readmission and automate triage.</p>
            <button onClick={comingSoonAlert} className="flex items-center gap-2 font-bold text-slate-700 hover:underline">Onboard Hospital <ChevronRight size={16}/></button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© 2026 Street Doctor AI. All rights reserved. Medical consultations are provided by licensed independent practitioners.</p>
      </footer>
    </div>
  );
};

export default StreetDoctorLanding;