/* ==========================================================================
   FlowingBot — behavior
   No external animation library. This file only handles nav state.
   ========================================================================== */

(function () {
    const nav = document.getElementById('site-nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    // Nav background/border once the page has scrolled
    const onScroll = () => {
        if (window.scrollY > 12) {
            nav.classList.add('is-scrolled');
        } else {
            nav.classList.remove('is-scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu toggle
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const isOpen = links.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        links.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                links.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
})();