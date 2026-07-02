// サイドバーのスタイル修正
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // ウィンドウリサイズ時にスタイル調整
    function adjustLayout() {
        if (window.innerWidth <= 768) {
            sidebar.style.width = '280px';
            sidebar.style.height = '100vh';
            sidebar.style.position = 'fixed';
            sidebar.style.left = '0';
            sidebar.style.top = '0';
            sidebar.style.borderRight = '1px solid rgba(56, 189, 248, 0.2)';
            sidebar.style.borderBottom = 'none';
            
            mainContent.style.marginLeft = '280px';
            mainContent.style.padding = '40px';
        } else {
            sidebar.style.width = '280px';
            sidebar.style.height = '100vh';
            sidebar.style.position = 'fixed';
            sidebar.style.left = '0';
            sidebar.style.top = '0';
        }
    }
    
    // 初期実行
    adjustLayout();
    
    // リサイズ時に実行
    window.addEventListener('resize', adjustLayout);
});
