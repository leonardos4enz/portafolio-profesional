// Helper function para crear carrusel
function createCarousel(images, carouselId) {
    return `
        <div class="project-carousel" id="${carouselId}">
            <div class="carousel-container">
                <div class="carousel-slides">
                    ${images.map((img, index) => `
                        <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                            <img src="${img}" alt="Captura ${index + 1}" loading="lazy">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-btn prev" onclick="changeSlide('${carouselId}', -1)">‹</button>
                <button class="carousel-btn next" onclick="changeSlide('${carouselId}', 1)">›</button>
            </div>
            <div class="carousel-dots">
                ${images.map((_, index) => `
                    <button class="carousel-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide('${carouselId}', ${index})"></button>
                `).join('')}
            </div>
        </div>
    `;
}

// Datos de proyectos (del más reciente al más antiguo)
const projects = [
    {
        title: "XSLAYCC",
        year: "2024-2025",
        technologies: ["C#", ".NET Core", "MVC", "Microsoft SQL Server", "MySQL", "JavaScript", "jQuery", "Bootstrap", "HTML5", "CSS3", "SQL", "IIS", "Azure DevOps", "Git"],
        description: "Desarrollé un ERP que optimizó los procesos internos de XCF, mejorando la eficiencia.",
        projectId: "xslaycc",
        link: "https://www.xcf.com.mx/xslaycc",
        mainImage: "./img/projects/xslaycc/main.png",
        images: [
            "./img/projects/xslaycc/0.png",
            "./img/projects/xslaycc/1.png",
            "./img/projects/xslaycc/2.png",
            "./img/projects/xslaycc/3.png",
            "./img/projects/xslaycc/4.png"
        ],
        modalBody: `
            <h4 class="modal-subtitle">¿Qué es XSLAYCC?</h4>
            <p class="modal-text">
                Es un sistema <strong>ERP</strong> diseñado para mejorar la <strong>gestión interna</strong> de la <strong>empresa</strong>, con módulos para <strong>compras</strong>, <strong>inventarios</strong> y <strong>administración de flotillas</strong>. Cada interfaz se adapta a las <strong>necesidades operativas</strong>, desde <strong>catálogos simples</strong> hasta <strong>flujos de trabajo más complejos</strong>.
            </p>
            ${createCarousel([
                "./img/projects/xslaycc/0.png",
                "./img/projects/xslaycc/1.png",
                "./img/projects/xslaycc/2.png",
                "./img/projects/xslaycc/3.png",
                "./img/projects/xslaycc/4.png"
            ], 'carousel-xslaycc')}
            <p class="modal-text">
                Este sistema <strong>ERP</strong> ha sido desarrollado utilizando <strong>MVC .Net Core 8</strong> y se compone de <strong>tres proyectos</strong>: <strong>WEB</strong>, <strong>API</strong> y <strong>CLASSES</strong>. Para garantizar la seguridad en la transmisión de datos, se implementó encriptación AES para el envío de información entre la <strong>WEB</strong> y la <strong>API</strong>. Además, se han establecido capas de seguridad en las <strong>CLASSES</strong> para proteger la lógica de negocio.
            </p>
        `
    },
    {
        title: "Página XCF",
        year: "2023",
        technologies: ["C#", ".NET Framework", "MySQL", "JavaScript", "jQuery", "Bootstrap", "HTML5", "CSS3", "SQL", "IIS", "Azure DevOps", "Git"],
        description: "Desarrollé una página web corporativa para XCF, para presentar sus servicios y fortalecer su presencia en línea.",
        projectId: "pagina-xcf",
        link: "https://www.xcf.com.mx/",
        mainImage: "./img/projects/pagina-xcf/main.png",
        images: [
            "./img/projects/pagina-xcf/0.png",
            "./img/projects/pagina-xcf/1.png",
            "./img/projects/pagina-xcf/2.png",
            "./img/projects/pagina-xcf/3.png",
            "./img/projects/pagina-xcf/4.png",
            "./img/projects/pagina-xcf/5.png"
        ],
        modalBody: `
        <h4 class="modal-subtitle">¿De qué trata la página?</h4>
        <p class="modal-text">
            Es un sitio web <strong>corporativo</strong> desarrollado para la empresa <strong>XCF</strong>, con el objetivo de presentar sus servicios y fortalecer su presencia en línea. Me encargué de implementar la estructura visual y funcional del sitio.
        </p>
        ${createCarousel([
            "./img/projects/pagina-xcf/0.png",
            "./img/projects/pagina-xcf/1.png",
            "./img/projects/pagina-xcf/2.png",
            "./img/projects/pagina-xcf/3.png",
            "./img/projects/pagina-xcf/4.png",
            "./img/projects/pagina-xcf/5.png"
        ], 'carousel-pagina-xcf')}
        <p class="modal-text">
            Utilicé <strong>Bootstrap</strong> y <strong>jQuery</strong> para la interfaz de usuario, logrando un diseño <strong>responsivo</strong> y funcional. Del lado del servidor, trabajé con <strong>C#</strong> y <strong>.NET Framework 4.8</strong> para conectar el sitio a una base de datos <strong>MySQL</strong>.
        </p>
        <p class="modal-text">
            Este proyecto me permitió fortalecer mis habilidades en <strong>desarrollo web corporativo</strong>, <strong>despliegue en la nube</strong> y en el uso de herramientas de desarrollo profesional como <strong>DevOps</strong>.
        </p>
        `
    },
    {
        title: "JARTICS",
        year: "2023",
        technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Git"],
        description: "Facilité el acceso a información relevante para los estudiantes del área de la salud, mejorando su aprendizaje.",
        projectId: "jartics",
        link: "https://jartics.github.io",
        mainImage: "./img/projects/jartics/main.png",
        images: [
            "./img/projects/jartics/0.png",
            "./img/projects/jartics/1.png",
            "./img/projects/jartics/2.png",
            "./img/projects/jartics/3.png",
            "./img/projects/jartics/4.png",
            "./img/projects/jartics/5.png"
        ],
        modalBody: `
        ${createCarousel([
            "./img/projects/jartics/0.png",
            "./img/projects/jartics/1.png",
            "./img/projects/jartics/2.png",
            "./img/projects/jartics/3.png",
            "./img/projects/jartics/4.png",
            "./img/projects/jartics/5.png"
        ], 'carousel-jartics')}
        `
    }
];

// Datos de la trayectoria
const timelineData = [
    {
        year: "2025",
        company: "XCF",
        title: "Líder en Inteligencia Artificial",
        description: "Inicio de experiencia en inteligencia artificial, implementando asistentes virtuales como procesos automatizados.",
        technologies: ["n8n","RetellAI", "Elevenlabs","Python","PostgreSQL","Ollama", "Anthropic", "OpenAI", "Gemini"],
        color: "#00ff9f"
    },
    {
        year: "2025",
        company: "XCF",
        title: "Líder de proyecto en migración de sistema",
        description: "Liderazgo en la migración completa de sistemas legacy.",
        technologies: ["Python", "SQL Server Data Tools", "Open AI GPTs", "Sonar Qube", "SQL Server Migration Assistant"],
        color: "#00ff9f"
    },
    {
        year: "2024",
        company: "XCF",
        title: "Líder de proyecto en creación de ERP",
        description: "Liderazgo de equipo en el desarrollo de un sistema ERP completo utilizando metodologías ágiles.",
        technologies: ["Metodología SCRUM", "Azure DevOps", "IIS Internet Information Services"],
        color: "#0099ff"
    },
    {
        year: "2023",
        company: "XCF",
        title: "Desarrollo web - Prácticas",
        description: "Inicio de experiencia profesional en desarrollo web, trabajando con tecnologías frontend y backend.",
        technologies: ["MYSQL", "Bootstrap 3 y 5", "jQuery", ".NET", "TFS"],
        color: "#ff6b6b"
    },
    {
        year: "2018-2022",
        company: "UANL (FCFM)",
        title: "Formación académica",
        description: "Desarrollo web y aplicaciones básico. Fundamentos sólidos en programación y desarrollo de software.",
        technologies: ["Git", "HTML", "JavaScript", "CSS", "C#", "Java", "Python", "SQL"],
        color: "#ffd93d"
    }
];

// Sistema de partículas de fondo
function createBackgroundParticles() {
    const particleContainer = document.getElementById('backgroundParticles');
    if (!particleContainer) return;

    const particleCount = 15;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle-bg';
        
        // Posición inicial aleatoria en X
        particle.style.left = Math.random() * 100 + '%';
        
        // Delay aleatorio para que no aparezcan todas al mismo tiempo
        particle.style.animationDelay = Math.random() * 8 + 's';
        
        particleContainer.appendChild(particle);
        
        // Remover la partícula después de la animación y crear una nueva
        particle.addEventListener('animationend', () => {
            if (particle.parentNode) {
                particle.remove();
            }
            // Crear nueva partícula con delay aleatorio
            setTimeout(createParticle, Math.random() * 3000);
        });
    }

    // Crear partículas iniciales
    for (let i = 0; i < particleCount; i++) {
        setTimeout(createParticle, i * 300 + Math.random() * 2000);
    }
}

// Controlar visibilidad de partículas según la sección
function controlParticleVisibility() {
    const particleContainer = document.getElementById('backgroundParticles');
    const skillsSection = document.getElementById('habilidades');
    
    if (!particleContainer || !skillsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target === skillsSection) {
                if (entry.isIntersecting) {
                    particleContainer.style.opacity = '1';
                    particleContainer.style.visibility = 'visible';
                } else {
                    // Verificar si estamos en las secciones inferiores
                    const rect = entry.target.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        particleContainer.style.opacity = '1';
                        particleContainer.style.visibility = 'visible';
                    } else {
                        particleContainer.style.opacity = '0';
                        particleContainer.style.visibility = 'hidden';
                    }
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '100px'
    });

    observer.observe(skillsSection);
}

// Scroll suave para navegación
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initButtonAnimations();
    
    // Inicializar sistema de partículas
    createBackgroundParticles();
    controlParticleVisibility();
    initProjects();
    initProjectCardAnimations();
    initTypingEffect();
    initTechCarousel();
    initTimelineAnimations();
    initModalFunctionality();
    initExperienceCalculation();
    initTechTooltips();
    initProjectSearch();
    initFloatingNavigation();
});

// Calcular experiencia dinámica
function initExperienceCalculation() {
    const experienceElement = document.getElementById('experience-text');
    if (!experienceElement) return;
    
    // Fecha de inicio de experiencia profesional (mayo 2023)
    const startDate = new Date('2023-05-01');
    const currentDate = new Date();
    
    // Calcular diferencia
    const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                       (currentDate.getMonth() - startDate.getMonth());
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    let experienceText = '';
    
    if (years > 0) {
        experienceText += `${years} año${years > 1 ? 's' : ''}`;
        if (months > 0) {
            experienceText += ` y ${months} mes${months > 1 ? 'es' : ''}`;
        }
    } else {
        experienceText = `${months} mes${months > 1 ? 'es' : ''}`;
    }
    
    experienceText += ' de experiencia';
    
    experienceElement.textContent = experienceText;
}

// Animaciones de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones de entrada
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .section-title, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Animaciones para botones
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('click', function(e) {
            // Efecto de ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Animaciones para las cards de proyectos
function initProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Animación de hover mejorada
        card.addEventListener('mouseenter', function() {
            // Removed transform and shadow animations
        });
        
        card.addEventListener('mouseleave', function() {
            // Removed transform and shadow animations
        });
        
        // Animación de aparición escalonada
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Efecto de escritura en el título
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        } else {
            // Agregar cursor parpadeante permanente
            const cursor = document.createElement('span');
            cursor.textContent = '|';
            cursor.style.animation = 'blink 1s infinite';
            cursor.style.marginLeft = '2px';
            cursor.className = 'typing-cursor';
            heroTitle.appendChild(cursor);
        }
    };
    
    // Iniciar inmediatamente sin delay
    typeWriter();
}

// Animación del cursor parpadeante
const blinkStyle = document.createElement('style');
blinkStyle.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(blinkStyle);

// Parallax suave para el fondo de cuadrícula
function initParallaxEffect() {
    const gridBackground = document.querySelector('.grid-background');
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        gridBackground.style.transform = `translate3d(0, ${parallax}px, 0)`;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Inicializar parallax después de cargar
window.addEventListener('load', initParallaxEffect);

// Carrusel infinito suave con JavaScript
function initTechCarousel() {
    const track = document.getElementById('techTrack');
    if (!track) return;
    
    // Desactivar la animación CSS
    track.style.animation = 'none';
    
    const items = Array.from(track.children);
    const itemWidth = items[0].offsetWidth + 72; // 72px = 4.5rem gap
    const totalWidth = itemWidth * items.length;
    
    // Crear copia para loop infinito
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
    
    let currentTransform = 0;
    const speed = 0.5; // pixels por frame
    let isRunning = true;
    
    function animate() {
        if (isRunning) {
            currentTransform -= speed;
            
            // Cuando llegue al final del primer set, resetear sin salto
            if (Math.abs(currentTransform) >= totalWidth) {
                currentTransform = 0;
            }
            
            track.style.transform = `translateX(${currentTransform}px)`;
        }
        requestAnimationFrame(animate);
    }
    
    // Pausar en hover
    track.addEventListener('mouseenter', () => {
        isRunning = false;
    });
    
    track.addEventListener('mouseleave', () => {
        isRunning = true;
    });
    
    animate();
}

// Navegación suave (si se agregan enlaces de navegación)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event listeners para botones del hero
document.addEventListener('DOMContentLoaded', function() {
    const viewProjectsBtn = document.querySelector('.btn-primary');
    const contactBtn = document.querySelector('.btn-secondary');
    
    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', function() {
            smoothScroll('.projects-section');
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // Aquí puedes agregar lógica para contacto
            alert('¡Función de contacto próximamente!');
        });
    }
});

// Optimización de rendimiento
let resizeTimer;
window.addEventListener('resize', function() {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Estilo para detener animaciones durante resize
const resizeStyle = document.createElement('style');
resizeStyle.textContent = `
    .resize-animation-stopper * {
        animation-duration: 0.01ms !important;
        animation-delay: 0.01ms !important;
        transition-duration: 0.01ms !important;
        transition-delay: 0.01ms !important;
    }
`;
document.head.appendChild(resizeStyle);

// Inicializar timeline
function initTimelineAnimations() {
    const timelineContainer = document.getElementById('timelineItems');
    if (!timelineContainer) return;

    // Generar HTML para cada elemento del timeline
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-company">${item.company}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-description">${item.description}</p>
                <div class="timeline-technologies">
                    ${item.technologies.map(tech => `<span class="timeline-tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="timeline-year" style="border-color: ${item.color}; color: ${item.color};">
                ${item.year}
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    // Configurar IntersectionObserver para animaciones de timeline
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar todos los elementos del timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        // Agregar delay escalonado para efecto más suave
        item.style.transitionDelay = `${index * 0.2}s`;
        timelineObserver.observe(item);
    });
}

// Inicializar proyectos
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Lógica para mostrar solo 4 tecnologías
        const visibleTechs = project.technologies.slice(0, 4);
        const remainingCount = project.technologies.length - 4;
        
        let techHTML = '';
        visibleTechs.forEach(tech => {
            techHTML += `<span class="tech-tag">${tech}</span>`;
        });
        
        if (remainingCount > 0) {
            techHTML += `<span class="tech-tag more-tech" data-all-techs='${JSON.stringify(project.technologies)}'>+${remainingCount}</span>`;
        }
        
        projectCard.innerHTML = `
            <div class="project-content">
                <div class="project-year">${project.year}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${techHTML}
                </div>
                ${project.mainImage ? `
                    <div class="project-main-image">
                        <img src="${project.mainImage}" alt="${project.title}" loading="lazy">
                    </div>
                ` : ''}
                <div class="project-links">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link primary-link">Ver</a>
                    ${project.modalBody ? `<button class="project-link secondary-link" data-project="${project.projectId}">Arquitectura</button>` : ''}
                </div>
            </div>
        `;
        
        // Añadir event listener específico para el badge "+X" si existe
        const moreTechBadge = projectCard.querySelector('.more-tech');
        if (moreTechBadge) {
            moreTechBadge.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const allTechs = JSON.parse(this.getAttribute('data-all-techs'));
                showTechTooltip(this, allTechs);
            });
        }

        projectsGrid.appendChild(projectCard);
    });
}

// Funcionalidad del modal
function initModalFunctionality() {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');

    // Event listeners para botones de arquitectura
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('secondary-link') && e.target.hasAttribute('data-project')) {
            const projectId = e.target.getAttribute('data-project');
            const project = projects.find(p => p.projectId === projectId);
            
            if (project && project.modalBody) {
                modalTitle.textContent = `Arquitectura - ${project.title}`;
                modalContent.innerHTML = project.modalBody;
                showModal();
            }
        }
    });

    // Cerrar modal
    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });

    function showModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Ocultar navegación flotante
        const floatingNav = document.querySelector('.floating-nav');
        if (floatingNav) {
            floatingNav.style.display = 'none';
        }
        // Force reflow
        modal.offsetHeight;
        modal.classList.add('show');
    }

    function hideModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        // Mostrar navegación flotante
        const floatingNav = document.querySelector('.floating-nav');
        if (floatingNav) {
            floatingNav.style.display = 'block';
        }
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Funciones del carrusel
function changeSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const activeSlide = carousel.querySelector('.carousel-slide.active');
    const activeDot = carousel.querySelector('.carousel-dot.active');
    
    let currentIndex = Array.from(slides).indexOf(activeSlide);
    let newIndex = currentIndex + direction;
    
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    
    // Update slides
    activeSlide.classList.remove('active');
    slides[newIndex].classList.add('active');
    
    // Update dots
    activeDot.classList.remove('active');
    dots[newIndex].classList.add('active');
}

function goToSlide(carouselId, slideIndex) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    
    // Remove active from all
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active to target
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Variable global para el tooltip
let techTooltip = null;

// Crear tooltip global
function createTechTooltip() {
    if (!techTooltip) {
        techTooltip = document.createElement('div');
        techTooltip.className = 'tech-tooltip';
        document.body.appendChild(techTooltip);
    }
    return techTooltip;
}

// Mostrar tooltip específico
function showTechTooltip(element, technologies) {
    if (!techTooltip) {
        createTechTooltip();
    }

    // Si ya está visible, ocultarlo
    if (techTooltip.classList.contains('show')) {
        hideTechTooltip();
        return;
    }

    techTooltip.innerHTML = `
        <div class="tech-tooltip-content">
            <div class="tech-tooltip-list">
                ${technologies.map(tech => `<span class="tech-tooltip-item">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Posicionar a la izquierda del badge
    techTooltip.style.left = (rect.left + scrollLeft - 10) + 'px';
    techTooltip.style.top = (rect.top + scrollTop + rect.height + 5) + 'px';
    techTooltip.classList.add('show');
    
    // Debug log
    console.log('Tooltip position:', {
        left: techTooltip.style.left,
        top: techTooltip.style.top,
        technologies: technologies
    });
}

// Ocultar tooltip
function hideTechTooltip() {
    if (techTooltip) {
        techTooltip.classList.remove('show');
    }
}

// Funcionalidad de tooltips para tecnologías
function initTechTooltips() {
    // Crear el tooltip global
    createTechTooltip();

    // Cerrar tooltip al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('more-tech') && 
            !e.target.closest('.tech-tooltip') && 
            techTooltip && 
            techTooltip.classList.contains('show')) {
            hideTechTooltip();
        }
    });

    // Cerrar tooltip con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && techTooltip && techTooltip.classList.contains('show')) {
            hideTechTooltip();
        }
    });
}

// Funcionalidad de búsqueda de proyectos por tecnología
function initProjectSearch() {
    const searchInput = document.getElementById('techSearch');
    const clearButton = document.getElementById('clearSearch');
    const resultsCount = document.getElementById('resultsCount');
    const projectsGrid = document.getElementById('projectsGrid');

    if (!searchInput || !resultsCount || !projectsGrid) return;

    // Actualizar contador inicial
    updateResultsCount(projects.length);

    // Event listener para el input de búsqueda
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterProjects(searchTerm);
        
        // Mostrar/ocultar botón de limpiar
        if (searchTerm.length > 0) {
            clearButton.style.display = 'block';
        } else {
            clearButton.style.display = 'none';
        }
    });

    // Event listener para el botón de limpiar
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        filterProjects('');
        clearButton.style.display = 'none';
    });

    // Función para filtrar proyectos
    function filterProjects(searchTerm) {
        const projectCards = projectsGrid.querySelectorAll('.project-card');
        let visibleCount = 0;

        projectCards.forEach((card, index) => {
            const project = projects[index];
            
            if (!searchTerm) {
                // Si no hay término de búsqueda, mostrar todos
                card.style.display = 'flex';
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                // Verificar si alguna tecnología coincide con la búsqueda
                const hasMatch = project.technologies.some(tech => 
                    tech.toLowerCase().includes(searchTerm)
                );

                if (hasMatch) {
                    card.style.display = 'flex';
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }
            }
        });

        updateResultsCount(visibleCount);
        
        // Actualizar animaciones si es necesario
        if (visibleCount === 0) {
            showNoResultsMessage();
        } else {
            hideNoResultsMessage();
        }
    }

    // Actualizar contador de resultados
    function updateResultsCount(count) {
        const text = count === 1 ? 'proyecto encontrado' : 'proyectos encontrados';
        resultsCount.textContent = `${count} ${text}`;
    }

    // Mostrar mensaje cuando no hay resultados
    function showNoResultsMessage() {
        let noResultsMsg = document.getElementById('noResultsMessage');
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'noResultsMessage';
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.innerHTML = `
                <div class="no-results-icon">
                    <i class="fas fa-search"></i>
                </div>
                <h3>No se encontraron proyectos</h3>
                <p>Intenta con otra tecnología como JavaScript, C#, MySQL, etc.</p>
            `;
            projectsGrid.parentNode.insertBefore(noResultsMsg, projectsGrid.nextSibling);
        }
        noResultsMsg.style.display = 'block';
    }

    // Ocultar mensaje de no resultados
    function hideNoResultsMessage() {
        const noResultsMsg = document.getElementById('noResultsMessage');
        if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    }
}

// Funcionalidad de navegación flotante
function initFloatingNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scroll para enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Observer para destacar sección activa
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quitar clase active de todos los links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Añadir clase active al link correspondiente
                const activeLink = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observar todas las secciones
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Highlight inicial basado en scroll position
    updateActiveNavOnLoad();

    // Función para actualizar navegación activa al cargar
    function updateActiveNavOnLoad() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.3;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.offsetTop <= scrollPosition) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[data-section="${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
                break;
            }
        }
    }

    // Actualizar en scroll (throttled)
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNavOnLoad, 100);
    });
}