import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 sm:pt-32">
        <p className="text-[13px] font-semibold tracking-[0.18em] text-ink/45 uppercase">
          Legal
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-ink-soft">Last updated: July 24, 2026</p>

        <div className="prose-atlas mt-10 space-y-8 text-[16px] leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              Our commitment
            </h2>
            <p className="mt-3">
              {SITE_NAME} builds apps with privacy as a foundation. We collect
              only what is necessary to provide and improve our products, and we
              never sell personal data.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              Information we collect
            </h2>
            <p className="mt-3">
              Depending on the app, we may process anonymous usage analytics,
              crash reports, and information you voluntarily provide when
              contacting support.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              How we use information
            </h2>
            <p className="mt-3">
              We use information to operate our apps, fix bugs, improve
              reliability, and respond to support requests.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy? Email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-ink underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex text-[15px] font-medium text-ink transition-colors hover:text-atlas-blue"
        >
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
