import image from './kamal ahmed.jpg';

function showImage() {
    const img = document.createElement('img');
    img.width = '150';
    img.src = image;
    document.querySelector('body').appendChild(img);
}

export default showImage;