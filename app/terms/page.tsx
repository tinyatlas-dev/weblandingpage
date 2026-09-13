import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing access to and use of ${SITE_NAME} websites, applications, games, and related services.`,
  alternates: { canonical: "/terms" },
};

const sectionHeading =
  "text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]";
const listClass = "mt-3 list-disc space-y-2 pl-5";

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="page-shell max-w-3xl pt-28 pb-20 sm:pt-32">
        <h1 className="text-[length:var(--text-display-s)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
          Terms of Use
        </h1>
        <p className="mt-4 text-[var(--color-ink-soft)]">
          Last updated: September 13, 2026
        </p>

        <div className="mt-10 space-y-10 text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
          <section>
            <p>
              These Terms of Use govern your access to and use of our websites,
              applications, games, and related services. By using our services,
              you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using the services, you agree to comply with these
              Terms. If you do not agree, you should stop using the services.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>2. Use of the Services</h2>
            <p className="mt-3">
              You may use the services only for lawful purposes.
            </p>
            <p className="mt-3">You must not:</p>
            <ul className={listClass}>
              <li>Attempt to interfere with the operation of the services</li>
              <li>Attempt unauthorized access to systems or accounts</li>
              <li>
                Reverse engineer services where prohibited by applicable law
              </li>
              <li>Use automated systems to abuse or overload services</li>
              <li>Distribute malware or harmful content</li>
              <li>Use the services for fraudulent or illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className={sectionHeading}>3. Intellectual Property</h2>
            <p className="mt-3">
              The applications, website, designs, graphics, logos, software,
              code, text, and other original content are protected by applicable
              intellectual-property laws.
            </p>
            <p className="mt-3">
              You receive only a limited, personal, non-exclusive,
              non-transferable right to use the services.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>4. Third-Party Services</h2>
            <p className="mt-3">
              Some functionality may depend on third-party platforms or
              services. We are not responsible for third-party services,
              websites, products, policies, or availability.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>5. Advertising</h2>
            <p className="mt-3">
              Some services may contain advertisements supplied by third-party
              advertising providers. Interaction with advertisements or
              third-party products is between you and the relevant third party.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>6. Purchases and Subscriptions</h2>
            <p className="mt-3">
              Where an application offers purchases or subscriptions:
            </p>
            <ul className={listClass}>
              <li>
                Payments may be processed by Apple App Store, Google Play, or
                another authorized platform.
              </li>
              <li>
                Pricing and billing terms are displayed before purchase.
              </li>
              <li>
                Subscription management and cancellation are handled through the
                platform where the purchase was made.
              </li>
              <li>
                Refunds are subject to the applicable store/platform policies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={sectionHeading}>7. Availability and Changes</h2>
            <p className="mt-3">
              Features may occasionally be modified, updated, suspended, or
              discontinued. There is no guarantee that every feature will remain
              available indefinitely.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>8. Disclaimer</h2>
            <p className="mt-3">
              To the extent permitted by applicable law, the services are
              provided on an &quot;as is&quot; and &quot;as available&quot;
              basis. We do not guarantee uninterrupted availability, accuracy,
              or error-free operation.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>9. Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by applicable law, {SITE_NAME} will
              not be liable for indirect, incidental, special, consequential, or
              similar damages arising from use of the services. Nothing in these
              Terms excludes or limits liability where such exclusion or
              limitation is prohibited by applicable law.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>10. Termination</h2>
            <p className="mt-3">
              Access may be suspended or terminated if a user seriously violates
              these Terms, abuses the services, or creates security risks. You
              may stop using the services at any time.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>11. Changes to These Terms</h2>
            <p className="mt-3">
              These Terms may be updated periodically. Significant changes may be
              communicated where required, and the latest revision date is
              displayed at the top of this page.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>12. Governing Law</h2>
            <p className="mt-3">
              These Terms are governed by applicable laws, without limiting any
              mandatory consumer protections that may apply in your country or
              region.
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>13. Contact</h2>
            <p className="mt-3">
              For questions regarding these Terms, contact{" "}
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
