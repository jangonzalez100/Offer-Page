
export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  name: string;
  included: boolean;
}

export interface Plan {
  name: string;
  price: string;
  monthly: string;
  features: Feature[];
  recommended?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  businessName: string;
  message: string;
}
