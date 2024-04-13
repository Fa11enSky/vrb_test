import cloudinary from "cloudinary-core";

const cloudinaryCore = new cloudinary.Cloudinary({
  cloud_name: "dtsw0uqfz",
});

const uploadImageToCloudinary = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ftw0ehjd"); // Замість 'your_upload_preset' вкажіть свій upload preset

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        cloudinaryCore.config().cloud_name
      }/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return data.secure_url; // Повертаємо URL завантаженого зображення
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};
export default uploadImageToCloudinary;
