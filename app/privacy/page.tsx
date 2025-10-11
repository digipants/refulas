import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Refula",
  description:
    "Learn how Refula protects your personal information, ensures data security, and handles your privacy in compliance with U.S. data protection laws.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Privacy Policy</h1>

      <p className="text-gray-600 mb-6">
        At Refula, your privacy is our priority. This Privacy Policy
        describes how we collect, use, and safeguard your information when you
        use our services and website.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect personal information such as your name, email, phone number,
        and device details when you sign up for a plan, submit a claim, or contact
        our support team.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use your data to manage your protection plan, process claims, send
        updates, and improve our services. We do not sell your personal
        information to third parties.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">3. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We implement industry-standard encryption and security protocols to
        protect your data against unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">4. Cookies and Analytics</h2>
      <p className="text-gray-700 mb-4">
        Our website uses cookies to enhance your browsing experience and analyze
        traffic. You can disable cookies in your browser settings at any time.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">5. Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You have the right to access, correct, or delete your personal information.
        To exercise these rights, please contact us at{" "}
        <a
          href="mailto:support@Refula.com"
          className="text-blue-600 hover:underline"
        >
          support@Refula.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">6. Policy Updates</h2>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy periodically. Any changes will be posted
        on this page with an updated effective date.
      </p>

      <p className="text-gray-600 mt-10">
        Effective Date: January 1, 2025
      </p>
    </section>
  );
}
