'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const BlogSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const blogPosts = [
    {
      id: 1,
      title: "Expert Tips for Maximizing Crop Yields",
      category: "Agricultural",
      author: "Ellan John",
      date: "April 29, 2024",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      url: "/blog/expert-tips-for-maximizing-crop-yields",
      authorUrl: "/blog-author/ella-john",
      categoryUrl: "/blog-category/agricultural"
    },
    {
      id: 2,
      title: "Practices and Benefits of Sustainable Farming",
      category: "Farming",
      author: "Max Wills",
      date: "April 29, 2024",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      url: "/blog/practices-and-benefits-of-sustainable-farming",
      authorUrl: "/blog-author/max-wills",
      categoryUrl: "/blog-category/farming"
    },
    {
      id: 3,
      title: "Essential Guidelines for Livestock Health",
      category: "Livestock",
      author: "Sam Andre",
      date: "April 29, 2024",
      image: "https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "/blog/essential-guidelines-for-livestock-health",
      authorUrl: "/blog-author/sam-andre",
      categoryUrl: "/blog-category/livestock"
    }
  ];

  return (
    <section className="blog-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="blog-whole-wrap">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="blog-top-wrap"
          >
            <motion.div   className="blog-title-wrap">
              <h2 className="section-title">Our Latest News</h2>
            </motion.div>
            <motion.div   className="blog-button-wrap">
              <Link href="/blog" className="section-button w-button">More Blogs</Link>
            </motion.div>
          </motion.div>

          <div className="blog-post-list-wrap">
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="blog-post-whole-wrap"
            >
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items w-row">
                  {blogPosts.slice(0, 2).map((post) => (
                    <motion.div 
                      key={post.id}
                      
                      whileHover={{ y: -5 }}
                      role="listitem" 
                      className="blog-item w-dyn-item w-col w-col-6"
                    >
                      <div className="blog-post-wrap home">
                        <div className="blog-post-image-whole-wrap">
                          <Link href={post.url} className="blog-post-image-wrap w-inline-block">
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={759}
                              height={506}
                              className="blog-post-image"
                              priority={false}
                            />
                          </Link>
                          <Link href={post.categoryUrl} className="blog-post-category-text">
                            {post.category}
                          </Link>
                        </div>
                        <div className="blog-post-content-wrap">
                          <div className="blog-post-author-date-wrap">
                            <div className="blog-author-date-wrap">
                              <Image
                                src="/blog-author-icon.svg"
                                width={20}
                                height={20}
                                alt="blog icons"
                                className="blog-author-icon"
                              />
                              <p className="blog-author-name">By</p>
                              <Link href={post.authorUrl} className="blog-author-name link">
                                {post.author}
                              </Link>
                            </div>
                            <div className="blog-author-date-wrap">
                              <Image
                                src="/blog-date-icon.svg"
                                width={20}
                                height={20}
                                alt="blog icons"
                                className="blog-author-icon"
                              />
                              <p className="blog-author-name">{post.date}</p>
                            </div>
                          </div>
                          <Link href={post.url} className="blog-post-title">
                            {post.title}
                          </Link>
                          <div className="blog-post-button-wrap">
                            <Link href={post.url} className="read-more-button w-button">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="blog-post-list-whole-wrap"
            >
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  {blogPosts.map((post) => (
                    <motion.div 
                      key={post.id}
                       
                      whileHover={{ x: 5 }}
                      role="listitem" 
                      className="w-dyn-item"
                    >
                      <div className="blog-list-wrap">
                        <Link href={post.url} className="blog-list-image-wrap w-inline-block">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={160}
                            height={120}
                            className="blog-list-image"
                            priority={false}
                          />
                        </Link>
                        <div className="blog-list-content-wrap">
                          <div className="blog-post-author-date-wrap">
                            <div className="blog-author-date-wrap">
                              <Image
                                src="/blog-author-icon.svg"
                                width={20}
                                height={20}
                                alt="blog icons"
                                className="blog-author-icon"
                              />
                              <p className="blog-author-name">By</p>
                              <Link href={post.authorUrl} className="blog-author-name link">
                                {post.author}
                              </Link>
                            </div>
                            <div className="blog-author-date-wrap">
                              <Image
                                src="/blog-date-icon.svg"
                                width={20}
                                height={20}
                                alt="blog icons"
                                className="blog-author-icon"
                              />
                              <p className="blog-author-name">{post.date}</p>
                            </div>
                          </div>
                          <Link href={post.url} className="blog-post-title">
                            {post.title}
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;