import React, { useState, useEffect } from 'react';
import {
  Calendar, Clock, MapPin, Users, CheckCircle2,
  Instagram, Ticket, Bed, Bus, Utensils, PartyPopper, ChevronRight, AlertTriangle } from
'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import heroImg from '@/assets/hero-indonesia.jpg';
import nusaLembonganImg from '@/assets/nusa-lembongan.jpg';
import giliTImg from '@/assets/gili-t.jpg';
import kutaLombokImg from '@/assets/kuta-lombok.jpg';
import logoImg from '@/assets/mad-monkey-logo.png';
import monkeyIcon from '@/assets/mad-monkey-icon.png';
import vibeBoatpartyImg from '@/assets/vibe-boatparty.jpg';
import vibeMantarayImg from '@/assets/vibe-mantaray.jpg';
import vibeAtvImg from '@/assets/vibe-atv.jpg';

const TikTokIcon = ({ className = "w-4 h-4" }: {className?: string;}) =>
<svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>;


export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const locations = [
    {
      name: 'Uluwatu',
      daysLabel: 'Days 1-4',
      duration: '4 Days (Sep 6-9)',
      img: heroImg,
      desc: "Your adventure starts at Mad Monkey Uluwatu. Welcome sunsets, surf lessons, sunrise treks, and live DJ nights to set the tone.",
      highlights: [
        'Day 1 (06/09) — Arrive at DPS Airport. Transfer to Mad Monkey Uluwatu. Welcome Sunset (5PM-7:30PM) at Panorama Point',
        'Day 2 (07/09) — Surf Lesson (9AM-11AM) + Fire Show',
        'Day 3 (08/09) — Mt Batur Sunrise Trekking (1:30AM-11AM). Sauna, hot tub & ice baths',
        'Day 4 (09/09) — Live DJ + Free Flow (8PM-11PM)',
      ],
    },
    {
      name: 'Nusa Lembongan',
      daysLabel: 'Days 5-6',
      duration: '2 Days (Sep 10-11)',
      img: nusaLembonganImg,
      desc: "Hop on a fast boat to the island paradise of Nusa Lembongan. Island hopping, pool parties, and turquoise waters.",
      highlights: [
        'Day 5 (10/09) — Taxi to Sanur, 30-min fast boat to Mad Monkey Nusa Lembongan. Ice baths, sauna, gym & luxury pool',
        'Day 6 (11/09) — Island Hopping around Nusa Penida (8:30AM-5PM) + Mad Monkey Pool Party (6PM-10PM)',
      ],
    },
    {
      name: 'Gili Trawangan',
      daysLabel: 'Days 7-9',
      duration: '3 Days (Sep 12-14)',
      img: giliTImg,
      desc: "The legendary Gili T. Boat parties, snorkelling, beach volleyball, and a free day to explore.",
      highlights: [
        'Day 7 (12/09) — Early fast boat to Gili T. Mad Monkey Boat Party (2PM-6PM) + Unlimited BBQ & Drinks',
        'Day 8 (13/09) — Monkey Sea Monkey Do snorkelling tour (10:30AM-4PM) + Beach Volleyball Tournament & Live DJ (3PM-7PM)',
        'Day 9 (14/09) — Free day mid-trip to explore Gili T',
      ],
    },
    {
      name: 'Kuta Lombok',
      daysLabel: 'Days 10-15',
      duration: '6 Days (Sep 15-21)',
      img: kutaLombokImg,
      desc: "Head to Lombok for the grand finale — waterfalls, surf lessons, BBQ free-flows, and a chilled farewell.",
      highlights: [
        'Day 10 (15/09) — Short boat to Lombok mainland, shuttle to Mad Monkey Kuta Lombok',
        'Day 11 (16/09) — Lombok Signature Waterfall Tour (10AM-5PM)',
        'Day 12 (17/09) — Relax and explore Kuta',
        'Day 13 (19/09) — Surf lesson (9AM-12PM)',
        'Day 14 (20/09) — Surf lesson (9AM-12PM) + BBQ & Free Flow',
        'Day 15 (21/09) — Recovery breakfast + 30-min shuttle to Lombok Airport (LOP)',
      ],
    },
  ];


  return (
    <div className="min-h-screen relative pb-20 md:pb-0">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
              <img src={logoImg} alt="Mad Monkey" className="h-8 w-auto" />
              <span className="text-brand-red text-xl font-bold">|</span>
              <span className="text-foreground font-display font-black text-sm tracking-tight">WILL GEE</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center font-semibold text-sm">
              <a href="#itinerary" className="text-muted-foreground hover:text-brand-red transition-colors">Itinerary</a>
              <a href="#included" className="text-muted-foreground hover:text-brand-red transition-colors">Included</a>
              <a href="#who-its-for" className="text-muted-foreground hover:text-brand-red transition-colors">Who It's For</a>
                <a href="https://buy.stripe.com/00w6oGgqT4be3TW0CSe7s47" target="_blank" rel="noreferrer" className="bg-brand-red text-primary-foreground px-5 py-2 rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                   Get Info
                 </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black/80 z-10" />
          <img src={heroImg} alt="Indonesia islands adventure" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-brand-red text-primary-foreground px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider shadow-lg">
            <span>Powered by Mad Monkey</span>
          </div>
          
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-[0.9] tracking-tight uppercase drop-shadow-xl font-display">
              Indonesia <br className="hidden md:block" />
              <span className="text-brand-red">Takeover</span>
            </h1>
          
           <p className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-display drop-shadow-xl text-primary-foreground">
             SEP 6 - 21
           </p>

          <div className="flex justify-center gap-4 mb-8">
            <a href="https://instagram.com/will.gee11" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium transition-colors">
              <Instagram size={16} /> @will.gee11
            </a>
            <a href="https://tiktok.com/@willgeeeeee" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium transition-colors">
              <TikTokIcon /> @willgeeeeee
            </a>
          </div>

           <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://buy.stripe.com/00w6oGgqT4be3TW0CSe7s47" target="_blank" rel="noreferrer" className="bg-brand-red text-primary-foreground text-lg font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-200 flex items-center justify-center gap-2">
               Book Now <ChevronRight size={20} />
             </a>
            <a href="#itinerary" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-md border border-primary-foreground/30 text-lg font-bold px-8 py-4 rounded-full transition-colors flex items-center justify-center">
              See the Itinerary
            </a>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="bg-brand-black text-primary-foreground py-5 border-b-4 border-brand-red">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm sm:text-base">
           <div className="flex items-center gap-2">
              <Clock className="text-brand-red shrink-0" size={18} />
               <span className="font-black">15 Days</span>
               <span className="text-muted-foreground">of adventure</span>
            </div>
            <span className="hidden sm:inline text-brand-red font-bold">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="text-brand-red shrink-0" size={18} />
               <span className="font-black">5 Locations</span>
               <span className="text-muted-foreground">across Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section id="itinerary" className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 font-display">The <span className="text-brand-teal">Route</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">15 days of islands, adventure, and incredible vibes across Indonesia's best spots.</p>
          </div>

          <div className="space-y-8">
            {locations.map((loc, i) => (
              <div key={i} className="bg-card rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-64 md:h-72">
                  <img src={loc.img} alt={loc.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-4 left-4 bg-brand-black text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {loc.daysLabel}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-3xl font-black uppercase font-display">{loc.name}</h3>
                  <p className="text-brand-teal font-bold mb-4">{loc.duration}</p>
                  <p className="text-muted-foreground mb-6">{loc.desc}</p>
                  <ul className="space-y-3">
                    {loc.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-teal shrink-0 mt-0.5" size={20} />
                        <span className="font-semibold">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Itinerary subject to change notice */}
          <div className="mt-8 bg-card border border-border rounded-2xl p-5 flex items-start gap-3">
            <AlertTriangle className="text-brand-red shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-muted-foreground font-medium">
              <span className="font-bold text-foreground">Please note:</span> the itinerary may be adjusted due to circumstances beyond our control.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="included" className="py-20 bg-brand-teal text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 font-display">What's <span className="text-brand-red">Included</span></h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-medium">We handle the logistics, you bring the energy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
             { icon: <Bed className="text-brand-black mb-4" size={32} />, title: 'Stays', items: ['Mixed or Female shared dorms', 'Mad Monkey locations throughout', 'Island accommodation'] },
             { icon: <Bus className="text-brand-black mb-4" size={32} />, title: 'Transport', items: ['All internal transport', 'Group vans between cities', 'Fast ferries to islands', 'Does NOT include airport arrival/departure'] },
             { icon: <Utensils className="text-brand-black mb-4" size={32} />, title: 'Tours & Extras', items: ['ATV Adventure', 'Mad Monkey Boat Party', 'Manta Ray expedition', 'Group leader in every location', 'WhatsApp support group'] }].
            map((card, i) =>
            <div key={i} className="bg-primary-foreground/5 border border-primary-foreground/10 p-6 rounded-2xl hover:bg-primary-foreground/10 transition-colors">
                {card.icon}
                <h4 className="text-xl font-bold uppercase mb-3">{card.title}</h4>
                <ul className="space-y-2 text-primary-foreground/80 text-sm">
                  {card.items.map((item, j) =>
                <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={16} /> {item}
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* VIBE GALLERY */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 font-display">The <span className="text-brand-teal">Vibe</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">This isn't a trip - it's a takeover</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={vibeBoatpartyImg} alt="Sunset boat party in Indonesia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={768} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={vibeMantarayImg} alt="Snorkeling with manta rays" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={768} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={vibeAtvImg} alt="ATV adventure through Bali rice terraces" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={768} />
            </div>
          </div>
        </div>
      </section>

      {/* WHO'S IT FOR */}
      <section id="who-its-for" className="py-20 bg-brand-teal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-primary-foreground mb-4 font-display">Is this your <span className="text-brand-black">vibe?</span></h2>
          </div>
          <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-3xl p-8 shadow-xl border-t-8 border-brand-red">
              <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2 font-display">
                <CheckCircle2 className="text-brand-red" size={28} /> This IS for you if...
              </h3>
              <ul className="space-y-4 font-medium text-muted-foreground">
                 {[
                "You're an 18–30 year old social traveller looking for the trip of a lifetime.",
                "You love beach days, party nights, and island hopping.",
                "You want the logistics handled so you can just show up and have fun.",
                "You're a solo traveller who wants instant community and core memories.",
                "You're a first-time backpacker looking for an easy way in."].
                map((text, i) =>
                <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0" />
                    {text}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* WHAT'S NOT INCLUDED */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 font-display">What's <span className="text-brand-red">Not</span> Included</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { title: 'International Flights', desc: 'Flights to and from Indonesia' },
               { title: 'Personal Spend', desc: 'Meals, drinks, and optional activities not listed in the itinerary' },
               { title: 'Visas', desc: 'Tourist Visa (approx. $30–$35)' },
               { title: 'Travel Insurance', desc: 'Mandatory for all travellers' },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-5">
                <h4 className="text-lg font-black uppercase mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO SECURE YOUR SPOT */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 font-display">How to <span className="text-brand-teal">Book</span></h2>
          </div>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Pay Your Deposit', desc: 'Pay your £233.10 deposit via the booking link by 09/08/2026.' },
              { step: '2', title: 'Join the Crew', desc: "Once deposited, you'll be added to the private WhatsApp group for pre-trip banter and packing tips." },
              { step: '3', title: 'Wait for the "GO"', desc: 'As soon as we hit 12 confirmed travellers (by 09/08), we\'ll blast the group chat to confirm the takeover is ON.' },
              {
                step: '4',
                title: 'Pay Your Instalments',
                rows: [
                  { label: 'Instalment 1', amount: '£233.10', due: '23/08/2026' },
                  { label: 'Instalment 2', amount: '£233.10', due: '30/08/2026' },
                ],
                footer: 'Total trip cost: £700',
              },
              { step: '5', title: 'Book Your Flights', desc: 'Do not book flights until the 12-person minimum is officially confirmed!' },
            ].map((s: any, i) => (
              <div key={i} className="flex items-start gap-4 bg-muted border border-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-brand-red text-primary-foreground flex items-center justify-center font-black text-lg shrink-0">
                  {s.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-black uppercase mb-1">{s.title}</h4>
                  {s.desc && <p className="text-sm text-muted-foreground">{s.desc}</p>}
                  {s.rows && (
                    <div className="mt-3 divide-y divide-border rounded-xl border border-border bg-card overflow-hidden">
                      {s.rows.map((r: any, j: number) => (
                        <div key={j} className="px-4 py-3 text-sm">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-bold uppercase tracking-wide">{r.label}</span>
                            <span className="font-black text-brand-red text-base">{r.amount}</span>
                          </div>
                          <div className="text-xs text-muted-foreground font-medium tabular-nums mt-1">
                            Due {r.due}
                          </div>
                        </div>
                      ))}
                      {s.footer && (
                        <div className="flex items-center justify-between gap-3 px-4 py-3 bg-muted">
                          <span className="font-black uppercase tracking-wide text-sm">Total</span>
                          <span className="font-black text-brand-red text-lg">£700</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY CTA */}
       <section className="py-24 bg-brand-red text-primary-foreground text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(hsl(var(--primary-foreground)) 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
         <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 drop-shadow-lg font-display">
              ONLY 10 SPOTS <br /> <span className="text-brand-black">LEFT!</span>
           </h2>
           <p className="text-xl md:text-2xl font-medium mb-10 opacity-90">
             This trip will sell out fast. Secure your spot in minutes and get ready for an epic adventure.
           </p>
            <a href="https://buy.stripe.com/00w6oGgqT4be3TW0CSe7s47" target="_blank" rel="noreferrer" className="inline-block bg-brand-black text-primary-foreground text-xl font-black uppercase px-10 py-5 rounded-full hover:opacity-90 transition-all shadow-2xl transform hover:scale-105 duration-200">
              Lock It In Now
            </a>
         </div>
       </section>


      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 font-display">
              <span className="text-brand-teal">FAQ</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Do I need to have backpacking experience?", a: "No. This trip is beginner-friendly. All transport, accommodation, and activities are organised for you — you just need to show up ready for adventure." },
              { q: "What kind of luggage should I bring?", a: "We recommend a backpack or medium-sized suitcase (hostels and boats are easier to navigate without oversized luggage)." },
              { q: "Can I request to share a room with someone?", a: "Yes. If you're travelling with a friend, let us know in advance and we'll do our best to place you in the same dorm." },
              { q: "What if I don't know anyone?", a: "That's completely normal — most travellers join solo. You'll be added to a private WhatsApp group before the trip so you can connect with everyone ahead of time." },
              { q: "Is this a party trip?", a: "This is a social, high-energy trip with boat parties and nightlife built in — but it also includes beach days, adventure activities, and downtime. You can participate as much or as little as you like." },
              { q: "Can I skip activities if I want to relax?", a: "Absolutely. While group activities are included, you're free to opt out of anything and enjoy free time instead." },
              { q: "What if I get sick or injured?", a: "Travel insurance is mandatory. Hosts and local staff will assist you in accessing medical care if needed, but medical costs are your responsibility and must be covered by insurance." },
              { q: "Will there be WiFi?", a: "Yes — all Mad Monkey locations have WiFi, though speeds may vary depending on island location." },
              { q: "Is there a payment plan available?", a: "Yes. You pay a £233.10 deposit by 09/08/2026, followed by two instalments of £233.10 — due 23/08/2026 and 30/08/2026. Total cost is £700. Missed payments may result in your spot being released." },
              { q: "Is there a minimum number of travellers required?", a: "All trips require a minimum of 12 confirmed travellers to be officially confirmed. If this minimum is not met by the deposit deadline, the trip will be cancelled and all payments will be fully refunded." },
              { q: "What is the cancellation policy?", a: "If you cancel before the trip is confirmed, you'll receive a full refund of your deposit. If you cancel after the trip is confirmed, all payments are non-refundable. We strongly recommend travel insurance with 'Cancel for Any Reason' (CFAR) coverage." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl border border-border px-6 overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-black text-primary-foreground pt-16 pb-8 border-t-8 border-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Mad Monkey" className="h-8 w-auto" style={{ filter: 'drop-shadow(1px 0 0 white) drop-shadow(-1px 0 0 white) drop-shadow(0 1px 0 white) drop-shadow(0 -1px 0 white)' }} />
              <span className="text-brand-red text-xl font-bold">|</span>
              <span className="text-primary-foreground font-display font-black text-sm tracking-tight">WILL GEE</span>
            </div>
             <div className="flex gap-6">
               <a href="https://instagram.com/will.gee11" target="_blank" rel="noreferrer" className="bg-primary-foreground/10 p-3 rounded-full hover:bg-brand-red transition-colors">
                 <Instagram size={24} />
               </a>
               <a href="https://tiktok.com/@willgeeeeee" target="_blank" rel="noreferrer" className="bg-primary-foreground/10 p-3 rounded-full hover:bg-brand-red transition-colors">
                 <TikTokIcon className="w-6 h-6" />
               </a>
             </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium">
            <p>&copy; {new Date().getFullYear()} Powered by Mad Monkey. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
       <div className={`fixed bottom-0 left-0 w-full p-4 bg-card border-t border-border shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-50 md:hidden transition-transform duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-full'}`}>
          <a href="https://buy.stripe.com/00w6oGgqT4be3TW0CSe7s47" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full bg-brand-red text-primary-foreground font-black uppercase py-4 rounded-xl shadow-lg active:scale-95 transition-transform">
             Lock It In Now – 50 Spots Left
           </a>
       </div>
    </div>);

}
