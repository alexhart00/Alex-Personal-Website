export default function PrivacyPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <header className="space-y-2">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
                <p className="text-sm">
                    <strong>Last Updated:</strong> 2/17/2026 <br />
                    <strong>App Name:</strong> Platte Valley Baptist Church App
                </p>
            </header>

            <section className="mt-8 space-y-10">
                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">1. Overview</h2>
                    <p>
                        Alexander Hart operates the mobile application ("Platte Valley Baptist Church App").
                        This Privacy Policy explains how the app collect, use, and protect your information
                        when you use the App.
                    </p>
                    <p>
                        By using the App, you agree to the collection and use of information
                        in accordance with this Privacy Policy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">2. Information the App Collects</h2>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">A. Account Information</h3>
                        <p>When you create an account, the App collects:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Login credentials (Email & Encypted Password)</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">B. Church Directory Information</h3>
                        <p>If you submit a directory entry, the App collects:</p>

                        <p className="font-semibold">The Required Information:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>First and last name</li>
                            <li>Submitted photo</li>
                        </ul>

                        <p className="font-semibold">The Optional Information:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Spouse’s name</li>
                            <li>Spouse’s date of birth</li>
                            <li>Spouse membership date</li>
                            <li>Wedding anniversary</li>
                            <li>Date of birth</li>
                            <li>Membership date</li>
                            <li>Gender</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                            <li>Address</li>
                            <li>City, State, Zip</li>
                            <li>Dependent information (names and association)</li>
                        </ul>
                        <p>
                            Only the information that is submited through the app is send to the backend database.
                        </p>

                        <p>
                            The app also store administrative information such as submission date,
                            approval status, and the account associated with the submission for
                            record-keeping, moderation, and security purposes.
                        </p>

                        <p>
                            Approved directory information is visible only to authenticated
                            PIN/Member users within the App. PIN/Member users must have the
                            church PIN to access entries. Administrators have access to all
                            directory information for management and moderation purposes.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">C. Prayer Wall Submissions</h3>
                        <p>
                            Currently only the Admin can make new prayer requests,
                            however this will still apply if a request is made.
                        </p>
                        <p>If you make a prayer request, the App will collect:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name (if provided)</li>
                            <li>Prayer request content</li>
                        </ul>

                        <p>
                            Prayer requests will be visible to other authenticated users
                            within the App.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">D. Technical Information</h3>
                        <p>The App may automatically collect:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Device type</li>
                            <li>Operating system</li>
                            <li>App version</li>
                            <li>Authentication identifiers</li>
                            <li>Crash logs (if applicable)</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">3. How the App Use Information</h2>
                    <p>The App use the collected information to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Provide and maintain the App</li>
                        <li>Authenticate users</li>
                        <li>Display approved directory information to approved users</li>
                        <li>Display prayer requests</li>
                        <li>Communicate important updates</li>
                        <li>Improve functionality and security</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                    <p>The App do not sell, rent, or trade your personal information.</p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">4. Who Can See Your Information</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            Directory information is visible only to authenticated church
                            users and administrators.
                        </li>
                        <li>Prayer requests are visible within the App to authenticated users.</li>
                        <li>Administrators may review, edit, approve, or remove content as necessary.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">5. Data Storage and Security</h2>
                    <p>
                        the App use secure third-party services (such as Firebase by Google) to
                        store and manage data. the App implement reasonable security measures,
                        including authentication controls and restricted access.
                    </p>
                    <p>However, no method of transmission or storage is 100% secure.</p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">6. Children’s Privacy</h2>
                    <p>
                        This App is intended for church members and families. Parents or
                        guardians may submit dependent information for children as part of
                        directory participation. the App do not knowingly collect personal
                        information from children outside of information submitted by a
                        parent or guardian.
                    </p>
                    <p>If you believe information has been collected improperly, please contact us.</p>
                </section>

                <section className="space-y-3" id="account-deletion">
                    <h2 className="text-xl font-semibold">7. Account and Data Deletion</h2>
                    <p>You may request deletion of your account and associated data at any time.</p>
                    <p>
                        <strong>Email:</strong> alexhart3000@gmail.com <br />
                        <strong>Subject Line:</strong> Account Deletion Request
                    </p>
                    <p>
                        Upon verification, the App will delete your account, associated personal
                        data, and entries created by the account within a reasonable
                        timeframe, except where retention is required by law. Verification
                        may require additional information, particularly for anonymous
                        accounts.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">8. Data Retention</h2>
                    <p>the App retain personal information only as long as necessary to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Maintain active membership records</li>
                        <li>Provide directory services</li>
                        <li>Meet legal obligations</li>
                    </ul>
                    <p>Inactive or deleted accounts will have associated personal data removed upon request.</p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">9. Third-Party Services</h2>
                    <p>The App uses third-party services, including:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Firebase Authentication</li>
                        <li>Firebase Realtime Database / Firestore</li>
                        <li>Firebase Storage</li>
                        <li>Firebase Functions</li>
                    </ul>
                    <p>These services may collect technical information as part of providing infrastructure support.</p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">10. Changes to This Privacy Policy</h2>
                    <p>
                        The App may update this Privacy Policy from time to time. Changes will be
                        posted on our website with an updated “Last Updated” date.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">11. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy or would like to request account deletion, please contact:</p>
                    <p>
                        <strong>Alexander Hart</strong>
                        <br />
                        <strong>Email:</strong> alexhart3000@gmail.com
                    </p>
                </section>
            </section>
        </main>
    );
}
