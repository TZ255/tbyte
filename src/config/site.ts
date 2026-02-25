import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "TanzaByte Digital",
  description:
    "Tanzania-born digital technology studio building reliable systems, chatbots, data platforms, and content for modern brands.",
  url: "https://www.tanzabyte.com",
  lang: "en",
  locale: "en_TZ",
  author: "TanzaByte Digital",
  ogImage: ogImage,
  contact: {
    email: "info@tanzabyte.com",
    location: "NSSF Complex, Moshi, Kilimanjaro, Tanzania",
    phone: "+255 743 000 000",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/tanzabyte",
    twitter: "https://twitter.com/tanzabyte",
    github: "https://github.com/tanzabyte",
    whatsapp: "https://wa.me/255743000000",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Services", href: "/#services" },
    { text: "Portfolio", href: "/#projects" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ],
};
