export function renderHtml(content: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>mukansei 無慣性</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                background: #ffffff;
                color: #000000;
                line-height: 1.6;
                font-weight: 300;
            }
            
            /* 日本の美学 - Ma (間) - 여백의 미 */
            .layout {
                display: flex;
                min-height: 100vh;
            }
            
            /* 사이드바 - 縦書き 스타일 영향 */
            .sidebar {
                width: 320px;
                background: #000000;
                color: #ffffff;
                padding: 60px 40px;
                display: flex;
                flex-direction: column;
            }
            
            .sidebar-title {
                font-size: 2.5rem;
                font-weight: 300;
                margin-bottom: 0.5rem;
                letter-spacing: 0.3rem;
                writing-mode: horizontal-tb;
            }
            
            .sidebar-subtitle {
                font-size: 0.9rem;
                margin-bottom: 80px;
                opacity: 0.7;
                letter-spacing: 0.15rem;
                font-family: 'Gill Sans', sans-serif;
            }
            
            .sidebar-nav {
                flex: 1;
            }
            
            .sidebar-link, .sidebar-link-active {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 0;
                margin-bottom: 0;
                text-decoration: none;
                color: #ffffff;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
                font-size: 0.95rem;
                letter-spacing: 0.05rem;
            }
            
            .sidebar-link:hover {
                padding-left: 10px;
                border-bottom-color: rgba(255, 255, 255, 0.5);
            }
            
            .sidebar-link-active {
                font-weight: 500;
                border-bottom: 2px solid #ffffff;
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
            }
            
            .book-count {
                font-size: 0.85rem;
                opacity: 0.5;
                font-weight: 300;
            }
            
            /* 메인 콘텐츠 - 和 (Wa) 조화 */
            .main-content {
                flex: 1;
                padding: 60px 80px;
                max-width: 1400px;
            }
            
            /* 브레드크럼 - 미니멀 */
            .breadcrumbs {
                margin-bottom: 60px;
                font-size: 0.85rem;
                letter-spacing: 0.1rem;
                opacity: 0.6;
            }
            
            .breadcrumb-separator {
                margin: 0 15px;
                opacity: 0.3;
            }
            
            /* 페이지 헤더 - 大きな余白 */
            .page-header {
                margin-bottom: 80px;
                padding-bottom: 40px;
                border-bottom: 1px solid #000000;
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
            
            /* 배너 - 侘寂 (Wabi-sabi) 스타일 */
            .info-banner {
                background: #000000;
                color: #ffffff;
                padding: 40px;
                margin-bottom: 60px;
                position: relative;
            }
            
            .info-banner h2 {
                font-size: 1rem;
                font-weight: 400;
                margin-bottom: 20px;
                letter-spacing: 0.15rem;
                text-transform: uppercase;
            }
            
            .info-banner p, .info-banner li {
                font-size: 0.95rem;
                line-height: 1.8;
                opacity: 0.9;
            }
            
            .info-banner ol {
                list-style: none;
                counter-reset: item;
                margin-top: 20px;
            }
            
            .info-banner li {
                counter-increment: item;
                margin-bottom: 15px;
                padding-left: 30px;
                position: relative;
            }
            
            .info-banner li:before {
                content: counter(item, decimal-leading-zero);
                position: absolute;
                left: 0;
                font-size: 0.85rem;
                opacity: 0.5;
            }
            
            .info-banner a {
                color: #ffffff;
                text-decoration: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                transition: border-color 0.3s;
            }
            
            .info-banner a:hover {
                border-bottom-color: #ffffff;
            }
            
            /* 정렬 선택 - 미니멀 */
            .controls {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 60px;
            }
            
            .sort-select {
                padding: 15px 30px;
                border: 1px solid #000000;
                background: #ffffff;
                color: #000000;
                font-family: 'Gill Sans', sans-serif;
                font-size: 0.9rem;
                letter-spacing: 0.05rem;
                cursor: pointer;
                transition: all 0.3s;
                min-width: 200px;
            }
            
            .sort-select:hover {
                background: #000000;
                color: #ffffff;
            }
            
            .sort-select:focus {
                outline: none;
                box-shadow: 0 0 0 2px #000000;
            }
            
            /* 도서 그리드 - 間隔 (spacing) */
            .book-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 60px 40px;
            }
            
            /* 도서 카드 - 影 (Kage) 그림자 없는 깨끗함 */
            .book-card {
                background: #ffffff;
                border: 1px solid #000000;
                transition: all 0.3s ease;
                cursor: pointer;
                position: relative;
            }
            
            .book-card:hover {
                transform: translateX(5px) translateY(-5px);
                box-shadow: -5px 5px 0 #000000;
            }
            
            .book-card-image {
                height: 380px;
                background: #000000;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
            }
            
            .book-placeholder {
                color: #ffffff;
                text-align: center;
                padding: 30px;
                font-size: 1.2rem;
                font-weight: 300;
                letter-spacing: 0.1rem;
                line-height: 1.4;
            }
            
            .book-number {
                position: absolute;
                top: 20px;
                right: 20px;
                color: #ffffff;
                font-size: 3rem;
                font-weight: 100;
                opacity: 0.2;
                font-family: 'Gill Sans', sans-serif;
            }
            
            .book-card-content {
                padding: 30px;
                background: #ffffff;
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
            
            /* ボタン - 枠 (Waku) 프레임 */
            .btn-primary {
                width: 100%;
                padding: 15px;
                background: #ffffff;
                color: #000000;
                border: 1px solid #000000;
                font-family: 'Gill Sans', sans-serif;
                font-size: 0.9rem;
                font-weight: 400;
                letter-spacing: 0.15rem;
                text-transform: uppercase;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .btn-primary:hover {
                background: #000000;
                color: #ffffff;
            }
            
            /* Footer 정보 */
            .powered-by {
                margin-top: auto;
                padding-top: 60px;
                font-size: 0.8rem;
                opacity: 0.5;
                letter-spacing: 0.1rem;
            }
            
            .powered-by a {
                color: #ffffff;
                text-decoration: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            }
            
            .powered-by a:hover {
                border-bottom-color: #ffffff;
            }
            
            /* 일본어 액센트 */
            .japanese-accent {
                font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif;
                opacity: 0.3;
                font-size: 0.8rem;
                margin-left: 10px;
            }
        </style>
    </head>
    <body>
        <div class="layout">
            <aside class="sidebar">
                <div class="sidebar-title">無慣性</div>
                <div class="sidebar-subtitle">mukansei</div>
                
                <nav class="sidebar-nav">
                    <a class="sidebar-link-active" href="#">
                        <span>All Wines</span>
                        <span class="book-count">09</span>
                    </a>
                    <div class="sidebar-section">
                        <div class="sidebar-heading">Categories</div>
                        <a class="sidebar-link" href="#">
                            <span>Hokkaido</span>
                            <span class="book-count">02</span>
                        </a>
                        <a class="sidebar-link" href="#">
                            <span>Yamanashi</span>
                            <span class="book-count">05</span>
                        </a>
                        <a class="sidebar-link" href="#">
                            <span>Nagano</span>
                            <span class="book-count">02</span>
                        </a>
                    </div>
                </nav>
                
                <div class="powered-by">
                    POWERED BY<br>
                    <a href="https://cloudflare.com" target="_blank">CLOUDFLARE</a>
                </div>
            </aside>
            
            <main class="main-content">
                <nav class="breadcrumbs">
                    HOME<span class="breadcrumb-separator">/</span>MUKANSEI<span class="breadcrumb-separator">/</span>ALL WINES
                </nav>
                
                <div class="page-header">
                    <h1>My Wines</h1>
                    <p class="subtitle">Discover the beauty of wine through minimalist curation</p>
                </div>
                
                <div class="info-banner">
                    <h2>Our Vision</h2>
                    <p>私たちの志向点</p>
                    <ol>
                        <li><a href="#" target="_blank">美しい心で美しい世界を</a></li>
                    </ol>
                </div>
                
                <div class="controls">
                    <select class="sort-select">
                        <option value="">SORT BY</option>
                        <option value="title_asc">Title A → Z</option>
                        <option value="title_desc">Title Z → A</option>
                        <option value="author_asc">Author A → Z</option>
                        <option value="author_desc">Author Z → A</option>
                    </select>
                </div>
                
                <div class="book-grid">
                    <div class="book-card">
                        <div class="book-card-image">
                            <span class="book-number">01</span>
                            <div class="book-placeholder">THE BROTHERS<br>KARAMAZOV</div>
                        </div>
                        <div class="book-card-content">
                            <h3>The Brothers Karamazov</h3>
                            <p class="author">Fyodor Dostoevsky</p>
                            <p class="description">A passionate philosophical novel set in 19th-century Russia, exploring the eternal questions of God, free will, and morality.</p>
                            <button class="btn-primary">Read More</button>
                        </div>
                    </div>
                    
                    <div class="book-card">
                        <div class="book-card-image">
                            <span class="book-number">02</span>
                            <div class="book-placeholder">EAST OF<br>EDEN</div>
                        </div>
                        <div class="book-card-content">
                            <h3>East of Eden</h3>
                            <p class="author">John Steinbeck</p>
                            <p class="description">A multigenerational saga in California's Salinas Valley, exploring the eternal struggle between good and evil.</p>
                            <button class="btn-primary">Read More</button>
                        </div>
                    </div>
                    
                    <div class="book-card">
                        <div class="book-card-image">
                            <span class="book-number">03</span>
                            <div class="book-placeholder">THE FIFTH<br>SEASON</div>
                        </div>
                        <div class="book-card-content">
                            <h3>The Fifth Season</h3>
                            <p class="author">N.K. Jemisin</p>
                            <p class="description">In a world of catastrophic climate change, a woman searches for her daughter while society divides.</p>
                            <button class="btn-primary">Read More</button>
                        </div>
                    </div>
                    
                    <div class="book-card">
                        <div class="book-card-image">
                            <span class="book-number">04</span>
                            <div class="book-placeholder">JANE<br>EYRE</div>
                        </div>
                        <div class="book-card-content">
                            <h3>Jane Eyre</h3>
                            <p class="author">Charlotte Brontë</p>
                            <p class="description">A strong-willed orphan becomes a governess, falls in love, and discovers a dark secret.</p>
                            <button class="btn-primary">Read More</button>
                        </div>
                    </div>
                    
                    <div class="book-card">
                        <div class="book-card-image">
                            <span class="book-number">05</span>
                            <div class="book-placeholder">ANNA<br>KARENINA</div>
                        </div>
                        <div class="book-card-content">
                            <h3>Anna Karenina</h3>
                            <p class="author">Leo Tolstoy</p>
                            <p class="description">A complex portrait of Russian aristocracy, centered on an adulterous affair and its consequences.</p>
                            <button class="btn-primary">Read More</button>
                        </div>
                    </div>
                    
                    <div class="book-card">
                        <div class="book-card-image">
                            <span class="book-number">06</span>
                            <div class="book-placeholder">GIOVANNI'S<br>ROOM</div>
                        </div>
                        <div class="book-card-content">
                            <h3>Giovanni's Room</h3>
                            <p class="author">James Baldwin</p>
                            <p class="description">An American in Paris grapples with his sexual identity and the complexity of human relationships.</p>
                            <button class="btn-primary">Read More</button>
                        </div>
                    </div>
                    
                    <div class="book-card">
                        <div class="book-card-image">
                            <span class="book-number">07</span>
                            <div class="book-placeholder">MY BRILLIANT<br>FRIEND</div>
                        </div>
                        <div class="book-card-content">
                            <h3>My Brilliant Friend</h3>
                            <p class="author">Elena Ferrante</p>
                            <p class="description">The Neapolitan quartet begins with two friends navigating childhood in post-war Naples.</p>
                            <button class="btn-primary">Read More</button>
                        </div>
                    </div>
                    
                    <div class="book-card">
                        <div class="book-card-image">
                            <span class="book-number">08</span>
                            <div class="book-placeholder">THE REMAINS<br>OF THE DAY</div>
                        </div>
                        <div class="book-card-content">
                            <h3>The Remains of the Day</h3>
                            <p class="author">Kazuo Ishiguro</p>
                            <p class="description">An English butler reflects on a life of service and missed opportunities during a countryside journey.</p>
                            <button class="btn-primary">Read More</button>
                        </div>
                    </div>
                    
                    <div class="book-card">
                        <div class="book-card-image">
                            <span class="book-number">09</span>
                            <div class="book-placeholder">THE LEFT HAND<br>OF DARKNESS</div>
                        </div>
                        <div class="book-card-content">
                            <h3>The Left Hand of Darkness</h3>
                            <p class="author">Ursula K. Le Guin</p>
                            <p class="description">An envoy navigates the ambisexual society of planet Gethen to secure an interplanetary alliance.</p>
                            <button class="btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </body>
    </html>
`;
}
