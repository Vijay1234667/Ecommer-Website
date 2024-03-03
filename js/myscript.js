
const imageSections = document.querySelectorAll('.image-section');
console.log(imageSections)
imageSections.forEach(section => {
    const image = section.querySelector('img');
    console.log(image)

    const sectionId = section.id;

    section.addEventListener('mouseover', () => {
        switch (sectionId) {
            case 'image1':
                image.src = 'homepageimages/product4.jpg';
                break;
            case 'image2':
                image.src = 'homepageimages/product5.jpg';
                break;
            default:
                break;
        }
    });

    section.addEventListener('mouseout', () => {
        switch (sectionId) {
            case 'image1':
                image.src = 'homepageimages/product9.jpg';
                break;
            case 'image2':
                image.src = 'homepageimages/product3.jpg';
                break;
            default:
                break;
        }
    });
});

