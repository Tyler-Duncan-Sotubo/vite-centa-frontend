const data = [
  {
    contentId: "one",
    title: "GDPR Compliance",
    description:
      "<p>Learn how <strong>CentaHR</strong> complies with the General Data Protection Regulation (GDPR) and what it means for you. This page explains our role as a processor, your role as controller, and the safeguards we use to protect employee data.</p><p><em>This page is for information only and does not constitute legal advice.</em></p>",
  },
  {
    contentId: "two",
    title: "What is the GDPR?",
    description:
      "<p>The General Data Protection Regulation (GDPR) is an EU data privacy law effective since 25 May 2018. It harmonizes data protection across the EU and grants individuals greater control over their personal data.</p><p>Organizations that fail to comply may face fines of up to <strong>€20 million</strong> or <strong>4% of global annual turnover</strong>, whichever is higher.</p>",
  },
  {
    contentId: "three",
    title: "Who Must Comply?",
    description:
      "<p>Any business that collects, processes, or stores the personal data of individuals in the EU/EEA must comply with GDPR, regardless of where the business is located.</p>",
  },
  {
    contentId: "four",
    title: "How GDPR Affects Our Customers",
    description:
      "<p>As an HR &amp; Payroll SaaS, we process sensitive employee data (e.g., payroll identifiers, attendance, leave, performance records) on your behalf.</p><ul><li><strong>Data Processor:</strong> CentaHR processes your employees' data under your instructions.</li><li><strong>Data Controller:</strong> You (our customer) determine the purposes and means of processing and are responsible for lawfulness.</li><li><strong>Data Subjects:</strong> Your employees, whose personal data is processed in our system, retain rights under GDPR.</li></ul>",
  },
  {
    contentId: "five",
    title: "Your Responsibilities (Controller)",
    description:
      "<ul><li>Maintain an inventory of personal data you collect and process.</li><li>Provide appropriate privacy notices and obtain any required consents.</li><li>Define retention schedules and lawful bases for processing (e.g., contract, legal obligation).</li><li>Enable and respond to data subject requests (access, rectification, deletion, restriction, portability, objection).</li><li>Appoint a DPO if required and conduct DPIAs where high risk processing is involved.</li><li>Use only processors (like CentaHR) that offer sufficient guarantees and execute a DPA.</li></ul>",
  },
  {
    contentId: "six",
    title: "Our GDPR Compliance (Processor)",
    description:
      "<p>We implement industry-best safeguards and operate under a Data Processing Agreement (DPA):</p><ol><li><strong>Secure Infrastructure:</strong> Hosted on AWS with multi-AZ redundancy; HTTPS enforced; data encrypted at rest (AES-256) and in transit (TLS); strict network policies.</li><li><strong>Internal GDPR Policies:</strong> Data mapping &amp; inventories, documented data flows, least-privilege access, role-based permissions, staff training, breach response procedures.</li><li><strong>Compliance Transparency:</strong> Regular reviews, up-to-date Terms &amp; Privacy Policy, and a security overview document available to customers.</li></ol>",
  },
  {
    contentId: "seven",
    title: "Lawful Bases for Processing",
    description:
      "<p>As processor, we rely on the controller's lawful basis. Common bases in HR/payroll contexts include:</p><ul><li><strong>Contract necessity:</strong> to fulfill employment or service agreements.</li><li><strong>Legal obligation:</strong> to meet statutory payroll, tax, or employment requirements.</li><li><strong>Legitimate interests:</strong> for security, fraud prevention, and service improvement (balanced against data subject rights).</li><li><strong>Consent:</strong> for optional features or communications where required.</li></ul>",
  },
  {
    contentId: "eight",
    title: "Sub-processors & Vendors",
    description:
      "<p>We engage vetted sub-processors (e.g., cloud hosting, email delivery, observability) under written agreements with confidentiality, security, and data-protection obligations. A current list is available upon request or in your admin portal. We remain responsible for their performance under our DPA.</p>",
  },
  {
    contentId: "nine",
    title: "International Transfers",
    description:
      "<p>Where data is transferred outside the EU/EEA/UK, we use appropriate safeguards such as Standard Contractual Clauses (SCCs) and supplementary measures where applicable. Regional hosting options may be available—contact us to discuss data residency needs.</p>",
  },
  {
    contentId: "ten",
    title: "Data Subject Rights",
    description:
      "<p>Individuals have rights to access, rectify, erase, restrict, port, and object to processing, as well as to not be subject to certain automated decisions. Because we act as processor, requests should be directed to your organization (the controller). We will assist you in fulfilling verifiable requests in line with the DPA.</p>",
  },
  {
    contentId: "eleven",
    title: "Data Retention & Deletion",
    description:
      "<p>We retain personal data for as long as instructed by the controller and as necessary to provide the Service, comply with legal obligations, resolve disputes, and enforce agreements. Upon termination or at your instruction, we will delete or return personal data per the DPA and applicable law, subject to limited backup retention windows.</p>",
  },
  {
    contentId: "twelve",
    title: "Security Practices (Summary)",
    description:
      "<ul><li>Encryption in transit (TLS) and at rest (AES-256).</li><li>Network isolation, firewalling, and hardened baselines.</li><li>Granular RBAC, SSO/SAML (where enabled), MFA for admin access, audit logging.</li><li>Secure SDLC, code reviews, dependency scanning, and change management.</li><li>Monitoring, alerting, and regular security reviews.</li></ul>",
  },
  {
    contentId: "thirteen",
    title: "Breach Notification",
    description:
      "<p>If we become aware of a personal data breach affecting your data, we will notify you without undue delay, provide known details, and cooperate to meet any legal notification obligations.</p>",
  },
  {
    contentId: "fourteen",
    title: "Data Protection Impact Assessments (DPIA) & DPO",
    description:
      "<p>We provide information necessary for you to conduct DPIAs where required. If your organization has a Data Protection Officer (DPO), you may list them as the primary contact for GDPR matters. CentaHR can provide a security overview and responses to standard vendor assessments upon request.</p>",
  },
  {
    contentId: "fifteen",
    title: "Cookies & Similar Technologies",
    description:
      "<p>We use cookies and similar technologies to operate the Service, maintain sessions, remember preferences, and measure performance. Where required, we present consent banners and honor your choices. See our Cookie Notice for details.</p>",
  },
  {
    contentId: "sixteen",
    title: "Updates to this Notice",
    description:
      "<p>We may update this GDPR page from time to time. Material changes will be communicated via the Service or email where appropriate. Please review periodically.</p>",
  },
  {
    contentId: "seventeen",
    title: "Contact Us",
    description:
      "<p>Questions about our GDPR posture or requests for documentation? Reach us at <a href='mailto:support@centa.africa'>support@centahr.com</a> or via Live Chat on our <a href='/contact-us'>Contact page</a>.</p>",
  },
];

export default data;
