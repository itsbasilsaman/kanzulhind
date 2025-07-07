import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: [
      'rosewood.pk',
      'i.pinimg.com',
      'www.theredcollectiononline.com',
      'furnituredepot.com',
      'www.furnituredepot.com',
      'images.unsplash.com',
      'cdn-icons-png.flaticon.com',
      'c8.alamy.com',
      'followtheyellowbrickhome.com',
      'lionandunicorn.com',
      'www.modeintextile.fr',
      'wallpaperbat.com',
      'www.thedailymeal.com',
      'images.pexels.com',
      'thumbs.dreamstime.com',
      'st2.depositphotos.com',
      'www.brandedgirls.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2gg9evh47fn9z.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'www.thakehamfurniture.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
    ],
  },
};

export default nextConfig;
