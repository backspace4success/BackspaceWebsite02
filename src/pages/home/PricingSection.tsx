import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<number | 'month' | 'cash'>('month');

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-black/70">Choose the perfect plan for your learning journey</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12">
          {['month', 6, 'cash'].map((cycle) => {
            const discount = pricingPlans[0].discount.find(
              (d) => d.months === (cycle === 'month' ? 6 : cycle)
            );
            return (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle === 'month' ? 'month' : cycle)}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm md:text-lg ${
                  billingCycle === cycle ? 'bg-primary text-white shadow-lg' : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                {cycle === 'month' ? 'Monthly' : cycle === 'cash' ? 'Full Course (Cash)' : `${cycle} Months`}
                {discount && cycle !== 'month' && (
                  <span className="text-xs md:text-sm text-[#90C440] ml-1">
                    (Save {discount.percentage}%)
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => {
            const discount = plan.discount.find(
              (d) => d.months === (billingCycle === 'month' ? 6 : billingCycle)
            );
            const finalPrice = discount ? discount.price : plan.price;
            const pricePer =
              billingCycle === 'month' ? 'month' : billingCycle === 'cash' ? 'Full Course' : `${billingCycle} months`;

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                  plan.popular ? 'border-primary' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm">Most Popular</div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2 transition-colors duration-300 hover:text-primary">{plan.name}</h3>
                  <p className="text-black/70 mb-6">{plan.description}</p>
                  <div className="mb-6 transition-all duration-300 hover:scale-105">
                    <span className="text-4xl font-bold text-black">{finalPrice} L.E</span>
                    <span className="text-black/60"> / {pricePer}</span>
                  </div>
                  <button
                    className={`w-full py-3 rounded-md transition-all duration-300 transform hover:scale-105 ${
                      plan.popular ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg' : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
                <div className="border-t border-gray-100 p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center transition-transform duration-300 hover:translate-x-2">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-accent mr-2" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mr-2" />
                        )}
                        <span className={feature.included ? 'text-black' : 'text-black/60'}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;