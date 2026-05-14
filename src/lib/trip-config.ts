import heroImg from "@/assets/hero-indonesia.jpg";
import nusaLembonganImg from "@/assets/nusa-lembongan.jpg";
import giliTImg from "@/assets/gili-t.jpg";
import kutaLombokImg from "@/assets/kuta-lombok.jpg";
import vibeBoatpartyImg from "@/assets/vibe-boatparty.jpg";
import vibeMantarayImg from "@/assets/vibe-mantaray.jpg";
import vibeAtvImg from "@/assets/vibe-atv.jpg";
import logoImg from "@/assets/mad-monkey-logo.png";

export interface TripConfig {
  creator: {
    name: string;
    instagram: string;
    instagramUrl: string;
    tiktok: string;
    tiktokUrl: string;
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
    name: "WILL GEE",
    instagram: "@will.gee11",
    instagramUrl: "https://instagram.com/will.gee11",
    tiktok: "@willgeeeeee",
    tiktokUrl: "https://tiktok.com/@willgeeeeee",
  },
  poweredBy: {
    name: "Mad Monkey",
    logo: logoImg,
  },
  trip: {
    title: "Indonesia Takeover",
    highlightColor: "red",
    dates: "SEP 6 - 21",
    durationDays: 15,
    locationCount: 5,
    locationLabel: "across Indonesia",
    heroImage: heroImg,
  },
  stripeBookingUrl: "https://buy.stripe.com/00w6oGgqT4be3TW0CSe7s47",
  spots: {
    total: 50,
    remainingText: "ONLY 10 SPOTS LEFT!",
  },
  pricing: {
    currency: "£",
    total: 700,
    deposit: 233.1,
    instalments: [
      { amount: 233.1, due: "23/08/2026" },
      { amount: 233.1, due: "30/08/2026" },
    ],
    depositDeadline: "09/08/2026",
    minTravellers: 12,
  },
  locations: [
    {
      name: "Uluwatu",
      daysLabel: "Days 1-4",
      duration: "4 Days (Sep 6-9)",
      image: heroImg,
      description:
        "Your adventure starts at Mad Monkey Uluwatu. Welcome sunsets, surf lessons, sunrise treks, and live DJ nights to set the tone.",
      highlights: [
        "Day 1 (06/09) — Arrive at DPS Airport. Transfer to Mad Monkey Uluwatu. Welcome Sunset (5PM-7:30PM) at Panorama Point",
        "Day 2 (07/09) — Surf Lesson (9AM-11AM) + Fire Show",
        "Day 3 (08/09) — Mt Batur Sunrise Trekking (1:30AM-11AM). Sauna, hot tub & ice baths",
        "Day 4 (09/09) — Live DJ + Free Flow (8PM-11PM)",
      ],
    },
    {
      name: "Nusa Lembongan",
      daysLabel: "Days 5-6",
      duration: "2 Days (Sep 10-11)",
      image: nusaLembonganImg,
      description:
        "Hop on a fast boat to the island paradise of Nusa Lembongan. Island hopping, pool parties, and turquoise waters.",
      highlights: [
        "Day 5 (10/09) — Taxi to Sanur, 30-min fast boat to Mad Monkey Nusa Lembongan. Ice baths, sauna, gym & luxury pool",
        "Day 6 (11/09) — Island Hopping around Nusa Penida (8:30AM-5PM) + Mad Monkey Pool Party (6PM-10PM)",
      ],
    },
    {
      name: "Gili Trawangan",
      daysLabel: "Days 7-9",
      duration: "3 Days (Sep 12-14)",
      image: giliTImg,
      description:
        "The legendary Gili T. Boat parties, snorkelling, beach volleyball, and a free day to explore.",
      highlights: [
        "Day 7 (12/09) — Early fast boat to Gili T. Mad Monkey Boat Party (2PM-6PM) + Unlimited BBQ & Drinks",
        "Day 8 (13/09) — Monkey Sea Monkey Do snorkelling tour (10:30AM-4PM) + Beach Volleyball Tournament & Live DJ (3PM-7PM)",
        "Day 9 (14/09) — Free day mid-trip to explore Gili T",
      ],
    },
    {
      name: "Kuta Lombok",
      daysLabel: "Days 10-15",
      duration: "6 Days (Sep 15-21)",
      image: kutaLombokImg,
      description:
        "Head to Lombok for the grand finale — waterfalls, surf lessons, BBQ free-flows, and a chilled farewell.",
      highlights: [
        "Day 10 (15/09) — Short boat to Lombok mainland, shuttle to Mad Monkey Kuta Lombok",
        "Day 11 (16/09) — Lombok Signature Waterfall Tour (10AM-5PM)",
        "Day 12 (17/09) — Relax and explore Kuta",
        "Day 13 (19/09) — Surf lesson (9AM-12PM)",
        "Day 14 (20/09) — Surf lesson (9AM-12PM) + BBQ & Free Flow",
        "Day 15 (21/09) — Recovery breakfast + 30-min shuttle to Lombok Airport (LOP)",
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
        "Island accommodation",
      ],
    },
    {
      icon: "bus",
      title: "Transport",
      items: [
        "All internal transport",
        "Group vans between cities",
        "Fast ferries to islands",
        "Does NOT include airport arrival/departure",
      ],
    },
    {
      icon: "utensils",
      title: "Tours & Extras",
      items: [
        "ATV Adventure",
        "Mad Monkey Boat Party",
        "Manta Ray expedition",
        "Group leader in every location",
        "WhatsApp support group",
      ],
    },
  ],
  notIncluded: [
    { title: "International Flights", description: "Flights to and from Indonesia" },
    { title: "Personal Spend", description: "Meals, drinks, and optional activities not listed in the itinerary" },
    { title: "Visas", description: "Tourist Visa (approx. $30–$35)" },
    { title: "Travel Insurance", description: "Mandatory for all travellers" },
  ],
  whoItsFor: [
    "You're an 18–30 year old social traveller looking for the trip of a lifetime.",
    "You love beach days, party nights, and island hopping.",
    "You want the logistics handled so you can just show up and have fun.",
    "You're a solo traveller who wants instant community and core memories.",
    "You're a first-time backpacker looking for an easy way in.",
  ],
  bookingSteps: [
    {
      title: "Pay Your Deposit",
      description:
        "Pay your £233.10 deposit via the booking link by 09/08/2026.",
    },
    {
      title: "Join the Crew",
      description:
        "Once deposited, you'll be added to the private WhatsApp group for pre-trip banter and packing tips.",
    },
    {
      title: 'Wait for the "GO"',
      description:
        "As soon as we hit 12 confirmed travellers (by 09/08), we'll blast the group chat to confirm the takeover is ON.",
    },
    {
      title: "Pay Your Instalments",
      rows: [
        { label: "Instalment 1", amount: "£233.10", due: "23/08/2026" },
        { label: "Instalment 2", amount: "£233.10", due: "30/08/2026" },
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
      question: "What kind of luggage should I bring?",
      answer:
        "We recommend a backpack or medium-sized suitcase (hostels and boats are easier to navigate without oversized luggage).",
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
        "This is a social, high-energy trip with boat parties and nightlife built in — but it also includes beach days, adventure activities, and downtime. You can participate as much or as little as you like.",
    },
    {
      question: "Can I skip activities if I want to relax?",
      answer:
        "Absolutely. While group activities are included, you're free to opt out of anything and enjoy free time instead.",
    },
    {
      question: "What if I get sick or injured?",
      answer:
        "Travel insurance is mandatory. Hosts and local staff will assist you in accessing medical care if needed, but medical costs are your responsibility and must be covered by insurance.",
    },
    {
      question: "Will there be WiFi?",
      answer:
        "Yes — all Mad Monkey locations have WiFi, though speeds may vary depending on island location.",
    },
    {
      question: "Is there a payment plan available?",
      answer:
        "Yes. You pay a £233.10 deposit by 09/08/2026, followed by two instalments of £233.10 — due 23/08/2026 and 30/08/2026. Total cost is £700. Missed payments may result in your spot being released.",
    },
    {
      question: "Is there a minimum number of travellers required?",
      answer:
        "All trips require a minimum of 12 confirmed travellers to be officially confirmed. If this minimum is not met by the deposit deadline, the trip will be cancelled and all payments will be fully refunded.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "If you cancel before the trip is confirmed, you'll receive a full refund of your deposit. If you cancel after the trip is confirmed, all payments are non-refundable. We strongly recommend travel insurance with 'Cancel for Any Reason' (CFAR) coverage.",
    },
  ],
  vibeGallery: [
    {
      image: vibeBoatpartyImg,
      alt: "Sunset boat party in Indonesia",
    },
    {
      image: vibeMantarayImg,
      alt: "Snorkeling with manta rays",
    },
    {
      image: vibeAtvImg,
      alt: "ATV adventure through Bali rice terraces",
    },
  ],
  footer: {
    copyright: `Powered by Mad Monkey`,
  },
};
