'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ServiceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const services = [
    {
      title: "Indian Antiques",
      href: "/antique-single",
      icon: "https://lionandunicorn.com/wp-content/uploads/2022/12/how-to-identify-rare-and-valuable-antiques-near-me-scaled.jpg",
      description: "Discover authentic Indian heritage pieces - from traditional jewelry to vintage artifacts, bringing centuries of culture to your collection."
    },
    {
      title: "Traditional Textiles",
      href: "/cloths-single",
      icon: "https://www.modeintextile.fr/wp-content/uploads/2016/05/ERGO.jpg",
      description: "Premium Indian fabrics and traditional garments - from silk sarees to handcrafted cotton, showcasing India's rich textile heritage."
    },
    {
      title: "Pure Indian Spices",
      href: "/spices-single",
      icon: "https://wallpaperbat.com/img/867713-indian-spices-wallpaper.jpg",
      description: "Authentic Indian spices sourced directly from farms - cardamom, turmeric, saffron and more, delivering authentic flavors to your kitchen."
    },
    {
      title: "Premium Indian Rice",
      href: "/rices-single",
      icon: "https://www.thedailymeal.com/img/gallery/types-of-rice-and-how-to-cook-them/l-intro-1676410300.jpg",
      description: "Finest quality Indian rice varieties - Basmati, Jasmine, and specialty grains, bringing the authentic taste of India to your table."
    },
    {
      title: "Handcrafted Pottery",
      href: "/pottery-single",
      icon: "https://images.unsplash.com/photo-1560846310-485ef935c577?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Beautiful handcrafted Indian pottery and ceramics - from traditional clay pots to decorative pieces, showcasing centuries-old craftsmanship."
    },
    {
      title: "Ayurvedic Products",
      href: "/ayurvedic-single",
      icon: "https://images.pexels.com/photos/7148527/pexels-photo-7148527.jpeg?_gl=1*8qqiyu*_ga*MTM0MzMxOTA0NS4xNzIxMDQ2ODAy*_ga_8JE65Q40S6*czE3NTE2OTQwNTEkbzExJGcxJHQxNzUxNjk4Nzk0JGo1MSRsMCRoMA..",
      description: "Natural Ayurvedic products and wellness items - herbal remedies, essential oils, and traditional healing products for holistic health."
    },
  ];

  return (
    <section className="service-section ">
      <div className="service-bg-wrap pt-7">
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-wrap">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="service-title-wrap"
            >
              <motion.h2   className="section-title">
                Authentic Indian Products for Your Lifestyle
              </motion.h2>
              <motion.p   className="section-content">
                Premium Indian heritage products - spices, textiles, rice, and antiques, bringing authentic India to the Middle East.
              </motion.p>
            </motion.div>

            <div className="service-collection-whole-wrap">
              <div className="w-dyn-list">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={containerVariants}
                  role="list"
                  className="service-collection-list w-dyn-items w-row"
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                       
                      whileHover="hover"
                      role="listitem"
                      className={`service-item w-dyn-item w-col w-col-4 ${index >= 4 ? 'hidden md:block' : ''}`}
                    >
                      <Link href={service.href} className="service-list-item">
                        <div className="service-icon-wrap w-inline-block">
                          <Image
                            src={service.icon}
                            width={250}
                            height={250}
                            loading="lazy"
                            alt="icon"
                            className="service-icon w-[350px] h-[170px] object-cover rounded-[12px]"
                          />
                        </div>
                        <div className="service-card-content-wrap">
                          <div className="service-card-title">
                            {service.title}
                          </div>
                          <div className="service-title-bar-line"></div>
                          <p className="service-card-content">{service.description}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-section-image-wrap">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            src="/service-section-leaf.png"
            loading="lazy"
            alt="service section leaf image"
            className="service-section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;