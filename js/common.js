document.addEventListener('DOMContentLoaded', () => {
    // サイドバーのHTMLを自動生成
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    
    // 現在のファイル名を取得して「active」を自動判別
    const path = window.location.pathname;
    const page = path.split("/").pop();

    sidebar.innerHTML = `
        <div class="sidebar-logo">
            <div class="sidebar-title">STC</div>
            <div style="font-size:10px; color:#64748b; font-weight:900; letter-spacing:0.2em;">CONTROL PANEL</div>
        </div>
        <nav>
            <a href="index.html" class="nav-link ${page === 'index.html' || page === '' ? 'active' : ''}"><i class="fas fa-home"></i> <span>ダッシュボード</span></a>
            <a href="schedule.html" class="nav-link ${page === 'schedule.html' ? 'active' : ''}"><i class="fas fa-calendar-alt"></i> <span>スケジュール管理</span></a>
            <a href="reservations.html" class="nav-link ${page === 'reservations.html' ? 'active' : ''}"><i class="fas fa-users"></i> <span>予約受付管理</span></a>
            <a href="blog-manager.html" class="nav-link ${page === 'blog-manager.html' ? 'active' : ''}"><i class="fas fa-edit"></i> <span>ブログ投稿管理</span></a>
            <a href="news.html" class="nav-link ${page === 'news.html' ? 'active' : ''}"><i class="fas fa-bullhorn"></i> <span>お知らせ管理</span></a>
            <a href="faq.html" class="nav-link ${page === 'faq.html' ? 'active' : ''}"><i class="fas fa-question-circle"></i> <span>よくある質問管理</span></a>
            <a href="documents.html" class="nav-link ${page === 'documents.html' ? 'active' : ''}"><i class="fas fa-file-alt"></i> <span>書類作成管理</span></a>
        </nav>
    `;

    document.body.prepend(sidebar);
});
