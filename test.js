const axios = require("axios");
const cheerio = require("cheerio");

async function fetchInstagramData(userId) {
  try {
    const url = `https://www.instagram.com/${userId}/`;
    const response = await axios.get(url);

    if (response.status === 200) {
      const html = response.data;
      // console.log(html);
      const $ = cheerio.load(html);

      // console.log($);

      // Use the full XPath to select the image element
      const imageElement = $("img");

      console.log(imageElement);

      if (imageElement.length > 0) {
        const imageSrc = imageElement.attr("src");
        console.log("Image Source:", imageSrc);
      } else {
        console.log("Image element not found.");
      }
    } else {
      console.log("Error fetching the Instagram page:", response.status);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Replace 'yourUserId' with the actual Instagram user ID you want to scrape
const userId = "phuwaterwars2023";
fetchInstagramData(userId);
