import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free plan',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Perfect for individuals getting started',
      features: [
        'Up to 5 resume analyses per month',
        'Basic feedback and suggestions',
        'PDF export',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Business plan',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Ideal for professionals and small teams',
      features: [
        'Up to 50 resume analyses per month',
        'Advanced AI feedback',
        'Multiple export formats',
        'Priority support',
        'Premium templates',
        'Team collaboration',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise plan',
      monthlyPrice: 49,
      yearlyPrice: 490,
      description: 'For large organizations and HR teams',
      features: [
        'Unlimited resume analyses',
        'Custom AI training',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee',
        'Custom templates'
      ],
      popular: false
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-content">
      
        <div className="pricing-header">
          <p className="pricing-subtitle">Choose the perfect plan for you</p>
          <h1 className="pricing-title">Pricing plan</h1>
          <p className="pricing-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

  
        <div className="pricing-toggle">
          <div className="toggle-container">
            <button 
              className={`toggle-option ${!isYearly ? 'active' : ''}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`toggle-option ${isYearly ? 'active' : ''}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="price-container">
                  <span className="price">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="price-period">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="card-features">
                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <Check className="feature-icon" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <button className={`plan-button ${plan.popular ? 'primary' : 'secondary'}`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-cta">
          <p className="cta-text">
            Need a custom solution? <a href="#contact" className="cta-link">Contact our sales team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;