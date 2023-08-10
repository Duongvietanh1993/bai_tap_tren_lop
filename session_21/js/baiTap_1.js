document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email-input').value;
    let password = document.getElementById('password-input').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    let errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';

    if (!email || !password || !confirmPassword) {
        errorMessage.innerHTML = 'Vui lòng điền đầy đủ thông tin.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.innerHTML = 'Xác nhận mật khẩu không khớp.';
        return;
    }

    // Kiểm tra sự tồn tại của email đăng ký trong Local Storage
    let existingUser = localStorage.getItem(email);
    if (existingUser) {
        errorMessage.innerHTML = 'Email đã được đăng ký.';
        return;
        let email = document.getElementById('email-input').value=''
        let password = document.getElementById('password-input').value=''
        let confirmPassword = document.getElementById('confirm-password').value=''
    }

    // Lưu tài khoản vào Local Storage
    let user = {
        email: email,
        password: password
    };
    localStorage.setItem(email, JSON.stringify(user));

    // Đăng ký thành công
    alert('Đăng ký thành công!');
    document.getElementById('signup-form').reset();
});