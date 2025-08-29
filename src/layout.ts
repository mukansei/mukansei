import { STYLE } from "./style";
import { SCRIPT } from "./script";

export function layout(results: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="無慣性 MUKANSEI - Curated Wine Collection">
        <title>無慣性 | MUKANSEI</title>
        <style>${STYLE}</style>
    </head>
    <body>
        <!-- Language Selector -->
        <div class="lang-selector">
            <button class="lang-btn active" data-lang="ko">한국어</button>
            <button class="lang-btn" data-lang="ja">日本語</button>
            <button class="lang-btn" data-lang="en">English</button>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu">
            <div class="menu-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        
        <!-- Overlay -->
        <div class="overlay" id="overlay"></div>
        
        <div class="layout">
            <aside class="sidebar" id="sidebar">
                <div class="sidebar-title">mukansei<br>無慣性<br>無感性</div>
                
                <nav class="sidebar-nav" id="sidebarNav">
                    <!-- Dynamic content -->
                </nav>
            </aside>
            
            <main class="main-content" id="mainContent">
                <!-- Home Page -->
                <div id="homePage">
                    <nav class="breadcrumbs" id="breadcrumbs"></nav>
                    
                    <div class="page-header">
                        <h1 id="pageTitle"></h1>
                        <p class="subtitle" id="pageSubtitle"></p>
                    </div>
                    
                    <div class="controls">
                        <select class="sort-select" id="sortSelect">
                            <!-- Dynamic options -->
                        </select>
                    </div>
                    
                    <div class="book-grid" id="wineGrid">
                        <!-- Dynamic content -->
                    </div>
                </div>
                
                <!-- Detail Page -->
                <div id="detailPage" class="hidden">
                    <!-- Dynamic content -->
                </div>
            </main>
        </div>
        
        <script>
        'use strict';

        const APP = {
            currentLang: 'ko',
            currentWines: [],
            currentFilter: 'all',
            currentDetailWineId: null,
            wines: ${results}
        };

        ${SCRIPT}
        </script>
    </body>
    </html>`;
}
