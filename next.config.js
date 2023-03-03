/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental:{
        appDir:true
    },

    
    images: {
        domains: ["lcontent.linkedin.com","static-exp1.licdn.com"],
    },
    

}

module.exports = nextConfig

