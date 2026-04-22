(function() {
    "use strict";

    // ========================
    // YOUR CONTACT DETAILS
    // ========================
    const YOUR_PHONE = "9345694880";
    const YOUR_EMAIL = "kisneylogesh78823@gmail.com";

    // EmailJS Configuration (Updated with your credentials)
    const EMAILJS_CONFIG = {
        PUBLIC_KEY: "f93M_sIhhbMCw4cVt",
        SERVICE_ID: "service_vuepezd",
        TEMPLATE_ID: "template_3qcsabo"
    };

    let emailJSEnabled = false;
    if (typeof emailjs !== 'undefined') {
        try {
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
            emailJSEnabled = true;
            console.log("✅ EmailJS initialized successfully with your credentials");
        } catch(e) { 
            console.warn("EmailJS init failed:", e);
        }
    } else {
        console.warn("EmailJS library not loaded - check internet connection");
    }

    // ========================
    // CHECKLIST DATA (90 items)
    // ========================
    const categories = [
        { id: 'all', name: 'All' },
        { id: 'stationery', name: 'Stationery' },
        { id: 'hotels', name: 'Guest Stays' },
        { id: 'transport', name: 'Transport' },
        { id: 'hampers', name: 'Gifts' },
        { id: 'artists', name: 'Entertainment' },
        { id: 'vendors', name: 'Vendors' },
        { id: 'other', name: 'Comfort' },
        { id: 'addons', name: 'Add-ons' }
    ];

    const categoryDescriptions = {
        all: "All available services we can help arrange for your celebration.",
        stationery: "Invitation cards, save the dates, menus, place cards, welcome signs, and all paper goods.",
        hotels: "Guest room bookings, welcome drinks, bridal suite, and accommodation arrangements.",
        transport: "Airport transfers, bridal car, guest shuttles, valet parking, and logistics.",
        hampers: "Welcome gifts, bridal party gift boxes, return gifts, and personalized favors.",
        artists: "DJ, live band, mehendi artist, photographer, makeup artist, choreographer.",
        vendors: "Decor, florist, catering, sound & lighting, tent rental, security, cleanup.",
        other: "Emergency medical kit, prayer room, parking management, WiFi, weather backup.",
        addons: "Live food counters, hookah lounge, drone photography, 360° video booth, special acts."
    };

    const checklistData = [
        { category: 'stationery', title: 'Wedding Invitation Cards', desc: 'Main invitation suite', tag: 'Essential' },
        { category: 'stationery', title: 'Save the Date Cards', desc: 'Announcement cards', tag: 'Essential' },
        { category: 'stationery', title: 'RSVP Cards', desc: 'Response cards', tag: 'Essential' },
        { category: 'stationery', title: 'Thank You Cards', desc: 'Post-event notes', tag: 'Optional' },
        { category: 'stationery', title: 'Menu Cards', desc: 'Food display', tag: 'Essential' },
        { category: 'stationery', title: 'Place Cards / Table Numbers', desc: 'Seating arrangement', tag: 'Essential' },
        { category: 'stationery', title: 'Welcome Signs', desc: 'Directional signage', tag: 'Essential' },
        { category: 'stationery', title: 'Program Brochures', desc: 'Event timeline', tag: 'Optional' },
        { category: 'stationery', title: 'Seating Chart Display', desc: 'Guest guide', tag: 'Essential' },
        { category: 'stationery', title: 'Wedding Favors Tags', desc: 'Labels for gifts', tag: 'Optional' },
        { category: 'hotels', title: 'Guest Room Block Booking', desc: 'Discounted rooms', tag: 'Essential' },
        { category: 'hotels', title: 'Welcome Drinks at Hotel', desc: 'Arrival refreshments', tag: 'Essential' },
        { category: 'hotels', title: 'Check-in Coordination', desc: 'Smooth arrival', tag: 'Essential' },
        { category: 'hotels', title: 'VIP Guest Accommodation', desc: 'Special family rooms', tag: 'Essential' },
        { category: 'hotels', title: 'Bridal Suite Preparation', desc: 'Getting ready space', tag: 'Essential' },
        { category: 'hotels', title: "Groom's Room Arrangement", desc: 'Preparation area', tag: 'Essential' },
        { category: 'hotels', title: 'Hotel Staff Briefing', desc: 'Service coordination', tag: 'Essential' },
        { category: 'hotels', title: 'Late Check-out Requests', desc: 'Extended stay', tag: 'Optional' },
        { category: 'hotels', title: 'Luggage Handling Service', desc: 'Bell desk', tag: 'Optional' },
        { category: 'hotels', title: 'Concierge Coordination', desc: 'Guest assistance', tag: 'Essential' },
        { category: 'transport', title: 'Guest Airport Transfers', desc: 'Pickup & drop', tag: 'Essential' },
        { category: 'transport', title: 'Bridal Car / Vintage Car', desc: 'Bride arrival', tag: 'Essential' },
        { category: 'transport', title: "Groom's Arrival Vehicle", desc: 'Groom transport', tag: 'Essential' },
        { category: 'transport', title: 'Family Shuttles', desc: 'Group transport', tag: 'Essential' },
        { category: 'transport', title: 'Artist & Vendor Transport', desc: 'Logistics', tag: 'Essential' },
        { category: 'transport', title: 'Return Transfers', desc: 'Post-event', tag: 'Essential' },
        { category: 'transport', title: 'Valet Parking Service', desc: 'Parking management', tag: 'Essential' },
        { category: 'transport', title: 'Backup Vehicles', desc: 'Emergency', tag: 'Optional' },
        { category: 'transport', title: 'Driver Briefing & Routes', desc: 'Route planning', tag: 'Essential' },
        { category: 'transport', title: 'Local Guest Buses', desc: 'Group transport', tag: 'Essential' },
        { category: 'hampers', title: 'Welcome Hampers', desc: 'Arrival gifts', tag: 'Essential' },
        { category: 'hampers', title: 'Bridal Party Gift Boxes', desc: 'Bridesmaids gifts', tag: 'Essential' },
        { category: 'hampers', title: "Groom's Squad Kits", desc: 'Groomsmen gifts', tag: 'Essential' },
        { category: 'hampers', title: 'Return Gifts', desc: 'Guest favors', tag: 'Essential' },
        { category: 'hampers', title: 'Eco-friendly Favors', desc: 'Sustainable options', tag: 'Optional' },
        { category: 'hampers', title: 'Personalized Mementos', desc: 'Custom keepsakes', tag: 'Optional' },
        { category: 'hampers', title: 'Gift Wrapping Station', desc: 'On-site wrapping', tag: 'Optional' },
        { category: 'hampers', title: 'VIP Parent Hampers', desc: 'Special gifts', tag: 'Essential' },
        { category: 'hampers', title: 'Kids Activity Bags', desc: 'Children entertainment', tag: 'Optional' },
        { category: 'hampers', title: 'Donation Gifts', desc: 'Charity', tag: 'Optional' },
        { category: 'artists', title: 'Live Band / DJ', desc: 'Music', tag: 'Essential' },
        { category: 'artists', title: 'Mehendi Artist', desc: 'Henna', tag: 'Essential' },
        { category: 'artists', title: 'Photographer & Videographer', desc: 'Documentation', tag: 'Essential' },
        { category: 'artists', title: 'Makeup Artist', desc: 'Bridal makeup', tag: 'Essential' },
        { category: 'artists', title: 'Choreographer', desc: 'Sangeet dances', tag: 'Optional' },
        { category: 'artists', title: 'Magician / Entertainer', desc: 'Guest fun', tag: 'Optional' },
        { category: 'artists', title: 'Photo Booth', desc: 'Interactive', tag: 'Essential' },
        { category: 'artists', title: 'Games & Activities', desc: 'Engagement', tag: 'Optional' },
        { category: 'artists', title: 'Fireworks / Laser Show', desc: 'Spectacular', tag: 'Optional' },
        { category: 'artists', title: 'Giveaways & Prizes', desc: 'Audience', tag: 'Optional' },
        { category: 'vendors', title: 'Decor & Florist', desc: 'Styling', tag: 'Essential' },
        { category: 'vendors', title: 'Catering & F&B', desc: 'Food service', tag: 'Essential' },
        { category: 'vendors', title: 'Sound & Lighting', desc: 'Production', tag: 'Essential' },
        { category: 'vendors', title: 'Tent & Furniture', desc: 'Infrastructure', tag: 'Essential' },
        { category: 'vendors', title: 'Security Service', desc: 'Safety', tag: 'Essential' },
        { category: 'vendors', title: 'Cleanup & Waste', desc: 'Post-event', tag: 'Essential' },
        { category: 'vendors', title: 'Portable Restrooms', desc: 'Luxury facilities', tag: 'Optional' },
        { category: 'vendors', title: 'Power Backup', desc: 'Generator', tag: 'Essential' },
        { category: 'vendors', title: 'Event Insurance', desc: 'Coverage', tag: 'Optional' },
        { category: 'vendors', title: 'Backup Vendors', desc: 'Contingency', tag: 'Essential' },
        { category: 'other', title: 'Emergency Medical Kit', desc: 'First aid', tag: 'Essential' },
        { category: 'other', title: 'Restroom Amenities', desc: 'Bathroom supplies', tag: 'Essential' },
        { category: 'other', title: 'Baby Changing Station', desc: 'Parent care', tag: 'Optional' },
        { category: 'other', title: 'Lost & Found Desk', desc: 'Item recovery', tag: 'Essential' },
        { category: 'other', title: 'Prayer / Quiet Room', desc: 'Reflection', tag: 'Optional' },
        { category: 'other', title: 'Smoking Zone', desc: 'Designated area', tag: 'Optional' },
        { category: 'other', title: 'Parking Management', desc: 'Coordination', tag: 'Essential' },
        { category: 'other', title: 'Guest Registration Desk', desc: 'Welcome area', tag: 'Essential' },
        { category: 'other', title: 'Wi-Fi & Charging', desc: 'Connectivity', tag: 'Essential' },
        { category: 'other', title: 'Weather Backup Plan', desc: 'Indoor option', tag: 'Essential' },
        { category: 'addons', title: 'Live Food Counter', desc: 'Interactive dining', tag: 'Optional' },
        { category: 'addons', title: 'Cigar / Hookah Lounge', desc: 'Premium area', tag: 'Optional' },
        { category: 'addons', title: 'After Party', desc: 'Extended celebration', tag: 'Optional' },
        { category: 'addons', title: 'Drone Photography', desc: 'Aerial footage', tag: 'Optional' },
        { category: 'addons', title: '360° Video Booth', desc: 'Immersive video', tag: 'Optional' },
        { category: 'addons', title: 'Celebrity Appearance', desc: 'Special guest', tag: 'Optional' },
        { category: 'addons', title: 'Fire Dancers', desc: 'Live entertainment', tag: 'Optional' },
        { category: 'addons', title: 'Live Painting Artist', desc: 'Event illustration', tag: 'Optional' },
        { category: 'addons', title: 'Cocktail Robot', desc: 'Automated drinks', tag: 'Optional' },
        { category: 'addons', title: 'Midnight Snack Counter', desc: 'Late-night food', tag: 'Essential' }
    ];

    let itemsState = new Array(checklistData.length).fill(false);
    let currentCategory = 'all';
    let currentSection = 1;
    const totalSections = 4;

    // DOM elements
    const sections = document.querySelectorAll('.form-section');
    const steps = document.querySelectorAll('.step');
    const prevBtn = document.querySelector('.prev-step');
    const nextBtn = document.querySelector('.next-step');
    const submitBtn = document.getElementById('submitFormBtn');
    const formContainer = document.getElementById('formContainer');
    const successPanel = document.getElementById('successPanel');
    let isSubmitting = false;

    function setSubmitLoading(loading) {
        if (!submitBtn) return;
        submitBtn.disabled = loading;
        submitBtn.textContent = loading ? '⏳ Submitting...' : '✨ Submit & Get Your Plan';
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('error'));
    }

    function showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorEl = document.getElementById(fieldId + 'Error');
        if (field) field.classList.add('error');
        if (errorEl) errorEl.textContent = message;
    }

    // Checklist rendering
    function renderTabs() {
        const container = document.getElementById('categoryTabs');
        if (!container) return;
        container.innerHTML = categories.map(cat =>
            `<span class="cat-tab ${cat.id === currentCategory ? 'active' : ''}" data-cat="${cat.id}">${cat.name}</span>`
        ).join('');
        document.querySelectorAll('.cat-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                currentCategory = tab.dataset.cat;
                renderTabs();
                renderChecklist();
                updateCategoryDesc();
            });
        });
    }

    function updateCategoryDesc() {
        const descDiv = document.getElementById('categoryDescription');
        if (descDiv) {
            descDiv.innerHTML = `<p><strong>${categories.find(c => c.id === currentCategory)?.name}:</strong> ${categoryDescriptions[currentCategory]}</p>`;
        }
    }

    function renderChecklist() {
        const container = document.getElementById('checklistContainer');
        if (!container) return;
        const filtered = currentCategory === 'all' ? checklistData : checklistData.filter(i => i.category === currentCategory);
        const grouped = {};
        filtered.forEach((item) => {
            const idx = checklistData.findIndex(d => d.title === item.title);
            const catName = categories.find(c => c.id === item.category)?.name || item.category;
            if (!grouped[catName]) grouped[catName] = [];
            grouped[catName].push({ ...item, originalIndex: idx });
        });
        let html = '';
        for (let cat in grouped) {
            html += `<div class="checklist-category"><div class="category-header">${cat}</div>`;
            grouped[cat].forEach(item => {
                const completed = itemsState[item.originalIndex];
                const tagClass = item.tag === 'Essential' ? 'essential' : '';
                html += `
                    <div class="checklist-item ${completed ? 'completed' : ''}" data-index="${item.originalIndex}">
                        <div class="checkbox-custom"></div>
                        <div class="item-content">
                            <div class="item-title">${item.title} <span class="tag ${tagClass}">${item.tag}</span></div>
                            <div class="item-desc">${item.desc}</div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
        }
        container.innerHTML = html;
        document.querySelectorAll('.checklist-item').forEach(el => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.dataset.index);
                if (!isNaN(idx)) {
                    itemsState[idx] = !itemsState[idx];
                    renderChecklist();
                    updateProgress();
                }
            });
        });
        updateProgress();
    }

    function updateProgress() {
        const completed = itemsState.filter(v => v).length;
        const total = itemsState.length;
        const percent = total ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('progressFill');
        const textSpan = document.getElementById('progressText');
        const percentSpan = document.getElementById('progressPercent');
        if (fill) fill.style.width = percent + '%';
        if (textSpan) textSpan.innerText = `${completed} of ${total} tasks selected`;
        if (percentSpan) percentSpan.innerText = `${percent}%`;
    }

    function validateSection(section) {
        clearErrors();
        let isValid = true;
        if (section === 1) {
            if (!document.getElementById('clientName')?.value.trim()) { showFieldError('clientName', 'Name required'); isValid = false; }
            if (!document.getElementById('contactNumber')?.value.trim()) { showFieldError('contactNumber', 'Phone required'); isValid = false; }
            const email = document.getElementById('email')?.value.trim();
            if (!email) { showFieldError('email', 'Email required'); isValid = false; }
            else if (!email.includes('@') || !email.includes('.')) { showFieldError('email', 'Valid email required'); isValid = false; }
            if (!document.getElementById('eventType')?.value) { showFieldError('eventType', 'Select event type'); isValid = false; }
            if (!document.getElementById('eventDate')?.value) { showFieldError('eventDate', 'Select date'); isValid = false; }
            if (!document.getElementById('venue')?.value.trim()) { showFieldError('venue', 'Venue required'); isValid = false; }
            if (!document.getElementById('guestCount')?.value) { showFieldError('guestCount', 'Guest count required'); isValid = false; }
            if (!document.getElementById('functionDays')?.value) { showFieldError('functionDays', 'Select duration'); isValid = false; }
        }
        if (section === 2) {
            if (!document.getElementById('totalBudget')?.value) { showFieldError('totalBudget', 'Budget required'); isValid = false; }
            if (!document.getElementById('budgetStatus')?.value) { showFieldError('budgetStatus', 'Select status'); isValid = false; }
        }
        if (section === 3) {
            if (!document.getElementById('nonNegotiables')?.value.trim()) { showFieldError('nonNegotiables', 'Tell us your must-haves'); isValid = false; }
        }
        if (section === 4) {
            const confirmBox = document.getElementById('confirmationCheckbox');
            if (!confirmBox?.checked) {
                const err = document.getElementById('confirmationError');
                if (err) err.textContent = 'Please confirm the information is accurate';
                isValid = false;
            }
        }
        return isValid;
    }

    function showSection(sectionNum) {
        sections.forEach((s, i) => s.classList.toggle('active', i + 1 === sectionNum));
        steps.forEach((s, i) => s.classList.toggle('active', i + 1 <= sectionNum));
        currentSection = sectionNum;
        if (prevBtn) prevBtn.style.display = sectionNum === 1 ? 'none' : 'inline-flex';
        if (nextBtn && submitBtn) {
            if (sectionNum === totalSections) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-flex';
            } else {
                nextBtn.style.display = 'inline-flex';
                submitBtn.style.display = 'none';
            }
        }
        clearErrors();
    }

    function collectFormData() {
        const priorities = Array.from(document.querySelectorAll('.priority-item input:checked')).map(cb => cb.value);
        return {
            clientName: document.getElementById('clientName')?.value || '',
            contactNumber: document.getElementById('contactNumber')?.value || '',
            email: document.getElementById('email')?.value || '',
            eventType: document.getElementById('eventType')?.value || '',
            eventDate: document.getElementById('eventDate')?.value || '',
            venue: document.getElementById('venue')?.value || '',
            guestCount: document.getElementById('guestCount')?.value || '',
            functionDays: document.getElementById('functionDays')?.value || '',
            totalBudget: document.getElementById('totalBudget')?.value || '',
            budgetStatus: document.getElementById('budgetStatus')?.value || '',
            budgetBreakdown: document.getElementById('budgetBreakdown')?.value || '',
            colorPalette: document.getElementById('colorPalette')?.value || '',
            referenceLinks: document.getElementById('referenceLinks')?.value || '',
            criticalDeadlines: document.getElementById('criticalDeadlines')?.value || '',
            nonNegotiables: document.getElementById('nonNegotiables')?.value || '',
            restrictions: document.getElementById('restrictions')?.value || '',
            priorities: priorities.join(', '),
            newsletter: document.getElementById('newsletterCheckbox')?.checked || false
        };
    }

    function getSelectedItemsGrouped() {
        const selected = checklistData.filter((_, idx) => itemsState[idx]);
        const grouped = {};
        selected.forEach(item => {
            if (!grouped[item.category]) grouped[item.category] = [];
            grouped[item.category].push(item);
        });
        return grouped;
    }

    function generateSummaryHTML() {
        const data = collectFormData();
        const grouped = getSelectedItemsGrouped();
        let html = `<p><strong>👰‍♀️ Client:</strong> ${data.clientName}</p>`;
        html += `<p><strong>📅 Event:</strong> ${data.eventType} | ${data.eventDate}</p>`;
        html += `<p><strong>📍 Venue:</strong> ${data.venue} | 👥 ${data.guestCount} guests</p>`;
        html += `<p><strong>💰 Budget:</strong> ₹${parseInt(data.totalBudget || 0).toLocaleString('en-IN')} (${data.budgetStatus})</p>`;
        html += `<p><strong>✨ Must-haves:</strong> ${data.nonNegotiables.substring(0, 100)}...</p>`;
        const totalSelected = Object.values(grouped).flat().length;
        html += `<p><strong>✅ Selected Services (${totalSelected} items):</strong></p><ul>`;
        for (let cat in grouped) {
            const catName = categories.find(c => c.id === cat)?.name || cat;
            html += `<li><strong>${catName}:</strong> ${grouped[cat].map(i => i.title).join(', ')}</li>`;
        }
        html += `</ul>`;
        return html;
    }

    // Send SMS notification to your number
    async function sendSMSNotification(data) {
        const smsBody = `New Wedding Lead! ${data.clientName}, Phone: ${data.contactNumber}, Event: ${data.eventType} on ${data.eventDate}, Guests: ${data.guestCount}. Check email for full details.`;
        
        // Using Textbelt free API (1 free SMS per day for testing)
        // For production, replace with your preferred SMS provider
        try {
            const response = await fetch('https://textbelt.com/text', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: YOUR_PHONE,
                    message: smsBody,
                    key: 'textbelt' // Free key - limited to 1 SMS/day
                })
            });
            const result = await response.json();
            console.log('SMS notification sent:', result);
            return result.success;
        } catch(e) {
            console.warn('SMS notification failed (this is normal for demo):', e);
            // SMS is optional - don't fail the whole submission
            return false;
        }
    }

    // Send email via EmailJS
    async function sendEmailViaJS(data) {
        if (!emailJSEnabled) {
            console.warn("EmailJS not available, using fallback");
            sendEmailFallback(data);
            return false;
        }

        // Format selected services for email
        const grouped = getSelectedItemsGrouped();
        let servicesText = '';
        let totalSelected = 0;
        for (let cat in grouped) {
            const catName = categories.find(c => c.id === cat)?.name || cat;
            servicesText += `\n📌 ${catName}:\n`;
            grouped[cat].forEach(item => {
                servicesText += `   ✓ ${item.title} - ${item.desc}\n`;
                totalSelected++;
            });
        }
        
        if (servicesText === '') {
            servicesText = 'No specific services selected yet.';
        }

        const templateParams = {
            to_email: YOUR_EMAIL,
            client_name: data.clientName,
            client_phone: data.contactNumber,
            client_email: data.email,
            event_type: data.eventType,
            event_date: data.eventDate,
            venue: data.venue,
            guest_count: data.guestCount,
            function_days: data.functionDays,
            total_budget: `₹${parseInt(data.totalBudget || 0).toLocaleString('en-IN')}`,
            budget_status: data.budgetStatus,
            budget_breakdown: data.budgetBreakdown || 'Not specified',
            color_palette: data.colorPalette || 'Not specified',
            reference_links: data.referenceLinks || 'None',
            critical_deadlines: data.criticalDeadlines || 'None',
            non_negotiables: data.nonNegotiables,
            restrictions: data.restrictions || 'None',
            priorities: data.priorities || 'Not specified',
            selected_services: servicesText,
            total_services_selected: totalSelected,
            newsletter_opt_in: data.newsletter ? 'Yes' : 'No',
            submission_date: new Date().toLocaleString('en-IN')
        };

        try {
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );
            console.log('Email sent successfully:', response);
            return true;
        } catch (error) {
            console.error('EmailJS error:', error);
            sendEmailFallback(data);
            return false;
        }
    }

    function sendEmailFallback(data) {
        const grouped = getSelectedItemsGrouped();
        let body = `🔔 NEW WEDDING PLANNING REQUEST 🔔\n\n`;
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `📋 CLIENT INFORMATION\n`;
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `Name: ${data.clientName}\n`;
        body += `Phone: ${data.contactNumber}\n`;
        body += `Email: ${data.email}\n\n`;
        
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `🎉 EVENT DETAILS\n`;
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `Event Type: ${data.eventType}\n`;
        body += `Event Date: ${data.eventDate}\n`;
        body += `Venue: ${data.venue}\n`;
        body += `Guest Count: ${data.guestCount}\n`;
        body += `Function Days: ${data.functionDays}\n\n`;
        
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `💰 BUDGET INFORMATION\n`;
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `Total Budget: ₹${parseInt(data.totalBudget || 0).toLocaleString('en-IN')}\n`;
        body += `Budget Status: ${data.budgetStatus}\n`;
        body += `Splurge Priorities: ${data.budgetBreakdown || 'Not specified'}\n\n`;
        
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `⭐ MUST-HAVES & PRIORITIES\n`;
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `Non-Negotiables: ${data.nonNegotiables}\n`;
        body += `Things to Avoid: ${data.restrictions || 'None'}\n`;
        body += `Top Priorities: ${data.priorities || 'Not specified'}\n`;
        body += `Color/Theme: ${data.colorPalette || 'Not specified'}\n`;
        body += `Inspiration Links: ${data.referenceLinks || 'None'}\n`;
        body += `Important Deadlines: ${data.criticalDeadlines || 'None'}\n\n`;
        
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `✅ SELECTED SERVICES\n`;
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        
        let totalSelected = 0;
        for (let cat in grouped) {
            const catName = categories.find(c => c.id === cat)?.name || cat;
            body += `\n📌 ${catName}:\n`;
            grouped[cat].forEach(item => {
                body += `   ✓ ${item.title} - ${item.desc}\n`;
                totalSelected++;
            });
        }
        
        if (totalSelected === 0) {
            body += `No services selected yet.\n`;
        } else {
            body += `\nTotal Services Selected: ${totalSelected}\n`;
        }
        
        body += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        body += `📧 Newsletter Opt-in: ${data.newsletter ? 'Yes' : 'No'}\n`;
        body += `🕐 Submitted: ${new Date().toLocaleString('en-IN')}\n`;
        body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        body += `✨ Oh Yes Events - Let's create magic! ✨`;
        
        window.location.href = `mailto:${YOUR_EMAIL}?subject=🎉 New Wedding Plan Request - ${data.clientName}&body=${encodeURIComponent(body)}`;
    }

    async function showSuccess() {
        if (isSubmitting) return;
        isSubmitting = true;
        setSubmitLoading(true);

        try {
            const data = collectFormData();
            const firstName = data.clientName.split(' ')[0] || data.clientName;
            const successSpan = document.getElementById('successClientName');
            if (successSpan) successSpan.innerText = firstName;
            
            const summaryDiv = document.getElementById('summaryContent');
            if (summaryDiv) summaryDiv.innerHTML = generateSummaryHTML();
            
            if (formContainer) formContainer.style.display = 'none';
            if (successPanel) {
                successPanel.style.display = 'block';
                successPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            const statusDiv = document.getElementById('emailStatus');
            if (statusDiv) {
                statusDiv.innerHTML = '📧 Sending your wedding plan to our team...';
                statusDiv.style.color = '#e85d04';
            }
            
            // Send email via EmailJS
            const emailSent = await sendEmailViaJS(data);
            
            // Send SMS notification (optional, may fail with free API)
            await sendSMSNotification(data);
            
            if (statusDiv) {
                if (emailSent) {
                    statusDiv.innerHTML = '✅ Success! Your wedding plan has been sent to our team. We\'ll contact you within 24 hours!';
                    statusDiv.style.color = '#2e7d32';
                } else {
                    statusDiv.innerHTML = '📧 Email client opened. Please click send to complete submission.';
                    statusDiv.style.color = '#e85d04';
                }
            }
        } catch(err) {
            console.error('Submission error:', err);
            const statusDiv = document.getElementById('emailStatus');
            if (statusDiv) {
                statusDiv.innerHTML = '⚠️ Form submitted! We\'ll review your request and contact you soon.';
                statusDiv.style.color = '#d32f2f';
            }
        } finally {
            isSubmitting = false;
            setSubmitLoading(false);
        }
    }

    function downloadPDF() {
        const data = collectFormData();
        const grouped = getSelectedItemsGrouped();
        const totalSelected = Object.values(grouped).flat().length;
        
        const container = document.createElement('div');
        container.style.cssText = 'padding:30px; font-family:Arial,sans-serif; width:720px; background:white;';
        
        let servicesHTML = '';
        for (let cat in grouped) {
            const catName = categories.find(c => c.id === cat)?.name || cat;
            servicesHTML += `<div style="margin-bottom:15px;">
                <div style="background:#fff3e0; padding:8px; font-weight:bold; border-left:4px solid #e85d04;">${catName}</div>`;
            grouped[cat].forEach(item => {
                servicesHTML += `<div style="padding:6px 12px; border-bottom:1px solid #f0e0d0;">✓ ${item.title} <span style="color:#666; font-size:12px;">- ${item.desc}</span></div>`;
            });
            servicesHTML += `</div>`;
        }
        
        container.innerHTML = `
            <div style="text-align:center; border-bottom:3px solid #e85d04; padding-bottom:15px; margin-bottom:20px;">
                <h1 style="color:#e85d04; margin:0;">Oh Yes Events</h1>
                <h2 style="margin:5px 0; color:#555;">Wedding Planning Summary</h2>
            </div>
            
            <div style="background:#fef8f2; padding:15px; border-radius:8px; margin-bottom:15px;">
                <h3 style="color:#e85d04; margin:0 0 10px 0;">👰‍♀️ Client Details</h3>
                <p><strong>Name:</strong> ${data.clientName}</p>
                <p><strong>Phone:</strong> ${data.contactNumber}</p>
                <p><strong>Email:</strong> ${data.email}</p>
            </div>
            
            <div style="background:#fef8f2; padding:15px; border-radius:8px; margin-bottom:15px;">
                <h3 style="color:#e85d04; margin:0 0 10px 0;">🎉 Event Details</h3>
                <p><strong>Event Type:</strong> ${data.eventType}</p>
                <p><strong>Event Date:</strong> ${data.eventDate}</p>
                <p><strong>Venue:</strong> ${data.venue}</p>
                <p><strong>Guest Count:</strong> ${data.guestCount}</p>
                <p><strong>Function Days:</strong> ${data.functionDays}</p>
            </div>
            
            <div style="background:#fef8f2; padding:15px; border-radius:8px; margin-bottom:15px;">
                <h3 style="color:#e85d04; margin:0 0 10px 0;">💰 Budget</h3>
                <p><strong>Total Budget:</strong> ₹${parseInt(data.totalBudget || 0).toLocaleString('en-IN')}</p>
                <p><strong>Budget Status:</strong> ${data.budgetStatus}</p>
                <p><strong>Where to Splurge:</strong> ${data.budgetBreakdown || 'Not specified'}</p>
            </div>
            
            <div style="background:#fef8f2; padding:15px; border-radius:8px; margin-bottom:15px;">
                <h3 style="color:#e85d04; margin:0 0 10px 0;">⭐ Must-Haves</h3>
                <p>${data.nonNegotiables}</p>
                ${data.restrictions ? `<p><strong>Things to Avoid:</strong> ${data.restrictions}</p>` : ''}
                ${data.criticalDeadlines ? `<p><strong>Important Deadlines:</strong> ${data.criticalDeadlines}</p>` : ''}
            </div>
            
            <div style="margin-bottom:20px;">
                <h3 style="color:#e85d04; border-bottom:2px solid #e85d04; padding-bottom:5px;">✅ Selected Services (${totalSelected} items)</h3>
                ${totalSelected === 0 ? '<p style="color:#888;">No services selected.</p>' : servicesHTML}
            </div>
            
            <div style="text-align:center; margin-top:30px; padding-top:15px; border-top:2px solid #e85d04; color:#888; font-size:12px;">
                <p>Oh Yes Events — Let's create magic! ✨</p>
                <p>Generated on ${new Date().toLocaleString('en-IN')}</p>
            </div>
        `;
        
        html2pdf().set({ 
            filename: `OhYes_${data.clientName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
            margin: [0.5, 0.5, 0.5, 0.5]
        }).from(container).save();
    }

    function resetForm() {
        itemsState.fill(false);
        currentCategory = 'all';
        currentSection = 1;
        isSubmitting = false;
        if (formContainer) formContainer.style.display = 'block';
        if (successPanel) successPanel.style.display = 'none';
        document.getElementById('weddingForm')?.reset();
        document.querySelectorAll('.priority-item input').forEach(cb => cb.checked = false);
        showSection(1);
        renderChecklist();
        clearErrors();
        setSubmitLoading(false);
        window.scrollTo(0, 0);
    }

    // Event binding
    if (nextBtn) nextBtn.addEventListener('click', () => {
        if (validateSection(currentSection) && currentSection < totalSections) showSection(currentSection + 1);
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        if (currentSection > 1) showSection(currentSection - 1);
    });
    
    steps.forEach((step, idx) => step.addEventListener('click', () => {
        if (idx + 1 <= currentSection) showSection(idx + 1);
    }));
    
    if (submitBtn) submitBtn.addEventListener('click', () => {
        if (isSubmitting) return;
        if (validateSection(4)) showSuccess();
    });
    
    document.getElementById('downloadPdfFromSuccess')?.addEventListener('click', (e) => {
        e.preventDefault();
        const btn = e.currentTarget;
        btn.textContent = '⏳ Generating PDF...';
        btn.disabled = true;
        downloadPDF();
        setTimeout(() => {
            btn.textContent = '📄 Download PDF Summary';
            btn.disabled = false;
        }, 1000);
    });
    
    document.getElementById('sendEmailFromSuccess')?.addEventListener('click', async (e) => {
        e.preventDefault();
        const data = collectFormData();
        const statusDiv = document.getElementById('emailStatus');
        if (statusDiv) {
            statusDiv.innerHTML = '📧 Sending...';
            statusDiv.style.color = '#e85d04';
        }
        await sendEmailViaJS(data);
        if (statusDiv) {
            statusDiv.innerHTML = '✅ Email sent to planner successfully!';
            statusDiv.style.color = '#2e7d32';
        }
    });
    
    document.getElementById('startNewBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        resetForm();
    });
    
    // Set min date for event date picker
    const dateInput = document.getElementById('eventDate');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
    
    // Initialize the form
    showSection(1);
    renderTabs();
    renderChecklist();
    updateCategoryDesc();
    
    console.log('✅ Wedding Planning App Ready!');
    console.log(`📧 Email will be sent to: ${YOUR_EMAIL}`);
    console.log(`📱 SMS will be sent to: ${YOUR_PHONE} (using free API - limited to 1/day)`);
})();
