import React from "react";

const BoostViewsExplanation = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          How This Tool Can Boost Your Views
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">1. Estimated View Increase</h3>
            <p className="text-gray-700">
              Using our tool, your video views can increase depending on how effectively the suggestions are implemented. 
              <strong> Typical increase ranges from 5% to 400%</strong>, depending on factors like content quality, thumbnail design, 
              SEO optimization, and user engagement strategies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">2. Key Contributing Features</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li><strong>Title & Keywords:</strong> Improves impressions and search visibility.</li>
              <li><strong>Thumbnails:</strong> Boosts click-through rates (CTR).</li>
              <li><strong>Retention & Chapters:</strong> Helps YouTube algorithm promote your video.</li>
              <li><strong>Tags & Description:</strong> Helps discoverability in relevant searches.</li>
              <li><strong>Playlists & Cross-Promotion:</strong> Increases overall session watch time.</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">3. How the Increase is Calculated</h3>
            <p className="text-gray-700">
              Roughly estimate your potential uplift by multiplying the expected improvement of each feature. 
              Example: Thumbnails +50%, Titles + Keywords +30% → Overall ≈ <strong>1.5 * 1.3 = 1.95 → 95% increase</strong>.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">4. Practical Example</h3>
            <p className="text-gray-700">
              Baseline: <strong>1,000 views/day</strong>
              <br/>- Conservative: +20% → 1,200 views/day  
              <br/>- Good: +60% → 1,600 views/day  
              <br/>- Aggressive: +200% → 3,000 views/day
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">5. Tips to Maximize Growth</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Experiment with thumbnails and titles to see what performs best.</li>
              <li>Follow the tool's SEO suggestions for titles, tags, and descriptions.</li>
              <li>Use chapters and improve watch-time to boost algorithm promotion.</li>
              <li>Organize videos in playlists to increase session duration.</li>
              <li>Track analytics: CTR, impressions, watch time, and traffic sources.</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">6. Measuring Real Impact</h3>
            <p className="text-gray-700">
              Compare a set of videos where the tool is applied vs control videos. Measure % increase in views, CTR, and watch time 
              to understand the actual uplift.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoostViewsExplanation;
