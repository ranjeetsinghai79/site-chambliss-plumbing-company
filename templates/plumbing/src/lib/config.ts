import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Chambliss Plumbing Company",
    tagline: "Your San Antonio Plumbing Experts",
    phone: "(210) 797-7630",
    phoneHref: "tel:+12107977630",
    email: "info@chamblissplumbing.com",
    address: "123 Main St",
    city: "San Antonio",
    serviceAreas: ["San Antonio", "Timberwood Park", "Stone Oak", "Bulverde", "Encino Park", "Hill Country Village", "Hollywood Park", "Spring Branch", "Alamo Heights", "Shavano Park", "Castle Hills"],
    license: "MPL 46504",
    since: "1994",
    google_rating: "4.9",
    review_count: "1,400+",
    emergency: true,
    theme: "forest",
    niche: "plumbing",
  },

  services: [
    { icon: "home", title: "Residential Plumbing", desc: "Comprehensive plumbing solutions for your home, from minor repairs to major installations.", urgent: false },
    { icon: "droplets", title: "Drain Cleaning", desc: "Expert drain cleaning services to clear clogs and restore proper flow in your pipes.", urgent: true },
    { icon: "zap", title: "Leak Detection", desc: "Advanced technology to accurately locate and repair hidden leaks, preventing costly damage.", urgent: true },
    { icon: "wrench", title: "Water Heater Services", desc: "Installation, repair, and maintenance for all types of water heaters, including tankless models.", urgent: false },
    { icon: "shield-check", title: "Water Filtration Systems", desc: "Improve your water quality with professional installation of water softeners and filtration systems.", urgent: false },
    { icon: "hammer", title: "Repipe Services", desc: "Full repiping solutions to upgrade old, corroded pipes and ensure a reliable water supply.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "San Antonio", stars: 5, text: "Chambliss Plumbing saved the day! Our water heater burst on a Saturday morning. I called them, and a friendly technician was at our house within two hours. He quickly diagnosed the issue and replaced it with a new tankless unit. The price was fair, and the service was exceptional. Highly recommend!" },
    { name: "Mark T.", location: "Stone Oak", stars: 5, text: "We had a persistent slow drain in our kitchen sink that other plumbers couldn't fix. Chambliss Plumbing came out, used their camera inspection, and found a hidden blockage deep in the line. They cleared it efficiently, and now our sink drains perfectly. Professional, knowledgeable, and worth every penny." },
    { name: "Emily R.", location: "Alamo Heights", stars: 5, text: "I was worried about a potential slab leak, and Chambliss Plumbing provided peace of mind. Their team was thorough, explained every step of the leak detection process, and confirmed there was no major issue. Their honesty and expertise were truly appreciated. I'll definitely call them for any future plumbing needs." }
  ],

  trustBadges: [
    "Licensed Master Plumber", "30+ Years Experience", "1,400+ 5-Star Reviews", "Same-Day Service", "24/7 Emergency"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1400, label: "5-Star Reviews", suffix: "+", decimals: 0 },
    { value: 30, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your emergency, arriving quickly to resolve urgent plumbing issues." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Transparent, honest pricing with no hidden fees, so you know the cost before we start." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and licensed master plumbers for expert service." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work, ensuring your complete satisfaction with every job." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI receptionist is available around the clock to assist you with scheduling and inquiries." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the latest tools and parts for efficient repairs." }
  ],

  formServiceOptions: ["Residential Plumbing", "Plumbing Inspections", "Repair & Maintenance", "Garbage Disposal", "Drain Cleaning", "Leak Detection", "Slab Leak Repair", "Repipe", "Water Softeners", "Water Filtration System", "Reverse Osmosis Water Systems", "Water Heaters", "Tankless Water Heaters", "Hybrid Water Heater", "Tank Type Water Heaters", "Water Heater Repair"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!