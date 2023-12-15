import noimage from "../assets/no-image-available.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noimage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const value = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return value;
};

export default getCroppedImageUrl;
