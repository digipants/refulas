import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Refula",
  description:
    "Read the terms and conditions of Refula. Learn about coverage details, limitations, and how we keep your devices protected under fair U.S. consumer policies.",
};

export default function TermsPage() {
  return (
    <section className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Terms & Conditions</h1>

      <p className="text-gray-600 mb-6">
        Welcome to Refula. By accessing or using our website and services,
        you agree to comply with and be bound by the following terms and
        conditions. Please review them carefully before using our services.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">1. Service Overview</h2>
      <p className="text-gray-700 mb-4">
        Refula provides device protection services including repair and
        replacement coverage for accidental damage, theft, and loss, subject to
        the specific terms of your selected plan.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">2. Eligibility</h2>
      <p className="text-gray-700 mb-4">
        Our protection plans are available to residents of the United States who
        are 18 years or older. Each plan covers registered devices only.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">3. Claims and Replacements</h2>
      <p className="text-gray-700 mb-4">
        Claims must be filed within the time limit specified in your plan. Device
        replacements may be new or refurbished models of equal or greater value.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">4. Limitations of Liability</h2>
      <p className="text-gray-700 mb-4">
        Refula is not responsible for indirect, incidental, or consequential
        damages arising from service use, delays, or inability to use the service.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">5. Plan Cancellation</h2>
      <p className="text-gray-700 mb-4">
        You may cancel your plan at any time through your account or by contacting
        support. Refunds are processed based on the unused portion of your plan.
      </p>

      <p className="text-gray-600 mt-10">
        For questions about these terms, please contact{" "}
        <a
          href="mailto:support@Refula.com"
          className="text-blue-600 hover:underline"
        >
          support@Refula.com
        </a>
        .
      </p>
    </section>
  );
}
