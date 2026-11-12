# Draft Zenith privacy notice — internal working draft

> **Internal draft only. Do not publish until every item marked “Confirm before publication” has been verified.** This is an operational drafting aid, not legal advice.

## 1. Who is responsible for your information?

**Funmi K., trading as Draft Zenith** is the person responsible for personal information submitted through the Draft Zenith website.

Contact: [DraftZenith@gmail.com](mailto:DraftZenith@gmail.com)

**Confirm before publication:** Add the appropriate business/contact address or other required location details, and confirm that this is the correct legal description for the person operating the website.

## 2. Information the website may collect

When someone submits an assessment request, the form asks for:
- name and email address;
- country;
- optional author website and book title;
- service of interest;
- project description and main goal;
- optional budget range; and
- a record of agreement to be contacted about the assessment request.

The website's chatbot may process the messages a visitor chooses to send. The chatbot is currently designed to send conversation messages to a Supabase Edge Function and then to the Lovable AI Gateway. Its production deployment, provider terms, logging, retention, and any onward processing must be verified before this section is published.

Cloudflare is used for website hosting/build delivery. The exact production configuration and relevant log-retention settings must be checked before publication.

## 3. Why information is used

Assessment information is intended to let Draft Zenith review an enquiry, understand the requested service, respond to the person, and prepare a relevant proposal if requested. Chat messages are intended to answer questions about Draft Zenith's services and help visitors navigate the website.

Do not use assessment details for unrelated marketing unless a separate, valid permission or other lawful basis has been established.

**Confirm before publication:** Have the appropriate legal basis for each processing purpose reviewed and documented. The form currently asks for permission to contact the person about the assessment request.

## 4. How long information is kept

Assessment enquiries should be kept only for as long as necessary to review and respond to the enquiry, manage any resulting client relationship, and meet applicable legal or record-keeping obligations. Information that is no longer needed should be securely deleted or irreversibly anonymised, subject to lawful retention requirements.

**Approved retention rule for unsuccessful assessment enquiries:** Keep an enquiry for up to **12 months after the last meaningful contact**, then securely delete it or irreversibly anonymise it unless a documented legal or business-record requirement justifies longer retention. If the person contacts Draft Zenith again before deletion and wishes to resume the discussion, the enquiry may be reopened and the 12-month period runs from that new meaningful contact. If the old enquiry has already been deleted or anonymised, a returning person can simply submit a new enquiry; Draft Zenith should not promise to recover information that has been deleted. A client relationship or active project may require a separate, documented retention schedule for client and transaction records. Set separate retention periods for chatbot conversations, security logs, and backups after checking the relevant providers' settings and terms.

## 5. Service providers and transfers

The current technical design anticipates the following providers:
- **Cloudflare** for hosting and delivery of the website and Worker runtime;
- **Supabase** for assessment-request storage and the chatbot Edge Function; and
- **Lovable AI Gateway** for chatbot model requests.

**Confirm before publication:** Verify which services are actually active, identify the relevant provider entities and subprocessors, review their privacy/retention terms, and identify where information may be processed or stored (including outside Nigeria). An email notification provider has not yet been selected and must not be named until chosen and configured.

## 6. Security

Draft Zenith intends to use appropriate technical and organisational safeguards to protect information. Access to submitted enquiries should be limited to people who need it to handle the request. Production credentials must be stored as platform secrets, not in source code or browser-visible variables.

**Confirm before publication:** Complete the production security review, configure server-side abuse protection, confirm access controls and backups, and document the process for responding to a suspected data breach.

## 7. Your data-protection rights

Depending on the applicable law and circumstances, a person may be able to request access to their personal information, correction, deletion, restriction or objection to certain processing, or withdrawal of consent where consent is the basis relied upon.

To make a privacy request, contact **DraftZenith@gmail.com**. Draft Zenith should verify the request proportionately and respond within the period required by applicable law. A person may also have the right to complain to the Nigeria Data Protection Commission.

**Confirm before publication:** Establish an internal procedure for receiving, verifying, recording, and responding to rights requests, including a contact route if the email address changes.

## 8. Cookies, analytics, and embedded services

No analytics or advertising tracker has yet been confirmed by the source review performed for this draft. This is not a complete runtime audit and must not be read as a statement that the production website uses no cookies or similar technologies.

**Confirm before publication:** Inspect the production build and Cloudflare configuration for analytics, cookies, embedded third-party content, and other tracking technologies. Describe each accurately and obtain any consent required before non-essential tracking is enabled.

## 9. Changes to this notice

If the website's data practices change, this notice should be reviewed and updated before the change takes effect where required. The published notice should show its effective date.

---

## Publication checklist

- [ ] Confirm responsible person's legal description and suitable business/contact address.
- [x] Retention period for unsuccessful enquiries approved: 12 months after last meaningful contact; a returning person may reopen an enquiry before deletion, or submit a new enquiry after deletion.
- [ ] Set separate retention periods for client records, chat messages, security logs, and backups.
- [ ] Verify the live Supabase project and database access controls.
- [ ] Verify the chatbot is deployed and confirm Lovable AI Gateway data handling and subprocessors.
- [ ] Confirm Cloudflare logging and data-location details.
- [ ] Confirm whether analytics, cookies, or tracking are present in production.
- [ ] Choose and verify an email notification provider before naming it.
- [ ] Implement server-side abuse protection and a privacy-request handling procedure.
- [ ] Review the final notice for compliance with the Nigeria Data Protection Act 2023 and applicable NDPC guidance; obtain qualified legal advice where needed.
- [ ] Add the published notice link beside the assessment consent checkbox and in the site footer.
- [ ] Test that visitors can open the notice before submitting personal information.
