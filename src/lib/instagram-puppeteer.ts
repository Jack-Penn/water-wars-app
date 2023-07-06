import fs from "fs";
import client from "https";

function downloadImage(url: string, filepath: string) {
  return new Promise((resolve, reject) => {
    client.get(url, (res: any) => {
      if (res.statusCode === 200) {
        res
          .pipe(fs.createWriteStream(filepath))
          .on("error", reject)
          .once("close", () => resolve(filepath));
      } else {
        // Consume response data to free up memory
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
}

const puppeteer = require("puppeteer");

async function puppeteerProfilePicture(username: string) {
  try {
    // Launch the browser
    const browser = await puppeteer.launch({
      headless: true,
      ignoreDefaultArgs: ["--disable-extensions"],
    });

    // Create a page
    const page = await browser.newPage();

    // Go to your site
    await page.goto(`https://www.instagram.com/${username}/`);

    // Query for an element handle.
    const element = await page.waitForSelector("img.xpdipgo");

    const src = await (await element.getProperty("src")).jsonValue();

    // Dispose of handle
    await element.dispose();

    // Close browser.
    await browser.close();

    return src;
  } catch {
    throw `${username}'s Profile Image Not Found with Puppeteer`;
  }
}

export async function getProfilePicture(username: string) {
  const imgPath = `/profile-pictures/${username}.jpg`;
  const fullPath = "./public" + imgPath;
  if (await fileExistsAsync(fullPath)) {
    return imgPath;
  } else {
    try {
      console.log("retrieving profile pic with puppeteer");
      const imgSrc = await puppeteerProfilePicture(username);
      await downloadImage(imgSrc, fullPath);
      return imgSrc;
    } catch {
      return "";
    }
  }
}

async function fileExistsAsync(path: string) {
  try {
    await fs.promises.access(path);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
