import { site } from "@/lib/site";

/** Organization + WebSite + MedicalBusiness structured data for the whole site. */
export function orgSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}/brand/trt-boost-logo-tagline.png`,
      image: `${site.url}/brand/trt-boost-logo-tagline.png`,
      description: site.description,
      telephone: site.contact.phoneDigits,
      email: site.contact.supportEmail,
      medicalSpecialty: ["Endocrine", "Urologic", "PrimaryCare"],
      areaServed: { "@type": "Country", name: "United States" },
      sameAs: [] as string[],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${site.url}/learn?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.href}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(a: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: { name: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    dateModified: a.date,
    author: { "@type": "Organization", name: a.author.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand/trt-boost-logo-tagline.png`,
      },
    },
    mainEntityOfPage: `${site.url}/learn/${a.slug}`,
  };
}

/** Aggregate rating used on the reviews page (placeholder — update with real data). */
export const aggregateRating = { ratingValue: 4.8, reviewCount: 1240 };

export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
