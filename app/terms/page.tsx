import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of ${SITE_NAME} apps and website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="page-shell max-w-3xl pt-28 pb-20 sm:pt-32">
        <h1 className="font-display text-[length:var(--text-display-s)] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
          Terms of Service
        </h1>
        <p className="mt-4 text-[var(--color-ink-soft)]">
          Last updated: July 24, 2026
        </p>

        <div className="mt-10 space-y-8 text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
          <section>
            <h2 className="font-display text-xl tracking-[-0.02em] text-[var(--color-ink)]">
              Agreement
            </h2>
            <p className="mt-3">
              By using {SITE_NAME} apps or this website, you agree to these
              terms. If you do not agree, please discontinue use.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-[-0.02em] text-[var(--color-ink)]">
              Use of services
            </h2>
            <p className="mt-3">
              You may use our apps for personal, non-commercial purposes in
              accordance with applicable law and App Store / Play Store policies.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-[-0.02em] text-[var(--color-ink)]">
              Disclaimer
            </h2>
            <p className="mt-3">
              Our apps are provided &quot;as is&quot; without warranties of any
              kind. To the fullest extent permitted by law, {SITE_NAME} is not
              liable for indirect or consequential damages.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-[-0.02em] text-[var(--color-ink)]">
              Contact
            </h2>
            <p className="mt-3">
              For terms-related questions, email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-[var(--color-ink)] underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex text-[15px] font-medium text-[var(--color-ink)] transition-colors duration-[var(--dur-micro)] hover:text-[var(--color-accent)]"
        >
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
