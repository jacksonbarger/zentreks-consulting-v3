import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BUSINESS_INFO } from "@/lib/constants";

// Organization schema. Deliberately omits foundingDate and any tenure claim:
// the site's "since 2008 / 15+ years" copy is still an open question, and
// structured data is the last place to assert something not yet settled.
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BUSINESS_INFO.name,
  url: "https://zentreks.ai",
  logo: "https://zentreks.ai/images/zentreks-logo.png",
  sameAs: ["https://www.linkedin.com/company/zentreks-consulting/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: BUSINESS_INFO.email,
    availableLanguage: "English",
  },
};

export const metadata: Metadata = {
  title: "Zentreks Consulting | Strategic Consulting Since 2008",
  description: "Zentreks Consulting has been helping technology companies with their toughest business challenges for over 15 years. Expert guidance in AI integration, workflow optimization, and digital transformation.",
  keywords: ["consulting", "AI", "strategy", "digital transformation", "business consulting", "tech startups", "MarTech", "enterprise technology"],
  // Canonical public domain: every relative og:image / twitter:image URL is
  // resolved against it. zentreksconsulting.com is the pre-rebrand domain and
  // has no working mail; zentreks.ai is the live brand.
  metadataBase: new URL("https://zentreks.ai"),
  openGraph: {
    title: "Zentreks Consulting | Strategic Consulting Since 2008",
    description: "Helping technology companies with their toughest business challenges for over 15 years. AI integration, strategy, and digital transformation.",
    siteName: "Zentreks Consulting",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/zentreks-logo.png", width: 500, height: 224, alt: "Zentreks Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentreks Consulting | Strategic Consulting Since 2008",
    description: "Helping technology companies with their toughest business challenges for over 15 years.",
    images: ["/images/zentreks-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0D0D0D] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
