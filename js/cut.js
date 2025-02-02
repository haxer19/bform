function cimg(imgElement, width, height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    const img = new Image();
    img.src = imgElement.src;
    img.onload = function () {
      const aspectRatio = img.width / img.height;
      let newWidth = width;
      let newHeight = height;
      let xOffset = 0;
      let yOffset = 0;
      if (aspectRatio > width / height) {
        newHeight = height;
        newWidth = height * aspectRatio;
        xOffset = (newWidth - width) / 2;
      } else {
        newWidth = width;
        newHeight = width / aspectRatio;
        yOffset = (newHeight - height) / 2;
      }
      ctx.drawImage(img, -xOffset, -yOffset, newWidth, newHeight);
      imgElement.src = canvas.toDataURL();
      imgElement.style.display = "block";
    };
  }
  document.addEventListener("DOMContentLoaded", () => {
    const avatarImg = document.getElementById("avatar-img");
    const coverImg = document.getElementById("cover-img");
    if (avatarImg.src) cimg(avatarImg, 421, 421);
    if (coverImg.src) cimg(coverImg, 1820, 360);
  });