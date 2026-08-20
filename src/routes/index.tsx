import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Equipment } from "@/components/sections/Equipment";
import { Experience } from "@/components/sections/Experience";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Hygiene } from "@/components/sections/Hygiene";
import { Location } from "@/components/sections/Location";
import { Reviews } from "@/components/sections/Reviews";
import { Strength } from "@/components/sections/Strength";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyAbsolute } from "@/components/sections/WhyAbsolute";
import { SITE } from "@/lib/site";

const TITLE = "Absolute Fitness Gym | Premium Gym in New Ranip, Ahmedabad";
const DESCRIPTION =
  "Absolute Fitness Gym in New Ranip, Ahmedabad — a clean, modern fitness environment with strength, cardio and training equipment. Explore the gym and get directions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GymAndFitnessCenter",
          name: SITE.name,
          description: DESCRIPTION,
          telephone: "+916353547917",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C 501, 5th–6th Floor, Home Town 05, Near SV Square, Opposite Nishan Pride",
            addressLocality: "New Ranip, Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "382480",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: String(SITE.reviewCount),
          },
          hasMap: SITE.mapsUrl,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <WhyAbsolute />
        <Equipment />
        <Strength />
        <Gallery />
        <Hygiene />
        <Experience />
        <Reviews />
        <FinalCTA />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}
