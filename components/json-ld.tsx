import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import { product } from "@/lib/data";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        email: CONTACT_EMAIL,
        description: SITE_DESCRIPTION,
        foundingDate: "2026",
        logo: `${SITE_URL}/apple-touch-icon.png`,
        contactPoint: {
          "@type": "ContactPoint",
          email: CONTACT_EMAIL,
          contactType: "customer support",
        },
      },
      {
        "@type": "MobileApplication",
        name: product.name,
        operatingSystem: "Android",
        applicationCategory: "LifestyleApplication",
        description: product.description,
        downloadUrl: product.href,
        installUrl: product.href,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
