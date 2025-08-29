export const STYLE = `
:root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray: rgba(0, 0, 0, 0.1);
    --color-light-gray: #f8f8f8;
    --font-primary: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    --transition-fast: 0.3s;
    --sidebar-width: 320px;
    --mobile-sidebar-width: 280px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-primary);
    background: var(--color-white);
    color: var(--color-black);
    line-height: 1.6;
    font-weight: 300;
}

.layout {
    display: flex;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    width: var(--sidebar-width);
    min-width: var(--sidebar-width);
    background: var(--color-white);
    color: var(--color-black);
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

.sidebar-title {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
    letter-spacing: 0.3rem;
    cursor: pointer;
    transition: opacity var(--transition-fast);
    color: var(--color-black);
}

.sidebar-title:hover {
    opacity: 0.7;
}

.sidebar-subtitle {
    font-size: 0.9rem;
    margin-bottom: 80px;
    opacity: 0.7;
    letter-spacing: 0.15rem;
    color: var(--color-black);
}

.sidebar-nav {
    flex: 1;
}

.sidebar-link, .sidebar-link-active {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    text-decoration: none;
    color: var(--color-black);
    border-bottom: 1px solid var(--color-gray);
    transition: all var(--transition-fast) ease;
    font-size: 0.95rem;
    letter-spacing: 0.05rem;
    cursor: pointer;
}

.sidebar-nav > .sidebar-link-active:first-child {
    margin-top: 62px;
}

.sidebar-link:hover {
    padding-left: 10px;
    border-bottom-color: rgba(0, 0, 0, 0.3);
    background: var(--color-black);
    color: var(--color-white);
}

.sidebar-link:hover .book-count {
    color: var(--color-white);
    opacity: 0.7;
}

.sidebar-link-active {
    font-weight: 500;
    border-bottom: 1px solid var(--color-black);
}

.sidebar-section {
    margin-top: 60px;
}

.sidebar-heading {
    font-size: 0.75rem;
    font-weight: 400;
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: 30px;
    letter-spacing: 0.2rem;
    color: var(--color-black);
}

.book-count {
    font-size: 0.85rem;
    opacity: 0.5;
    font-weight: 300;
    color: var(--color-black);
    transition: none;
}

/* Main Content */
.main-content {
    flex: 1;
    padding: 60px 80px;
    min-width: 0;
}

/* Breadcrumbs */
.breadcrumbs {
    margin: 20px 0 40px;
    font-size: 0.85rem;
    letter-spacing: 0.1rem;
    opacity: 0.6;
}

/* Page Header */
.page-header {
    margin-bottom: 60px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--color-black);
}

.breadcrumb-link {
    cursor: pointer;
    transition: opacity var(--transition-fast);
    text-decoration: none;
    color: inherit;
}

.breadcrumb-link:hover {
    opacity: 1;
}

.breadcrumb-separator {
    margin: 0 15px;
    opacity: 0.3;
}

.page-header h1 {
    font-size: 4rem;
    font-weight: 300;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
    line-height: 1;
}

.page-header .subtitle {
    font-size: 1.1rem;
    opacity: 0.6;
    letter-spacing: 0.05rem;
    font-weight: 300;
}

/* Controls */
.controls {
    display: flex;
    justify-content: flex-end;
    margin: -20px 0 40px;
}

.sort-select {
    padding: 15px 30px;
    border: 1px solid var(--color-black);
    background: var(--color-white);
    color: var(--color-black);
    font-family: var(--font-primary);
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    cursor: pointer;
    transition: all var(--transition-fast);
    min-width: 200px;
}

.sort-select:hover {
    background: var(--color-black);
    color: var(--color-white);
}

/* Wine Grid */
.book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 60px 40px;
}

/* Wine Card */
.book-card {
    background: var(--color-white);
    border: 1px solid var(--color-black);
    transition: all var(--transition-fast) ease;
    cursor: pointer;
    position: relative;
    will-change: transform;
}

.book-card:hover {
    transform: translate(5px, -5px);
    box-shadow: -5px 5px 0 var(--color-black);
}

.book-card-image {
    height: 380px;
    background: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.book-placeholder {
    color: var(--color-white);
    text-align: center;
    padding: 30px;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    line-height: 1.4;
    word-break: break-word;
}

.book-number {
    position: absolute;
    top: 20px;
    right: 20px;
    color: var(--color-white);
    font-size: 3rem;
    font-weight: 100;
    opacity: 0.2;
}

.book-card-content {
    padding: 30px;
    background: var(--color-white);
}

.book-card-content h3 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 10px;
    letter-spacing: -0.02em;
    line-height: 1.3;
}

.book-card-content .author {
    font-size: 0.9rem;
    opacity: 0.6;
    margin-bottom: 20px;
    font-style: italic;
    letter-spacing: 0.02rem;
}

.book-card-content .description {
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 30px;
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.btn-primary {
    width: 100%;
    padding: 15px;
    background: var(--color-white);
    color: var(--color-black);
    border: 1px solid var(--color-black);
    font-family: var(--font-primary);
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.btn-primary:hover {
    background: var(--color-black);
    color: var(--color-white);
}

/* Detail Page */
.detail-content {
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.detail-card {
    background: var(--color-white);
    border: 1px solid var(--color-black);
    padding: 60px;
    margin-bottom: 60px;
}

.detail-layout {
    display: flex;
    gap: 80px;
}

.detail-image {
    flex: 0 0 400px;
    height: 500px;
    background: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.detail-info {
    flex: 1;
    min-width: 0;
}

.detail-title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 15px;
    letter-spacing: -0.02em;
    word-wrap: break-word;
}

.detail-author {
    font-size: 1.3rem;
    opacity: 0.6;
    margin-bottom: 40px;
    font-style: italic;
    word-wrap: break-word;
}

.detail-genre {
    display: inline-block;
    padding: 10px 25px;
    border: 1px solid var(--color-black);
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    margin-bottom: 40px;
}

.detail-description {
    font-size: 1.1rem;
    line-height: 1.8;
    opacity: 0.85;
    margin-bottom: 50px;
    word-wrap: break-word;
}

.back-button {
    display: inline-block;
    padding: 15px 40px;
    background: var(--color-black);
    color: var(--color-white);
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all var(--transition-fast);
    border: 1px solid var(--color-black);
}

.back-button:hover {
    background: var(--color-white);
    color: var(--color-black);
}

/* Related Section */
.related-section {
    margin-top: 80px;
}

.related-section h3 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 40px;
    letter-spacing: -0.02em;
}

.related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
}

.related-card {
    border: 1px solid var(--color-black);
    padding: 25px;
    text-align: center;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.related-card:hover {
    background: var(--color-black);
    color: var(--color-white);
}

.related-card-image {
    width: 100%;
    height: 150px;
    background: var(--color-black);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.related-card:hover .related-card-image {
    background: var(--color-white);
}

.related-card:hover .related-placeholder {
    color: var(--color-black);
}

.related-placeholder {
    color: var(--color-white);
    font-size: 0.9rem;
    padding: 10px;
    word-break: break-word;
}

.related-title {
    font-size: 1rem;
    margin-bottom: 8px;
    font-weight: 400;
}

.related-author {
    font-size: 0.85rem;
    opacity: 0.6;
}

/* Utility Classes */
.hidden {
    display: none !important;
}

/* Language Selector */
.lang-selector {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;
    display: flex;
    gap: 10px;
    align-items: center;
}

.lang-btn {
    padding: 8px 16px;
    background: var(--color-white);
    color: var(--color-black);
    border: 1px solid var(--color-black);
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    cursor: pointer;
    transition: all var(--transition-fast);
    font-family: var(--font-primary);
}

.lang-btn:hover {
    background: #f0f0f0;
}

.lang-btn.active {
    background: var(--color-black);
    color: var(--color-white);
}

/* Mobile Menu */
.mobile-menu-btn {
    display: none;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1001;
    background: var(--color-black);
    color: var(--color-white);
    border: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.mobile-menu-btn.active {
    background: var(--color-white);
    color: var(--color-black);
}

.menu-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.menu-icon span {
    display: block;
    width: 25px;
    height: 1px;
    background: var(--color-white);
    margin: 3px 0;
    transition: all var(--transition-fast);
}

.mobile-menu-btn.active .menu-icon span {
    background: var(--color-black);
}

/* Overlay */
.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.overlay.active {
    display: block;
}

/* Responsive Design */
@media screen and (max-width: 1200px) {
    .main-content {
        padding: 60px 40px;
    }
    
    .detail-layout {
        gap: 40px;
    }
    
    .detail-image {
        flex: 0 0 300px;
        height: 400px;
    }
    
    .detail-title {
        font-size: 2.5rem;
    }
    
    .detail-card {
        padding: 40px;
    }
}

@media screen and (max-width: 992px) {
    .breadcrumbs {
        margin-top: 40px;
    }
    
    .detail-layout {
        flex-direction: column;
        gap: 40px;
    }
    
    .detail-image {
        flex: 1;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        height: 350px;
    }
    
    .page-header h1 {
        font-size: 3rem;
    }
}

@media screen and (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }
    
    .layout {
        flex-direction: column;
    }
    
    .sidebar {
        position: fixed;
        top: 0;
        left: -100%;
        width: var(--mobile-sidebar-width);
        height: 100vh;
        z-index: 1000;
        transition: left var(--transition-fast) ease;
        padding: 80px 30px 30px;
        background: var(--color-white);
        border-right: none;
    }
    
    .sidebar.active {
        left: 0;
    }
    
    .main-content {
        padding: 80px 20px 40px;
        width: 100%;
    }
    
    .breadcrumbs {
        margin-top: 50px;
        font-size: 0.75rem;
    }
    
    .breadcrumb-separator {
        margin: 0 8px;
    }
    
    .detail-image {
        height: 300px;
    }
    
    .detail-card {
        padding: 30px 20px;
    }
    
    .detail-title {
        font-size: 2rem;
    }
    
    .page-header h1 {
        font-size: 2.5rem;
    }
    
    .page-header {
        margin-bottom: 40px;
        padding-bottom: 40px;
    }
    
    .book-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

@media screen and (max-width: 480px) {
    .lang-selector {
        gap: 5px;
    }
    
    .lang-btn {
        padding: 5px 8px;
        font-size: 0.7rem;
    }
    
    .main-content {
        padding: 70px 15px 30px;
    }
    
    .detail-card {
        padding: 20px 15px;
    }
    
    .detail-title {
        font-size: 1.75rem;
    }
    
    .page-header h1 {
        font-size: 2rem;
    }
}
`;