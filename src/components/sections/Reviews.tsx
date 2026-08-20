import { ArrowUpRight, Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export type GoogleReview = {
  author: string;
  rating: number;
  date: string;
  text: string;
};

/** Reusable card — ready for real Google review data when an API key is supplied. */
export function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="card-lift rounded-sm border border-border bg-graphite/60 p-7">
      <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={`size-4 ${i < review.rating ? "fill-gold text-gold" : "text-muted-foreground"}`}
          />
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
      <footer className="mt-6 flex items-baseline justify-between border-t border-border pt-4">
        <span className="text-sm font-semibold text-foreground">{review.author}</span>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </footer>
    </article>
  );
}

export function Reviews({ reviews = [] as GoogleReview[] }: { reviews?: GoogleReview[] }) {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Social proof">
              5.0 stars.
              <br />
              <span className="text-gold-gradient">Built on member experience.</span>
            </SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel rounded-sm p-9">
              <div className="flex items-end gap-5">
                <span className="font-display text-[clamp(3.5rem,10vw,6rem)] leading-none text-gold-gradient">
                  5.0
                </span>
                <div className="pb-2">
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} aria-hidden="true" className="size-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {SITE.reviewCount} Google Reviews
                  </p>
                </div>
              </div>
              <p className="mt-7 text-sm text-muted-foreground">
                See what members are saying on Google.
              </p>
              <a
                href={SITE.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-gold group mt-7"
              >
                Read Google Reviews
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {reviews.length > 0 && (
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <Reveal key={`${r.author}-${r.date}`}>
                <ReviewCard review={r} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
