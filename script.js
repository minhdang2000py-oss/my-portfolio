document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Lê Minh Đăng đã load xong!');

    // Chỉ hiện lời chào 1 lần mỗi phiên, ở trang chủ
    const isHome = document.body.classList.contains('home');
    let seen = false;
    try { seen = sessionStorage.getItem('welcomed') === '1'; } catch (e) {}
    if (isHome && !seen) {
        alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');
        try { sessionStorage.setItem('welcomed', '1'); } catch (e) {}
    }

    // Đánh dấu trang đang mở trên thanh menu
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a => {
        if (a.getAttribute('href') === current && !a.classList.contains('brand')) {
            a.classList.add('active');
        }
    });

    // Form liên hệ (chỉ demo, không gửi dữ liệu đi đâu)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert('Cảm ơn ' + name + '! Mình đã nhận được lời nhắn của bạn.');
            form.reset();
        });
    }
});
