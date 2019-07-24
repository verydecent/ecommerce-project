import React from 'react';
import './LandingCards.css';

function LandingCards() {
  return (
    <div className="landing-card-container">
      <div className="tag-line">
        <span>The Men's Style Destination</span>
      </div>
      <div className="landing-card-panel">
        <div className="landing-card-column">
          <div className="landing-card-img">
            <img src="https://images.ctfassets.net/bdvz0u6oqffk/2zSIHLByx6UJ96XmsX3fXv/558b3b6f706e8ff1bf4521718cdc4212/Shop.svg" alt="" />
          </div>
          <div className="landing-card-text">
            <div className="landing-card-title">Hundreds of Designer Listings</div>
            <div className="landing-card-detail">Shop The Feed</div>
          </div>
        </div>

        <div className="landing-card-column">
          <div className="landing-card-img">
            <img src="https://images.ctfassets.net/bdvz0u6oqffk/45NpCi6Uju82aWMA2aYUWe/5741f32db4d9db879f2c51d5424f16e9/Protection.svg" alt="" />
          </div>
          <div className="landing-card-text">
            <div className="landing-card-title">Authenticity Protection</div>
            <div className="landing-card-detail">View Protection</div>
          </div>
        </div>

        <div className="landing-card-column">
          <div className="landing-card-img">
            <img src="https://images.ctfassets.net/bdvz0u6oqffk/3lMwTDbIZ5rwRyuCtrH4WH/f916fbe330af0255e1f32faf072ddc8e/Sell.svg" alt="" />
          </div>
          <div className="landing-card-text">
            <div className="landing-card-title">Low Transaction Fees</div>
            <div className="landing-card-detail">Start Selling</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCards;