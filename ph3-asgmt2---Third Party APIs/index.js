const imgPlacement = document.getElementById("photoBox");
const loadNewImg = document.getElementById("refreshButton");

const photoList = "https://picsum.photos/v2/list?limit=100";

const getPhoto = async () => {
  try {
    const response = await fetch(photoList);
    const photos = await response.json();
    const genPhotoInfo = await photos[
      Math.floor(Math.random() * photos.length)
    ];
    const photoInfo = `
        <img src="${genPhotoInfo.download_url}" alt ="random photo"/>
        <p>Author: ${genPhotoInfo.author}</p>
        <p>Image ID: ${genPhotoInfo.id}</p>
    `;
    console.log(photoInfo);
    imgPlacement.innerHTML = photoInfo;
  } catch (error) {
    console.log(error.message);
  }
};

// image and information available upon loading
window.addEventListener("load", getPhoto);
// refreshing and/or change of image upon clicking refresh
//loadNewImg.addEventListener("click", getPhoto);
