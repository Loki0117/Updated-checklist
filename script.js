(function() {
    "use strict";

    // ========================
    // EMAILJS CONFIGURATION - REPLACE WITH YOUR KEYS
    // ========================
    const EMAILJS_CONFIG = {
        PUBLIC_KEY: "f93M_sIhhbMCw4cVt",     // Get from EmailJS dashboard
        SERVICE_ID: "service_vuepezd",             // Your EmailJS service ID
        TEMPLATE_ID: "template_casfjzj"            // Your EmailJS template ID
    };

    // Initialize EmailJS if keys are provided
          let emailJSEnabled = false;

      if (typeof emailjs !== 'undefined') {
          try {
              emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
              emailJSEnabled = true;
              console.log("✅ EmailJS initialized successfully");
          } catch (e) {
              console.warn("EmailJS init failed:", e);
          }
      } else {
          console.warn("❌ EmailJS library not loaded");
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
        { category: 'hotels', title: 'Groom\'s Room Arrangement', desc: 'Preparation area', tag: 'Essential' },
        { category: 'hotels', title: 'Hotel Staff Briefing', desc: 'Service coordination', tag: 'Essential' },
        { category: 'hotels', title: 'Late Check-out Requests', desc: 'Extended stay', tag: 'Optional' },
        { category: 'hotels', title: 'Luggage Handling Service', desc: 'Bell desk', tag: 'Optional' },
        { category: 'hotels', title: 'Concierge Coordination', desc: 'Guest assistance', tag: 'Essential' },
        { category: 'transport', title: 'Guest Airport Transfers', desc: 'Pickup & drop', tag: 'Essential' },
        { category: 'transport', title: 'Bridal Car / Vintage Car', desc: 'Bride arrival', tag: 'Essential' },
        { category: 'transport', title: 'Groom\'s Arrival Vehicle', desc: 'Groom transport', tag: 'Essential' },
        { category: 'transport', title: 'Family Shuttles', desc: 'Group transport', tag: 'Essential' },
        { category: 'transport', title: 'Artist & Vendor Transport', desc: 'Logistics', tag: 'Essential' },
        { category: 'transport', title: 'Return Transfers', desc: 'Post-event', tag: 'Essential' },
        { category: 'transport', title: 'Valet Parking Service', desc: 'Parking management', tag: 'Essential' },
        { category: 'transport', title: 'Backup Vehicles', desc: 'Emergency', tag: 'Optional' },
        { category: 'transport', title: 'Driver Briefing & Routes', desc: 'Route planning', tag: 'Essential' },
        { category: 'transport', title: 'Local Guest Buses', desc: 'Group transport', tag: 'Essential' },
        { category: 'hampers', title: 'Welcome Hampers', desc: 'Arrival gifts', tag: 'Essential' },
        { category: 'hampers', title: 'Bridal Party Gift Boxes', desc: 'Bridesmaids gifts', tag: 'Essential' },
        { category: 'hampers', title: 'Groom\'s Squad Kits', desc: 'Groomsmen gifts', tag: 'Essential' },
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

    const crewData = [
        { title: 'Show Running', desc: 'Senior Associate - Manages event flow' },
        { title: 'Logistics', desc: 'Senior Associate + Runner - Coordinates setup' },
        { title: 'Control Room', desc: 'Senior Associate + Runner - AV management' },
        { title: 'Hospitality', desc: 'Senior Associate + Runner - Guest care' },
        { title: 'Supervisor', desc: 'Senior Associate + Runner - Oversight' },
        { title: 'F&B Connoisseur', desc: 'Runner - Food quality control' },
        { title: 'Artist Manager', desc: 'Senior Associate - Performer coordination' },
        { title: 'Vendor Manager', desc: 'Senior Associate - Vendor liaison' },
        { title: 'Shadowing', desc: 'Runners - Personal assistance' },
        { title: 'Production Manager', desc: 'Senior Associate - Overall oversight' },
        { title: 'OYE Planning', desc: 'Sourcing, contracts, site visits' }
    ];

    // Global state
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

    // Helper: clear errors
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
            el.addEventListener('click', (e) => {
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

    function renderCrew() {
        const crewDiv = document.getElementById('crewDisplay');
        if (crewDiv) {
            crewDiv.innerHTML = crewData.map(c => `<div class="crew-item"><strong>${c.title}</strong><span>${c.desc}</span></div>`).join('');
        }
    }

    // Section navigation & validation
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
        if (sectionNum === 4) {
            renderTabs();
            renderChecklist();
            renderCrew();
            updateCategoryDesc();
        }
        clearErrors();
    }

    function collectFormData() {
        // Get selected priority items
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

    function getSelectedItemsText() {
        const grouped = getSelectedItemsGrouped();
        let text = '';
        for (let cat in grouped) {
            const catName = categories.find(c => c.id === cat)?.name || cat;
            text += `\n📌 ${catName}:\n`;
            grouped[cat].forEach(item => {
                text += `   ✓ ${item.title} - ${item.desc}\n`;
            });
        }
        return text;
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
            
            function downloadPDF() {
            const data = collectFormData();
            const grouped = getSelectedItemsGrouped();
            const totalSelected = Object.values(grouped).flat().length;

            const container = document.createElement('div');
            container.style.padding = '30px';
            container.style.fontFamily = 'Arial, sans-serif';
            container.style.color = '#333';
            container.style.width = '800px';

            const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-IN') : 'N/A';

            let html = `
                <div style="text-align:center; border-bottom:3px solid #e85d04; padding-bottom:15px; margin-bottom:20px;">
                    <h1 style="color:#e85d04;">Oh Yes Events</h1>
                    <h2>Wedding Requirement Summary</h2>
                    <p style="font-size:12px;">Generated on ${new Date().toLocaleString()}</p>
                </div>

                <h3>📋 Client Details</h3>
                <p><strong>Name:</strong> ${data.clientName}</p>
                <p><strong>Phone:</strong> ${data.contactNumber}</p>
                <p><strong>Email:</strong> ${data.email}</p>

                <h3>🎉 Event Details</h3>
                <p><strong>Type:</strong> ${data.eventType}</p>
                <p><strong>Date:</strong> ${formatDate(data.eventDate)}</p>
                <p><strong>Venue:</strong> ${data.venue}</p>
                <p><strong>Guests:</strong> ${data.guestCount}</p>
                <p><strong>Function Days:</strong> ${data.functionDays}</p>

                <h3>💰 Budget</h3>
                <p><strong>Total:</strong> ₹${parseInt(data.totalBudget || 0).toLocaleString('en-IN')}</p>
                <p><strong>Status:</strong> ${data.budgetStatus}</p>
                <p><strong>Breakdown:</strong> ${data.budgetBreakdown || "Not specified"}</p>

                <h3>🎨 Preferences</h3>
                <p><strong>Color Theme:</strong> ${data.colorPalette || "Not specified"}</p>

                <h3>⭐ Priorities</h3>
                <p>${data.priorities || "Not selected"}</p>

                <h3>⚠️ Must-Haves</h3>
                <p>${data.nonNegotiables}</p>

                <h3>🚫 Restrictions</h3>
                <p>${data.restrictions || "None"}</p>

                <h3>📦 Selected Services (${totalSelected})</h3>
            `;

            for (let cat in grouped) {
                const catName = categories.find(c => c.id === cat)?.name || cat;
                html += `<h4>${catName}</h4><ul>`;
                grouped[cat].forEach(item => {
                    html += `<li>${item.title} – ${item.desc}</li>`;
                });
                html += `</ul>`;
            }

            html += `
                <div style="margin-top:30px; text-align:center; font-size:12px; color:#888;">
                    Newsletter Opt-in: ${data.newsletter ? "Yes" : "No"}<br><br>
                    Oh Yes Events — Let's create magic ✨
                </div>
            `;

            container.innerHTML = html;

            const opt = {
                margin: 0.5,
                filename: `OhYes_${data.clientName.replace(/\s/g, '_')}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'a4' }
            };

            html2pdf().set(opt).from(container).save();
        }
            // ========================
    // EMAILJS SEND FUNCTION (UPDATED)
    // ========================
    async function sendEmailWithEmailJS() {
        const statusDiv = document.getElementById('emailStatus');
        if (!emailJSEnabled) {
            // Fallback to mailto if EmailJS not configured
            sendEmailFallback();
            return;
        }

        const data = collectFormData();
        const selectedItemsText = getSelectedItemsText();
        const totalSelected = itemsState.filter(v => v).length;
        
        // Prepare email template parameters
        const templateParams = {
            to_email: "kisneylogesh78823@gmail.com",  // YOUR EMAIL
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
            budget_breakdown: data.budgetBreakdown || "Not specified",
            color_palette: data.colorPalette || "Not specified",
            non_negotiables: data.nonNegotiables,
            restrictions: data.restrictions || "None",
            priorities: data.priorities || "Not specified",
            selected_services: selectedItemsText || "No services selected",
            total_services_selected: totalSelected,
            newsletter_opt_in: data.newsletter ? "Yes" : "No",
            submission_date: new Date().toLocaleString('en-IN')
        };

        if (statusDiv) {
            statusDiv.innerHTML = "📧 Sending email via EmailJS...";
            statusDiv.style.color = "#e85d04";
        }

        try {
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );
            console.log("EmailJS success:", response);
            if (statusDiv) {
                statusDiv.innerHTML = "✅ Email sent successfully! Your wedding plan has been delivered.";
                statusDiv.style.color = "#2e7d32";
            }
        } catch (error) {
            console.error("EmailJS error:", error);
            if (statusDiv) {
                statusDiv.innerHTML = "⚠️ Email failed. Opening email client as backup...";
                statusDiv.style.color = "#d32f2f";
            }
            // Fallback to mailto
            setTimeout(() => sendEmailFallback(), 1000);
        }
    }

    function sendEmailFallback() {
        const data = collectFormData();
        const grouped = getSelectedItemsGrouped();
        let body = `CLIENT: ${data.clientName}\nPhone: ${data.contactNumber}\nEmail: ${data.email}\nEvent: ${data.eventType} on ${data.eventDate}\nVenue: ${data.venue}\nGuests: ${data.guestCount}\nBudget: ₹${data.totalBudget}\nMust-haves: ${data.nonNegotiables}\n\nSELECTED SERVICES:\n`;
        for (let cat in grouped) {
            body += `\n${categories.find(c => c.id === cat)?.name || cat}:\n`;
            grouped[cat].forEach(i => body += `  ✓ ${i.title}\n`);
        }
        window.location.href = `mailto:kisneylogesh78823@gmail.com?subject=Wedding Plan - ${data.clientName}&body=${encodeURIComponent(body)}`;
        const statusDiv = document.getElementById('emailStatus');
        if (statusDiv) statusDiv.innerHTML = '📧 Email client opened.';
    }

    function generateAndSendEmail() {
        sendEmailWithEmailJS();
    }

    function showSuccess() {
        const clientName = document.getElementById('clientName')?.value || 'Friend';
        const firstName = clientName.split('&')[0].split(' ')[0];
        const successSpan = document.getElementById('successClientName');
        if (successSpan) successSpan.innerText = firstName;
        const summaryDiv = document.getElementById('summaryContent');
        if (summaryDiv) summaryDiv.innerHTML = generateSummaryHTML();
        if (formContainer) formContainer.style.display = 'none';
        if (successPanel) successPanel.style.display = 'block';
        setTimeout(() => { downloadPDF(); }, 300);
    }

    function resetForm() {
        itemsState.fill(false);
        currentCategory = 'all';
        currentSection = 1;
        if (formContainer) formContainer.style.display = 'block';
        if (successPanel) successPanel.style.display = 'none';
        document.getElementById('weddingForm')?.reset();
        document.querySelectorAll('.priority-item input').forEach(cb => cb.checked = false);
        showSection(1);
        clearErrors();
        window.scrollTo(0, 0);
    }

    // Event binding
    if (nextBtn) nextBtn.addEventListener('click', () => { if (validateSection(currentSection) && currentSection < totalSections) showSection(currentSection + 1); });
    if (prevBtn) prevBtn.addEventListener('click', () => { if (currentSection > 1) showSection(currentSection - 1); });
    steps.forEach((step, idx) => step.addEventListener('click', () => { if (idx + 1 <= currentSection) showSection(idx + 1); }));
    if (submitBtn) submitBtn.addEventListener('click', () => { if (validateSection(4)) showSuccess(); });

    document.getElementById('downloadPdfFromSuccess')?.addEventListener('click', (e) => { e.preventDefault(); downloadPDF(); });
    document.getElementById('sendEmailFromSuccess')?.addEventListener('click', (e) => { e.preventDefault(); generateAndSendEmail(); });
    document.getElementById('startNewBtn')?.addEventListener('click', (e) => { e.preventDefault(); resetForm(); });

    // Set min date
    const dateInput = document.getElementById('eventDate');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

    // Initialize
    showSection(1);
    renderCrew();
    console.log('App ready — EmailJS integrated. Submit & download buttons functional');
})();