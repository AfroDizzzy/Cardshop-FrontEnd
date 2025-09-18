import useScryfallMTGCardStore from "../../../store/scryfallSeletedCardStore";
import type { ScryfallMTGCard } from "../../../types/ScryfallObject";
import "./productDetailsStyles.css";

export function ProductDetails() {
  const data: ScryfallMTGCard = useScryfallMTGCardStore((state) => state.data);

  console.warn(data);
  return (
    <div className="card-container">
      <div className="card-grid">
        {/* Card Image */}

        <div className="image-wrapper">
          <img
            className="card-image"
            alt={data.name}
            src={data.image_uris?.normal}
          />
        </div>

        {/* Card Information */}
        <div className="info-section">
          {/* Header */}
          <div className="header-section">
            <div>
              <h1 className="card-title">{data.name}</h1>
              <div className="card-meta">
                <span className="mana-cost">{data.mana_cost}</span>
                <span className="type-line">{data.type_line}</span>
              </div>
            </div>
          </div>

          {/* Oracle Text */}
          <div className="oracle-section">
            <h3 className="oracle-title">Oracle Text</h3>
            <div className="oracle-content">
              <p className="oracle-text">{data.oracle_text}</p>
            </div>
          </div>

          {/* Details */}
          <div className="details-section">
            <div className="details-grid">
              <div>
                <span className="detail-label">Release Date</span>
                <p className="detail-value">{data.released_at}</p>
              </div>
              <div>
                <span className="detail-label">Average Price</span>
                <p className="price-value">${data.prices?.usd}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
