import { Archivo, Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import StructuredData from "./Components/SEO/StructuredData";
import GoogleAnalytics from "./Components/SEO/GoogleAnalytics";
import CallTrackingScript from "./Components/SEO/CallTrackingScript";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--body-font",
});
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    absolute: "",
    default:
      "Air Conditioning Melbourne | Same-Day Repair & Installation | Cooling Service Melbourne",
    template: "%s | Cooling Service Melbourne - Licensed AC Technicians",
  },
  description:
    "Melbourne's #1 air conditioning specialists. Same-day split system repair, evaporative cooling, ducted refrigeration installation & 24/7 emergency service. Licensed technicians across all Melbourne suburbs. Call 0405 133 761 for instant quote!",
  keywords: [
    "air conditioning Melbourne",
    "split system repair Melbourne",
    "evaporative cooling Melbourne",
    "ducted air conditioning Melbourne",
    "emergency aircon repair Melbourne",
    "air conditioning installation Melbourne",
    "same day air conditioning repair",
    "licensed air conditioning technician Melbourne",
    "air conditioning service Melbourne suburbs",
    "cooling system maintenance Melbourne",
    "commercial air conditioning Melbourne",
    "residential air conditioning Melbourne",
    "air conditioning quote Melbourne",
    "24/7 emergency air conditioning Melbourne",
  ].join(", "),
  authors: [{ name: "Cooling Service Melbourne" }],
  generator: "Next.js",
  applicationName: "Cooling Service Melbourne",
  referrer: "origin-when-cross-origin",
  creator: "Cooling Service Melbourne",
  publisher: "Cooling Service Melbourne",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.coolingservicemelbourne.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.coolingservicemelbourne.com.au",
    siteName: "Cooling Service Melbourne",
    title:
      "Melbourne's #1 Air Conditioning Specialists | Same-Day Service | 0405 133 761",
    description:
      "★★★★★ Rated Melbourne air conditioning experts. Same-day split system repair, evaporative cooling, ducted AC installation. Licensed technicians, all suburbs, 24/7 emergency service. Free quotes!",
    images: [
      {
        url: "/openGraphImage.jpg",
        width: 1200,
        height: 630,
        alt: "Cooling Service Melbourne - Licensed Air Conditioning Technicians - Same Day Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Air Conditioning Melbourne | Same-Day Repair & Installation | 0405 133 761",
    description:
      "★★★★★ Melbourne's trusted AC specialists. Same-day service, licensed technicians, all suburbs. Split system, evaporative, ducted. Emergency repairs 24/7!",
    images: ["/openGraphImage.jpg"],
    creator: "@coolingservicemelb",
    site: "@coolingservicemelb",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Melbourne",
    "geo.position": "-37.8136;144.9631",
    ICBM: "-37.8136, 144.9631",
    "business:contact_data:street_address": "Melbourne VIC",
    "business:contact_data:locality": "Melbourne",
    "business:contact_data:region": "Victoria",
    "business:contact_data:postal_code": "3000",
    "business:contact_data:country_name": "Australia",
    "business:contact_data:phone_number": "+61405133761",
    "business:contact_data:website":
      "https://www.coolingservicemelbourne.com.au",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#007bff" />
        <meta name="msapplication-TileColor" content="#007bff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <StructuredData />
      </head>
      <body className={`${roboto.variable} ${archivo.variable}`}>
        <GoogleAnalytics />
        <CallTrackingScript />
        {children}
      </body>
    </html>
  );
}
