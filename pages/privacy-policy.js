import Head from 'next/head';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Layout from '../components/layouts/Layout';

const PrivacyPolicy = () => {
    return (
        <Layout>
            <Head>
                <title>Privacy Policy || Gobind Coach Builders</title>
            </Head>

            <Breadcrumb title="Privacy Policy" current="Privacy Policy" />

            <main className="page-wrapper">
                <div className="privacy-policy-area ax-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="content">
                                    <div className="inner">
                                        <div className="section-title">
                                            <h4 className="title">Last Updated: February 25, 2025 By Akash Dhiman Gobind Coach Builders</h4>
                                        </div>
                                        
                                        <h3>Introduction</h3>
                                        <p>
                                            Welcome to Gobind Coach Builders. Your privacy is important to us, and we are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                                        </p>

                                        <h3>Information We Collect</h3>
                                        <p>
                                            We collect the following types of information:
                                        </p>
                                        <ul>
                                            <li>Personal Information: Name, email address, phone number, and other details you provide voluntarily.</li>
                                            <li>Technical Information: IP address, browser type, and cookies for better website functionality.</li>
                                            <li>Usage Data: Information on how you interact with our website.</li>
                                        </ul>

                                        <h3>How We Use Your Information</h3>
                                        <p>
                                            We use your information to:
                                        </p>
                                        <ul>
                                            <li>Provide and maintain our services.</li>
                                            <li>Improve website functionality and user experience.</li>
                                            <li>Respond to inquiries and provide customer support.</li>
                                            <li>Send updates, promotions, and marketing communications.</li>
                                        </ul>

                                        <h3>Cookies and Tracking Technologies</h3>
                                        <p>
                                            We use cookies to enhance user experience and analyze website traffic. You can disable cookies in your browser settings, but some features of our website may not function properly.
                                        </p>

                                        <h3>Data Security</h3>
                                        <p>
                                            We take appropriate security measures to protect your personal data. However, no online transmission is 100% secure. By using our site, you acknowledge the inherent risks of online data transmission.
                                        </p>

                                        <h3>Third-Party Services</h3>
                                        <p>
                                            We may use third-party services for analytics, marketing, and payment processing. These providers have their own privacy policies governing the use of your data.
                                        </p>

                                        <h3>Your Rights</h3>
                                        <p>
                                            You have the right to:
                                        </p>
                                        <ul>
                                            <li>Access, update, or delete your personal information.</li>
                                            <li>Opt-out of marketing communications.</li>
                                            <li>Request details about how your data is used.</li>
                                        </ul>

                                        <h3>Changes to This Policy</h3>
                                        <p>
                                            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our website constitutes acceptance of the updated policy.
                                        </p>

                                        <h3>Contact Us</h3>
                                        <p>
                                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:akashdhiman@gobindcoach.com">akashdhiman@gobindcoach.com</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default PrivacyPolicy;
