import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Notice | Draft Zenith" },
      { name: "description", content: "How Draft Zenith collects, uses, protects, and retains information shared through its website and assessment enquiries." },
      { property: "og:title", content: "Privacy Notice | Draft Zenith" },
      { property: "og:description", content: "Learn how Draft Zenith handles information shared through its website and assessment enquiries." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="container-luxe max-w-4xl pb-24 pt-36 md:pt-44">
        <div className="space-y-6 border-b border-border pb-10">
          <SectionEyebrow>Your information</SectionEyebrow>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">Privacy Notice</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We use the information you share with Draft Zenith only for the reason you provide it: to understand your project, respond to your enquiry, and provide the author services you request.
          </p>
          <p className="text-sm text-muted-foreground">Effective date: 13 November 2026</p>
        </div>

        <div className="prose-privacy divide-y divide-border">
          <section>
            <h2>1. Who is responsible for your information?</h2>
            <p><strong>Funmi K., trading as Draft Zenith</strong>, is responsible for personal information submitted through the Draft Zenith website.</p>
            <p>Draft Zenith is a remote author-services business managed from Victoria Island. We work with a distributed team of independent creative professionals; we do not operate as a walk-in agency office.</p>
            <p><strong>Operating location:</strong> Victoria Island<br /><strong>Privacy contact:</strong> <a href="mailto:DraftZenith@gmail.com">DraftZenith@gmail.com</a></p>
          </section>

          <section>
            <h2>2. What information do we collect?</h2>
            <p>If you submit an assessment request, we collect the information you enter in the form, which may include:</p>
            <ul>
              <li>your name, email address, and country;</li>
              <li>your author website and book title, if supplied;</li>
              <li>the service you want to discuss;</li>
              <li>your project description and main goal;</li>
              <li>your budget range, if you choose to provide it; and</li>
              <li>your confirmation that Draft Zenith may contact you about the request.</li>
            </ul>
            <p>Our hosting and security providers may also process basic technical information, such as connection details and request logs, to deliver and protect the website.</p>
          </section>

          <section>
            <h2>3. How do we use your information?</h2>
            <p>We use assessment information only to:</p>
            <ul>
              <li>review and understand the project you have asked us to assess;</li>
              <li>contact you about that specific enquiry;</li>
              <li>prepare a relevant response, recommendation, or service proposal; and</li>
              <li>provide and manage services if you decide to work with Draft Zenith.</li>
            </ul>
            <p>We do not sell your enquiry information or use it for unrelated marketing, advertising, or mailing lists. We do not use it for a purpose unrelated to your project unless we explain that purpose and have an appropriate legal basis.</p>
          </section>

          <section>
            <h2>4. Our reasons for processing information</h2>
            <p>We process information where it is necessary to take steps you request before entering into a service agreement, to perform an agreement if you become a client, to meet legal obligations, or for legitimate interests such as protecting the website and keeping appropriate business records. Where we specifically rely on your consent, you may withdraw it by contacting us.</p>
          </section>

          <section>
            <h2>5. Who may receive your information?</h2>
            <p>Access is limited to Draft Zenith and authorised people working on the relevant enquiry or project where access is needed to carry out that work. We use service providers to operate the website and store assessment requests, including:</p>
            <ul>
              <li><strong>Cloudflare</strong>, for website delivery, hosting, and security; and</li>
              <li><strong>Supabase</strong>, for secure storage of assessment requests.</li>
            </ul>
            <p>Our assessment database is configured in Supabase's EU West (Ireland) region. Cloudflare may process technical information across its network. Service providers may process information in locations outside the place where you are based, subject to the safeguards and terms applicable to those services.</p>
            <p>We may also disclose information where required by law or where necessary to protect rights, safety, and security.</p>
          </section>

          <section>
            <h2>6. How long do we keep information?</h2>
            <p>For an enquiry that does not become a client project, we keep the enquiry for up to <strong>12 months after the last meaningful contact</strong>, then securely delete it or irreversibly anonymise it unless a legal obligation requires longer retention.</p>
            <p>If you contact us again before the information is deleted and want to resume the discussion, we may reopen the enquiry and the 12-month period will run from that new meaningful contact. If the earlier enquiry has already been deleted, you can submit a new one.</p>
            <p>If you become a client, we keep relevant project and transaction records only for as long as needed to manage the work and meet applicable legal obligations. Technical security logs are retained according to the relevant provider's settings and policies.</p>
          </section>

          <section>
            <h2>7. How do we protect information?</h2>
            <p>We use access controls and appropriate technical and organisational measures intended to protect information against unauthorised access, loss, alteration, or disclosure. Access to enquiry information should be limited to people who need it for the work. No online service can be guaranteed completely secure.</p>
          </section>

          <section>
            <h2>8. Your choices and data-protection rights</h2>
            <p>Subject to applicable law, you may ask us to:</p>
            <ul>
              <li>confirm whether we hold personal information about you and provide access to it;</li>
              <li>correct information that is inaccurate or incomplete;</li>
              <li>delete information when there is no lawful reason to keep it;</li>
              <li>restrict or object to certain processing; or</li>
              <li>withdraw consent where processing is based on consent.</li>
            </ul>
            <p>To make a request, email <a href="mailto:DraftZenith@gmail.com">DraftZenith@gmail.com</a>. We may need to verify your identity before acting on a request. You may also lodge a complaint with the Nigeria Data Protection Commission.</p>
          </section>

          <section>
            <h2>9. Cookies, automated decisions, and chat</h2>
            <p>We do not use assessment information to make decisions about you solely through automated processing. The assessment is reviewed by a person.</p>
            <p>The website may process essential technical information needed to deliver and secure the service. We do not use assessment details for targeted advertising. The website chatbot is not currently enabled and is not collecting chat enquiries.</p>
          </section>

          <section>
            <h2>10. Changes and questions</h2>
            <p>We may update this notice when our services or information practices change. The effective date above will be updated when a revised notice is published.</p>
            <p>If you have a question about how your information is handled, contact <a href="mailto:DraftZenith@gmail.com">DraftZenith@gmail.com</a>.</p>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
