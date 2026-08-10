# FlowingBot Lab 🌐

Welcome to the repository for the **FlowingBot Lab** website. This is the digital home for my edge-to-cloud automation projects, infrastructure experiments, and technical deep-dives.

Check it out live: [https://flowingbot.com]

---

## 🏗️ Architecture & Philosophy

This website is built with a strict **"zero-backend"** philosophy. 
It relies entirely on static HTML, CSS, and vanilla JavaScript. There are no databases, no heavy frameworks, and no server-side rendering.

The site is served using a highly restricted, read-only Nginx container designed for minimal resource consumption and maximum security.

### Tech Stack
*   **Frontend:** Pure HTML5, CSS3 (Custom Design System), Vanilla JS.
*   **Web Server:** Nginx (Alpine Linux).
*   **Infrastructure:** Docker Compose (Read-only filesystem, dropped privileges, 64MB memory limit).
*   **Blog Interactions:** Comments and reactions are powered by [Giscus](https://giscus.app/), which leverages the GitHub Discussions API. No database required.

