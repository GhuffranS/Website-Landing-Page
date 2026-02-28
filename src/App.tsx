/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Box, 
  Star, 
  Lock,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  ChevronDown,
  Minus,
  Calculator,
  Zap,
  Wrench,
  Tag,
  Layers,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Flame,
  BadgeCheck
} from "lucide-react";
import { useState } from "react";

const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" width="16" height="16" className="mr-2">
    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
  </svg>
);

const WhatsAppLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" className="mr-2">
    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass-header">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center">
        <img 
          src="https://apcsolar.pk/wp-content/uploads/2026/02/Solar-final-01.svg" 
          alt="APC Solar Logo" 
          className="h-12 w-auto"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex items-center gap-4">
        <a 
          href="tel:03222749224" 
          className="bg-white text-primary px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all text-sm shadow-lg"
        >
          <Phone size={18} />
          0322 2749224
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('https://apcsolar.pk/wp-content/uploads/2025/06/PXL_20241117_105741000.RAW-01.COVER_-scaled-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-slate-900/70"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="solar-trust-pill mb-6">
          <GoogleLogo />
          <span className="flex items-center mr-2 gap-0.5">
            <Star size={12} className="fill-accent text-accent" />
            <Star size={12} className="fill-accent text-accent" />
            <Star size={12} className="fill-accent text-accent" />
            <Star size={12} className="fill-accent text-accent" />
            <Star size={12} className="fill-accent text-accent" />
          </span>
          <span className="text-white text-xs font-medium border-l border-white/20 pl-3 ml-1">
            Top-Rated Solar Company in Karachi
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl text-white leading-tight mb-6">
          90% Lower K-Electric Bills with Expert <br />
          <span className="text-gradient">Solar Installation Karachi</span>
        </h1>

        <p className="text-slate-300 text-lg mb-8 max-w-2xl">
          Stop overpaying for electricity. As the leading solar company in Karachi, we design custom systems for your home's unique load to start saving from day one.
        </p>

        <ul className="space-y-3 mb-10">
          {[
            "Fully Installed in Under 10 Days",
            "Lifetime Technical Support",
            "Zero Hidden Costs"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-200 text-base font-medium">
              <CheckCircle2 className="text-accent" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contact-form" 
            className="bg-accent hover:bg-accent-hover text-slate-900 px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            Request Call Back Now
            <ArrowRight size={18} />
          </a>
          <a 
            href="http://wa.me/923222749224" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-wa-btn text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            <WhatsAppLogo />
            WhatsApp Us Now
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4">
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border border-black/5">
      {[
        { label: "10+ Years", sub: "Operating In Karachi" },
        { label: "100+", sub: "Happy Home & Business Owners" },
        { label: "4.7+", sub: "Google Rating" }
      ].map((stat, i) => (
        <div key={i} className={`flex flex-col items-center ${i < 2 ? 'md:border-r border-slate-200' : ''}`}>
          <h2 className="text-4xl font-bold text-primary mb-2">{stat.label}</h2>
          <p className="text-slate-500 font-medium">{stat.sub}</p>
        </div>
      ))}
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">The Invisible Bill Hike</span>
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Your K-Electric Bill is Rising While You Sleep</h2>
        <p className="text-lg text-slate-600 mb-10">
          Every month you wait, you're losing thousands to rising tariffs and fuel adjustments. As one of the premier solar companies Karachi trusts, we help you stop the drain on your family's future.
        </p>

        <div className="space-y-6">
          {[
            { 
              icon: <Flame className="text-primary" size={24} />, 
              title: "No Fire Risks", 
              desc: "Local 'jugaad' wiring is the #1 cause of solar fires in Karachi. We use certified DC cables and breakers to keep your family safe." 
            },
            { 
              icon: <BadgeCheck className="text-primary" size={24} />, 
              title: "Verifiable Authentic Materials", 
              desc: "Don't guess if your panels are Tier-1. Every component we install comes with a verifiable serial number and official warranty." 
            },
            { 
              icon: <Wrench className="text-primary" size={24} />, 
              title: "Professional Solar Installation Karachi", 
              desc: "Our certified engineers handle everything from structural mounting to grid synchronization for maximum efficiency." 
            }
          ].map((feature, i) => (
            <div key={i} className="flex gap-4">
              <div className="bg-blue-50 p-2.5 rounded-full h-fit">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-3 -z-10"></div>
        <img 
          src="https://apcsolar.pk/wp-content/uploads/2025/08/APC-Networks-Technicians-Installing-Solar-Panels-1024x576.jpg" 
          alt="Solar Installation Karachi" 
          className="rounded-3xl shadow-xl w-full object-cover aspect-video"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Brands = () => (
  <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 text-center mb-10">
      <h3 className="text-slate-500 font-medium tracking-tight">Reliable Solar With Tier-1 Brands You Can Trust</h3>
    </div>
    <div className="relative flex overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap items-center gap-16 md:gap-32 py-4">
        {[
          "Canadian-Solar-Logo-1", "Goodwe-Logo", "Growatt-Logo", "Huawei-Logo-1", "Jinko-Solar-Logo-1", "Longi-Solar-Logo-1",
          "Canadian-Solar-Logo-1", "Goodwe-Logo", "Growatt-Logo", "Huawei-Logo-1", "Jinko-Solar-Logo-1", "Longi-Solar-Logo-1"
        ].map((brand, i) => (
          <img 
            key={i}
            src={`https://apcsolar.pk/wp-content/uploads/2022/08/${brand}-150x150.png`}
            alt={brand}
            className="h-12 md:h-16 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all flex-shrink-0"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>
      <div className="flex animate-marquee whitespace-nowrap items-center gap-16 md:gap-32 py-4 ml-16 md:ml-32">
        {[
          "Canadian-Solar-Logo-1", "Goodwe-Logo", "Growatt-Logo", "Huawei-Logo-1", "Jinko-Solar-Logo-1", "Longi-Solar-Logo-1",
          "Canadian-Solar-Logo-1", "Goodwe-Logo", "Growatt-Logo", "Huawei-Logo-1", "Jinko-Solar-Logo-1", "Longi-Solar-Logo-1"
        ].map((brand, i) => (
          <img 
            key={i}
            src={`https://apcsolar.pk/wp-content/uploads/2022/08/${brand}-150x150.png`}
            alt={brand}
            className="h-12 md:h-16 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all flex-shrink-0"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>
    </div>
  </section>
);

const SavingsComparison = () => (
  <section className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
          The Cost of Inaction
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Every Month You Wait is <span className="text-primary">Money Lost</span>
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          K-Electric tariffs have risen by 40% in the last 2 years. If you don't switch now, you're not just paying for power—you're paying for the delay.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* K-Electric Side */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-red-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-100 p-3 rounded-2xl">
                <AlertTriangle className="text-red-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Staying with K-Electric</h3>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Estimated 20-Year Cost</div>
                <div className="text-4xl md:text-5xl font-black text-red-600">Rs. 2.4 Crore+</div>
                <p className="text-slate-400 text-xs mt-2">*Based on Rs. 40k/month with conservative 10% annual hike</p>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Ownership", value: "0% - You never own the power", icon: <Minus size={16} /> },
                  { label: "Price Stability", value: "None - Subject to monthly hikes", icon: <TrendingUp size={16} /> },
                  { label: "Reliability", value: "Grid dependent (Load shedding)", icon: <Zap size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-red-50/50 rounded-2xl border border-red-100/50">
                    <div className="text-red-500 mt-1">{item.icon}</div>
                    <div>
                      <div className="text-slate-900 font-bold text-sm">{item.label}</div>
                      <div className="text-slate-500 text-xs">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* APC Solar Side */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/20 relative overflow-hidden group text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white/10 p-3 rounded-2xl">
                <ShieldCheck className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Switching to APC Solar</h3>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-2">Estimated 20-Year Savings</div>
                <div className="text-4xl md:text-5xl font-black text-accent">Rs. 1.8 Crore+</div>
                <p className="text-blue-200/60 text-xs mt-2">After system payback in ~3.5 years</p>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Ownership", value: "100% - You are the power plant", icon: <CheckCircle2 size={16} /> },
                  { label: "Price Stability", value: "Fixed - Inflation-proof energy", icon: <TrendingDown size={16} /> },
                  { label: "Reliability", value: "24/7 Power with Hybrid Backup", icon: <Zap size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/10 rounded-2xl border border-white/10">
                    <div className="text-accent mt-1">{item.icon}</div>
                    <div>
                      <div className="font-bold text-sm">{item.label}</div>
                      <div className="text-blue-100 text-xs">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="#contact-form" 
                className="w-full bg-accent hover:bg-accent-hover text-slate-900 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.02]"
              >
                Stop the Loss. Get a Quote.
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="bg-accent/20 p-4 rounded-2xl">
            <Calculator className="text-primary" size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">Not sure about the numbers?</h4>
            <p className="text-slate-500 text-sm">Our experts will calculate your exact ROI based on your last 12 months of bills.</p>
          </div>
        </div>
        <a 
          href="tel:03222749224" 
          className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all"
        >
          <Phone size={20} />
          Free Financial Audit
        </a>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-24 max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Recent Solar Installation Karachi Projects</h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg">
        We've helped hundreds of families across Karachi switch to clean energy. As one of the top solar companies Karachi homeowners trust, we deliver results.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { 
          location: "BAHRIA TOWN KARACHI", 
          system: "15KW HYBRID SYSTEM", 
          desc: "LONGi Panels • GoodWe Inverter • Sunwooda Batteries",
          saving: "Bill Reduced to Zero",
          img: "https://apcsolar.pk/wp-content/uploads/2025/12/IMG_1541-1024x768.webp"
        },
        { 
          location: "NAZIMABAD NO 1", 
          system: "25KW ON GRID SYSTEM", 
          desc: "LONGi Panels • Sungrow Inverter",
          saving: "Bill Reduced by 90%",
          img: "https://apcsolar.pk/wp-content/uploads/2025/08/IMG_0615-1024x768.jpg"
        },
        { 
          location: "DHA PHASE 5", 
          system: "45KW ON GRID SYSTEM", 
          desc: "Jinko Panels • GoodWe Inverter",
          saving: "Bill Reduced by 80%",
          img: "https://apcsolar.pk/wp-content/uploads/2025/08/IMG_0940-1024x768.jpg"
        }
      ].map((project, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={project.img} 
              alt={project.location} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 bg-slate-900 text-white text-[10px] uppercase font-bold px-3 py-1">
              {project.location}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{project.system}</h3>
            <p className="text-slate-500 text-sm mb-4">{project.desc}</p>
            <div className="flex items-center gap-2 text-emerald-600 font-bold">
              <CheckCircle2 size={16} />
              {project.saving}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Reviews = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="bg-white p-2 rounded-full text-slate-700 shadow-sm border border-slate-100">
          <GoogleLogo />
        </div>
        <span className="font-bold text-slate-700 uppercase tracking-widest text-sm">Google Reviews</span>
      </div>
      <h2 className="text-4xl font-bold text-center mb-16">Hear From People Who Cut Their Power Costs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "From Rs. 45,000 to Rs. 4,000",
            name: "Aamir Qureshi",
            text: "I approached this solar company for my solar system installation. The team is very professional and skilled. I am highly satisfied with their services. Highly recommended!",
            img: "https://lh3.googleusercontent.com/a/ACg8ocKxqqYMTO5Es42pgA-KfSSahcQey3GkERaz7aMk7r4CiwM8ng=w40-h40-c-rp-mo-br100"
          },
          {
            title: "Zero Bills in Bahria Town",
            name: "Abdul Rehman",
            text: "I got a 7KW hybrid solar system with lithium batteries installed. Their team is professional, quick and thorough. Best solar installation experience in Karachi.",
            img: "https://lh3.googleusercontent.com/a/ACg8ocJ-KAsm8fnlLBFNflLiGu6WGepz8MQWCNipcdfMT4SNxj-UzQ=w40-h40-c-rp-mo-br100"
          },
          {
            title: "No More Skepticism",
            name: "Umar f. jadoon",
            text: "Courteous, professional, and incredibly helpful throughout. The quality of solar panels used was top-notch. They handled the entire installation on time.",
            img: "https://lh3.googleusercontent.com/a-/ALV-UjULdONw-pE1hJOx35mUA-9YfWUvGJiIbSCaKfWNtAq67Ie02nk=w40-h40-c-rp-mo-br100"
          }
        ].map((review, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="font-bold text-primary mb-3">{review.title}</h4>
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-accent text-accent" />)}
            </div>
            <p className="text-slate-600 mb-8 italic text-sm leading-relaxed">"{review.text}"</p>
            <div className="flex items-center gap-4">
              <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-sm">{review.name}</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Verified Customer</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
          Why Choose APC Solar
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          The Trusted <span className="text-primary">Solar Company in Karachi</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Row 1: Two cards */}
        <div className="md:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-6">
            <Layers className="text-primary" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Reliable Materials</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            We don't cut corners. From Tier-1 panels to the smallest nut and bolt, we use only high-grade, weather-resistant materials designed to last 25+ years in Karachi's coastal climate.
          </p>
        </div>

        <div className="md:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-6">
            <Lock className="text-primary" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">No Hidden Costs</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            The price we quote is the price you pay. No surprise logistics fees or extra cable charges halfway through the project. 100% transparency from day one.
          </p>
        </div>

        {/* Tall Card (Blue) - Spans 2 rows */}
        <div className="md:col-span-4 md:row-span-2 bg-primary p-8 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div>
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-8">
              <Tag className="text-accent" size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-6 leading-tight">Best Pricing in Karachi</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-8">
              We offer the most competitive rates for genuine Tier-1 equipment. You won't find better value for the quality and support we provide. That's our guarantee.
            </p>
          </div>
          <a 
            href="#contact-form" 
            className="bg-accent hover:bg-accent-hover text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group-hover:scale-105"
          >
            Get Started Now
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Row 2: One wide card */}
        <div className="md:col-span-8 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all flex flex-col md:flex-row gap-8 items-center">
          <div className="bg-white w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm">
            <Wrench className="text-primary" size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Expert Technicians</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our team consists of certified solar engineers, not just local electricians. We follow strict international protocols for wiring, grounding, and structural integrity to ensure your system performs at its peak for decades.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProcessTimeline = () => {
  const steps = [
    {
      title: "Provision of Quote",
      desc: "We analyze your K-Electric bills to provide a precise solar system quote tailored to your load.",
      icon: <FileText size={24} />
    },
    {
      title: "Site Survey",
      desc: "Our engineers perform a detailed structural and technical survey of your roof for optimal solar panels placement.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Complete Installation",
      desc: "Our certified team completes your solar installation in under 10 days, ensuring maximum efficiency.",
      icon: <Zap size={24} />
    }
  ];

  return (
    <section className="py-24 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Journey</span>
          <h2 className="text-4xl font-bold text-slate-900">Your Road to Zero Bills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group relative">
              <div className="w-24 h-24 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent transition-all duration-300 relative z-10">
                <div className="text-primary group-hover:text-primary transition-colors">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              
              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%-2rem)] w-16 text-slate-300 z-0">
                  <ArrowRight size={32} strokeWidth={1} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long until I see results?",
      a: "You will see a massive drop in your K-Electric bill from the very first month your solar system is activated. Most Karachi homeowners report savings of up to 90% immediately."
    },
    {
      q: "What makes you different from others who offer this?",
      a: "Unlike many local providers, we are a certified solar company using only Tier-1 solar panels and inverters. We provide a 3-step transparent process with zero hidden costs and lifetime support."
    },
    {
      q: "Do I need to commit to a long contract?",
      a: "No long-term contracts are required. Once your solar installation is complete, you own the system entirely. We only offer optional maintenance plans to keep your system at peak performance."
    },
    {
      q: "What if this doesn't work for my specific situation?",
      a: "Every home is unique. That's why our process starts with a precise quote based on your actual bills and a detailed site survey. If solar isn't a viable solution for your roof, we'll tell you upfront."
    },
    {
      q: "How much of my time will this require?",
      a: "Very little. We handle the heavy lifting from technical surveys to the final installation. You only need to provide your recent bills and access to your roof for the survey and installation."
    },
    {
      q: "What happens after I click the button?",
      a: "Our team will call you within 24 hours to discuss your energy needs, analyze your bills, and provide a free, no-obligation quote for your custom solar system."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Common Questions for Solar Installation Karachi</h2>
          <p className="text-slate-500">Everything you need to know about switching with the best solar company in Karachi.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl transition-all overflow-hidden ${openIndex === i ? 'border-primary bg-blue-50/30' : 'border-slate-200 bg-white'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-5 text-left flex justify-between items-center gap-4"
              >
                <span className="font-bold text-slate-900 text-base">{faq.q}</span>
                <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown className={openIndex === i ? 'text-primary' : 'text-slate-400'} size={20} />
                </div>
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will call you back soon.");
  };

  return (
    <section id="contact-form" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-at-center from-primary/30 to-slate-900/0 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Lock in Your Energy Cost Before the Next K-Electric Hike</h2>
            <p className="text-slate-400 text-lg mb-10">
              Staying where you are is costing you more every day. Switch to a reliable solar system today and take control of your power.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Free Physical Assessment of Site",
                "Calculated by Experts",
                "Market Competitive Prices"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium text-base">
                  <CheckCircle2 className="text-accent" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 text-slate-400">
              <Lock size={18} />
              <span className="text-sm">No pressure. No spam. Your data is safe.</span>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Get a Free Call Back</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-hover text-slate-900 font-bold py-3.5 rounded-lg transition-all shadow-lg"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#111313] text-white py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center text-center mb-12">
        <img 
          src="https://apcsolar.pk/wp-content/uploads/2022/08/APC-SOLAR-LOGO-NEW-150x150.png" 
          alt="APC Solar Logo" 
          className="h-16 w-auto mb-6"
          referrerPolicy="no-referrer"
        />
        <h3 className="text-lg font-bold mb-4">APC Solar: The Best Solar Company in Karachi</h3>
        <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
          As a leading provider of solar installation Karachi, APC Solar belongs to a selected group of fast growing Supply PV Systems for autonomous power generation.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        {[
          { icon: <Facebook size={20} />, link: "https://www.facebook.com/Apc-Solar-110312291737422/" },
          { icon: <MessageCircle size={20} />, link: "https://wa.me/message/PQCZFEW35L7UC1" },
          { icon: <Instagram size={20} />, link: "https://www.instagram.com/apcsolarpk/" },
          { icon: <Mail size={20} />, link: "mailto:sales@apcsolar.pk" },
          { icon: <Phone size={20} />, link: "tel:+923009286450" }
        ].map((social, i) => (
          <a 
            key={i} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent text-white p-3 rounded-full hover:bg-accent-hover transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="text-center text-slate-500 text-sm border-t border-white/10 pt-8">
        Copyright © 2026 APC Solar | Powered by APC Solar
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <WhyChooseUs />
        <Brands />
        <SavingsComparison />
        <ProcessTimeline />
        <Projects />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
