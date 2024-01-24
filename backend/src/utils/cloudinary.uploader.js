import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: "vikas8004",
  api_key: 498528855722373,
  api_secret: "QQoK7k3Kx770yohArO6fkRD4iTQ",
});
const uploadImage = async (localPath) => {
  try {
    const res = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
    });
    if (res) {
      fs.unlinkSync(localPath);
    }
    return res;
  } catch (error) {
    fs.unlinkSync(localPath);
    return null;
  }
};

export default uploadImage;
