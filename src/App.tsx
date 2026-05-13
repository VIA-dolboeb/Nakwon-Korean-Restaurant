/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Utensils, 
  ChefHat, 
  Star, 
  ArrowRight, 
  Menu as MenuIcon, 
  X,
  MessageCircle,
  Instagram,
  Facebook
} from "lucide-react";
import { useState, useEffect } from "react";

const BUSINESS_NAME = "Nakwon Korean Restaurant";
const PHONE = "+19057379999";
const ADDRESS = "9625 Yonge St, Richmond Hill, ON L4C 1V6";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Nakwon+Korean+Restaurant(Richmond+Hill)/@43.8607972,-79.4351685,181m/data=!3m1!1e3!4m10!1m2!2m1!1srestaurant!3m6!1s0x882b2ba508d239ff:0xdbe371584b350202!8m2!3d43.8607148!4d-79.4342518!15sCgpyZXN0YXVyYW50WgwiCnJlc3RhdXJhbnSSARFrb3JlYW5fcmVzdGF1cmFudOABAA!16s%2Fg%2F11cls751mk?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D";

const OPENING_HOURS = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "11:30–23:00" },
  { day: "Wednesday", hours: "11:30–23:00" },
  { day: "Thursday", hours: "11:30–23:00" },
  { day: "Friday", hours: "11:30–23:00" },
  { day: "Saturday", hours: "11:30–23:00" },
  { day: "Sunday", hours: "11:30–23:00" },
];

const MAIN_SERVICES = [
  {
    title: "Premium Korean BBQ",
    description: "High-quality cuts of meat grilled to perfection at your table.",
    icon: Utensils,
  },
  {
    title: "Traditional Stews",
    description: "Authentic, slow-simmered stews like Kimchi-jjigae and Gamja-tang.",
    icon: ChefHat,
  },
  {
    title: "Signature Banchan",
    description: "A daily rotating selection of fresh, house-made side dishes.",
    icon: Star,
  },
];

const USPs = [
  { title: "Authentic Recipes", description: "Traditional Korean flavors passed down through generations." },
  { title: "Luxury Ambiance", description: "A sophisticated dining environment perfect for any occasion." },
  { title: "Fresh Ingredients", description: "We source the finest local and imported Korean ingredients." },
];

const DISHES = [
  { name: "Galbi", description: "Sweet and savory beef short ribs marinating in our house sauce.", price: "$32", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" },
  { name: "Bibimbap", description: "A vibrant bowl of rice, vegetables, meat, and a perfectly fried egg.", price: "$18", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800" },
  { name: "Kimchi Stew", description: "Our 24-hour slow-cooked kimchi broth with tender pork belly.", price: "$22", image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&q=80&w=800" },
  { name: "Bulgogi", description: "Thinly sliced ribeye stir-fried with onion and garlic.", price: "$28", image: "https://images.unsplash.com/photo-1616031037011-087000171abe?auto=format&fit=crop&q=80&w=800" },
];

const TESTIMONIALS = [
  {
    name: "Stella Jeon",
    rating: 5,
    title: "The only place I'm happy to tip 18%+",
    text: "I lived in Korea and usually tip the standard 15% here in Canada, but Nakwon is the only spot where the service is so exceptional that I’m thrilled to give more. It’s even better than my last visit—truly irresistible food."
  },
  {
    name: "Harry Walker",
    role: "Local Expert",
    rating: 5,
    title: "First-class hospitality and vibes",
    text: "A real gem in Richmond Hill. The atmosphere is cozy and spotless, but the service sets it apart—you feel like a guest in a home. The side dishes are fresh, varied, and constantly replenished. A 5-star experience."
  },
  {
    name: "Anton Pang",
    role: "Local Expert",
    rating: 5,
    title: "Perfect for families & fast service",
    text: "We came for Family Day and were blown away by how quickly the tables were set. The pork bone soup is a masterpiece for a cold day, and the marinated meats are so flavorful they don't even need sauce. Fast, generous, and delicious."
  },
  {
    name: "2want L",
    role: "Local Expert",
    rating: 5,
    title: "Rich flavors and kind staff",
    text: "The beef and seafood noodles have an incredibly rich, flavorful broth. The hospitality here makes the experience 10x better—the staff is genuinely kind and welcoming. Highly recommended for anyone seeking authentic tastes."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-paper/95 backdrop-blur-md py-4 border-b border-border" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-serif font-bold tracking-[0.3em] cursor-pointer text-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            NAKWON
          </motion.div>

          <div className="hidden md:flex items-center space-x-12">
            {["Menu", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[11px] uppercase tracking-[0.3em] font-medium luxury-underline transition-colors text-ink"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo("contact")}
              className="border border-primary/50 text-primary px-8 py-3 rounded-none text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-paper transition-all cursor-pointer"
            >
              Reservations
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-paper text-ink flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-serif font-bold tracking-[0.3em] text-primary">NAKWON</span>
              <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 border border-border flex items-center justify-center">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-12 text-4xl font-serif font-light">
              <button onClick={() => scrollTo("menu")} className="text-left hover:text-primary">Menu</button>
              <button onClick={() => scrollTo("about")} className="text-left hover:text-primary">About</button>
              <button onClick={() => scrollTo("contact")} className="text-left hover:text-primary">Contact</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div id="top" />
      <section className="relative h-screen flex items-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.image2url.com/r2/default/images/1778631208912-253cf319-7eaa-48fd-b9fb-bcc4bf4998ba.png" 
            alt="Authentic Korean BBQ"
            className="w-full h-full object-cover animate-slow-zoom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <span className="inline-block text-primary text-[11px] uppercase tracking-[0.5em] font-bold mb-10">
              Authentic Korean Gastronomy
            </span>
            <h1 className="text-6xl md:text-[84px] text-ink mb-10 leading-[1.1] font-serif font-normal">
              Exquisite Flavors, <br />
              <span className="italic">Timeless Tradition.</span>
            </h1>
            <p className="text-ink/70 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light">
              Experience the artistry of traditional Korean BBQ and authentic family recipes 
              in the heart of Richmond Hill. Where premium ingredients meet culinary heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => scrollTo("menu")}
                className="bg-primary text-paper px-12 py-5 rounded-none text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all font-sans"
              >
                View Menu
              </button>
              <button 
                onClick={() => scrollTo("contact")}
                className="border border-primary/40 text-primary px-12 py-5 rounded-none text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary/5 transition-all font-sans"
              >
                Visit Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Visual Panels - Side Decoration */}
        <div className="hidden xl:block absolute right-24 top-1/2 -translate-y-1/2 w-[400px] h-[520px]">
          <div className="absolute inset-0 border border-primary/20 translate-x-6 -translate-y-6" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center text-center p-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.5em] text-primary mb-8">Our Specialty</div>
              <div className="text-3xl font-serif italic mb-6">Premium <br />Charcoal BBQ</div>
              <div className="w-12 h-[1px] bg-primary mx-auto mb-8" />
              <div className="text-xs uppercase tracking-widest text-ink/40">Signature Grade Cuts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Grid - The "Immersive" Info Bar */}
      <section className="border-b border-border bg-white/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="p-12 border-b md:border-b-0 md:border-r border-border">
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">Location</span>
            <div className="text-sm font-light leading-loose text-ink/80 uppercase tracking-widest">
              9625 Yonge St, Richmond Hill<br />Ontario L4C 1V6
            </div>
          </div>
          <div className="p-12 border-b md:border-b-0 md:border-r border-border">
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-6 block">Signature Services</span>
            <div className="flex flex-wrap gap-2">
              <span className="service-pill">Korean BBQ</span>
              <span className="service-pill">Premium Banchan</span>
              <span className="service-pill">Private Dining</span>
              <span className="service-pill">Authentic Stews</span>
            </div>
          </div>
          <div className="p-12">
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">Hours</span>
            <div className="text-sm font-light leading-loose text-ink/80 uppercase tracking-widest">
              Tue — Sun<br />11:30 – 23:00
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Grid */}
      <section id="menu" className="py-24 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary text-[11px] uppercase tracking-[0.4em] font-bold mb-6 block">Culinary Arts</span>
              <h2 className="text-5xl md:text-7xl font-serif">Signature <span className="italic">Plates</span></h2>
            </div>
            <div className="h-[1px] flex-1 bg-border mx-12 hidden md:block mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DISHES.map((dish, idx) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[4/5] mb-8 overflow-hidden border border-border">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-paper/20 mix-blend-overlay" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif">{dish.name}</h3>
                  <span className="text-xs tracking-widest text-primary font-bold">{dish.price}</span>
                </div>
                <p className="text-ink/50 text-xs font-light leading-relaxed mb-6 uppercase tracking-wider">{dish.description}</p>
                <div className="w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-white rounded-full animate-[spin_90s_linear_infinite_reverse]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Beyond Dining</span>
              <h2 className="text-5xl md:text-6xl leading-[0.9]">
                Elevated Korean <br />
                <span className="italic font-light">Hospitality</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest leading-loose">
              From intimate dinners to grand celebrations, we provide a setting that honors every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
            {MAIN_SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="mb-10 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-500">
                  <service.icon size={28} strokeWidth={1} />
                </div>
                <h3 className="text-3xl mb-6 font-serif">{service.title}</h3>
                <p className="text-white/50 leading-relaxed font-light mb-8">{service.description}</p>
                <div className="mt-auto text-[10px] uppercase tracking-widest font-bold text-accent">Learn More</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 bg-paper overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 aspect-[4/5] overflow-hidden rounded-[80px]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Traditional Korean Dining Ambiance"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
                />
              </motion.div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
              
              <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[40px] shadow-2xl max-w-[320px] hidden xl:block">
                <div className="flex gap-2 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-accent text-accent" />)}
                </div>
                <p className="text-sm italic leading-relaxed text-ink/80 mb-6">
                  "The most authentic and refined BBQ experience in the city. Truly a gem for Richmond Hill's food scene."
                </p>
                <p className="text-[10px] uppercase tracking-widest font-black">Food & Travel Guide 2026</p>
              </div>
            </div>

            <div className="lg:pl-12">
              <span className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-8 block">Our Story</span>
              <h2 className="text-6xl md:text-8xl mb-12 leading-[0.85] tracking-tighter">
                A Legacy <br />
                <span className="italic font-light">Of Flavor</span>
              </h2>
              <p className="text-ink/70 text-xl leading-relaxed mb-12 font-light">
                Since 2012, Nakwon has stood as a beacon of traditional Korean gastronomy. 
                Our culinary philosophy is simple: honor the original recipes, respect 
                the ingredients, and treat every guest like royalty.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mb-16 border-l border-primary/10 pl-12">
                {USPs.map((usp, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-primary italic">{usp.title}</h4>
                    <p className="text-sm text-ink/60 font-light leading-relaxed">{usp.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-10">
                <button 
                  onClick={() => scrollTo("contact")}
                  className="bg-primary text-white border border-primary px-10 py-5 rounded-none text-[10px] uppercase tracking-widest font-bold hover:bg-transparent hover:text-primary transition-all"
                >
                  Visit Richmond Hill
                </button>
                <div className="hidden md:flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Established</span>
                  <span className="text-xl font-serif">MMXII</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-40 bg-paper relative overflow-hidden border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary text-[11px] uppercase tracking-[0.4em] font-bold mb-6 block">Voice of Paradise</span>
              <h2 className="text-5xl md:text-7xl font-serif">Guest <span className="italic">Experiences</span></h2>
            </div>
            <div className="h-[1px] flex-1 bg-border mx-12 hidden md:block mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-border p-12 relative group"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <h4 className="text-2xl font-serif mb-6 group-hover:text-primary transition-colors italic">"{t.title}"</h4>
                <p className="text-ink/60 text-lg font-light leading-relaxed mb-10 italic">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-primary/30" />
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-ink">{t.name}</p>
                    {t.role && <p className="text-[10px] uppercase tracking-widest text-primary font-bold opacity-50 mt-1">{t.role}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours Overlay Section */}
      <section className="py-24 md:py-40 bg-paper text-ink relative overflow-hidden border-y border-border">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-12 text-center mb-12">
              <h2 className="text-6xl md:text-[100px] leading-none mb-12 tracking-tight">Visit The <span className="italic font-light">Paradise</span></h2>
            </div>
            
            <div className="lg:col-span-10 lg:col-offset-1 order-2 lg:order-1 lg:flex lg:gap-24 lg:items-start">
              <div className="flex-1 space-y-16">
                <div>
                  <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">Find Us</span>
                  <div className="flex items-start gap-6 group cursor-pointer" onClick={() => window.open(GOOGLE_MAPS_URL)}>
                    <MapPin className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <p className="text-2xl font-serif mb-4 leading-tight">{ADDRESS}</p>
                      <button className="text-[10px] uppercase tracking-widest border-b border-primary pb-1 text-primary font-bold">Open In Google Maps</button>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">The Schedule</span>
                  <div className="grid grid-cols-1 gap-4 max-w-md">
                    {OPENING_HOURS.map((oh) => (
                      <div key={oh.day} className="flex justify-between items-center border-b border-white/5 pb-2 text-sm">
                        <span className={`tracking-widest ${oh.day === "Monday" ? "opacity-30 italic" : "opacity-80"}`}>{oh.day}</span>
                        <span className={`font-light ${oh.day === "Monday" ? "text-red-900/50" : "opacity-40"}`}>{oh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 mt-12 lg:mt-0 h-[500px] rounded-[40px] overflow-hidden grayscale contrast-[1.2] brightness-[0.8] hover:grayscale-0 hover:brightness-100 transition-all duration-[2s] group border border-border">
                <img 
                  src="https://www.image2url.com/r2/default/images/1778631208912-253cf319-7eaa-48fd-b9fb-bcc4bf4998ba.png" 
                  alt="Nakwon Korean Restaurant Exterior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 bg-paper relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <span className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-8 block">Connect</span>
                <h2 className="text-6xl md:text-7xl mb-12 tracking-tighter leading-[0.9] italic text-ink">Reserved <br /><span className="not-italic">For You.</span></h2>
                <p className="text-ink/60 text-lg mb-16 font-light leading-relaxed">
                  We invite you to reach out for table reservations, 
                  private events, or catering inquiries. 
                  Our team is dedicated to providing an unforgettable experience.
                </p>

                <div className="space-y-12">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4">Phone Inquiries</p>
                    <a href={`tel:${PHONE}`} className="text-4xl font-serif text-ink flex items-center gap-4 group-hover:gap-8 transition-all">
                      {PHONE} <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all" size={32} />
                    </a>
                  </div>

                  <div className="aspect-video w-full overflow-hidden border border-border rounded-xl">
                    <img 
                      src="https://www.image2url.com/r2/default/images/1778631208912-253cf319-7eaa-48fd-b9fb-bcc4bf4998ba.png" 
                      alt="Nakwon Entrance" 
                      className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-paper p-12 md:p-20 rounded-[60px] border border-primary/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-full blur-[60px]" />
                <h3 className="text-3xl font-serif mb-12">Send An Inquiry</h3>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1 group">
                    <label className="text-[10px] uppercase tracking-widest font-black opacity-30 group-focus-within:text-primary transition-colors">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-primary/10 py-3 focus:border-primary outline-none transition-all font-light" placeholder="Jane Smith" />
                  </div>
                  <div className="space-y-1 group">
                    <label className="text-[10px] uppercase tracking-widest font-black opacity-30 group-focus-within:text-primary transition-colors">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-primary/10 py-3 focus:border-primary outline-none transition-all font-light" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-1 group">
                    <label className="text-[10px] uppercase tracking-widest font-black opacity-30 group-focus-within:text-primary transition-colors">Message Details</label>
                    <textarea className="w-full bg-transparent border-b border-primary/10 py-3 focus:border-primary outline-none transition-all resize-none font-light" rows={4} placeholder="Tell us how we can help..." />
                  </div>
                  <button className="w-full bg-primary text-white py-6 rounded-none text-xs uppercase tracking-widest font-black mt-8 hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl">
                    Request Reservation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black/40 border-t border-border text-ink/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-1">
              <p className="text-3xl font-serif font-bold text-primary mb-8 tracking-tighter uppercase">NAKWON</p>
              <p className="text-xs leading-relaxed font-light opacity-50 mb-8 max-w-xs">
                Richmond Hill's premier destination for authentic Korean cuisine. 
                A sanctuary of flavor, tradition, and luxury.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-paper transition-all cursor-pointer">
                  <Instagram size={16} />
                </div>
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-paper transition-all cursor-pointer">
                  <Facebook size={16} />
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-[10px] uppercase tracking-widest font-black text-primary mb-8">Navigation</h5>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><button onClick={() => scrollTo("menu")} className="hover:text-primary transition-colors cursor-pointer">Menu</button></li>
                <li><button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors cursor-pointer">About</button></li>
                <li><button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors cursor-pointer">Services</button></li>
                <li><button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors cursor-pointer">Contact</button></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className="text-[10px] uppercase tracking-widest font-black text-primary mb-8">Location</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-sm font-light mb-2">{ADDRESS}</p>
                  <p className="text-sm font-light mb-8 opacity-50">Richmond Hill, Ontario</p>
                  <a href={`tel:${PHONE}`} className="text-xl font-serif text-primary">{PHONE}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-widest opacity-30 font-bold italic">Paradise reimagined through taste.</p>
            <p className="text-[10px] uppercase tracking-widest opacity-30 font-bold">© 2026 Nakwon Korean Restaurant. Crafted with tradition.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
