export interface PricingDiscount {
  months: number | 'cash';
  percentage: number;
  price: number;
}

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: string;
  buttonText: string;
  popular?: boolean;
  features: PricingFeature[];
  discount: PricingDiscount[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'fast',
    name: '🏎️ 1000 L.E / Month',
    description: 'Includes full access to books, instructors, and team support',
    price: 1000,
    interval: 'month',
    buttonText: 'Subscribe Now',
    popular: true,
    features: [
      { name: '4 Days / Week', included: true },
      { name: 'Books', included: true },
      { name: 'Follow-Up', included: true },
      { name: 'Instructor', included: true },
      { name: 'Team', included: true },
      { name: 'Family Group', included: true }
    ],
    discount: [
      { months: 6, percentage: 12, price: 5280 },
      { months: 'cash', percentage: 26, price: 4995 }
    ]
  },
  {
    id: 'relaxed',
    name: '🦥 625 L.E / Month',
    description: 'A balanced plan with instructor and team access',
    price: 625,
    interval: 'month',
    buttonText: 'Subscribe Now',
    features: [
      { name: '2 Days / Week', included: true },
      { name: 'Books', included: true },
      { name: 'Follow-Up', included: true },
      { name: 'Instructor', included: true },
      { name: 'Team', included: true },
      { name: 'Family Group', included: true }
    ],
    discount: [
      { months: 6, percentage: 12, price: 3300 },
      { months: 'cash', percentage: 26, price: 6243 }
    ]
  },
  {
    id: 'self',
    name: '💁🏻 375 L.E / Month',
    description: 'Books-only plan without additional support',
    price: 375,
    interval: 'month',
    buttonText: 'Subscribe Now',
    features: [
      { name: 'Study as you want', included: true },
      { name: 'Books', included: true },
      { name: 'Follow-Up', included: false },
      { name: 'Instructor', included: false },
      { name: 'Team', included: false },
      { name: 'Family Group', included: false }
    ],
    discount: [
      { months: 6, percentage: 12, price: 1980 },
      { months: 'cash', percentage: 26, price: 3746 }
    ]
  }
];