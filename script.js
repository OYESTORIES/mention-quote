// ========================================
// Local Storage and Data Management
// ========================================
let allQuotes = [];
let isAdminLoggedIn = false;

// Initialize the website on page load
document.addEventListener('DOMContentLoaded', function() {
    loadQuotesFromStorage();
    displayLatestQuotes();
    displayFeaturedQuote();
    setupMobileMenu();
    setupEventListeners();
});

// ========================================
// Data Loading and Storage Functions
// ========================================
function loadQuotesFromStorage() {
    const stored = localStorage.getItem('inspireQuotes');
    if (stored) {
        allQuotes = JSON.parse(stored);
    } else {
        allQuotes = getDefaultQuotes();
        saveQuotesToStorage();
    }
}

function saveQuotesToStorage() {
    localStorage.setItem('inspireQuotes', JSON.stringify(allQuotes));
}

function getDefaultQuotes() {
    return [
        // Telugu Quotes
        {
            text: "జీవితం ఒక ఉన్నత ఆశీర్వాదం, దానిని దత్త వcsráలుగా భావించవద్దు.",
            author: "ఓషో",
            language: "telugu",
            category: "life",
            id: Date.now() + Math.random()
        },
        {
            text: "సাఫల్యం దీర్ఘ గమ్యం, ఆ ఆందం పొందటమే ముఖ్యమైనది.",
            author: "ఎ. పీ. జె. అబ్దుల్ కలాం",
            language: "telugu",
            category: "success",
            id: Date.now() + Math.random()
        },
        {
            text: "ప్రేమ జీవితానికి చిక్కుని, చిక్కు జీవితానికి ఉష్ణ తెచ్చిస్తుంది.",
            author: "రవీంద్రనాథ్ ఠాగూర్",
            language: "telugu",
            category: "love",
            id: Date.now() + Math.random()
        },
        {
            text: "మతిమంథనం మన గ్రహాన మీద అపరిమితమైన శక్తి.",
            author: "వాల్టర్ మిస్ట్రెస్",
            language: "telugu",
            category: "motivation",
            id: Date.now() + Math.random()
        },
        {
            text: "నిజమైన మित్రత్వం ఎప్పుడూ నీ గొప్పతనానికి కాకుండా నీ నీచతనానికి కూడా నిలుస్తుంది.",
            author: "అరిస్టాటిల్",
            language: "telugu",
            category: "friendship",
            id: Date.now() + Math.random()
        },
        
        // English Quotes
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            language: "english",
            category: "success",
            id: Date.now() + Math.random()
        },
        {
            text: "Life is what happens when you are busy making other plans.",
            author: "John Lennon",
            language: "english",
            category: "life",
            id: Date.now() + Math.random()
        },
        {
            text: "Love all, trust a few, do wrong to none.",
            author: "William Shakespeare",
            language: "english",
            category: "love",
            id: Date.now() + Math.random()
        },
        {
            text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill",
            language: "english",
            category: "success",
            id: Date.now() + Math.random()
        },
        {
            text: "A friend is someone who knows all about you and still loves you.",
            author: "Elbert Hubbard",
            language: "english",
            category: "friendship",
            id: Date.now() + Math.random()
        },
        {
            text: "Believe you can and you are halfway there.",
            author: "Theodore Roosevelt",
            language: "english",
            category: "motivation",
            id: Date.now() + Math.random()
        },
        {
            text: "Don't watch the clock; do what it does. Keep going.",
            author: "Sam Levenson",
            language: "english",
            category: "motivation",
            id: Date.now() + Math.random()
        },
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela",
            language: "english",
            category: "life",
            id: Date.now() + Math.random()
        },
        {
            text: "In three words I can sum up everything I've learned about life: it goes on.",
            author: "Robert Frost",
            language: "english",
            category: "life",
            id: Date.now() + Math.random()
        },
        {
            text: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle",
            language: "english",
            category: "motivation",
            id: Date.now() + Math.random()
        },
        
        // More Telugu quotes
        {
            text: "మీ భయం మీ ఆలోచన నుండి కుట్టుకుపోతుంది, కానీ ఆశ ఎప్పుడూ కాలువలో ఉంటుంది.",
            author: "స్టీఫెన్ కిం",
            language: "telugu",
            category: "motivation",
            id: Date.now() + Math.random()
        },
        {
            text: "అసంభవమైన విషయాలు సంభవించాయని నమ్ముతాం.",
            author: "రుద్యార్డ్ కిప్లింగ్",
            language: "telugu",
            category: "success",
            id: Date.now() + Math.random()
        }
    ];
}

// ========================================
// Display Functions
// ========================================
function displayLatestQuotes(limit = 6) {
    const container = document.getElementById('latestQuotes');
    const latest = allQuotes.slice(-limit).reverse();
    container.innerHTML = latest.map(quote => createQuoteCard(quote)).join('');
}

function displayFeaturedQuote() {
    if (allQuotes.length === 0) return;
    
    const today = new Date().toDateString();
    let featured = JSON.parse(localStorage.getItem('featuredQuote') || '{}');
    
    if (featured.date !== today) {
        featured = {
            quote: allQuotes[Math.floor(Math.random() * allQuotes.length)],
            date: today
        };
        localStorage.setItem('featuredQuote', JSON.stringify(featured));
    }
    
    const quote = featured.quote;
    document.getElementById('featuredText').textContent = `"${quote.text}"`;
    document.getElementById('featuredAuthor').textContent = `— ${quote.author}`;
}

function createQuoteCard(quote) {
    return `
        <div class="quote-card">
            <div>
                <i class="fas fa-quote-left quote-icon"></i>
                <p class="quote-text">"${quote.text}"</p>
                <p class="quote-author">— ${quote.author}</p>
                <span class="quote-category">${capitalizeFirst(quote.category)}</span>
            </div>
            <div class="quote-actions">
                <button class="btn-copy-quote" onclick="copyQuote('${quote.text} — ${quote.author}')">
                    <i class="fas fa-copy"></i> Copy
                </button>
                <button class="btn-share-quote" onclick="shareQuoteMenu('${quote.text}', '${quote.author}')">
                    <i class="fas fa-share-alt"></i> Share
                </button>
            </div>
        </div>
    `;
}

// ========================================
// Page Navigation
// ========================================
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load page-specific content
    if (pageId === 'categories') {
        displayCategoryQuotes('motivation');
    } else if (pageId === 'telugu') {
        displayTeluguQuotes();
    } else if (pageId === 'english') {
        displayEnglishQuotes();
    } else if (pageId === 'admin') {
        displayAdminQuotesList();
    }
    
    // Close mobile menu
    closeMenuIfMobile();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ========================================
// Category Functions
// ========================================
function filterByCategory(category) {
    const filtered = allQuotes.filter(q => q.category === category);
    const container = document.getElementById('categoryQuotes');
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No quotes found in this category.</p>';
    } else {
        container.innerHTML = filtered.map(quote => createQuoteCard(quote)).join('');
    }
}

function displayCategoryQuotes(category) {
    filterByCategory(category);
}

function filterTeluguByCategory() {
    const category = document.getElementById('teluguCategoryFilter').value;
    displayTeluguQuotes(category);
}

function displayTeluguQuotes(category = '') {
    let filtered = allQuotes.filter(q => q.language === 'telugu');
    
    if (category) {
        filtered = filtered.filter(q => q.category === category);
    }
    
    const container = document.getElementById('teluguQuotes');
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No Telugu quotes found.</p>';
    } else {
        container.innerHTML = filtered.map(quote => createQuoteCard(quote)).join('');
    }
}

function filterEnglishByCategory() {
    const category = document.getElementById('englishCategoryFilter').value;
    displayEnglishQuotes(category);
}

function displayEnglishQuotes(category = '') {
    let filtered = allQuotes.filter(q => q.language === 'english');
    
    if (category) {
        filtered = filtered.filter(q => q.category === category);
    }
    
    const container = document.getElementById('englishQuotes');
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No English quotes found.</p>';
    } else {
        container.innerHTML = filtered.map(quote => createQuoteCard(quote)).join('');
    }
}

// ========================================
// Search Function
// ========================================
function searchQuotes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm === '') {
        displayLatestQuotes();
        return;
    }
    
    const filtered = allQuotes.filter(quote => 
        quote.text.toLowerCase().includes(searchTerm) ||
        quote.author.toLowerCase().includes(searchTerm) ||
        quote.category.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('latestQuotes');
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No quotes found matching your search.</p>';
    } else {
        container.innerHTML = filtered.map(quote => createQuoteCard(quote)).join('');
    }
}

// ========================================
// Copy and Share Functions
// ========================================
function copyQuote(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Quote copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy. Please try again.');
    });
}

function copyFeaturedQuote() {
    const text = document.getElementById('featuredText').textContent + 
                 ' ' + document.getElementById('featuredAuthor').textContent;
    copyQuote(text);
}

function shareQuoteMenu(text, author) {
    const message = `"${text}" — ${author}`;
    showNotification('Share options coming soon!');
}

function shareFeaturedQuote(platform) {
    const text = document.getElementById('featuredText').textContent;
    const author = document.getElementById('featuredAuthor').textContent;
    const message = `${text} ${author} - Inspire Quotes`;
    
    const urls = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(message)}&u=`,
        instagram: '#'
    };
    
    if (urls[platform]) {
        window.open(urls[platform], '_blank');
    }
}

// ========================================
// Contact Form
// ========================================
function submitContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Save to localStorage (in a real app, this would be sent to a server)
    const contacts = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    contacts.push({
        name,
        email,
        subject,
        message,
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('contactMessages', JSON.stringify(contacts));
    
    // Reset form
    event.target.reset();
    showNotification('Thank you! Your message has been received.');
}

// ========================================
// Admin Panel Functions
// ========================================
function adminLogin() {
    const password = document.getElementById('adminPassword').value;
    
    if (password === 'admin123') {
        isAdminLoggedIn = true;
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        showNotification('Admin login successful!');
        displayAdminQuotesList();
    } else {
        showNotification('Wrong password!', 'error');
    }
}

function addNewQuote(event) {
    event.preventDefault();
    
    if (!isAdminLoggedIn) {
        showNotification('Please login first!', 'error');
        return;
    }
    
    const text = document.getElementById('quoteText').value.trim();
    const author = document.getElementById('quoteAuthor').value.trim();
    const language = document.getElementById('quoteLanguage').value;
    const category = document.getElementById('quoteCategory').value;
    
    if (!text || !author || !language || !category) {
        showNotification('Please fill all fields!', 'error');
        return;
    }
    
    const newQuote = {
        text,
        author,
        language,
        category,
        id: Date.now() + Math.random()
    };
    
    allQuotes.push(newQuote);
    saveQuotesToStorage();
    
    // Reset form
    event.target.reset();
    showNotification('Quote added successfully!');
    displayAdminQuotesList();
    displayLatestQuotes();
}

function displayAdminQuotesList() {
    const container = document.getElementById('quotesList');
    
    if (allQuotes.length === 0) {
        container.innerHTML = '<p>No quotes yet.</p>';
        return;
    }
    
    container.innerHTML = allQuotes.map(quote => `
        <div class="admin-quote-item">
            <p><strong>${quote.text}</strong></p>
            <p class="small">— ${quote.author}</p>
            <p class="small">📌 ${capitalizeFirst(quote.language)} | 🏷️ ${capitalizeFirst(quote.category)}</p>
            <button class="btn-delete" onclick="deleteQuote('${quote.id}')">Delete</button>
        </div>
    `).join('');
}

function deleteQuote(id) {
    if (confirm('Are you sure you want to delete this quote?')) {
        allQuotes = allQuotes.filter(q => q.id != id);
        saveQuotesToStorage();
        displayAdminQuotesList();
        showNotification('Quote deleted successfully!');
    }
}

// ========================================
// Mobile Menu
// ========================================
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

function closeMenuIfMobile() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
}

// ========================================
// Utility Functions
// ========================================
function capitalizeFirst(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#EF4444' : '#10B981'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

function setupEventListeners() {
    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenuIfMobile);
    });
}

// ========================================
// SEO and Performance
// ========================================
// Preload featured quote
window.addEventListener('load', () => {
    displayFeaturedQuote();
});

// Service Worker registration for PWA capability (optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable offline capability
    // navigator.serviceWorker.register('sw.js');
}
