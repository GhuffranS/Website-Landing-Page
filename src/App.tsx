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
  MessageCircle
} from "lucide-react";
import { useState } from "react";

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
      <a 
        href="tel:03222749224" 
        className="bg-white text-primary px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-colors text-sm md:text-base"
      >
        <Phone size={18} />
        0322 2749224
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
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
        <div className="solar-trust-pill mb-8">
          <span className="flex items-center mr-2">
            <Star size={14} className="fill-accent text-accent" />
            <Star size={14} className="fill-accent text-accent" />
            <Star size={14} className="fill-accent text-accent" />
            <Star size={14} className="fill-accent text-accent" />
            <Star size={14} className="fill-accent text-accent" />
          </span>
          <span className="text-white text-xs md:text-sm font-medium">
            Rated 5/5 by 30+ Homeowners
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl text-white leading-tight mb-6">
          Cut your K-Electric Bill by 90% with <br />
          <span className="text-gradient">Karachi's Most Trusted Solar Company</span>
        </h1>

        <ul className="space-y-4 mb-10">
          {[
            "Fully Installed in Under 10 Days",
            "Lifetime Technical Support",
            "Zero Hidden Costs"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-300 text-lg font-medium">
              <CheckCircle2 className="text-accent" size={20} />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contact-form" 
            className="bg-accent hover:bg-accent-hover text-slate-900 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            Request Call Back Now
            <ArrowRight size={20} />
          </a>
          <a 
            href="http://wa.me/923222749224" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-wa-btn text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            <MessageCircle size={20} className="text-[#25d366]" />
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
        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Peace Of Mind</span>
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Honest Advice with Clear, Fair Pricing</h2>
        <p className="text-lg text-slate-600 mb-10">
          We assess your load honestly, price it transparently, and recommend only what actually benefits you.
        </p>

        <div className="space-y-8">
          {[
            { 
              icon: <ShieldCheck className="text-primary" size={24} />, 
              title: "No Fire Risk. No System Failures.", 
              desc: "Quality components installed by professionals prevent failures and costly repairs." 
            },
            { 
              icon: <FileText className="text-primary" size={24} />, 
              title: "We Handle Permits and Net Metering", 
              desc: "We handle permits and net metering so your system goes live fast." 
            },
            { 
              icon: <Box className="text-primary" size={24} />, 
              title: "Everything Done for You", 
              desc: "From planning to power-on, we do all the work for you." 
            }
          ].map((feature, i) => (
            <div key={i} className="flex gap-4">
              <div className="bg-blue-50 p-3 rounded-full h-fit">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-3 -z-10"></div>
        <img 
          src="https://apcsolar.pk/wp-content/uploads/2025/08/APC-Networks-Technicians-Installing-Solar-Panels-1024x576.jpg" 
          alt="Solar Installation" 
          className="rounded-3xl shadow-xl w-full object-cover aspect-video"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Brands = () => (
  <section className="py-16 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h3 className="text-slate-500 font-medium mb-12">Reliable Solar With Tier-1 Brands You Can Trust</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
        {[
          "Canadian-Solar-Logo-1", "Goodwe-Logo", "Growatt-Logo", "Huawei-Logo-1", "Jinko-Solar-Logo-1", "Longi-Solar-Logo-1"
        ].map((brand, i) => (
          <img 
            key={i}
            src={`https://apcsolar.pk/wp-content/uploads/2022/08/${brand}-150x150.png`}
            alt={brand}
            className="h-12 md:h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>
    </div>
  </section>
);

const ROI = () => (
  <section className="py-24 bg-primary text-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6 text-white">Your Solar Investment in Numbers</h2>
      <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-16">
        K-Electric rates keep rising. Every month without solar costs more. Pay back in 3–4 years then save for decades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "ROI Period", value: "3-4 Years", sub: "Typical Break Even Point" },
          { title: "Monthly Savings", value: "Upto 90%", sub: "Slash Your K-Electric Bill" },
          { title: "Long-Term Benefit", value: "20+ Years", sub: "Enjoy reliable solar power For a long time" }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-10 text-slate-900 shadow-xl flex flex-col items-center justify-center">
            <span className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-4">{item.title}</span>
            <h3 className="text-4xl font-bold text-primary mb-4">{item.value}</h3>
            <p className="text-slate-400 text-sm">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-24 max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Real Homes, Real Savings — See the Proof</h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg">
        Recent installations with K-Electric bills cut by 70-90%. These homeowners stopped overpaying for electricity — your home could be next.
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
        <div className="bg-slate-700 p-2 rounded-full text-white">
          <Facebook size={20} />
        </div>
        <span className="font-bold text-slate-700 uppercase tracking-widest text-sm">Reviews</span>
      </div>
      <h2 className="text-4xl font-bold text-center mb-16">Hear From People Who Cut Their Power Costs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Aamir Qureshi",
            text: "I approached APC Solar from Google for my solar system installation. The team is very professional and skilled. I am highly satisfied with their services. Highly recommended!",
            img: "https://lh3.googleusercontent.com/a/ACg8ocKxqqYMTO5Es42pgA-KfSSahcQey3GkERaz7aMk7r4CiwM8ng=w40-h40-c-rp-mo-br100"
          },
          {
            name: "Abdul Rehman",
            text: "I got a 7KW hybrid solar system with two lithium batteries due to heavy loadshedding installed at my house from apc solar. Their team is professional, quick and thorough with their work.",
            img: "https://lh3.googleusercontent.com/a/ACg8ocJ-KAsm8fnlLBFNflLiGu6WGepz8MQWCNipcdfMT4SNxj-UzQ=w40-h40-c-rp-mo-br100"
          },
          {
            name: "Umar f. jadoon",
            text: "Loved to meet Arshad sab and his team, specially Mehmood sb, for an excellent job on our solar installation. They were courteous, professional, and incredibly helpful throughout.",
            img: "https://lh3.googleusercontent.com/a-/ALV-UjULdONw-pE1hJOx35mUA-9YfWUvGJiIbSCaKfWNtAq67Ie02nk=w40-h40-c-rp-mo-br100"
          }
        ].map((review, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-accent text-accent" />)}
            </div>
            <p className="text-slate-600 mb-8 italic">"{review.text}"</p>
            <div className="flex items-center gap-4">
              <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
              <span className="font-bold text-slate-900">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
            <h2 className="text-4xl font-bold text-white mb-6">Get Your Free Solar Quote from Karachi's Most Transparent Solar Company</h2>
            <p className="text-slate-400 text-lg mb-10">
              K-Electric rates went up 3 times in 2024. Lock in your energy cost today before the next hike.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Free Physical Assessment of Site",
                "Calculated by Experts",
                "Market Competitive Prices"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-accent" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 text-slate-400">
              <Lock size={18} />
              <span>No pressure. No spam. Your data is safe.</span>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Get a Free Call Back</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-hover text-slate-900 font-bold py-4 rounded-lg transition-all shadow-lg"
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
        <h3 className="text-lg font-bold mb-4">APC Solar: The best Solar Company In Pakistan</h3>
        <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
          APC Solar belongs to a selected group of fast growing Supply PV Systems for autonomous power generation for On-and Off-grid applications.
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
        <Brands />
        <ROI />
        <Projects />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
