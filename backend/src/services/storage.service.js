const { ImageKit } = require("@imagekit/nodejs/index.js");
require('dotenv').config();
const PRIVATEKEY = process.env.IMAGEKIT_PRIVATE_KEY;

const imageKit = new ImageKit({
  privateKey: PRIVATEKEY,
});

async function uploadFile(buffer) {
  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return result;
}

module.exports = uploadFile;
