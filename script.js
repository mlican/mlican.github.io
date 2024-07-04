document.addEventListener('DOMContentLoaded', function() {
    // 添加上传文件的事件监听器
    const uploadBox = document.querySelector('.upload-box');
    uploadBox.addEventListener('click', function() {
        alert('此功能正在开发中...');
    });
});

// 滚动到上传区域
function scrollToUpload() {
    document.getElementById('upload').scrollIntoView({ behavior: 'smooth' });
}
