/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: "mongodb://localhost:27017/buyitnow",
    API_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "codingwithomar",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
