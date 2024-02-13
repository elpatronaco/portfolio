/**
 * @type {import('next').NextConfig}
 */ 
module.exports = {
  distDir: "dist",
  compiler:{
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  }
}
