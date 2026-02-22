import "../styles/Insights.css";

export default function Insights() {
  return (
    <main className="main-content">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Insights & Visualizations</h1>
          <p className="page-subtitle">
            Data-driven analysis and visual summaries to help farmers plan better and act earlier.
          </p>
        </div>
      </div>

      <div className="container insights-list">
        {/* Blog Cards List */}
        <article className="blog-card">
          <div className="card-inner">
            <div className="card-media">
              <img
                src="/pics/seasonal_crop_distribution_clean.png"
                alt="Seasonal crop distribution"
                className="responsive-image"
              />
            </div>
            <div className="card-body">
              <h2>Understanding Seasonal Crop Distribution</h2>
              <p>
                Selecting the right crop for the right season significantly increases yield and reduces disease risk.
                The chart above shows crop suitability across Spring/Autumn, Summer, and Winter.
              </p>
              <div className="highlight-box">
                <strong>KishanAI Insight:</strong> Crops grown outside their suitable season are more vulnerable to disease.
              </div>
            </div>
          </div>
        </article>

        <article className="blog-card">
          <div className="card-inner">
            <div className="card-media">
              <img
                src="/pics/fertilizer_crop_heatmap.png"
                alt="Fertilizer usage heatmap"
                className="responsive-image"
              />
            </div>
            <div className="card-body">
              <h2>Fertilizer Usage Patterns Across Crops</h2>
              <p>
                Proper fertilizer selection maintains soil health and maximizes yield. This visualization highlights
                fertilizer preferences across crops.
              </p>
              <h3>Key Insights</h3>
              <ul>
                <li>Cereals like rice and maize favor nitrogen-rich fertilizers.</li>
                <li>Pulses require lower nitrogen and balanced nutrient mixes.</li>
                <li>Fruit crops often benefit from potassium-rich formulations.</li>
              </ul>
              <div className="highlight-box">
                <strong>KishanAI Insight:</strong> Recommendations can reduce waste and improve efficiency.
              </div>
            </div>
          </div>
        </article>

        <article className="blog-card">
          <div className="card-inner">
            <div className="card-media">
              <img
                src="/pics/crop_risk_bubble_clean.png"
                alt="Crop risk analysis"
                className="responsive-image"
              />
            </div>
            <div className="card-body">
              <h2>Crop Risk Analysis: Temperature & Rainfall</h2>
              <p>
                Climate conditions determine disease risk. This analysis visualizes crop vulnerability across
                temperature and rainfall ranges.
              </p>
              <div className="highlight-box">
                <strong>KishanAI Insight:</strong> High temperature combined with heavy rainfall increases disease risk for several crops.
              </div>
            </div>
          </div>
        </article>

        <article className="blog-card">
          <div className="card-inner">
            <div className="card-media">
              <img
                src="/pics/nutrient_ratios_radar.png"
                alt="Nutrient ratio analysis"
                className="responsive-image"
              />
            </div>
            <div className="card-body">
              <h2>Nutrient Ratio Analysis for Optimal Growth</h2>
              <p>
                Different crops require specific N-P-K balances. This radar comparison shows nutrient demand profiles across crops.
              </p>
              <div className="highlight-box">
                <strong>KishanAI Insight:</strong> Tailored nutrient strategies improve resilience and yield.
              </div>
            </div>
          </div>
        </article>

        <article className="blog-card">
          <div className="card-inner">
            <div className="card-media">
              <img
                src="/pics/soil_ph_histogram_fixed.png"
                alt="Soil pH distribution"
                className="responsive-image"
              />
            </div>
            <div className="card-body">
              <h2>Matching Crops to Soil pH</h2>
              <p>
                Soil pH affects nutrient availability and crop performance. This histogram shows crop distributions over pH ranges.
              </p>
              <div className="highlight-box">
                <strong>KishanAI Insight:</strong> Most staples prefer neutral to slightly acidic soils.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}