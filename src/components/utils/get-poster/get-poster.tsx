const getPoster = (poster?: string) => {
  return poster !== "N/A"
    ? poster
    : /** @see https://commons.wikimedia.org/wiki/Commons:Simple_media_reuse_guide */
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/240px-No-Image-Placeholder.svg.png";
};

export default getPoster;
