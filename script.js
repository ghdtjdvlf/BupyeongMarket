document.addEventListener('DOMContentLoaded', function() {
    // 모바일 대응을 위한 메뉴 토글 기능 추가 가능
    // 현재는 CSS 호버로 작동하지만, 모바일에서는 클릭 이벤트로 변경 필요
    
    // 모든 메뉴 아이템 선택
    const menuItems = document.querySelectorAll('.menu-item');
    
    // 모바일 여부 확인 (간단한 방법)
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (isMobile) {
        // 모바일 디바이스인 경우 클릭 이벤트로 변경
        menuItems.forEach(item => {
            if (item.classList.contains('has-submenu')) {
                const link = item.querySelector('a');
                
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const submenu = item.querySelector('.submenu');
                    
                    // 다른 서브메뉴 닫기
                    document.querySelectorAll('.submenu').forEach(menu => {
                        if (menu !== submenu) {
                            menu.style.display = 'none';
                        }
                    });
                    
                    // 현재 서브메뉴 토글
                    if (submenu.style.display === 'block') {
                        submenu.style.display = 'none';
                    } else {
                        submenu.style.display = 'block';
                    }
                });
            }
        });
    }
});