import placeholderImage from "~frontend/src/constants/placeholder-image/placeholder-image";

const getPoster = (poster?: string) => {
  return poster !== "N/A" ? poster : placeholderImage;
};

export default getPoster;
