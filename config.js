/**
 * INSPIRE QUOTES - CONFIGURATION FILE
 * Customize your website settings here
 */

const CONFIG = {
    // Website Settings
    website: {
        name: "Inspire Quotes",
        tagline: "Daily Inspiration in Telugu & English",
        description: "Explore inspiring quotes in Telugu and English. Find motivation for your journey.",
        color: {
            primary: "#8B5CF6",
            secondary: "#EC4899",
            accent: "#F59E0B"
        }
    },

    // Admin Settings
    admin: {
        password: "admin123",
        // Change to a strong password for production
        // Example: "MySecurePass2024!"
    },

    // Quotes Settings
    quotes: {
        defaultLanguage: "english",
        itemsPerPage: 6,
        enableSearch: true,
        enableFilter: true,
        enableShare: true,
    },

    // Social Media
    social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
        whatsapp: "https://wa.me/"
    },

    // Contact Information
    contact: {
        email: "contact@inspirequotes.com",
        phone: "+91 XXXXXXXXXX",
        address: "Inspire Quotes, India"
    },

    // Features
    features: {
        enableDailyQuote: true,
        enableSearch: true,
        enableCategories: true,
        enableShare: true,
        enableCopy: true,
        enableAdmin: true,
        enableBilingual: true,
    },

    // Categories
    categories: [
        { id: "motivation", name: "Motivation", icon: "fas fa-fire" },
        { id: "love", name: "Love", icon: "fas fa-heart" },
        { id: "life", name: "Life", icon: "fas fa-leaf" },
        { id: "friendship", name: "Friendship", icon: "fas fa-handshake" },
        { id: "success", name: "Success", icon: "fas fa-trophy" }
    ],

    // Languages
    languages: [
        { code: "telugu", name: "Telugu", flag: "🇮🇳" },
        { code: "english", name: "English", flag: "🇬🇧" }
    ],

    // Google Analytics (Optional)
    analytics: {
        enabled: false,
        trackingId: "G-XXXXXXXXXX"
        // Get your tracking ID from Google Analytics
    },

    // Google AdSense (Optional)
    adsense: {
        enabled: false,
        clientId: "ca-pub-xxxxxxxxxxxxxxxx"
        // Get your client ID from Google AdSense
    },

    // Theme Customization
    theme: {
        borderRadius: "12px",
        shadowStrength: "8px 25px rgba(0, 0, 0, 0.12)",
        transitionDuration: "0.3s",
        fontFamily: {
            primary: "'Poppins', sans-serif",
            display: "'Playfair Display', serif"
        }
    },

    // API Endpoints (for future server integration)
    api: {
        baseUrl: "https://api.inspirequotes.com",
        endpoints: {
            quotes: "/api/quotes",
            addQuote: "/api/quotes/add",
            deleteQuote: "/api/quotes/delete",
            contact: "/api/contact"
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
