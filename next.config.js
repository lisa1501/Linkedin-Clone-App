/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental:{
        appDir:true
    },

    
    images: {
        
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
          ],
        // domains: ["www.iconsdb.com","static-exp1.licdn.com","content.linkedin.com"],
    },
    

}

module.exports = nextConfig

