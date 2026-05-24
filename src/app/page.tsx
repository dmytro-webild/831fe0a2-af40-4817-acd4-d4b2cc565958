"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Indulge Salon"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlayTestimonial
      title="Experience Professional Beauty & Care"
      description="At Indulge Salon, we transform your vision into reality with premium hair and bridal services in the heart of Cuttack."
      testimonials={[
        {
          name: "Sagarika Mohanty",
          handle: "Happy Client",
          testimonial: "Excellent service and attitude. My highlights look amazing!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mirror-hairdressing-salon_23-2147670185.jpg?_wi=1",
          imageAlt: "luxury salon interior modern",
        },
        {
          name: "Manisha Senapati",
          handle: "Bridal Client",
          testimonial: "Pre-bridal session was refreshing and peaceful. Amazing service.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-portrait-skincare-routine_23-2151308617.jpg?_wi=1",
          imageAlt: "luxury salon interior modern",
        },
        {
          name: "Swatee",
          handle: "Hair Care",
          testimonial: "Multi-layered haircut was transformative. Vicky is a pro!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-eco-friendly-products-assortment_23-2148491140.jpg?_wi=1",
          imageAlt: "luxury salon interior modern",
        },
        {
          name: "Ananya Dash",
          handle: "Beauty Enthusiast",
          testimonial: "The atmosphere is so calming and the results are consistently great.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-wearing-make-up-sing-brush-his-face_23-2148784333.jpg?_wi=1",
          imageAlt: "luxury salon interior modern",
        },
        {
          name: "Priya Sahoo",
          handle: "Regular",
          testimonial: "Best place for relaxation and professional beauty treatments in Cuttack.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/two-hairstylers-posing-standing-modern-spacy-beaty-salon_651396-986.jpg?_wi=1",
          imageAlt: "luxury salon interior modern",
        },
      ]}
      buttons={[
        {
          text: "Book Appointment",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mirror-hairdressing-salon_23-2147670185.jpg?_wi=2"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/makeup-brushes-cosmetics-near-mirror_23-2147784017.jpg",
          alt: "happy client portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-drag-queen-with-makeup_23-2149434534.jpg",
          alt: "satisfied customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-woman-looking-through-magazine_23-2148332488.jpg",
          alt: "smiling beauty client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/professional-woman-making-up-girl_23-2148210700.jpg",
          alt: "happy salon visitor",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-woman-home-getting-ready-haircut_23-2148817221.jpg",
          alt: "client at salon",
        },
      ]}
      avatarText="Join 1000+ satisfied clients"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Professionalism & Care"
      description="Located in Rex Plaza, we are committed to providing highly trained, professional services in a peaceful, relaxing environment."
      metrics={[
        {
          value: "1000+",
          title: "Happy Clients",
        },
        {
          value: "4.5★",
          title: "Rating",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-portrait-skincare-routine_23-2151308617.jpg?_wi=2"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Hair Treatments",
          description: "Revitalize your hair with our specialized spa and treatment sessions.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-eco-friendly-products-assortment_23-2148491140.jpg?_wi=2",
        },
        {
          title: "Bridal Makeup",
          description: "Professional bridal styling to make your special day truly unforgettable.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-wearing-make-up-sing-brush-his-face_23-2148784333.jpg?_wi=2",
        },
        {
          title: "Keratin & Straightening",
          description: "Advanced hair straightening and smoothing treatments for healthy, sleek hair.",
          imageSrc: "http://img.b2bpic.net/free-photo/two-hairstylers-posing-standing-modern-spacy-beaty-salon_651396-986.jpg?_wi=2",
        },
      ]}
      title="Our Signature Services"
      description="From hair treatments to bridal makeovers, explore our professional expertise."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sagarika Mohanty",
          date: "9 months ago",
          title: "Hair Highlight",
          quote: "Wonderful job. Services are excellent.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-woman-home-getting-ready-haircut_23-2148817221.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/mirror-hairdressing-salon_23-2147670185.jpg?_wi=3",
          imageAlt: "happy client smiling in salon",
        },
        {
          id: "2",
          name: "Manisha Senapati",
          date: "5 months ago",
          title: "Bridal Session",
          quote: "Refreshing and peaceful session.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/stylist-works-woman-hair-salon_1398-1042.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-portrait-skincare-routine_23-2151308617.jpg?_wi=3",
          imageAlt: "happy client smiling in salon",
        },
        {
          id: "3",
          name: "Swatee 5",
          date: "8 months ago",
          title: "Haircut",
          quote: "Amazing job, completely changed my hair.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/closeup-outdoor-shot-attractive-portuguese-woman-touch-hair-fli_197531-30596.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-eco-friendly-products-assortment_23-2148491140.jpg?_wi=3",
          imageAlt: "happy client smiling in salon",
        },
        {
          id: "4",
          name: "Ananya Dash",
          date: "3 months ago",
          title: "Facial",
          quote: "Ambience and service was great.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/girl-being-made-up_1157-247.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-wearing-make-up-sing-brush-his-face_23-2148784333.jpg?_wi=3",
          imageAlt: "happy client smiling in salon",
        },
        {
          id: "5",
          name: "Priya Sahoo",
          date: "1 year ago",
          title: "Keratin",
          quote: "Highly trained staff and very polite.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-with-red-lips-nails_158538-8462.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/two-hairstylers-posing-standing-modern-spacy-beaty-salon_651396-986.jpg?_wi=3",
          imageAlt: "happy client smiling in salon",
        },
      ]}
      title="Voices of Satisfaction"
      description="Over 1,000 customers have trusted us with their beauty transformation."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Award,
          title: "Service Years",
          value: "4+",
        },
        {
          id: "m2",
          icon: Star,
          title: "Customer Rating",
          value: "4.5",
        },
        {
          id: "m3",
          icon: Users,
          title: "Total Reviews",
          value: "1000+",
        },
      ]}
      title="Our Salon Impact"
      description="Consistently providing excellence for our community."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How do I book an appointment?",
          content: "You can book your appointment by calling us directly at 075049 92002.",
        },
        {
          id: "q2",
          title: "Where are you located?",
          content: "We are located at Fourth Floor, Plot No 967, College Road, Reliance Digital/Dominos Building, Cuttack.",
        },
        {
          id: "q3",
          title: "What are your operating hours?",
          content: "We open daily at 10 AM. We recommend calling for exact closing times as they may vary.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/bride-getting-makeup-done-medium-shot_23-2149860778.jpg"
      title="Frequently Asked Questions"
      description="Get quick answers to common questions about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to look your best? Call us at 075049 92002 to schedule your beauty session today."
      buttons={[
        {
          text: "Call Now",
          href: "tel:07504992002",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Indulge Salon"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
