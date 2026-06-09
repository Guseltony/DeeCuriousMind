/**
 * LocalBusinessSchema
 * Injects JSON-LD structured data for Dees Curious Minds.
 * This tells Google rich details: address, phone, hours, geo-coordinates,
 * service type, and social profiles — enabling rich search results.
 *
 * Schema types used:
 * - ChildCare (subtype of LocalBusiness)
 * - Person (Denise, the founder/lead childminder)
 */
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "@id": "https://www.deescuriousminds.co.uk/#business",
    name: "Dees Curious Minds",
    alternateName: "Dees Curious Minds Childcare",
    description:
      "Ofsted-registered childminding and childcare service in Gillingham, Kent. EYFS-aligned, play-based learning in a secure home-from-home setting. Accepting children aged 6 months to 5 years.",
    url: "https://www.deescuriousminds.co.uk",
    telephone: "+447840066028",
    email: "Deescuriousminds@gmail.com",
    priceRange: "££",
    image: "https://www.deescuriousminds.co.uk/dees curious minds logo.png",
    logo: "https://www.deescuriousminds.co.uk/black-logo.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Merlin Way",
      addressLocality: "Gillingham",
      addressRegion: "Kent",
      postalCode: "ME7 4JN",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.38464,
      longitude: 0.53354,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/search/top/?q=Dees%20curious%20minds",
      "https://www.instagram.com/Dees_curious_minds/",
    ],
    founder: {
      "@type": "Person",
      name: "Denise",
      jobTitle: "Ofsted-Registered Childminder & Founder",
      description:
        "NVQ Level 3 CCLD qualified childminder with over 20 years of early years experience, including Nursery Officer, Nursery Nurse, and After School Manager roles.",
      worksFor: {
        "@id": "https://www.deescuriousminds.co.uk/#business",
      },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Gillingham",
      },
      {
        "@type": "AdministrativeArea",
        name: "Medway",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kent",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Childcare Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Time Daycare",
            description:
              "Structured full-day childcare program with healthy meals, outdoor play, structured learning, and quiet nap times. Ages 1–5 years.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Early Years Learning (EYFS)",
            description:
              "Daily EYFS-aligned learning milestones including language development, mathematics, arts, crafts, and sensory exploration. Ages 2–5 years.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flexi-Care & Half-Days",
            description:
              "Part-time flexible scheduling with the same high-quality developmental activities and social integration. Ages 6 months–5 years.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
