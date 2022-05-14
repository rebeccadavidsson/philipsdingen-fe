// next.config.js
module.exports = {
    images: {
        domains: ["res.cloudinary.com"],
        loader: "cloudinary",
        path: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`
    }
}
