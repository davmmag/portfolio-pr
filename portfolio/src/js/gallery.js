import changingActiveElement from "./functions";

const changingActiveImages = (images, targetName) => {
  images.forEach((img, index) => {
    const newSrc = `assets/img/${targetName}/${index + 1}.jpg`;
    img.src = newSrc;
    img.alt = `${targetName} photo`;
  });
};

const changingStateOfGallery = (target, images) => {
  const targetType = target.dataset.type;
  if (targetType) {
    changingActiveElement(target, 'portfolio__switch--active');
    changingActiveImages(images, targetType);
  }
};

export default changingStateOfGallery;