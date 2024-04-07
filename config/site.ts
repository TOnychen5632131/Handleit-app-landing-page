import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const PROJECT_URL = 'https://github.com/yourGitHub/handleit'

const baseSiteConfig = {
  name: "Handleit",
  description:
    "Handleit revolutionizes typing on iOS with AI-driven suggestions, enabling users to respond with speed and precision. Say goodbye to the hassle of typing out responses and embrace a smarter, efficient communication experience.",
  url: "https://handleit.com",
  ogImage: "https://handleit.com/og.png",
  metadataBase: '/',
  keywords: ["AI keyboard", "iOS typing assistant", "efficient communication", "Handleit"],
  authors: [
    {
      name: "Hadnleit Team",
      url: "https://yourwebsite.com",
      twitter: 'https://twitter.com/yourTwitter',
    }
  ],
  creator: '@yourTwitter',
  openSourceURL: PROJECT_URL,
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }, // Light mode color
    { media: '(prefers-color-scheme: dark)', color: '#000000' }, // Dark mode color
  ],
  nextThemeColor: 'system', // Recommended to use 'system' for matching user's system theme
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  headerLinks: [
    // Adjusted to represent typical sections of a product website
    { name: 'Features', href: "/#features", icon: BsGithub }, // Assuming GitHub for documentation or code
    { name: 'Download', href: "https://appstore.com/handleit", icon: BsTwitterX }, // Link to the App Store
    { name: 'Support', href: "https://handleit.com/support", icon: SiBuymeacoffee } // Support or FAQ section
  ],
  footerLinks: [
    { name: 'Contact Us', href: "mailto:support@handleit.com", icon: MdEmail },
    { name: 'Twitter', href: "https://twitter.com/yourTwitter", icon: BsTwitterX },
    { name: 'GitHub', href: PROJECT_URL, icon: BsGithub },
    { name: 'Support', href: "https://handleit.com/support", icon: SiJuejin }, // Example support link
  ],
  footerProducts: [
    // Can list other products or useful links here. Adjusted for a more focused approach on Handleit
    { url: 'https://handleit.com/', name: 'Handleit Keyboard' },

  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
