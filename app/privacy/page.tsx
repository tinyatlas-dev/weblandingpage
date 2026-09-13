import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, stores, and protects information when you use our website, applications, games, and related services.`,
  alternates: { canonical: "/privacy" },
};

const sectionHeading =
  "text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]";
const listClass = "mt-3 list-disc space-y-2 pl-5";

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="page-shell max-w-3xl pt-28 pb-20 sm:pt-32">
        <h1 className="text-[length:var(--text-display-s)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[var(--color-ink-soft)]">
          Last updated: September 13, 2026
        </p>

        <div className="mt-10 space-y-10 text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
          <section>
            <p>
              This Privacy Policy explains how we collect, use, store, and
              protect information when you use our website, applications, games,
              and related services.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>1. Information We Collect</h2>
            <p className="mt-3">
              Depending on the product or service, information we collect may
              include:
            </p>
            <ul className={listClass}>
              <li>Information voluntarily provided by users</li>
              <li>Device and technical information</li>
              <li>App usage information</li>
              <li>Diagnostics and crash information</li>
              <li>Advertising identifiers where applicable</li>
              <li>Analytics information</li>
              <li>Information required to provide specific features</li>
            </ul>
            <p className="mt-3">
              Different applications may collect different information depending
              on their features.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>2. How We Use Information</h2>
            <p className="mt-3">Information may be used to:</p>
            <ul className={listClass}>
              <li>Provide and maintain services</li>
              <li>Improve application performance and user experience</li>
              <li>Fix bugs and technical problems</li>
              <li>Understand how features are used</li>
              <li>Prevent abuse and security issues</li>
              <li>Provide advertising where applicable</li>
              <li>Measure advertising performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className={sectionHeading}>3. Advertising</h2>
            <p className="mt-3">
              Some apps may display advertisements through third-party
              advertising providers.
            </p>
            <p className="mt-3">
              Advertising providers may process device information, advertising
              identifiers, approximate location derived from IP address, and
              interaction data according to their own privacy policies.
            </p>
            <p className="mt-3">
              Personalized advertising may only be used where permitted and after
              obtaining any required consent.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>4. Analytics</h2>
            <p className="mt-3">
              Analytics services may be used to understand app performance,
              feature usage, crashes, and general usage patterns.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>5. Third-Party Services</h2>
            <p className="mt-3">
              Applications may use third-party services such as:
            </p>
            <ul className={listClass}>
              <li>Analytics providers</li>
              <li>Advertising networks</li>
              <li>Cloud infrastructure</li>
              <li>Crash reporting services</li>
              <li>App Store / Google Play services</li>
            </ul>
            <p className="mt-3">
              These providers operate under their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>6. Data Retention</h2>
            <p className="mt-3">
              Information is retained only for as long as reasonably necessary to
              provide services, satisfy legal requirements, resolve disputes,
              prevent fraud, or maintain security.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>7. Data Security</h2>
            <p className="mt-3">
              Reasonable technical and organizational measures are used to
              protect information, but no electronic system or method of
              transmission can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>8. Children&apos;s Privacy</h2>
            <p className="mt-3">
              Our products are not intended to knowingly collect personal
              information from children unless explicitly stated otherwise for a
              specific product.
            </p>
            <p className="mt-3">
              If personal information from a child is discovered where parental
              consent is legally required, reasonable steps will be taken to
              delete it.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>9. Your Privacy Rights</h2>
            <p className="mt-3">
              Depending on their country or region, users may have rights such
              as:
            </p>
            <ul className={listClass}>
              <li>Accessing their personal information</li>
              <li>Requesting correction</li>
              <li>Requesting deletion</li>
              <li>Objecting to certain processing</li>
              <li>Withdrawing consent</li>
              <li>Requesting information about data processing</li>
            </ul>
            <p className="mt-3">
              Users can contact{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-[var(--color-ink)] underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>10. International Data Processing</h2>
            <p className="mt-3">
              Third-party service providers may process information in countries
              different from the user&apos;s country of residence.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>11. Changes to This Privacy Policy</h2>
            <p className="mt-3">
              This Privacy Policy may be updated periodically. When revisions are
              made, the &quot;Last updated&quot; date at the top of this page
              will be changed.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>12. Contact Us</h2>
            <p className="mt-3">
              For questions about this Privacy Policy, contact{" "}
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
          className="mt-12 inline-flex text-[15px] font-medium text-[var(--color-ink)] transition-colors duration-[var(--dur-micro)] hover:text-[var(--color-electric)]"
        >
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
