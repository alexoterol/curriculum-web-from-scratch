document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById("image-track");
    
    // Only initialize if the track element exists
    if (!track) return;
    
    // Check if we're in the projects section
    const isInProjectsSection = () => {
        const projectsSection = document.getElementById('projects');
        if (!projectsSection) return false;
        
        const rect = projectsSection.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0
        );
    };
    
    // Mouse down event only in projects section
    const handleMouseDown = e => {
        if (!isInProjectsSection()) return;
        track.dataset.mouseDownAt = e.clientX;
    };
    
    // Mouse move event with animation
    const handleMouseMove = e => {
        if (track.dataset.mouseDownAt === "0" || !isInProjectsSection()) return;
        
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;
        
        const percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage || 0) + percentage;
        
        // Limit to 0% and -100%
        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);
        track.dataset.percentage = nextPercentage;
        
        // Apply smooth animation
        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });
        
        // Apply to all project images (fixed class name from proyects to projects)
        for (const image of track.getElementsByClassName("projects__image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    };
    
    // Mouse up event
    const handleMouseUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage || track.dataset.prevPercentage || 0;
    };
    
    // Initialize with default values
    track.dataset.prevPercentage = "0";
    track.dataset.mouseDownAt = "0";
    track.dataset.percentage = "0";
    
    // Add event listeners
    track.addEventListener('mousedown', handleMouseDown);
    track.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp); // this one stays global
    
    // Add touch support for mobile devices
    track.addEventListener('touchstart', e => {
        track.dataset.mouseDownAt = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchmove', e => {
        if (track.dataset.mouseDownAt === "0" || !isInProjectsSection()) return;
        
        const touchDelta = parseFloat(track.dataset.mouseDownAt) - e.touches[0].clientX;
        const maxDelta = window.innerWidth / 2;
        
        const percentage = (touchDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage || 0) + percentage;
        
        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);
        track.dataset.percentage = nextPercentage;
        
        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });
        
        for (const image of track.getElementsByClassName("projects__image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    });
    
    window.addEventListener('touchend', handleMouseUp);
});


// reveal animation

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("visible");
        }
        });
    };

    // Run once and on scroll
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});
