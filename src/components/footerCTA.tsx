'use client';

import { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';

export default function FooterCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically call your actual API
      // const response = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      
      setSubmitStatus('success');
      setEmail('');
      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section className="footer-cta-section">
      <div className="w-layout-blockcontainer container w-container">
        <div 
          ref={containerRef}
          className="footer-cta-wrap opacity-100 transition-all duration-500 ease-out hover:scale-[1.01]"
        >
          <div className="footer-cta-content-wrap">
            <h2 className="footer-cta-title group">
              Join Our Mailing List
              <span className="block h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </h2>
            <p className="footer-cta-content">
              Join our list for the latest agricultural news and updates.
            </p>
          </div>
          
          <div className="footer-form-wrap">
            <div className="footer-form-two w-form">
              <form
                ref={formRef}
                id="wf-form-Footer-Form-Two"
                name="wf-form-Footer-Form-Two"
                data-name="Footer Form Two"
                method="get"
                className="footer-form-container-two"
                data-wf-page-id="65e9524b0acdfabbfcd796e7"
                data-wf-element-id="f68423b3-7ed5-4d13-25c3-b9a4763e8989"
                onSubmit={handleSubmit}
              >
                <div className="footer-form-block-two">
                  <input
                    className="footer-form-input w-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    maxLength={256}
                    name="Footer-Email-Two-2"
                    data-name="Footer Email Two 2"
                    aria-label="Enter your email"
                    placeholder="Email Address"
                    type="email"
                    id="Footer-Email-Two-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`primary-button w-button hover:bg-opacity-90 active:scale-95 transition-transform duration-100 ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Please wait...' : 'Send'}
                  </button>
                </div>
              </form>
              
              {submitStatus === 'success' && (
                <div className="w-form-done animate-fadeIn">
                  <div>Thank you! Your submission has been received!</div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="w-form-fail animate-fadeIn">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              )}
            </div>
          </div>
          
          {/* <div className="footer-cta-decorative-image-wrap hover:rotate-6 transition-transform duration-300">
            <Image
              src="/footer-decorative-1.svg"
              width={100}
              height={100}
              loading="lazy"
              alt="footer cta leaf decorative"
            />
          </div> */}
          
          {/* <div className="footer-cta-right-decorative-wrap hover:-rotate-6 transition-transform duration-300">
            <Image
              src="/footer-decorative-2.svg"
              width={100}
              height={100}
              loading="lazy"
              alt="footer cta leaf decorative"
              className="footer-cta-leaf-image"
            />
          </div> */}
        </div>
      </div>
      
      <style jsx global>{`
        .footer-cta-section {
          opacity: 1 !important;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}