const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainImage = document.getElementById('main-image');
const loveText = document.getElementById('love-text');

let noClickCount = 0;
let yesBtnScale = 1;
let yesBtnScaled = false;

yesBtn.addEventListener('click', () => {
    if (!yesBtnScaled) {
        // Tạo hiệu ứng trái tim
        createHearts();

        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.src = 'image/img3.jfif'; // Đường dẫn đến hình ảnh mới
            mainImage.style.opacity = 1;
        }, 500); // Thay đổi hình ảnh sau 500ms (khoảng thời gian để hình ảnh mờ)

        // Cập nhật dòng chữ
        loveText.textContent = 'Phải như vậy chứ....';

        // Ẩn các nút
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';

        yesBtnScaled = true; // Đặt cờ cho biết nút đã được phóng to
    }
});

noBtn.addEventListener('click', () => {
    noClickCount++;

    if (noClickCount === 1) {
        mainImage.src = 'image/img2.jfif';
        noBtn.textContent = 'Cậu chắc chưa';
    } else if (noClickCount === 2) {
        mainImage.src = 'image/img4.jfif';
        noBtn.textContent = 'Cho suy nghĩ lại lần nữa đó';
    } else if (noClickCount === 3) {
        mainImage.src = 'image/img5.jfif';
        noBtn.textContent = 'Suy nghĩ kỹ cái đi';
    } else if (noClickCount === 4) {
        mainImage.src = 'image/img6.jfif';
        noBtn.textContent = 'Đừng có như vậy mà @_@';
    }

    // Tăng kích thước của nút Yes mỗi khi nhấp vào No
    yesBtnScale *= 1.2;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
});

function createHearts() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 50; i++) { // Số lượng trái tim tạo ra
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`; // Sử dụng vw để trái tim xuất hiện trên toàn chiều rộng màn hình
        heart.style.top = `${Math.random() * 100}vh`; // Sử dụng vh để trái tim xuất hiện trên toàn chiều cao màn hình
        container.appendChild(heart);

        // Xóa trái tim sau khi hoạt ảnh kết thúc
        setTimeout(() => {
            heart.remove();
        }, 10000); // Thời gian sống của trái tim, phải khớp với thời gian hoạt ảnh
    }
}
