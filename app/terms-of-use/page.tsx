/** @format */

import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

export const metadata = {
    title: "Terms of Use - ClassClarus",
    description:
        "ClassClarus Terms of Use. Please read these terms carefully before using our service.",
};

export default function TermsOfUsePage() {
    return (
        <>
            <section className="container py-24 sm:py-32">
                <div className="mx-auto max-w-4xl prose prose-neutral dark:prose-invert">
                    <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
                    <p className="text-muted-foreground mb-8">
                        Last updated: January 2026
                    </p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-muted-foreground">
                                By accessing or using ClassClarus (the
                                &ldquo;Service&rdquo;), you agree to be bound by
                                these Terms of Use (&ldquo;Terms&rdquo;). If you
                                do not agree to these Terms, you may not access
                                or use the Service.
                            </p>
                            <p className="text-muted-foreground">
                                If you are using the Service on behalf of a
                                school, district, or other organization, you
                                represent that you have the authority to bind
                                that organization to these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                2. Description of Service
                            </h2>
                            <p className="text-muted-foreground">
                                ClassClarus is a classroom gamification platform
                                that enables teachers to motivate students
                                through points, behaviors, and rewards. The
                                Service includes features for tracking student
                                behavior, managing classrooms, and creating
                                engaging learning environments.
                            </p>
                            <p className="text-muted-foreground">
                                We reserve the right to modify, suspend, or
                                discontinue the Service (or any part thereof) at
                                any time, with or without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                3. Account Registration
                            </h2>
                            <p className="text-muted-foreground">
                                To use certain features of the Service, you must
                                create an account. You agree to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>
                                    Provide accurate and complete information
                                    when creating your account
                                </li>
                                <li>
                                    Maintain the security of your account
                                    credentials
                                </li>
                                <li>
                                    Promptly notify us of any unauthorized use
                                    of your account
                                </li>
                                <li>
                                    Accept responsibility for all activities
                                    that occur under your account
                                </li>
                            </ul>
                            <p className="text-muted-foreground mt-4">
                                You may not share your account credentials with
                                others or allow others to access your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                4. Guest Accounts
                            </h2>
                            <p className="text-muted-foreground">
                                ClassClarus offers a guest mode that allows you
                                to try the Service without creating a full
                                account. Guest account limitations include:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>
                                    Data is automatically deleted after 14 days
                                </li>
                                <li>
                                    You can create classes and organizations but
                                    cannot join others&apos; classes
                                </li>
                                <li>Others cannot join classes you create</li>
                                <li>
                                    To retain your data, you must create a full
                                    account before the 14-day period expires
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                5. Acceptable Use
                            </h2>
                            <p className="text-muted-foreground">
                                You agree not to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>
                                    Use the Service for any illegal purpose or
                                    in violation of any laws
                                </li>
                                <li>
                                    Violate the rights of others, including
                                    privacy and intellectual property rights
                                </li>
                                <li>
                                    Upload or transmit viruses, malware, or
                                    other malicious code
                                </li>
                                <li>
                                    Attempt to gain unauthorized access to the
                                    Service or other users&apos; accounts
                                </li>
                                <li>
                                    Interfere with or disrupt the Service or
                                    servers connected to the Service
                                </li>
                                <li>
                                    Use the Service to harass, abuse, or harm
                                    others
                                </li>
                                <li>
                                    Collect or harvest user information without
                                    consent
                                </li>
                                <li>
                                    Use automated systems (bots, scrapers) to
                                    access the Service without permission
                                </li>
                                <li>
                                    Circumvent any access controls or usage
                                    limits
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                6. User Content
                            </h2>
                            <p className="text-muted-foreground">
                                You retain ownership of any content you create,
                                upload, or input into the Service (&ldquo;User
                                Content&rdquo;), including class data,
                                behaviors, rewards, and student information.
                            </p>
                            <p className="text-muted-foreground">
                                By using the Service, you grant us a limited
                                license to use, store, and process your User
                                Content solely for the purpose of providing the
                                Service to you. We will not use your User
                                Content for any other purpose without your
                                consent.
                            </p>
                            <p className="text-muted-foreground">
                                You are responsible for ensuring that your User
                                Content does not violate any laws or third-party
                                rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                7. Student Data
                            </h2>
                            <p className="text-muted-foreground">
                                If you are a teacher or administrator using the
                                Service with students, you represent and warrant
                                that:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>
                                    You have the authority to consent to the
                                    collection of student data
                                </li>
                                <li>
                                    You have obtained any necessary consents
                                    from parents or guardians as required by law
                                </li>
                                <li>
                                    You will use the Service in compliance with
                                    FERPA, COPPA, and other applicable student
                                    privacy laws
                                </li>
                                <li>
                                    You will only input student information that
                                    is necessary for educational purposes
                                </li>
                            </ul>
                            <p className="text-muted-foreground mt-4">
                                We will process student data in accordance with
                                our{" "}
                                <Link
                                    href="/privacy-policy"
                                    className="text-primary hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                8. Intellectual Property
                            </h2>
                            <p className="text-muted-foreground">
                                The Service and its original content (excluding
                                User Content), features, and functionality are
                                owned by ClassClarus and are protected by
                                copyright, trademark, and other intellectual
                                property laws.
                            </p>
                            <p className="text-muted-foreground">
                                You may not copy, modify, distribute, sell, or
                                lease any part of the Service without our prior
                                written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                9. Third-Party Services
                            </h2>
                            <p className="text-muted-foreground">
                                The Service may integrate with third-party
                                services (such as Google Classroom). Your use of
                                such integrations is subject to the terms and
                                policies of those third parties. We are not
                                responsible for the content, privacy practices,
                                or availability of third-party services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                10. Payment and Subscriptions
                            </h2>
                            <p className="text-muted-foreground">
                                Some features of the Service require a paid
                                subscription. If you purchase a subscription:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>
                                    You agree to pay all fees associated with
                                    your chosen plan
                                </li>
                                <li>
                                    Subscriptions automatically renew unless
                                    canceled before the renewal date
                                </li>
                                <li>
                                    You can cancel your subscription at any time
                                    through your account settings
                                </li>
                                <li>
                                    Refunds are provided in accordance with our
                                    refund policy
                                </li>
                                <li>
                                    We may change pricing with 30 days&apos;
                                    notice before your next renewal
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                11. Disclaimer of Warranties
                            </h2>
                            <p className="text-muted-foreground">
                                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND
                                &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF
                                ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                                LIMITED TO WARRANTIES OF MERCHANTABILITY,
                                FITNESS FOR A PARTICULAR PURPOSE, AND
                                NON-INFRINGEMENT.
                            </p>
                            <p className="text-muted-foreground">
                                We do not warrant that the Service will be
                                uninterrupted, secure, or error-free, or that
                                any defects will be corrected.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                12. Limitation of Liability
                            </h2>
                            <p className="text-muted-foreground">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW,
                                CLASSCLARUS SHALL NOT BE LIABLE FOR ANY
                                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                                PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
                                REVENUES, WHETHER INCURRED DIRECTLY OR
                                INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL,
                                OR OTHER INTANGIBLE LOSSES.
                            </p>
                            <p className="text-muted-foreground">
                                Our total liability for any claims arising from
                                these Terms or your use of the Service shall not
                                exceed the amount you paid us in the twelve (12)
                                months preceding the claim.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                13. Indemnification
                            </h2>
                            <p className="text-muted-foreground">
                                You agree to indemnify and hold harmless
                                ClassClarus and its officers, directors,
                                employees, and agents from any claims, damages,
                                losses, liabilities, and expenses (including
                                reasonable attorneys&apos; fees) arising out of
                                or related to your use of the Service, your User
                                Content, or your violation of these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                14. Termination
                            </h2>
                            <p className="text-muted-foreground">
                                We may terminate or suspend your account and
                                access to the Service at any time, without prior
                                notice or liability, for any reason, including
                                if you breach these Terms.
                            </p>
                            <p className="text-muted-foreground">
                                Upon termination, your right to use the Service
                                will immediately cease. Provisions of these
                                Terms that by their nature should survive
                                termination shall survive, including ownership
                                provisions, warranty disclaimers, indemnity, and
                                limitations of liability.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                15. Governing Law
                            </h2>
                            <p className="text-muted-foreground">
                                These Terms shall be governed by and construed
                                in accordance with the laws of the United
                                States, without regard to its conflict of law
                                provisions. Any disputes arising under these
                                Terms shall be resolved in the courts located in
                                the United States.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                16. Changes to Terms
                            </h2>
                            <p className="text-muted-foreground">
                                We reserve the right to modify these Terms at
                                any time. We will notify you of material changes
                                by posting the new Terms on this page and
                                updating the &ldquo;Last updated&rdquo; date.
                                Your continued use of the Service after such
                                changes constitutes your acceptance of the new
                                Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                17. Severability
                            </h2>
                            <p className="text-muted-foreground">
                                If any provision of these Terms is found to be
                                unenforceable or invalid, that provision shall
                                be limited or eliminated to the minimum extent
                                necessary, and the remaining provisions shall
                                remain in full force and effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                18. Entire Agreement
                            </h2>
                            <p className="text-muted-foreground">
                                These Terms, together with our Privacy Policy,
                                constitute the entire agreement between you and
                                ClassClarus regarding your use of the Service
                                and supersede any prior agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mt-8 mb-4">
                                19. Contact Us
                            </h2>
                            <p className="text-muted-foreground">
                                If you have any questions about these Terms,
                                please contact us:
                            </p>
                            <ul className="list-none pl-0 text-muted-foreground space-y-2 mt-4">
                                <li>
                                    Email:{" "}
                                    <a
                                        href="mailto:admin@classclarus.com"
                                        className="text-primary hover:underline"
                                    >
                                        admin@classclarus.com
                                    </a>
                                </li>
                                <li>
                                    Contact Form:{" "}
                                    <Link
                                        href="/contact"
                                        className="text-primary hover:underline"
                                    >
                                        classclarus.com/contact
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
            <FooterSection />
        </>
    );
}
