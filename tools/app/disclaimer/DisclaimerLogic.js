import React from "react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Disclaimer
        </h1>

        <p className="mb-6 text-gray-600 leading-relaxed">
          The information provided on <span className="font-semibold">Your Website</span> is for
          general informational purposes only. All content, including tools,
          data, and results, are provided “as is” without any guarantees of
          accuracy or completeness.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          1. No Professional Advice
        </h2>
        <p className="mb-6 text-gray-600 leading-relaxed">
          The tools and insights available on this website are intended for
          educational and general use. They should not be considered as
          professional advice. Always do your own research or consult an expert
          before making any decisions based on the information provided here.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          2. External Links
        </h2>
        <p className="mb-6 text-gray-600 leading-relaxed">
          Our website may contain links to external websites. We are not
          responsible for the content, accuracy, or privacy practices of these
          third-party sites.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          3. Limitation of Liability
        </h2>
        <p className="mb-6 text-gray-600 leading-relaxed">
          Under no circumstances shall we be liable for any direct or indirect
          damages arising from the use or inability to use the services or
          information provided on this site.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          4. Consent
        </h2>
        <p className="mb-6 text-gray-600 leading-relaxed">
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>

        <p className="text-gray-600 mt-10">
          <strong>Last Updated:</strong> November 2025
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
