import heroImg from "@/assets/hero-vietnam.jpg";
import hanoiImg from "@/assets/hanoi.jpg";
import haGiangImg from "@/assets/ha-giang.jpg";
import hoiAnImg from "@/assets/hoi-an.jpg";
import vibeMotorbikeImg from "@/assets/vibe-motorbike.jpg";
import vibeCookingImg from "@/assets/vibe-cooking.jpg";
import vibeBanaHillsImg from "@/assets/vibe-banahills.jpg";
import logoImg from "@/assets/mad-monkey-logo.png";

export interface TripConfig {
  creator: {
    name: string;
    instagram: string;
    instagramUrl: string;
    tiktok?: string;
    tiktokUrl?: string;
  };
  poweredBy: {
    name: string;
    logo: string;
  };
  trip: {
    title: string;
    highlightColor: "red" | "teal" | "yellow" | "black";
    dates: string;
    durationDays: number;
    locationCount: number;
    locationLabel: string;
    heroImage: string;
  };
  stripeBookingUrl: string;
  spots: {
    total: number;
    remainingText: string;
  };
  pricing: {
    currency: string;
    total: number;
    deposit: number;
    instalments: { amount: number; due: string }[];
    depositDeadline: string;
    minTravellers: number;
  };
  locations: {
    name: string;
    daysLabel: string;
    duration: string;
    image: string;
    description: string;
    highlights: string[];
  }[];
  included: {
    icon: "bed" | "bus" | "utensils";
    title: string;
    items: string[];
  }[];
  notIncluded: {
    title: string;
    description: string;
  }[];
  whoItsFor: string[];
  bookingSteps: {
    title: string;
    description?: string;
    rows?: { label: string; amount: string; due: string }[];
    footer?: string;
  }[];
  faq: { question: string; answer: string }[];
  vibeGallery: {
    image: string;
    alt: string;
  }[];
  footer: {
    copyright: string;
  };
}

export const tripConfig: TripConfig = {
  creator: {
    name: "TRAVELLING TOMOS",
    instagram: "@travellingtomos",
    instagramUrl: "https://instagram.com/travellingtomos",
  },
  poweredBy: {
    name: "Mad Monkey",
    logo: logoImg,
  },
  trip: {
    title: "Vietnam Takeover",
    highlightColor: "red",
    dates: "JUN 25 - JUL 4",
    durationDays: 10,
    locationCount: 3,
    locationLabel: "across Vietnam",
    heroImage: heroImg,
  },
  stripeBookingUrl: "https://buy.stripe.com/00w6oGgqT4be3TW0CSe7s47",
  spots: {
    total: 12,
    remainingText: "ONLY 12 SPOTS LEFT!",
  },
  pricing: {
    currency: "£",
    total: 700,
    deposit: 70,
    instalments: [
      { amount: 350, due: "04/06" },
      { amount: 280, due: "18/06" },
    ],
    depositDeadline: "28/05",
    minTravellers: 12,
  },
  locations: [
    {
      name: "Hanoi",
      daysLabel: "Days 1-2",
      duration: "2 Days (Jun 25-26)",
      image: hanoiImg,
      description:
        "Kick things off in the chaotic, lantern-lit streets of Hanoi before heading north for the adventure of a lifetime.",
      highlights: [
        "Day 1 (25/06) — Mon: Arrive in Mad Monkey Hanoi and check in.",
        "Day 2 (26/06) — Tue: Leave Hanoi at 9:30AM for a 7-hour ride up north. Roll into Ha Giang with time to meet the crew, grab a cold beer by the pool, and enjoy local bites to warm up for the loop.",
      ],
    },
    {
      name: "Ha Giang Loop",
      daysLabel: "Days 3-6",
      duration: "4 Days (Jun 27-30)",
      image: haGiangImg,
      description:
        "The legendary Ha Giang Loop. Mountain passes, waterfalls, hidden villages, and unlimited beer hour every evening.",
      highlights: [
        "Day 3 (27/06) — Wed: 8:30AM ride to Pác Sum Pass. Trek and swim at Khau Làn Waterfall, lunch in Tam Son, scenic ride through Thai An. Coffee in Lüng Hö, then Du Già Valley pool & sunset. Local family dinner + happy water + 1hr unlimited beer.",
        "Day 4 (28/06) — Thur: Backroads through Red Dao and Nung villages, bamboo raft ride at Ban An stream. Hit the iconic Ma Pi Leng Pass, climb for panoramic views, brave the Skywalk if you dare. Overnight nearby + 1hr unlimited beer.",
        "Day 5 (29/06) — Fri: Head southeast toward the Vietnam–China border. Stop at Thien Huong village, hike up the Lung Cu Flag Pole. Lunch in Lolo Chai (H'mong clay village), visit the H'mong King's Palace, Tham Ma Pass, and Can Ty Pass. Dinner in Nam Dam village.",
        "Day 6 (30/06) — Sat: 4km hike to Lung Khuy Cave (or nearby waterfall alternative). Final lunch in Quan Ba District with a view, then journey back for a free night at Mad Monkey.",
      ],
    },
    {
      name: "Hoi An",
      daysLabel: "Days 7-10",
      duration: "4 Days (Jul 1-4)",
      image: hoiAnImg,
      description:
        "Down south to magical Hoi An — cooking classes, river cruises, Ba Na Hills, and lantern-lit nights.",
      highlights: [
        "Day 7 (01/07) — Sun: Hanoi → Hoi An. Rest up (trust needed).",
        "Day 8 (02/07) — Mon: Cooking Class & Bamboo Boats (8:30AM-1PM) + Sunset River Cruise (4PM-6:30PM).",
        "Day 9 (03/07) — Tue: Group tour up Ba Na Hills for panoramic views (7:45AM-5PM). Free evening to wander Hoi An's lantern-lit streets.",
        "Day 10 (04/07) — Wed: Farewell to the team. Exchange photos and tag us in them all!",
      ],
    },
  ],
  included: [
    {
      icon: "bed",
      title: "Stays",
      items: [
        "Mixed or Female shared dorms",
        "Mad Monkey locations throughout",
        "Mountain & city accommodation",
      ],
    },
    {
      icon: "bus",
      title: "Transport",
      items: [
        "All internal transport",
        "Hanoi → Ha Giang group ride",
        "Ha Giang Loop motorbike & guides",
        "Hanoi → Hoi An transfer",
        "Does NOT include international flights",
      ],
    },
    {
      icon: "utensils",
      title: "Tours & Extras",
      items: [
        "Ha Giang Loop with local guides",
        "Khau Làn Waterfall trek & swim",
        "Ma Pi Leng Pass & Skywalk",
        "Cooking Class & Bamboo Boats in Hoi An",
        "Sunset River Cruise in Hoi An",
        "Ba Na Hills group tour",
        "1hr unlimited beer on loop evenings",
        "Group leader in every location",
        "WhatsApp support group",
      ],
    },
  ],
  notIncluded: [
    { title: "International Flights", description: "Flights to and from Vietnam" },
    { title: "Personal Spend", description: "Meals, drinks, and optional activities not listed in the itinerary" },
    { title: "Visas", description: "Vietnam tourist e-Visa (approx. $25)" },
    { title: "Travel Insurance", description: "Mandatory for all travellers" },
  ],
  whoItsFor: [
    "You're an 18–30 year old social traveller looking for the trip of a lifetime.",
    "You love mountain adventures, lantern-lit nights, and cultural immersion.",
    "You want the logistics handled so you can just show up and have fun.",
    "You're a solo traveller who wants instant community and core memories.",
    "You're a first-time backpacker looking for an easy way in.",
  ],
  bookingSteps: [
    {
      title: "Pay Your Deposit",
      description:
        "Pay your £70 deposit via the link below by 28/05.",
    },
    {
      title: "Join the Crew",
      description:
        "Once deposited, you'll be added to the private WhatsApp group for pre-trip banter and packing tips.",
    },
    {
      title: 'Wait for the "GO"',
      description:
        "This trip requires 12 confirmed travellers by 28/05. As soon as we hit the minimum, we'll confirm the takeover is ON.",
    },
    {
      title: "Pay Your Instalments",
      rows: [
        { label: "Deposit", amount: "£70", due: "28/05" },
        { label: "Instalment 1", amount: "£350", due: "04/06" },
        { label: "Instalment 2", amount: "£280", due: "18/06" },
      ],
      footer: "Total trip cost: £700",
    },
    {
      title: "Book Your Flights",
      description:
        "Do not book flights until the 12-person minimum is officially confirmed!",
    },
  ],
  faq: [
    {
      question: "Do I need to have backpacking experience?",
      answer:
        "No. This trip is beginner-friendly. All transport, accommodation, and activities are organised for you — you just need to show up ready for adventure.",
    },
    {
      question: "Do I need to know how to ride a motorbike for the Ha Giang Loop?",
      answer:
        "Not at all. You can ride pillion with one of our experienced local easy-riders, who will handle the bike while you take in the views. If you do want to ride yourself and have a valid licence, that's an option too.",
    },
    {
      question: "What kind of luggage should I bring?",
      answer:
        "We recommend a backpack or medium-sized duffel — easier to manage on the loop and on transfers between cities.",
    },
    {
      question: "Can I request to share a room with someone?",
      answer:
        "Yes. If you're travelling with a friend, let us know in advance and we'll do our best to place you in the same dorm.",
    },
    {
      question: "What if I don't know anyone?",
      answer:
        "That's completely normal — most travellers join solo. You'll be added to a private WhatsApp group before the trip so you can connect with everyone ahead of time.",
    },
    {
      question: "Is this a party trip?",
      answer:
        "It's a high-energy social trip with unlimited beer hours and great nightlife — but Vietnam is also about culture, mountains, food, and downtime. Join in as much or as little as you like.",
    },
    {
      question: "What if I get sick or injured?",
      answer:
        "Travel insurance is mandatory. Hosts and local staff will assist you in accessing medical care if needed, but medical costs are your responsibility and must be covered by insurance.",
    },
    {
      question: "Will there be WiFi?",
      answer:
        "Yes — all Mad Monkey locations have WiFi, though speeds may vary in remote mountain areas of Ha Giang.",
    },
    {
      question: "Is there a payment plan available?",
      answer:
        "Yes. £70 deposit by 28/05, then £350 by 04/06 and £280 by 18/06. Total cost is £700. Missed payments may result in your spot being released.",
    },
    {
      question: "Is there a minimum number of travellers required?",
      answer:
        "Yes — 12 confirmed travellers by 28/05. If this minimum isn't met, the trip will be cancelled and all payments will be fully refunded.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "If you cancel before the trip is confirmed, you'll receive a full refund of your deposit. If you cancel after the trip is confirmed, all payments are non-refundable. We strongly recommend travel insurance with 'Cancel for Any Reason' (CFAR) coverage.",
    },
  ],
  vibeGallery: [
    { image: vibeMotorbikeImg, alt: "Riding the Ha Giang Loop in Vietnam" },
    { image: vibeCookingImg, alt: "Vietnamese cooking class in Hoi An" },
    { image: vibeBanaHillsImg, alt: "Ba Na Hills Golden Bridge" },
  ],
  footer: {
    copyright: "Powered by Mad Monkey",
  },
};
