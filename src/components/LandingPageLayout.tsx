import { ReactNode, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export interface FaqItem {
  question: string;
  answer: string;
}

interface LandingPageLayoutProps {
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
  faqs: FaqItem[];
  ctaHref: string;
  ctaLabel: string;
  ctaNote?: string;
}

const LandingPageLayout = ({
  eyebrow,
  title,
  lead,
  children,
  faqs,
  ctaHref,
  ctaLabel,
  ctaNote,
}: LandingPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-28 md:pt-32">
        <article className="container max-w-3xl pb-24 md:pb-32">
          <header className="mb-12 md:mb-16">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary/80 mb-4">
              {eyebrow}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-light text-brand leading-tight mb-6">
              {title}
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              {lead}
            </p>
          </header>

          <div className="prose-content space-y-8 font-body text-base md:text-lg text-foreground/90 leading-relaxed">
            {children}
          </div>

          <section aria-label="Frequently asked questions" className="mt-20 md:mt-24">
            <h2 className="font-display text-2xl md:text-3xl font-light text-brand mb-8">
              Frequently asked
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="font-display text-lg md:text-xl font-normal text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section aria-label="Next step" className="mt-20 md:mt-24 border-t border-border pt-12 text-center">
            <a
              href={ctaHref}
              {...(ctaHref.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-2 font-body text-sm tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors underline underline-offset-8"
            >
              {ctaLabel} →
            </a>
            {ctaNote && (
              <p className="mt-4 font-body text-sm text-muted-foreground italic">{ctaNote}</p>
            )}
            <p className="mt-8 font-body text-xs tracking-widest uppercase text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">← Back to Ascend</a>
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
};

export default LandingPageLayout;
