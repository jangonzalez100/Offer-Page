import React from 'react';
import { Benefit, Plan } from './types';

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    title: 'Total Peace of Mind',
    description: 'We handle hosting and security protocols plus backups while you focus on scaling your business. Never worry about downtime again.',
    icon: 'SHIELD PROTOCOL'
  },
  {
    id: '2',
    title: 'Zero Tech Headaches',
    description: 'No servers to manage. No code to debug. No plugins to update. We are your dedicated technical partner only one email away.',
    icon: 'AUTO OPTIMIZE'
  },
  {
    id: '3',
    title: 'Always Updated',
    description: 'The web moves fast. Our monthly plan ensures your site stays compatible with latest browsers and mobile standards.',
    icon: 'LATEST BUILD'
  },
  {
    id: '4',
    title: 'Rapid Deployment',
    description: 'By leveraging high end AI design workflows we deliver premium results in days not months. Speed is your competitive edge.',
    icon: 'KINETIC LAUNCH'
  }
];

export const PLANS: Plan[] = [
  {
    name: 'COMMANDER BUNDLE',
    price: '$599',
    monthly: '$50',
    recommended: true,
    features: [
      { name: 'Custom AI Powered Design', included: true },
      { name: 'Full Mobile Optimization', included: true },
      { name: 'Elite Brand Identity Kit', included: true },
      { name: 'Premium SEO Foundation', included: true },
      { name: 'Secure Cloud Hosting', included: true },
      { name: 'Constant Threat Monitoring', included: true },
      { name: 'Continuous Performance Tuning', included: true },
      { name: 'Dedicated Support Channel', included: true }
    ]
  }
];