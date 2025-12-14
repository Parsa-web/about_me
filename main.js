// Translations
const translations = {
    fa: {
        nav: { about: "درباره من", skills: "مهارت‌ها", portfolio: "نمونه‌کارها", contact: "ارتباط" },
        hero: {
            badge: "برنامه‌نویس پایتون و توسعه‌دهنده فرانت‌اند",
            title: "سلام! من پارسا دهقانی‌ام.",
            description: "عاشق یادگیری، تجربه‌های تازه و ساختن محصولاتی هستم که نتیجه‌شان واقعی و ملموس باشد. اینجا روایت مسیر رشد من است؛ جایی برای به اشتراک گذاشتن پروژه‌ها، ایده‌ها و چیزی که یاد گرفته‌ام.",
            viewPortfolio: "دیدن نمونه‌کارها",
            contact: "در تماس باشیم",
            profile: {
                title: "دنبال ساخت تجربه‌های کاربری روان و تمیز هستم.",
                description: "به‌روزرسانی طراحی‌ها و توسعه سمت فرانت با HTML، CSS و JavaScript، در کنار ساخت ابزارهای کاربردی با پایتون."
            }
        },
        about: {
            title: "درباره من",
            p1: "سلام! من پارسا دهقانی هستم، برنامه‌نویس پایتون و توسعه‌دهنده‌ی فرانت‌اند با تمرکز روی HTML و CSS. از همون اول با ساختن صفحه‌های تمیز و سریع برای وب جذب دنیای توسعه شدم و حالا سعی می‌کنم این علاقه رو با پروژه‌های واقعی ترکیب کنم.",
            p2: "کار با من یعنی توجه به جزئیات، مشتاق بودن برای همکاری و آماده بودن برای تغییرات. هر پروژه برام فرصتیه برای یادگیری بیشتر و ساختن تجربه‌ای که واقعا به درد بخوره.",
            p3: "این وب‌سایت رو ساختم تا مسیرم رو ثبت کنم، پروژه‌های جدیدم رو معرفی کنم و با آدم‌هایی که دغدغه‌های مشترک دارن در ارتباط باشم.",
            beliefs: {
                title: "چند باور که همیشه همراهمه",
                "1": { title: "یادگیری مستمر", desc: "هر پروژه فرصتی برای کشف ابزار و تکنیک‌های تازه است." },
                "2": { title: "زیبایی در سادگی", desc: "رابط کاربری مؤثر همونیه که کاربر رو سرراست به هدفش می‌رسونه." },
                "3": { title: "همکاری مفید", desc: "ارتباط شفاف و بازخورد صادقانه موتور حرکت تیمه." }
            }
        },
        skills: {
            title: "مهارت‌های کلیدی",
            description: "ترکیبی از توسعه سمت کاربر و ساخت ابزارهای پشتیبان با پایتون که کمک می‌کند ایده‌ها سریع‌تر به محصول تبدیل شوند.",
            expanding: "در حال گسترش",
            python: "اتومات‌سازی، اسکریپت‌نویسی و ساخت ابزارهای پشت صحنه برای پشتیبانی از پروژه‌های وب.",
            html: "معماری صفحات تمیز و قابل توسعه برای تجربه کاربری شفاف.",
            css: "طراحی‌های واکنش‌گرا، انیمیشن‌های ظریف و رعایت جزئیات بصری.",
            js: "تعامل‌های کاربر محور و پیاده‌سازی رفتارهای پویا در فرانت‌اند."
        },
        portfolio: {
            title: "نمونه‌کارها",
            description: "چند پروژه‌ای که با تمرکز روی تجربه کاربری، سرعت و تمیزی کد توسعه داده‌ام.",
            collaborate: "همکاری می‌خوای؟ همینجا پیام بده",
            viewOnline: "مشاهده آنلاین",
            digikala: {
                title: "کلون صفحه اصلی دیجی‌کالا",
                description: "بازطراحی واکنش‌گرا از صفحه اصلی دیجی‌کالا با Bootstrap برای تمرین ساختاردهی ماژولار و چینش محتوای پیچیده."
            },
            panelModir: {
                title: "پنل مدیر",
                description: "پنل مدیریتی کامل برای مدیریت محصولات، سفارشات، کاربران و نظرات با رابط کاربری مدرن و واکنش‌گرا."
            },
            next: {
                title: "نمونه‌کار بعدی در راهه",
                description: "به‌محض آماده شدن، پروژه‌ی بعدی رو هم اینجا اضافه می‌کنم تا به‌روزترین کارهام همیشه در دسترس باشه."
            }
        },
        contact: {
            title: "راه‌های ارتباطی",
            description: "برای همکاری، گفتگو درباره ایده‌ها یا بازخورد روی پروژه‌ها خوشحال می‌شم پیام بدید.",
            email: "ایمیل",
            phone: "تلفن",
            github: "گیت‌هاب",
            copy: "کپی",
            open: "باز کردن",
            form: {
                title: "در ارتباط بمونیم",
                description: "اگر پروژه‌ای در ذهن دارید یا می‌خواهید درباره تجربه‌ها و ایده‌ها صحبت کنیم، یه پیام کوتاه کافیه تا شروع کنیم.",
                name: "نام شما",
                namePlaceholder: "نام و نام خانوادگی",
                nameError: "لطفاً نام خود را وارد کنید",
                email: "ایمیل",
                emailError: "لطفاً یک ایمیل معتبر وارد کنید",
                message: "پیام",
                messagePlaceholder: "چطور می‌تونم کمک کنم؟",
                messageError: "لطفاً پیام خود را وارد کنید (حداقل ۱۰ کاراکتر)",
                submit: "ارسال پیام",
                submitting: "در حال ارسال...",
                success: "پیام شما ثبت شد! خیلی زود خبر می‌دم.",
                error: "خطایی رخ داد. لطفاً دوباره تلاش کنید."
            }
        },
        footer: {
            copyright: "پارسا دهقانی. تمام حقوق محفوظ است.",
            backToTop: "بازگشت به بالا",
            email: "ایمیل",
            github: "گیت‌هاب"
        },
        toast: { copied: "کپی شد" }
    },
    en: {
        nav: { about: "About", skills: "Skills", portfolio: "Portfolio", contact: "Contact" },
        hero: {
            badge: "Python Developer and Frontend Developer",
            title: "Hi! I'm Parsa Dehghani.",
            description: "I love learning, exploring new experiences, and building products that deliver real, tangible results. This is my growth journey—a place to share projects, ideas, and what I've learned along the way.",
            viewPortfolio: "View Portfolio",
            contact: "Get in Touch",
            profile: {
                title: "I'm focused on creating smooth and clean user experiences.",
                description: "Design updates and frontend development with HTML, CSS, and JavaScript, along with building practical tools using Python."
            }
        },
        about: {
            title: "About Me",
            p1: "Hi! I'm Parsa Dehghani, a Python programmer and frontend developer specializing in HTML and CSS. From the beginning, I was drawn to web development by creating clean and fast web pages, and now I'm combining this passion with real-world projects.",
            p2: "Working with me means attention to detail, enthusiasm for collaboration, and adaptability to change. Every project is an opportunity for me to learn more and create experiences that truly make a difference.",
            p3: "I built this website to document my journey, showcase my new projects, and connect with people who share similar interests.",
            beliefs: {
                title: "Core beliefs that guide me",
                "1": { title: "Continuous Learning", desc: "Every project is an opportunity to discover new tools and techniques." },
                "2": { title: "Beauty in Simplicity", desc: "An effective user interface is one that guides users directly to their goal." },
                "3": { title: "Meaningful Collaboration", desc: "Clear communication and honest feedback drive team progress." }
            }
        },
        skills: {
            title: "Key Skills",
            description: "A blend of client-side development and Python-powered support tools that help transform ideas into products more quickly.",
            expanding: "Expanding",
            python: "Automation, scripting, and building backend tools to support web projects.",
            html: "Clean and scalable page architecture for seamless user experiences.",
            css: "Responsive designs, subtle animations, and meticulous attention to visual details.",
            js: "User-centered interactions and implementing dynamic behaviors in the frontend."
        },
        portfolio: {
            title: "Portfolio",
            description: "A selection of projects I've developed with a focus on user experience, performance, and clean code.",
            collaborate: "Want to collaborate? Send me a message",
            viewOnline: "View Online",
            digikala: {
                title: "Digikala Homepage Clone",
                description: "A responsive redesign of Digikala's homepage using Bootstrap, focusing on modular structure and complex content layout."
            },
            panelModir: {
                title: "Manager Panel",
                description: "A complete admin panel for managing products, orders, users, and comments with a modern and responsive user interface."
            },
            next: {
                title: "Next Project Coming Soon",
                description: "I'll add the next project here as soon as it's ready, so my latest work is always available."
            }
        },
        contact: {
            title: "Get in Touch",
            description: "I'd be happy to hear from you for collaboration, discussing ideas, or providing feedback on projects.",
            email: "Email",
            phone: "Phone",
            github: "GitHub",
            copy: "Copy",
            open: "Open",
            form: {
                title: "Let's Stay in Touch",
                description: "If you have a project in mind or want to discuss experiences and ideas, feel free to send me a message.",
                name: "Your Name",
                namePlaceholder: "Full Name",
                nameError: "Please enter your name",
                email: "Email",
                emailError: "Please enter a valid email address",
                message: "Message",
                messagePlaceholder: "How can I help?",
                messageError: "Please enter your message (minimum 10 characters)",
                submit: "Send Message",
                submitting: "Sending...",
                success: "Your message has been sent! I'll get back to you soon.",
                error: "An error occurred. Please try again."
            }
        },
        footer: {
            copyright: "Parsa Dehghani. All rights reserved.",
            backToTop: "Back to Top",
            email: "Email",
            github: "GitHub"
        },
        toast: { copied: "Copied" }
    }
};

// Theme and Language Management
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLang = localStorage.getItem('lang') || 'fa';

document.addEventListener('DOMContentLoaded', function () {
    // Initialize theme and language
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    // Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Navbar scroll effect and background animation - Optimized with throttling
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    
    if (navbar || body) {
        let ticking = false;
        let lastScrollY = 0;
        
        // Throttle function for better performance
        function updateOnScroll() {
            const scrollY = window.scrollY;
            
            // Navbar shadow - only update if scroll position changed significantly
            if (navbar && Math.abs(scrollY - lastScrollY) > 5) {
                if (scrollY > 10) {
                    navbar.classList.add('shadow-sm');
                } else {
                    navbar.classList.remove('shadow-sm');
                }
            }
            
            // Background animation on scroll - move shapes with parallax
            if (body) {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const scrollProgress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
                
                // Change opacity based on scroll (more visible as you scroll)
                const baseOpacity = 0.8;
                const scrollOpacity = Math.min(baseOpacity + (scrollProgress * 0.15), 0.95);
                body.style.setProperty('--scroll-opacity', scrollOpacity.toString());
                
                // Move shapes with parallax effect - reduced movement for better performance
                const scrollOffsetX1 = scrollProgress * 200;
                const scrollOffsetY1 = scrollProgress * -160;
                const scrollOffsetX2 = scrollProgress * -220;
                const scrollOffsetY2 = scrollProgress * 180;
                
                body.style.setProperty('--scroll-offset-x1', `${scrollOffsetX1}px`);
                body.style.setProperty('--scroll-offset-y1', `${scrollOffsetY1}px`);
                body.style.setProperty('--scroll-offset-x2', `${scrollOffsetX2}px`);
                body.style.setProperty('--scroll-offset-y2', `${scrollOffsetY2}px`);
            }
            
            lastScrollY = scrollY;
            ticking = false;
        }
        
        // Use requestAnimationFrame for smooth scrolling
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        }, { passive: true });
        
        // Initial call
        updateOnScroll();
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections except hero (which should be visible immediately)
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Hero section should be visible immediately
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.classList.add('visible');
    }

    // Contact form with validation
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');
    const formError = document.getElementById('formError');
    const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
    const submitText = submitButton ? submitButton.querySelector('.submit-text') : null;
    const submitSpinner = submitButton ? submitButton.querySelector('.spinner-border') : null;

    if (contactForm) {
        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        [nameInput, emailInput, messageInput].forEach(input => {
            if (input) {
                input.addEventListener('blur', () => validateField(input));
                input.addEventListener('input', () => {
                    if (input.classList.contains('is-invalid')) {
                        validateField(input);
                    }
                });
            }
        });

        function validateField(field) {
            const value = field.value.trim();
            let isValid = true;

            if (field === nameInput) {
                isValid = value.length >= 2;
            } else if (field === emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
            } else if (field === messageInput) {
                isValid = value.length >= 10;
            }

            if (isValid) {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            } else {
                field.classList.remove('is-valid');
                field.classList.add('is-invalid');
            }

            return isValid;
        }

        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            event.stopPropagation();

            // Hide previous alerts
            if (formAlert) formAlert.classList.add('d-none');
            if (formError) formError.classList.add('d-none');

            // Validate all fields
            const isNameValid = validateField(nameInput);
            const isEmailValid = validateField(emailInput);
            const isMessageValid = validateField(messageInput);

            if (!isNameValid || !isEmailValid || !isMessageValid) {
                contactForm.classList.add('was-validated');
                return;
            }

            // Show loading state
            if (submitButton) submitButton.disabled = true;
            if (submitText) {
                const submittingText = getNestedTranslation('contact.form.submitting');
                submitText.textContent = submittingText || 'در حال ارسال...';
            }
            if (submitSpinner) submitSpinner.classList.remove('d-none');

            // Simulate form submission (replace with actual API call)
            try {
                await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay

                // Success
                if (formAlert) {
                    formAlert.classList.remove('d-none');
                    formAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                [nameInput, emailInput, messageInput].forEach(input => {
                    if (input) {
                        input.classList.remove('is-valid', 'is-invalid');
                    }
                });
            } catch (error) {
                // Error
                if (formError) {
                    formError.classList.remove('d-none');
                    formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } finally {
                // Reset button state
                if (submitButton) submitButton.disabled = false;
                if (submitText) {
                    const submitTextTranslated = getNestedTranslation('contact.form.submit');
                    submitText.textContent = submitTextTranslated || 'ارسال پیام';
                }
                if (submitSpinner) submitSpinner.classList.add('d-none');
            }
        });
    }

    // Copy to clipboard
    const toast = document.getElementById('copyToast');
    const toastText = document.getElementById('copyToastText');
    let toastTimeout;

    function showToast(message) {
        if (!toast) return;
        if (toastText) {
            toastText.textContent = message;
        }
        toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2600);
    }

    function copyToClipboard(value, message) {
        if (!value) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value).then(() => {
                showToast(message || translations[currentLang].toast.copied + ': ' + value);
            }).catch(() => {
                fallbackCopy(value, message);
            });
        } else {
            fallbackCopy(value, message);
        }
    }

    function fallbackCopy(value, message) {
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast(message || translations[currentLang].toast.copied + ': ' + value);
        } catch (error) {
            showToast(currentLang === 'fa' ? 'برای کپی روی متن راست‌کلیک کنید.' : 'Right-click to copy.');
        }
        document.body.removeChild(textarea);
    }

    document.querySelectorAll('.contact-item[data-copy]').forEach((item) => {
        item.addEventListener('click', () => {
            const value = item.getAttribute('data-copy');
            const labelKey = item.getAttribute('data-i18n-label') || 'contact.email';
            const label = getNestedTranslation(labelKey);
            const message = currentLang === 'fa' 
                ? `${label} کپی شد: ${value}`
                : `${label} copied: ${value}`;
            copyToClipboard(value, message);
        });
    });

    document.querySelectorAll('.contact-pop').forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-contact');
            const message = currentLang === 'fa' 
                ? `ایمیل من کپی شد: ${value}`
                : `My email copied: ${value}`;
            copyToClipboard(value, message);
        });
    });

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    }

    // Language toggle
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'fa' ? 'en' : 'fa';
            applyLanguage(currentLang);
            localStorage.setItem('lang', currentLang);
        });
    }

    // Hamburger Menu Functionality
    const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn');
    const hamburgerCloseBtn = document.getElementById('hamburgerCloseBtn');
    const hamburgerMenuOverlay = document.getElementById('hamburgerMenuOverlay');
    const hamburgerNavLinks = document.querySelectorAll('.hamburger-nav-link');

    function openHamburgerMenu() {
        if (hamburgerMenuOverlay && hamburgerMenuBtn) {
            hamburgerMenuOverlay.style.display = 'block';
            // Force reflow
            hamburgerMenuOverlay.offsetHeight;
            hamburgerMenuOverlay.classList.add('active');
            hamburgerMenuBtn.classList.add('active');
            body.style.overflow = 'hidden';
        }
    }

    function closeHamburgerMenu() {
        if (hamburgerMenuOverlay && hamburgerMenuBtn) {
            hamburgerMenuOverlay.classList.remove('active');
            hamburgerMenuBtn.classList.remove('active');
            body.style.overflow = '';
            // Hide after transition
            setTimeout(() => {
                if (!hamburgerMenuOverlay.classList.contains('active')) {
                    hamburgerMenuOverlay.style.display = 'none';
                }
            }, 300);
        }
    }

    // Open menu
    if (hamburgerMenuBtn) {
        hamburgerMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openHamburgerMenu();
        });
    }

    // Close menu
    if (hamburgerCloseBtn) {
        hamburgerCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeHamburgerMenu();
        });
    }

    // Close menu when clicking overlay
    if (hamburgerMenuOverlay) {
        hamburgerMenuOverlay.addEventListener('click', (e) => {
            if (e.target === hamburgerMenuOverlay) {
                closeHamburgerMenu();
            }
        });
    }

    // Close menu when clicking nav links
    hamburgerNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeHamburgerMenu();
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburgerMenuOverlay && hamburgerMenuOverlay.classList.contains('active')) {
            closeHamburgerMenu();
        }
    });

    // Update hamburger menu theme toggles
    const hamburgerThemeToggle = hamburgerMenuOverlay ? hamburgerMenuOverlay.querySelector('.theme-toggle') : null;
    const hamburgerLangToggle = hamburgerMenuOverlay ? hamburgerMenuOverlay.querySelector('.lang-toggle') : null;

    if (hamburgerThemeToggle) {
        hamburgerThemeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    }

    if (hamburgerLangToggle) {
        hamburgerLangToggle.addEventListener('click', () => {
            currentLang = currentLang === 'fa' ? 'en' : 'fa';
            applyLanguage(currentLang);
            localStorage.setItem('lang', currentLang);
        });
    }

    // Handle window resize - close menu on desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 767.98 && hamburgerMenuOverlay && hamburgerMenuOverlay.classList.contains('active')) {
                closeHamburgerMenu();
            }
        }, 250);
    });
});

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'bi bi-sun-fill theme-icon' : 'bi bi-moon-fill theme-icon';
    }
}

function applyLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const text = getNestedTranslation(key);
        if (text) {
            el.textContent = text;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = getNestedTranslation(key);
        if (text) {
            el.placeholder = text;
        }
    });

    // Update labels for contact items
    document.querySelectorAll('[data-i18n-label]').forEach((el) => {
        const key = el.getAttribute('data-i18n-label');
        const text = getNestedTranslation(key);
        if (text && el.hasAttribute('data-label')) {
            el.setAttribute('data-label', text);
        }
    });
}

function getNestedTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}
