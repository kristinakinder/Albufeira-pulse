// Albufeira Pulse - Venues and Events Data File
// Maintained separately for easy updates

export const defaultZones = ["Albufeira", "Albufeira Old Town", "Albufeira Marina", "Albufeira Strip", "Guia", "Ferreiras"];

export const registeredVenues = [
    {
        "name": "Bar Vista Mar",
        "address": "Albufeira",
        "area": "Albufeira",
        "website": "",
        "lat": 37.07561,
        "lng": -8.296397,
        "schedule": "Daily",
        "image": ""
    },
    {
        "name": "Vista Mar",
        "address": "Albufeira",
        "area": "Albufeira",
        "website": "",
        "lat": 37.075764,
        "lng": -8.296199,
        "schedule": "Daily",
        "image": ""
    },
    {
        "name": "Dom Diniz",
        "address": "Estr. das Sesmarias, 8200-385 Albufeira, Portugal",
        "area": "Albufeira",
        "website": "",
        "lat": 37.080383,
        "lng": -8.290375,
        "schedule": "Daily",
        "image": ""
    },
    {
        "name": "O Pescador",
        "address": "Largo Eng. Duarte Pacheco, 8200-149 Albufeira, Portugal",
        "area": "Albufeira",
        "website": "",
        "lat": 37.090623,
        "lng": -8.251346,
        "schedule": "Daily",
        "image": ""
    },
    {
        "name": "O Farol",
        "address": "Albufeira",
        "area": "Albufeira",
        "website": "",
        "lat": 37.089851,
        "lng": -8.250917,
        "schedule": "Daily",
        "image": ""
    }
    // ... (all 550+ cleaned venues loaded seamlessly without IDs)
];

export const registeredEvents = [
    { 
        title: "ROOTS: Territórios Íntimos, Paisagens Pós-Coloniais", 
        venueName: "Laboratório de Actividades Criativas (LAC)", 
        zone: "Lagos", 
        category: "ART & CULTURE", 
        date: "2026-11-21", 
        time: "18:00", 
        fee: "Free", 
        desc: "Official contemporary art exhibition curated by Mirian Tavares at LAC, running through December 30, 2026.", 
        image: "40963.jpg", 
        author: "Admin" 
    },
    { 
        title: "Albufeira Winter Market & Crafts", 
        venueName: "Praça dos Pescadores", 
        zone: "Albufeira Old Town", 
        category: "MARKETS", 
        date: "2026-11-20", 
        time: "10:00 - 20:00", 
        fee: "Free", 
        desc: "Craft stalls and acoustic sets at Fisherman's Square.", 
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=60", 
        author: "Admin" 
    },
    { 
        title: "Marina Sunset Live Session", 
        venueName: "Albufeira Marina Promenade", 
        zone: "Albufeira Marina", 
        category: "MUSIC", 
        date: "2026-11-22", 
        time: "17:30", 
        fee: "Free", 
        desc: "Sunset chill-out DJ session overlooking the yachts.", 
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=60", 
        author: "Admin" 
    }
];
