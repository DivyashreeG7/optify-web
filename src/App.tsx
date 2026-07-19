/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, ChevronLeft, ChevronRight, Terminal, Layers, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../optify-logo.png';


function DevWorkspaceIllustration() {
  return (
    <motion.div 
      className="relative w-full max-w-md sm:max-w-lg aspect-square flex items-center justify-center select-none"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl" />

      {/* MAIN IDE / CODE WINDOW */}
      <motion.div 
        className="w-[85%] aspect-[1.15] bg-slate-950 border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        {/* Editor Tab Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-900 select-none h-10">
          <div className="flex gap-1.5 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono font-medium text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800/40">
            <Terminal size={11} className="text-orange-500" />
            <span>optify-engine.ts</span>
          </div>
          <div className="w-16" />
        </div>

        {/* Editor Code Area */}
        <div className="flex-1 p-5 font-mono text-[10px] sm:text-[11px] text-slate-300 space-y-2 leading-relaxed text-left overflow-hidden">
          <div>
            <span className="text-purple-400 font-semibold">import</span>{' '}
            <span className="text-cyan-400">{'{'}</span>{' '}
            <span className="text-amber-300">OptifyApp</span>{' '}
            <span className="text-cyan-400">{'}'}</span>{' '}
            <span className="text-purple-400 font-semibold">from</span>{' '}
            <span className="text-emerald-400">"@optify/core"</span>
            <span className="text-slate-500">;</span>
          </div>
          <div>
            <span className="text-purple-400 font-semibold">const</span>{' '}
            <span className="text-amber-300">agency</span>{' '}
            <span className="text-slate-400">=</span>{' '}
            <span className="text-purple-400 font-semibold">new</span>{' '}
            <span className="text-blue-400">OptifyApp</span>
            <span className="text-cyan-400">()</span>
            <span className="text-slate-500">;</span>
          </div>
          <div className="pl-4">
            <span className="text-slate-500">// Load scaling systems</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-400">await</span>{' '}
            <span className="text-amber-300">agency</span>
            <span className="text-slate-400">.</span>
            <span className="text-blue-400">configure</span>
            <span className="text-cyan-400">(</span>
            <span className="text-amber-300">options</span>
            <span className="text-cyan-400">)</span>
            <span className="text-slate-500">;</span>
          </div>
          <div className="pl-4 text-emerald-400">
            <span>// Launch active preview...</span>
          </div>
          <div>
            <span className="text-purple-400 font-semibold">export</span>{' '}
            <span className="text-purple-400 font-semibold">default</span>{' '}
            <span className="text-cyan-400">{'() =>'}</span>{' '}
            <span className="text-amber-300">agency</span>
            <span className="text-slate-400">.</span>
            <span className="text-blue-400">deploy</span>
            <span className="text-cyan-400">()</span>
            <span className="text-slate-500">;</span>
            <span className="inline-block w-1.5 h-3.5 bg-orange-500 ml-1 animate-[pulse_1s_infinite]" />
          </div>
        </div>
      </motion.div>

      {/* FLOATING PREVIEW APP DASHBOARD WINDOW */}
      <motion.div 
        className="absolute -bottom-2 -left-2 sm:-left-4 w-[65%] aspect-[1.2] bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.03 }}
      >
        {/* App Window Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-50 bg-slate-50/50 select-none">
          <div className="flex gap-1.5 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          </div>
          <div className="font-sans text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Preview</span>
          </div>
          <div className="w-6" />
        </div>

        {/* Live Metrics Content */}
        <div className="flex-1 p-3.5 flex flex-col justify-between text-left">
          <div className="space-y-0.5">
            <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Productivity Rate</div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-slate-900">99.8%</span>
              <span className="text-[8px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">+4.2%</span>
            </div>
          </div>

          {/* Mini dynamic graph using SVG */}
          <div className="h-10 w-full mt-1">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path 
                d="M 0 35 Q 20 10 40 28 T 80 5 T 100 15 L 100 40 L 0 40 Z" 
                fill="url(#chartGrad)" 
              />
              <path 
                d="M 0 35 Q 20 10 40 28 T 80 5 T 100 15" 
                fill="none" 
                stroke="#ea580c" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              {/* Highlight point */}
              <circle cx="80" cy="5" r="3" fill="#ea580c" className="animate-pulse" />
            </svg>
          </div>

          <div className="flex justify-between items-center text-[8px] text-slate-400 font-bold border-t border-slate-50 pt-2">
            <span className="flex items-center gap-1">
              <Layers size={9} className="text-orange-500" />
              <span>Optify v2.4</span>
            </span>
            <span className="text-slate-500">Live Optimization</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '', service: '', budget: '' });
  const [contacts, setContacts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [customService, setCustomService] = useState('');
  const [activeWorkIndex, setActiveWorkIndex] = useState(1);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('admin') === 'true') {
      setIsAdmin(true);
      fetch('/api/contacts').then(res => res.json()).then(setContacts);
    }
  }, []);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceToSubmit = formData.service === 'Others' ? customService : formData.service;
    const submissionData = { ...formData, service: serviceToSubmit };

    let localSuccess = false;
    let web3Success = false;

    // 1. Submit to local server to save contact in local backup database
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });
      if (response.ok) {
        localSuccess = true;
      }
    } catch (err) {
      console.warn("Local backend submission skipped or failed:", err);
    }

    // 2. Submit to Web3Forms from client
    let web3Key = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      web3Key = web3Key.replace(/^["']|["']$/g, "").trim();
      try {
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: submissionData.name,
            email: submissionData.email,
            message: submissionData.message,
            company: submissionData.company,
            service: submissionData.service,
            budget: submissionData.budget,
            subject: "New Contact Form Submission - Optify",
            from_name: "Optify Website"
          })
        });
        if (web3Response.ok) {
          web3Success = true;
        } else {
          console.error("Web3Forms endpoint error:", await web3Response.text());
        }
      } catch (web3Err) {
        console.error("Web3Forms submission failed:", web3Err);
      }
    }

    if (localSuccess || web3Success) {
      setFormData({ name: '', email: '', message: '', company: '', service: '', budget: '' });
      setCustomService('');
      setToast({
        show: true,
        message: 'Thank you for your message! We will get in touch with you shortly.',
        type: 'success'
      });
    } else {
      setToast({
        show: true,
        message: 'Oops! Something went wrong. Please check your connection and try again.',
        type: 'error'
      });
    }
  };

  const services = ['Web Dev', 'Mobile Apps', 'E-commerce', 'Education', 'Delivery', 'Inventory Management', 'Cloud & DevOps', 'UI/UX Design', 'AI Automation', 'AI Workforce'];
  const approach = [
    { title: 'Discover & define', desc: 'We start by understanding your business, users and goals, then translate them into a sharp, measurable product strategy.' },
    { title: 'Design with intent', desc: 'Every screen is crafted for clarity and speed. Prototypes are tested early so we build the right thing, once.' },
    { title: 'Engineer for speed', desc: 'Clean architecture, low latency and performance budgets baked in, ensuring your product stays fast as it grows.' },
    { title: 'Launch & scale', desc: 'We ship, measure and iterate. Monitoring, analytics and support keep momentum long after go-live.' }
  ];
  const works = [
    {
      name: 'iSCHOOL',
      desc: 'Play school network portal showcasing joyful learning, vision, mission, and metrics.',
      category: 'Play School Network',
      color: 'from-purple-500 to-pink-500',
      accent: 'purple',
      url: 'ischool.optify.agency',
      isDark: false,
      preview: (
        <div className="w-full h-full bg-slate-50 text-slate-900 p-4 md:p-6 font-sans text-left flex flex-col justify-between overflow-hidden">
          {/* Top Bar */}
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-[10px] text-white">🎓</span>
              <span className="text-xs font-black tracking-tight text-purple-700 uppercase">iSCHOOL</span>
            </div>
            <span className="text-[10px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-bold">Play School Network</span>
          </div>

          {/* Main Area */}
          <div className="grid grid-cols-12 gap-3 flex-1 py-3 items-center">
            {/* Left Column: Badges & Photo Mockup */}
            <div className="col-span-5 flex flex-col justify-center gap-2">
              <div className="border border-dashed border-purple-400 bg-white p-2 rounded-xl text-center shadow-sm">
                <div className="text-base md:text-lg font-black text-purple-700 leading-none">1,710+</div>
                <div className="text-[9px] text-slate-500 font-semibold">Happy Students</div>
              </div>
              <div className="border border-dashed border-pink-400 bg-white p-2 rounded-xl text-center shadow-sm">
                <div className="text-base md:text-lg font-black text-pink-600 leading-none">35+</div>
                <div className="text-[9px] text-slate-500 font-semibold">Awards Won</div>
              </div>
            </div>

            {/* Right Column: Purpose Card */}
            <div className="col-span-7 space-y-2 flex flex-col justify-center">
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-purple-100/50">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs">💜</span>
                  <span className="text-[10px] font-bold text-purple-800 uppercase">Our Vision</span>
                </div>
                <p className="text-[9px] leading-tight text-slate-500 font-medium">
                  To be the most innovative and accessible play school network, empowering educators and delighting children.
                </p>
              </div>
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-pink-100/50">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs">💖</span>
                  <span className="text-[10px] font-bold text-pink-700 uppercase">Our Mission</span>
                </div>
                <p className="text-[9px] leading-tight text-slate-500 font-medium">
                  Unlocking potential with joy to ensure every child thrives in an atmosphere of love, care, and encouragement.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-400">
            <span>✨ Learning Beyond Books</span>
            <span className="font-semibold text-purple-700 hover:underline cursor-pointer">Explore Portal →</span>
          </div>
        </div>
      )
    },
    {
      name: 'EduManage',
      desc: 'Mobile student portal featuring attendance logs, schedule timings, fee invoicing, and announcements.',
      category: 'School Portal',
      color: 'from-blue-500 to-indigo-600',
      accent: 'blue',
      url: 'edumanage.optify.agency',
      isDark: false,
      preview: (
        <div className="w-full h-full bg-[#f0f7ff] text-slate-900 font-sans text-left flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="p-4 pb-2 flex justify-between items-center bg-white shadow-sm border-b border-blue-50">
            <div>
              <h4 className="text-lg font-extrabold text-blue-900">Harvin</h4>
              <span className="text-xs text-blue-500 font-medium">Class: 1</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-sm">
              👤
            </div>
          </div>

          {/* Quick Menu Grid */}
          <div className="p-3 grid grid-cols-2 gap-2.5 overflow-y-auto max-h-[220px]">
            {/* Fees */}
            <div className="bg-white p-2.5 rounded-xl flex items-center gap-2.5 border border-slate-100 shadow-sm hover:bg-blue-50/50 transition cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-sm">💵</span>
              <span className="text-[11px] font-bold text-blue-900">Fees</span>
            </div>
            {/* Attendance */}
            <div className="bg-white p-2.5 rounded-xl flex items-center gap-2.5 border border-slate-100 shadow-sm hover:bg-blue-50/50 transition cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-sm">📅</span>
              <span className="text-[11px] font-bold text-blue-900">Attendance</span>
            </div>
            {/* Timings */}
            <div className="bg-white p-2.5 rounded-xl flex items-center gap-2.5 border border-slate-100 shadow-sm hover:bg-blue-50/50 transition cursor-pointer relative">
              <span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-sm">⏰</span>
              <span className="text-[11px] font-bold text-blue-900">Timings</span>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 border border-white"></span>
            </div>
            {/* Leave */}
            <div className="bg-white p-2.5 rounded-xl flex items-center gap-2.5 border border-slate-100 shadow-sm hover:bg-blue-50/50 transition cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-sm">📝</span>
              <span className="text-[11px] font-bold text-blue-900">Leave</span>
            </div>
            {/* Queries */}
            <div className="bg-white p-2.5 rounded-xl flex items-center gap-2.5 border border-slate-100 shadow-sm hover:bg-blue-50/50 transition cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-sm">❓</span>
              <span className="text-[11px] font-bold text-blue-900">Queries</span>
            </div>
            {/* Announcements */}
            <div className="bg-white p-2.5 rounded-xl flex items-center gap-2.5 border border-slate-100 shadow-sm hover:bg-blue-50/50 transition cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-sm">📢</span>
              <span className="text-[11px] font-bold text-blue-900">Announcements</span>
            </div>
          </div>

          {/* Announcements Card */}
          <div className="mx-3 mb-2 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-bold text-blue-900">Announcements</span>
              <span className="text-[10px] text-blue-500 font-semibold cursor-pointer">View All</span>
            </div>
            <div className="text-center py-2 text-[10px] text-slate-400 italic">
              No announcements for today
            </div>
          </div>

          {/* Bottom Nav Bar */}
          <div className="bg-white border-t border-slate-100 py-1.5 px-6 flex justify-between items-center text-slate-400 select-none">
            <div className="flex flex-col items-center cursor-pointer text-blue-600">
              <span className="text-sm">🏠</span>
              <span className="text-[8px] font-bold mt-0.5">Dashboard</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <span className="text-sm">💬</span>
              <span className="text-[8px] font-bold mt-0.5">Chat</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <span className="text-sm">👤</span>
              <span className="text-[8px] font-bold mt-0.5">Profile</span>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'DSK Mart',
      desc: 'E-commerce and admin order management dashboard featuring customer forms, sheet syncing, and payment gateways.',
      category: 'Admin Dashboard',
      color: 'from-slate-800 to-slate-900',
      accent: 'blue',
      url: 'admin.dskmart.com',
      isDark: true,
      preview: (
        <div className="w-full h-full bg-[#f8fafc] text-slate-800 font-sans text-left flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-1/3 bg-[#0f172a] text-slate-400 p-3.5 flex flex-col justify-between border-r border-[#1e293b] select-none">
            <div className="space-y-4">
              <div className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded"></span>
                <span>DSK Admin</span>
              </div>
              <div className="space-y-1.5 text-[8.5px]">
                <div className="text-[7.5px] uppercase font-bold tracking-wider text-slate-600 px-1">Main</div>
                <div className="flex items-center gap-1.5 px-1 py-0.5 hover:text-white cursor-pointer transition">📊 Dashboard</div>
                <div className="flex items-center gap-1.5 px-1.5 py-1 bg-blue-600/10 text-blue-400 font-bold rounded-lg cursor-pointer transition">➕ Create Order</div>
                <div className="flex items-center gap-1.5 px-1 py-0.5 hover:text-white cursor-pointer transition">📋 Orders</div>
                <div className="flex items-center gap-1.5 px-1 py-0.5 hover:text-white cursor-pointer transition">📦 Products</div>
              </div>
            </div>
            <div className="text-[7.5px] border-t border-slate-800/80 pt-2.5 text-slate-600">
              <span className="text-red-500 font-bold block mb-0.5 hover:underline cursor-pointer">🚪 Logout</span>
              <span>DSK Admin v1.0</span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-2/3 p-4 flex flex-col justify-between overflow-y-auto bg-[#f8fafc]">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200/50 mb-2">
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight">Create Order</span>
              <span className="text-[8px] text-slate-400 font-bold">DSK Admin Portal</span>
            </div>

            {/* Form Cards Container */}
            <div className="space-y-2 flex-1 flex flex-col justify-center">
              {/* Customer Details Card */}
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div className="mb-1.5">
                  <h5 className="text-[9.5px] font-bold text-slate-900 leading-none">Customer Details</h5>
                  <span className="text-[7px] text-slate-400 font-medium">Information about the customer</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50">
                    <span className="text-[6.5px] text-slate-400 block font-bold uppercase leading-none">Name *</span>
                    <span className="text-[8.5px] text-slate-400">Start typing...</span>
                  </div>
                  <div className="border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50">
                    <span className="text-[6.5px] text-slate-400 block font-bold uppercase leading-none">Phone *</span>
                    <span className="text-[8.5px] text-slate-400">10 digit number</span>
                  </div>
                </div>
              </div>

              {/* Delivery & Payment Card */}
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
                <div>
                  <h5 className="text-[9.5px] font-bold text-slate-900 mb-1 leading-none">Delivery & Payment</h5>
                  <div className="flex justify-between items-center my-1.5">
                    <div className="flex gap-1 text-[7px] font-bold">
                      <span className="px-1.5 py-0.5 border border-slate-200 rounded bg-slate-50 text-slate-600">Cash</span>
                      <span className="px-1.5 py-0.5 border border-emerald-500 rounded bg-emerald-500 text-white shadow-sm shadow-emerald-100">UPI</span>
                      <span className="px-1.5 py-0.5 border border-slate-200 rounded bg-slate-50 text-slate-600">Card</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[6px] text-slate-400 uppercase font-black tracking-wider block">Total Amount</span>
                      <span className="text-xs font-black text-blue-600">₹0.00</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 border-t border-slate-100 pt-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-[8px] font-bold py-1.5 transition flex items-center justify-center gap-1 shadow-sm shadow-blue-100">
                    💾 Save Order
                  </button>
                  <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded text-[8px] font-bold py-1.5 transition">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Divine Service',
      desc: 'Vedic rituals, temple ceremonies, and priest consultation platform with calendar bookings.',
      category: 'Devotional Platform',
      color: 'from-[#e0b034] to-[#8b5a2b]',
      accent: 'amber',
      url: 'divineservice.in',
      isDark: false,
      preview: (
        <div className="w-full h-full bg-gradient-to-br from-[#fffefb] via-[#fdf9ef] to-[#f5ebcd] text-slate-800 p-4 md:p-6 font-sans text-left flex flex-col justify-between overflow-hidden relative">
          {/* Top Bar / Header */}
          <div className="flex justify-between items-center pb-2 border-b border-[#ebdcb3]/60">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🕉️</span>
              <span className="text-xs font-bold text-[#8b5a2b] font-serif tracking-tight">Divine Service</span>
            </div>
            <div className="flex gap-3 text-[9px] font-extrabold text-[#8b5a2b] tracking-wider">
              <span>HOME</span>
              <span>SERVICES</span>
              <span>CONTACT</span>
            </div>
          </div>

          {/* Sanskrit Blessings Bar */}
          <div className="text-center text-[7.5px] font-serif tracking-[0.25em] text-[#a07441] italic py-1.5 border-b border-[#ebdcb3]/30 bg-[#fefbf4]/50 select-none">
            SHRIRASTHU • SHUBHAMASTHU • AVIGNAMASTHU
          </div>

          {/* Main Area */}
          <div className="grid grid-cols-12 gap-4 flex-1 py-4 items-center">
            {/* Left Content */}
            <div className="col-span-7 space-y-2">
              <span className="inline-block px-2.5 py-1 bg-[#fef4db] border border-[#f5dfaa] text-[#8b5a2b] text-[8px] font-extrabold rounded-full tracking-wider uppercase">
                ✨ Dedicated to Dharma & Devotion
              </span>
              <div>
                <h4 className="text-sm md:text-base font-black text-slate-900 leading-tight font-serif">
                  Bramhashree Bhogapurapu
                </h4>
                <h4 className="text-sm md:text-base font-black text-[#8b5a2b] leading-tight font-serif">
                  Venkataramana Sharma
                </h4>
                <p className="text-[9px] text-[#8b5a2b] font-semibold italic mt-0.5">
                  (Babu Panthulu Garu)
                </p>
              </div>
              <button className="bg-[#8b5a2b] hover:bg-[#724922] transition text-white px-4 py-2 rounded text-[9px] font-bold tracking-wider uppercase mt-2">
                Explore Services
              </button>
            </div>

            {/* Right Profile Mockup */}
            <div className="col-span-5 flex flex-col items-center justify-center relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#e0b034] p-0.5 bg-white shadow-md relative overflow-hidden flex items-center justify-center bg-gradient-to-tr from-[#fbf5e6] to-[#fffefc]">
                <span className="text-3xl md:text-4xl">🙏</span>
              </div>
              <div className="absolute -bottom-1 bg-white border border-[#ebdcb3] text-[#8b5a2b] rounded px-1.5 py-0.5 text-[6.5px] font-bold shadow-sm whitespace-nowrap tracking-wider">
                ⭐ 30+ Yrs Exp.
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-1.5 border-t border-[#ebdcb3]/60 text-[9px] text-[#8b5a2b] font-medium">
            <span>✨ Vedic Priesthood Services</span>
            <span className="text-[8px] font-bold hover:underline cursor-pointer">Book Rituals →</span>
          </div>
        </div>
      )
    }
  ];
  const feedbacks = [
      { name: 'Sowmya', role: 'Principal, iSchool', rating: 5, quote: 'Optify designed a beautiful, colorful, and engaging platform that captures our school\'s vision. Parents love the easy navigation, and our student registration metrics have grown tremendously.' },
      { name: 'Venkataramana', role: 'Priest & Guruji, Divine Service', rating: 5, quote: 'The team created a serene, highly professional site for our devotional services. The booking system runs flawlessly, allowing devotees to schedule services and ceremonies with absolute ease.' },
      { name: 'Siri', role: 'Head, Friends Study Circle Tuition', rating: 5, quote: 'We needed a reliable hub to communicate announcements and class schedules. Optify built a clean, intuitive portal that keeps our tuition classes perfectly organized and connected.' },
      { name: 'Koushik', role: 'Head of DSK Mart', rating: 4, quote: 'The admin order management dashboard has streamlined our grocery delivery system. Real-time updates, customer forms, and payment checkouts are exceptionally fast and reliable.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // Only auto-scroll on mobile views
      if (window.innerWidth < 768) {
        setActiveWorkIndex(prev => (prev + 1) % works.length);
      }
    }, 10000);
    return () => clearInterval(timer);
  }, [works.length]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-6 z-[100] max-w-sm w-[calc(100%-3rem)] bg-slate-950 text-white rounded-xl shadow-2xl border border-slate-800/80 p-4 flex items-start gap-3 overflow-hidden"
          >
            {/* Accent colored vertical bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${toast.type === 'success' ? 'bg-orange-500' : 'bg-red-500'}`} />
            
            <div className="flex-1 pl-1.5 text-left">
              <div className="flex items-center gap-2 mb-1">
                {toast.type === 'success' ? (
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                ) : (
                  <AlertCircle size={16} className="text-red-500 shrink-0" />
                )}
                <span className="font-bold text-xs uppercase tracking-wider text-slate-200">
                  {toast.type === 'success' ? 'Message Sent' : 'Error'}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                {toast.message}
              </p>
            </div>
            
            <button 
              onClick={() => setToast(prev => ({ ...prev, show: false }))}
              className="p-1 rounded-md text-slate-500 hover:text-white hover:bg-slate-900 transition-colors shrink-0"
              aria-label="Close notification"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex items-center justify-between px-6 md:px-12 py-6 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <img src={logo} alt="Optify Logo" className="w-8 h-8" />
           <div className="relative inline-block">
  <span className="font-['Lora'] text-3xl font-semibold">
  Optify
</span>

  <span
    className="absolute rounded-full bg-slate-900"
    style={{
      width: "3.5px",
      height: "3.5px",
      left: "23%",
      bottom: "5%",
      transform: "translateX(-50%)",
    }}
  />
</div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#hero" className="hover:text-orange-600 transition">Home</a>
            <a href="#work" className="hover:text-orange-600 transition">Work</a>
            <a href="#reviews" className="hover:text-orange-600 transition">Reviews</a>
            <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
        </div>
        <a href="#contact" className="relative overflow-hidden group px-6 py-2.5 bg-orange-600 text-white rounded-full text-sm font-bold hover:bg-orange-700 transition-colors">
            <span className="absolute inset-y-0 -left-[100%] w-1/2 block bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]" />
            <span className="relative z-10">Start a project</span>
        </a>
      </nav>
      
      <header id="hero" className="py-20 px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto border-b border-gray-100">
        <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-6 tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
              </span>
              <span>Turn Ideas into Impact</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] text-slate-900 mb-6 tracking-tighter">ARCHITECTING THE DIGITAL EDGE.</h1>
            <p className="text-xl text-slate-500 mb-8 max-w-md leading-relaxed">We design and build high-performance websites, mobile apps, e-commerce, education, delivery, and inventory solutions engineered for performance, reliability, and growth.</p>
            <div className="flex gap-4">
                <a href="#contact" className="relative overflow-hidden group px-8 py-4 bg-orange-600 text-white rounded-xl font-bold text-lg hover:bg-orange-700 transition shadow-lg shadow-orange-200 inline-block text-center">
                    <span className="absolute inset-y-0 -left-[100%] w-1/2 block bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]" />
                    <span className="relative z-10">Start your project</span>
                </a>
            </div>
        </div>
        <div className="md:w-1/2 w-full mt-12 md:mt-0 flex items-center justify-center">
            <DevWorkspaceIllustration />
        </div>
      </header>

      <section id="services" className="px-6 md:px-12 py-12 bg-slate-50 border-y border-gray-100 overflow-hidden">
        <motion.div 
            className="flex gap-10 md:gap-20 text-xl md:text-3xl font-bold text-slate-900 whitespace-nowrap w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: isMobile ? 15 : 25, ease: "linear" }}
        >
            {[...services, ...services].map((s, i) => (
                <div key={i} className="flex items-center gap-10 md:gap-20">
                    <motion.span 
                        className="font-lora italic text-2xl md:text-4xl font-medium text-slate-950 tracking-wide hover:text-orange-600 cursor-pointer transition-colors"
                        whileHover={{ scale: 1.05 }}
                    >
                        {s}
                    </motion.span>
                    <span className="text-orange-600/80 font-black text-2xl md:text-3xl select-none">•</span>
                </div>
            ))}
        </motion.div>
      </section>

      <section id="approach" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          className="text-center md:text-left mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-xs font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Our Approach</h3>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900">A process obsessed with outcomes.</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {approach.map((a, i) => (
                <motion.div 
                  key={a.title} 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                >
                    <span className="text-5xl sm:text-6xl font-extrabold text-orange-200 tracking-tighter leading-none shrink-0">0{i+1}</span>
                    <div>
                        <h4 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight text-slate-900">{a.title}</h4>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{a.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      <section id="work" className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50 border border-gray-100 rounded-3xl overflow-hidden">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-xs font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Our Works</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter text-slate-900">Stunning digital products.</h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base">We build interfaces with pixel-perfect layouts, custom mechanics, and smooth performance built-in.</p>
        </motion.div>

        {/* 3D Arc Carousel Area */}
        <motion.div 
          className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[490px] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Arrow */}
          <button 
            onClick={() => setActiveWorkIndex(prev => (prev - 1 + works.length) % works.length)}
            className="hidden md:flex absolute left-2 md:left-6 z-40 p-3 rounded-full border border-slate-200/80 bg-white/95 backdrop-blur-sm shadow-md text-slate-700 hover:text-orange-600 hover:border-orange-300 transition-all active:scale-95 items-center justify-center"
            aria-label="Previous work"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Wheel track containing rotated card items */}
          <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
            {works.map((w, i) => {
              const total = works.length;
              let offset = i - activeWorkIndex;
              
              // Infinite loop: wrap offset so cards cycle around seamlessly
              while (offset < -total / 2) offset += total;
              while (offset > total / 2) offset -= total;
              
              const absOffset = Math.abs(offset);
              
              // Parabolic curve: side cards go slightly down
              const y = absOffset * absOffset * 14;
              const scale = 1 - absOffset * 0.15;
              
              // Cylindrical rotate
              const rotateZ = offset * 6;
              const rotateY = offset * -28;
              
              // Spacing multiplier to account for wider cards
              const x = isMobile ? offset * 260 : offset * 540;
              
              // Opacity calculation for focus and overlap prevention
              const opacity = absOffset > 2 ? 0 : (isMobile && absOffset > 1 ? 0 : 1 - absOffset * 0.35);
              const zIndex = 10 - Math.round(absOffset * 2);

              return (
                <motion.div
                  key={w.name}
                  className="absolute cursor-pointer w-[310px] sm:w-[440px] md:w-[580px] lg:w-[660px] h-[240px] sm:h-[300px] md:h-[380px] lg:h-[420px] select-none"
                  style={{
                    originY: 1.1, // Rotate slightly around a bottom point for smooth arc swing
                    transformPerspective: 1000,
                  }}
                  animate={{
                    x,
                    y,
                    scale,
                    rotate: rotateZ,
                    rotateY,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                  }}
                  onClick={() => setActiveWorkIndex(i)}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={(e, info) => {
                    const threshold = 40;
                    if (info.offset.x < -threshold) {
                      setActiveWorkIndex(prev => (prev + 1) % works.length);
                    } else if (info.offset.x > threshold) {
                      setActiveWorkIndex(prev => (prev - 1 + works.length) % works.length);
                    }
                  }}
                >
                  <div className={`w-full h-full shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow flex flex-col ${
                    w.isDark 
                      ? 'p-[1.5px] bg-black' 
                      : 'p-1.5 bg-white border border-slate-100'
                  }`}>
                    {/* Browser Mockup Header Bar */}
                    <div className={`flex items-center justify-between px-4 py-2 border-b ${w.isDark ? 'bg-slate-950/95 border-slate-800/60 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'} select-none rounded-t-[10px] h-9`}>
                      {/* Window Dots */}
                      <div className="flex gap-1.5 items-center w-20">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      
                      {/* URL Field */}
                      <div className={`flex-1 max-w-[280px] mx-auto text-center font-mono text-[10px] py-1 px-3 rounded-md flex items-center justify-center gap-1.5 shadow-inner ${w.isDark ? 'bg-slate-900/80 text-slate-400' : 'bg-white border border-slate-200/50 text-slate-500'}`}>
                        <svg className="w-2.5 h-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="truncate">{w.url}</span>
                      </div>
                      
                      {/* Right-side alignment buffer */}
                      <div className="w-20 flex justify-end gap-1 select-none">
                        <div className="w-1 h-1 rounded-full bg-current opacity-30" />
                        <div className="w-1 h-1 rounded-full bg-current opacity-30" />
                        <div className="w-1 h-1 rounded-full bg-current opacity-30" />
                      </div>
                    </div>
                    
                    {/* The website preview body */}
                    <div className="flex-1 overflow-hidden relative rounded-b-[10px]">
                      {w.preview}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => setActiveWorkIndex(prev => (prev + 1) % works.length)}
            className="hidden md:flex absolute right-2 md:right-6 z-40 p-3 rounded-full border border-slate-200/80 bg-white/95 backdrop-blur-sm shadow-md text-slate-700 hover:text-orange-600 hover:border-orange-300 transition-all active:scale-95 items-center justify-center"
            aria-label="Next work"
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>

        {/* Dynamic metadata under active card */}
        <div className="text-center mt-6 max-w-lg mx-auto px-4 min-h-[140px]">
          <motion.div
            key={activeWorkIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className={`inline-block px-3 py-1 text-[11px] font-bold rounded-full mb-3 uppercase tracking-wider bg-orange-100 text-orange-700`}>
              {works[activeWorkIndex].category}
            </span>
            <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
              {works[activeWorkIndex].name}
            </h4>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              {works[activeWorkIndex].desc}
            </p>
          </motion.div>
        </div>

        {/* Clickable bullet indicators & slide helper */}
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex gap-2.5">
            {works.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveWorkIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === activeWorkIndex ? 'w-8 bg-orange-600' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] text-slate-400 font-medium select-none tracking-wider uppercase animate-pulse">
            Swipe or Drag to explore
          </span>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center md:text-left mb-16">
          <h3 className="text-xs font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Reviews</h3>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900">Trusted to deliver, at scale.</h2>
        </div>
        
        <div className="relative w-full overflow-hidden py-4">
          {/* Subtle gradient overlays for smooth fade-out on the edges, hidden on mobile */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div 
              className="flex gap-8 flex-nowrap w-max py-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
              {[...feedbacks, ...feedbacks, ...feedbacks, ...feedbacks].map((f, i) => (
                  <div key={i} className="w-[280px] sm:w-[350px] md:w-[420px] shrink-0 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100/80 transition-all duration-300 select-none flex flex-col justify-between">
                      <div>
                        {/* Rating stars */}
                        <div className="flex gap-1 text-amber-400 mb-4">
                          {[...Array(5)].map((_, idx) => (
                            <svg key={idx} className={`w-4 h-4 ${idx < (f.rating || 5) ? 'fill-current text-amber-400' : 'text-slate-200 fill-current'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-base md:text-lg text-slate-700 italic leading-relaxed mb-6 font-medium">"{f.quote}"</p>
                      </div>
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                          {f.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-extrabold text-slate-900 text-sm md:text-base leading-tight">{f.name}</div>
                          <div className="text-xs text-slate-400 font-medium mt-0.5">{f.role}</div>
                        </div>
                      </div>
                  </div>
              ))}
          </motion.div>
        </div>
      </section>

      <section id="stats" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h3 className="text-xs font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">By the numbers</h3>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">Our track record.</h2>
                <p className="text-lg text-slate-500">From fast-moving startups to established enterprises, teams choose Optify to build software that performs.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {[ {n: '10+', l: 'PRODUCTS SHIPPED'}, {n: '10+', l: 'HAPPY CLIENTS'}, {n: '99.9%', l: 'UPTIME DELIVERED'}, {n: '4.9/5', l: 'CLIENT RATING'} ].map(s => (
                    <div key={s.l} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl md:text-5xl font-extrabold text-orange-600 mb-2 tracking-tight">{s.n}</div>
                        <div className="text-xs font-bold text-slate-400 tracking-widest">{s.l}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-12 bg-orange-50/60 text-slate-900 border-t border-orange-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
                <h3 className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-6 tracking-wider uppercase">Start a project</h3>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter text-slate-900">Let's build something fast.</h2>
                <p className="text-lg text-slate-600 mb-8 font-normal">Tell us about your project. We'll get back within one business day with next steps.</p>
                <div className="space-y-4 mb-8">
                  <a href="mailto:optifysupport@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-orange-100 hover:border-orange-300 shadow-sm hover:shadow-md transition">
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <Mail className="text-orange-600" size={24}/>
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Email</div>
                        <div className="font-bold text-lg text-slate-900">optifysupport@gmail.com</div>
                    </div>
                  </a>
                  <a href="tel:9071911793" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-orange-100 hover:border-orange-300 shadow-sm hover:shadow-md transition">
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <Phone className="text-orange-600" size={24}/>
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Phone No.</div>
                        <div className="font-bold text-lg text-slate-900">+91 9071911793</div>
                    </div>
                  </a>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5 w-full">
                        <input type="text" placeholder="Name *" className="w-full p-4 rounded-xl border border-orange-100 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 focus:outline-none font-medium transition" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                        {toast.show && toast.type === 'success' && (
                          <span className="text-xs text-emerald-600 font-bold pl-1 animate-[fadeIn_0.2s_ease-out]">
                            Inquiry sent successfully!
                          </span>
                        )}
                    </div>
                    <input type="email" placeholder="Email *" className="w-full p-4 rounded-xl border border-orange-100 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 focus:outline-none font-medium transition" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                </div>
                <input type="text" placeholder="Company" className="w-full p-4 rounded-xl border border-orange-100 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 focus:outline-none font-medium transition" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                <select className="w-full p-4 rounded-xl border border-orange-100 bg-white text-slate-900 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 focus:outline-none font-medium transition cursor-pointer" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                    <option value="" className="text-slate-400">Select a service</option>
                    {services.map(s => <option key={s} value={s} className="text-slate-900">{s}</option>)}
                    <option value="Others" className="text-slate-900">Others</option>
                </select>
                {formData.service === 'Others' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <input 
                      type="text" 
                      placeholder="Please specify your service *" 
                      className="w-full p-4 rounded-xl border border-orange-100 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 focus:outline-none font-medium transition" 
                      value={customService} 
                      onChange={e => setCustomService(e.target.value)}
                      required 
                    />
                  </motion.div>
                )}
                <textarea placeholder="Message *" className="w-full p-4 rounded-xl border border-orange-100 bg-white text-slate-900 placeholder-slate-400 h-32 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 focus:outline-none font-medium transition resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required></textarea>
                <button type="submit" className="relative overflow-hidden group bg-orange-600 text-white px-8 py-4 w-full md:w-auto rounded-xl font-bold hover:bg-orange-700 transition flex items-center justify-center gap-2 shadow-lg shadow-orange-200">
                    <span className="absolute inset-y-0 -left-[100%] w-1/2 block bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]" />
                    <span className="relative z-10 flex items-center gap-2">
                        Send inquiry <ArrowRight size={20}/>
                    </span>
                </button>
            </form>
        </div>
      </section>

      <footer className="py-6 px-6 sm:px-12 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">&copy; 2026 Optify. All rights reserved.</p>
          <div className="flex gap-6 text-[11px] text-slate-500">
            <a href="#hero" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#work" className="hover:text-orange-500 transition-colors">Work</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>


      {isAdmin && (
        <section id="admin-inquiries" className="py-20 px-12">
          <h3 className="text-3xl font-bold mb-8">Admin View: Inquiries</h3>
          {contacts.map((c: any, i) => (
            <div key={i} className="bg-white p-6 mb-4 shadow-sm border border-gray-200 rounded-xl">{c.name} ({c.email}): {c.message}</div>
          ))}
        </section>
      )}

      {/* Sticky Floating WhatsApp Button */}
      <a
        href="https://wa.me/9071911793"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
