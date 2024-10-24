/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Optional: Customize Webpack if needed (e.g., path alias for easier imports)
    webpack: (config) => {
      config.resolve.alias['@'] = new URL('./src', import.meta.url).pathname;  // Adds an alias for the `src` directory
      return config;
    },
  };
  
  export default nextConfig;
  