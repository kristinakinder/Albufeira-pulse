// Albufeira Pulse - Venues and Events Data File
// Maintained separately for easy updates (ID-free)

export const defaultZones = ["Albufeira", "Albufeira Old Town", "Albufeira Marina", "Albufeira Strip", "Guia", "Ferreiras"];

export const registeredVenues = [
    { 
        name: "Bar Vista Mar", 
        address: "Albufeira", 
        area: "Albufeira", 
        lat: 37.075610, 
        lng: -8.296397, 
        website: "", 
        image: "", 
        schedule: "Daily", 
        author: "Admin" 
    },
    { 
        name: "Vista Mar", 
        address: "Albufeira", 
        area: "Albufeira", 
        lat: 37.075764, 
        lng: -8.296199, 
        website: "", 
        image: "", 
        schedule: "Daily", 
        author: "Admin" 
    },
    { 
        name: "Dom Diniz", 
        address: "Albufeira", 
        area: "Albufeira", 
        lat: 37.080383, 
        lng: -8.290375, 
        website: "", 
        image: "", 
        schedule: "Daily", 
        author: "Admin" 
    },
    { 
        name: "Apolonia", 
        address: "Albufeira", 
        area: "Albufeira", 
        lat: 37.082576, 
        lng: -8.312126, 
        website: "https://www.apolonia.com/en/", 
        image: "", 
        schedule: "Daily", 
        author: "Admin" 
    },
    { 
        name: "Colibri 2", 
        address: "Albufeira", 
        area: "Albufeira", 
        lat: 37.083339, 
        lng: -8.309919, 
        website: "", 
        image: "", 
        schedule: "Daily", 
        author: "Admin" 
    },
    { 
        name: "O Marinheiro", 
        address: "Albufeira", 
        area: "Albufeira", 
        lat: 37.079670, 
        lng: -8.291758, 
        website: "https://www.o-marinheiro.com/", 
        image: "", 
        schedule: "Daily", 
        author: "Admin" 
    }
    // Your husband can easily add more venues here following the exact same structure!
];

export const registeredEvents = [
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
    },
    { 
        title: "LAC Contemporary Art Exhibition: Cultural Horizons", 
        venueName: "Laboratório de Actividades Criativas", 
        zone: "Lagos", 
        category: "ART & CULTURE", 
        date: "2026-11-25", 
        time: "14:00", 
        fee: "Free", 
        desc: "Exploring boundary-pushing contemporary visual arts and independent installations.", 
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=60", 
        author: "Admin" 
    }
];
