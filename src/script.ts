export const SCRIPT = `
// Translations
const i18n = {
    ko: {
        home: '홈',
        cellar: '셀러',
        allWines: '모든 와인',
        wineTypes: '와인 종류',
        redWine: '레드 와인',
        whiteWine: '화이트 와인',
        sparkling: '스파클링',
        dessertWine: '디저트 와인',
        sortBy: '정렬',
        nameAsc: '이름 가 → 하',
        nameDesc: '이름 하 → 가',
        vintageOld: '빈티지 (오래된순)',
        vintageNew: '빈티지 (최신순)',
        viewDetails: '상세보기',
        backToCellar: '← 셀러로 돌아가기',
        other: '다른',
        winecellar: '와인 셀러',
        subtitle: '엄선된 특별한 빈티지 컬렉션'
    },
    ja: {
        home: 'ホーム',
        cellar: 'セラー',
        allWines: 'すべてのワイン',
        wineTypes: 'ワインタイプ',
        redWine: '赤ワイン',
        whiteWine: '白ワイン',
        sparkling: 'スパークリング',
        dessertWine: 'デザートワイン',
        sortBy: '並び替え',
        nameAsc: '名前 あ → ん',
        nameDesc: '名前 ん → あ',
        vintageOld: 'ヴィンテージ（古い順）',
        vintageNew: 'ヴィンテージ（新しい順）',
        viewDetails: '詳細を見る',
        backToCellar: '← セラーに戻る',
        other: 'その他の',
        winecellar: 'ワインセラー',
        subtitle: '厳選された特別なヴィンテージコレクション'
    },
    en: {
        home: 'HOME',
        cellar: 'CELLAR',
        allWines: 'All Wines',
        wineTypes: 'Wine Types',
        redWine: 'Red Wine',
        whiteWine: 'White Wine',
        sparkling: 'Sparkling',
        dessertWine: 'Dessert Wine',
        sortBy: 'SORT BY',
        nameAsc: 'Name A → Z',
        nameDesc: 'Name Z → A',
        vintageOld: 'Vintage (Old → New)',
        vintageNew: 'Vintage (New → Old)',
        viewDetails: 'View Details',
        backToCellar: '← BACK TO CELLAR',
        other: 'Other',
        winecellar: 'Wine Cellar',
        subtitle: 'Curated collection of exceptional vintages'
    }
};

const typeLabels = {
    red: { en: 'Red Wine', ko: '레드 와인', ja: '赤ワイン' },
    white: { en: 'White Wine', ko: '화이트 와인', ja: '白ワイン' },
    sparkling: { en: 'Sparkling', ko: '스파클링', ja: 'スパークリング' },
    dessert: { en: 'Dessert Wine', ko: '디저트 와인', ja: 'デザートワイン' }
};

// DOM Elements Cache
const DOM = {};

// Initialize DOM cache
function initDOMCache() {
    DOM.sidebar = document.getElementById('sidebar');
    DOM.overlay = document.getElementById('overlay');
    DOM.mobileMenuBtn = document.getElementById('mobileMenuBtn');
    DOM.homePage = document.getElementById('homePage');
    DOM.detailPage = document.getElementById('detailPage');
    DOM.sidebarNav = document.getElementById('sidebarNav');
    DOM.breadcrumbs = document.getElementById('breadcrumbs');
    DOM.pageTitle = document.getElementById('pageTitle');
    DOM.pageSubtitle = document.getElementById('pageSubtitle');
    DOM.sortSelect = document.getElementById('sortSelect');
    DOM.wineGrid = document.getElementById('wineGrid');
    DOM.langBtns = document.querySelectorAll('.lang-btn');
}

// Template functions
const Templates = {
    wineCard: (wine, t) => '<div class="book-card" data-wine-id="' + wine.id + '"><div class="book-card-image"><span class="book-number">' + String(wine.id).padStart(2, '0') + '</span><div class="book-placeholder">' + wine.title.toUpperCase().replace(' ', '<br>') + '</div></div><div class="book-card-content"><h3>' + wine.title + '</h3><p class="author">' + wine.producer + '</p><p class="description">' + wine.description + '</p><button class="btn-primary">' + t.viewDetails + '</button></div></div>',
    
    detailPage: (wine, relatedWines, t, typeLabel) => '<nav class="breadcrumbs"><a class="breadcrumb-link" data-action="home">' + t.home + '</a><span class="breadcrumb-separator">/</span><a class="breadcrumb-link" data-action="home">' + t.allWines + '</a><span class="breadcrumb-separator">/</span>' + wine.title.toUpperCase() + '</nav><div class="detail-content"><div class="detail-card"><div class="detail-layout"><div class="detail-image"><span class="book-number">' + String(wine.id).padStart(2, '0') + '</span><div class="book-placeholder">' + wine.title.toUpperCase() + '</div></div><div class="detail-info"><h1 class="detail-title">' + wine.title + '</h1><p class="detail-author">' + wine.producer + ' · ' + wine.region + '</p><div class="detail-genre">' + typeLabel.toUpperCase() + '</div><p class="detail-description">' + wine.description + '</p><a class="back-button" data-action="home">' + t.backToCellar + '</a></div></div></div>' + (relatedWines.length > 0 ? '<div class="related-section"><h3>' + t.other + ' ' + typeLabel + '</h3><div class="related-grid">' + relatedWines.map(related => '<div class="related-card" data-wine-id="' + related.id + '"><div class="related-card-image"><div class="related-placeholder">' + related.title.toUpperCase() + '</div></div><div class="related-title">' + related.title + '</div><div class="related-author">' + related.producer + '</div></div>').join('') + '</div></div>' : '') + '</div>'
};

// Wine Manager
const WineManager = {
    getWinesByType(type) {
        return type === 'all' ? APP.wines : APP.wines.filter(w => w.type === type);
    },
    
    sortWines(wines, sortType) {
        if (!sortType) return wines;
        
        const sorted = [...wines];
        const parts = sortType.split('_');
        const field = parts[0];
        const order = parts[1];
        
        if (field === 'name') {
            sorted.sort((a, b) => order === 'asc' ? 
                a.title.localeCompare(b.title) : 
                b.title.localeCompare(a.title)
            );
        } else if (field === 'vintage') {
            sorted.sort((a, b) => order === 'asc' ? 
                a.vintage - b.vintage : 
                b.vintage - a.vintage
            );
        }
        
        return sorted;
    },
    
    getRelatedWines(wine, limit = 3) {
        return APP.wines
            .filter(w => w.type === wine.type && w.id !== wine.id)
            .slice(0, limit);
    }
};

// UI Manager
const UIManager = {
    updateLanguage(lang) {
        APP.currentLang = lang;
        
        // Update language buttons
        DOM.langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        this.updateUI();
        
        // Re-render current view
        if (!DOM.homePage.classList.contains('hidden')) {
            this.renderWines(APP.currentWines);
        } else if (!DOM.detailPage.classList.contains('hidden') && APP.currentDetailWineId) {
            this.showDetail(APP.currentDetailWineId, true);
        }
    },
    
    updateUI() {
        const t = i18n[APP.currentLang];
        
        // Update sidebar
        this.updateSidebar(t);
        
        // Update home page
        if (!DOM.homePage.classList.contains('hidden')) {
            DOM.breadcrumbs.innerHTML = t.home + '<span class="breadcrumb-separator">/</span>' + t.cellar + '<span class="breadcrumb-separator">/</span>' + t.allWines;
            DOM.pageTitle.textContent = t.winecellar;
            DOM.pageSubtitle.textContent = t.subtitle;
            
            // Update sort options
            const currentValue = DOM.sortSelect.value;
            DOM.sortSelect.innerHTML = '<option value="">' + t.sortBy + '</option><option value="name_asc">' + t.nameAsc + '</option><option value="name_desc">' + t.nameDesc + '</option><option value="vintage_asc">' + t.vintageOld + '</option><option value="vintage_desc">' + t.vintageNew + '</option>';
            DOM.sortSelect.value = currentValue;
        }
    },
    
    updateSidebar(t) {
        const counts = {
            all: APP.wines.length,
            red: APP.wines.filter(w => w.type === 'red').length,
            white: APP.wines.filter(w => w.type === 'white').length,
            sparkling: APP.wines.filter(w => w.type === 'sparkling').length,
            dessert: APP.wines.filter(w => w.type === 'dessert').length
        };
        
        DOM.sidebarNav.innerHTML = '<a class="sidebar-link-active" data-filter="all"><span>' + t.allWines + '</span><span class="book-count">' + String(counts.all).padStart(2, '0') + '</span></a><div class="sidebar-section"><div class="sidebar-heading">' + t.wineTypes + '</div><a class="sidebar-link" data-filter="red"><span>' + t.redWine + '</span><span class="book-count">' + String(counts.red).padStart(2, '0') + '</span></a><a class="sidebar-link" data-filter="white"><span>' + t.whiteWine + '</span><span class="book-count">' + String(counts.white).padStart(2, '0') + '</span></a><a class="sidebar-link" data-filter="sparkling"><span>' + t.sparkling + '</span><span class="book-count">' + String(counts.sparkling).padStart(2, '0') + '</span></a><a class="sidebar-link" data-filter="dessert"><span>' + t.dessertWine + '</span><span class="book-count">' + String(counts.dessert).padStart(2, '0') + '</span></a></div>';
    },
    
    renderWines(wines) {
        const t = i18n[APP.currentLang];
        DOM.wineGrid.innerHTML = wines.map(wine => Templates.wineCard(wine, t)).join('');
    },
    
    showHome() {
        APP.currentDetailWineId = null;
        APP.currentFilter = 'all';
        APP.currentWines = [...APP.wines];
        
        DOM.homePage.classList.remove('hidden');
        DOM.detailPage.classList.add('hidden');
        DOM.sortSelect.value = '';
        
        this.updateUI();
        this.renderWines(APP.currentWines);
        this.closeSidebar();
    },
    
    showDetail(wineId, skipAnimation = false) {
        const wine = APP.wines.find(w => w.id === wineId);
        if (!wine) return;
        
        APP.currentDetailWineId = wineId;
        const t = i18n[APP.currentLang];
        const typeLabel = typeLabels[wine.type][APP.currentLang];
        const relatedWines = WineManager.getRelatedWines(wine);
        
        DOM.homePage.classList.add('hidden');
        DOM.detailPage.classList.remove('hidden');
        DOM.detailPage.innerHTML = Templates.detailPage(wine, relatedWines, t, typeLabel);
        
        if (!skipAnimation) {
            window.scrollTo(0, 0);
        }
        
        this.closeSidebar();
    },
    
    filterByType(type) {
        APP.currentFilter = type;
        APP.currentWines = WineManager.getWinesByType(type);
        DOM.sortSelect.value = '';
        
        this.renderWines(APP.currentWines);
        DOM.homePage.classList.remove('hidden');
        DOM.detailPage.classList.add('hidden');
        this.closeSidebar();
    },
    
    sortWines() {
        const sortValue = DOM.sortSelect.value;
        const sorted = WineManager.sortWines(APP.currentWines, sortValue);
        this.renderWines(sorted);
    },
    
    toggleSidebar() {
        const isActive = DOM.sidebar.classList.contains('active');
        DOM.sidebar.classList.toggle('active');
        DOM.overlay.classList.toggle('active');
        DOM.mobileMenuBtn.classList.toggle('active');
    },
    
    closeSidebar() {
        if (window.innerWidth <= 768) {
            DOM.sidebar.classList.remove('active');
            DOM.overlay.classList.remove('active');
            DOM.mobileMenuBtn.classList.remove('active');
        }
    }
};

// Event Handlers
const EventHandlers = {
    init() {
        // Language buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-btn')) {
                UIManager.updateLanguage(e.target.dataset.lang);
            }
        });
        
        // Mobile menu
        DOM.mobileMenuBtn?.addEventListener('click', () => {
            UIManager.toggleSidebar();
        });
        
        // Overlay
        DOM.overlay?.addEventListener('click', () => {
            UIManager.closeSidebar();
        });
        
        // Sidebar navigation
        DOM.sidebarNav.addEventListener('click', (e) => {
            const link = e.target.closest('[data-filter]');
            if (link) {
                const filter = link.dataset.filter;
                if (filter === 'all') {
                    UIManager.showHome();
                } else {
                    UIManager.filterByType(filter);
                }
            }
        });
        
        // Sidebar title
        document.querySelector('.sidebar-title')?.addEventListener('click', () => {
            UIManager.showHome();
        });
        
        // Sort select
        DOM.sortSelect?.addEventListener('change', () => {
            UIManager.sortWines();
        });
        
        // Wine grid clicks
        DOM.wineGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.book-card');
            if (card) {
                const wineId = parseInt(card.dataset.wineId);
                UIManager.showDetail(wineId);
            }
        });
        
        // Detail page clicks
        DOM.detailPage.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]');
            if (action && action.dataset.action === 'home') {
                UIManager.showHome();
            }
            
            const relatedCard = e.target.closest('.related-card');
            if (relatedCard) {
                const wineId = parseInt(relatedCard.dataset.wineId);
                UIManager.showDetail(wineId);
            }
        });
    }
};

// Initialize App
function initApp() {
    initDOMCache();
    
    // Set initial state
    APP.currentWines = [...APP.wines];
    
    // Initialize UI
    UIManager.updateLanguage(APP.currentLang);
    UIManager.renderWines(APP.currentWines);
    
    // Initialize event handlers
    EventHandlers.init();
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
`;