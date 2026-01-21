import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - ClassClarus",
  description: "ClassClarus Privacy Policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-4xl prose prose-neutral dark:prose-invert">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                ClassClarus (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of our users, 
                including teachers, students, parents, and administrators. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you use our classroom gamification 
                platform and related services (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p className="text-muted-foreground">
                We take student privacy especially seriously and are committed to complying with applicable 
                student privacy laws, including the Family Educational Rights and Privacy Act (FERPA) and the 
                Children&apos;s Online Privacy Protection Act (COPPA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Account Information</h3>
              <p className="text-muted-foreground">When you create an account, we collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Email address</li>
                <li>Name (optional for students)</li>
                <li>Account credentials (password is encrypted)</li>
                <li>Google account information (if you sign in with Google)</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">Classroom Data</h3>
              <p className="text-muted-foreground">When teachers use ClassClarus, we collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Class names and settings</li>
                <li>Student roster information (names, student numbers, optional gender for seating arrangements)</li>
                <li>Behaviors and point values defined by teachers</li>
                <li>Reward items and redemption records</li>
                <li>Points awarded and behavior logs</li>
                <li>Groups, teams, and assignment data</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">Usage Data</h3>
              <p className="text-muted-foreground">We automatically collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>Log data (IP address, access times, pages viewed)</li>
                <li>Feature usage patterns</li>
                <li>Error reports and performance data</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">Google Classroom Integration</h3>
              <p className="text-muted-foreground">
                If you connect your Google Classroom account, we access your class rosters and student 
                information to import into ClassClarus. We only request the minimum permissions necessary 
                and do not access grades, assignments, or other Google Classroom data beyond roster information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve the Service</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground">We do not sell your personal information. We may share information in the following circumstances:</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Service Providers</h3>
              <p className="text-muted-foreground">
                We may share information with third-party vendors who perform services on our behalf, such as 
                hosting, data analysis, payment processing, and customer service. These providers are contractually 
                obligated to protect your information.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Within Organizations</h3>
              <p className="text-muted-foreground">
                If you are part of a school or organization using ClassClarus, administrators within that 
                organization may have access to class and student data as appropriate for their role.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Legal Requirements</h3>
              <p className="text-muted-foreground">
                We may disclose information if required by law or if we believe disclosure is necessary to 
                protect our rights, your safety, or the safety of others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Student Data Protection</h2>
              <p className="text-muted-foreground">
                We are committed to protecting student data in compliance with FERPA and COPPA:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We collect only the minimum data necessary to provide the Service</li>
                <li>Student data is used solely for educational purposes</li>
                <li>We do not use student data for targeted advertising</li>
                <li>We do not create profiles of students for non-educational purposes</li>
                <li>Parents and eligible students can request access to, correction of, or deletion of student data</li>
                <li>Teachers and schools control student data and can export or delete it at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your information for as long as your account is active or as needed to provide the 
                Service. If you delete your account, we will delete your personal information within 30 days, 
                except as required by law or for legitimate business purposes.
              </p>
              <p className="text-muted-foreground">
                For guest accounts (users who have not created a full account), data is automatically deleted 
                after 14 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Export your data in a portable format</li>
                <li>Opt out of certain data processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@classclarus.com" className="text-primary hover:underline">
                  privacy@classclarus.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Keep you signed in</li>
                <li>Remember your preferences</li>
                <li>Understand how you use the Service</li>
                <li>Improve the Service</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect the 
                functionality of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground">
                The Service may contain links to third-party websites or integrate with third-party services 
                (such as Google Classroom). This Privacy Policy does not apply to those third-party services. 
                We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                ClassClarus is designed for use in educational settings where teachers manage student accounts. 
                We rely on schools and teachers to obtain appropriate consent for students under 13 years of age, 
                as permitted under COPPA for school-authorized educational services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of material changes by 
                posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage 
                you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none pl-0 text-muted-foreground space-y-2 mt-4">
                <li>Email: <a href="mailto:privacy@classclarus.com" className="text-primary hover:underline">privacy@classclarus.com</a></li>
                <li>Contact Form: <Link href="/contact" className="text-primary hover:underline">classclarus.com/contact</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
