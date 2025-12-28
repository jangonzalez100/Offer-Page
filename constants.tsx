import React from 'react';
import { Benefit, Plan } from './types';

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    title: 'Total Peace of Mind',
    description: 'We handle hosting, security protocols, and backups while you focus on scaling your business. Never worry about downtime again.',
    icon: 'SHIELD_PROTOCOL'
  },
  {
    id: '2',
    title: 'Zero Tech Headaches',
    description: 'No servers to manage. No code to debug. No plugins to update. We are your dedicated technical partner, just an email away.',
    icon: 'AUTO_OPTIMIZE'
  },
  {
    id: '3',
    title: 'Always Updated',
    description: 'The web moves fast. Our $50/mo plan ensures your site stays compatible with latest browsers and mobile standards.',
    icon: 'LATEST_BUILD'
  },
  {
    id: '4',
    title: 'Ultra-Fast Deployment',
    description: 'By leveraging high-end AI design workflows, we deliver premium results in days, not months. Speed is your competitive edge.',
    icon: 'KINETIC_LAUNCH'
  }
];

export const PLANS: Plan[] = [
  {
    name: 'COMMANDER BUNDLE',
    price: '$599',
    monthly: '$50',
    recommended: true,
    features: [
      { name: 'Custom AI-Powered Design', included: true },
      { name: 'Full Mobile Optimization', included: true },
      { name: 'Elite Brand Identity Kit', included: true },
      { name: 'Premium SEO Foundation', included: true },
      { name: 'Secure Cloud Hosting', included: true },
      { name: '24/7 Threat Monitoring', included: true },
      { name: 'Continuous Performance Tuning', included: true },
      { name: 'Dedicated Support Channel', included: true }
    ]
  }
];