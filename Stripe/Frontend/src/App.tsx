import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('http://localhost:5000/plans');
        const data = await response.json();
        setPlans(data.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // Handle subscription redirect to Stripe Checkout
  const handleSubscribe = async (priceId) => {
    const session = await fetch('http://localhost:5000/create-checkout-session', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ priceId })
    });
    const sessionResponse = await session.json();
    window.location.href = sessionResponse?.url;
  };

  return (
    <div className="App">
      <h1>Choose Your Plan</h1>

      {loading ? (
        <p>Loading plans...</p>
      ) : (
        <div className="plans">
          {plans.map((plan) => (
            <div key={plan.productId} className="plan-card">
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>
              <p className="price">
                ${plan.unit_amount / 100} / month
              </p>
              <button onClick={() => handleSubscribe(plan.priceId)}>
                Subscribe
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;