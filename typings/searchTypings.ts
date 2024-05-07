export interface OrganicProduct {
  pos?: number;
  url: string;
  asin: string;
  price: number;
  title: string;
  rating: number;
  currency: string;
  url_image: string;
  best_seller: boolean;
  price_upper: number;
  is_sponsored: boolean;
  manufacturer: string;
  pricing_count: number;
  reviews_count: number;
  is_amazons_choice: boolean;
}

export interface PaidProduct {
  pos?: number;
  url: string;
  asin: string;
  price: number;
  title: string;
  rating: number;
  currency: string;
  url_image: string;
  best_seller: boolean;
  price_upper: number;
  is_sponsored: boolean;
  manufacturer: string;
  pricing_count: number;
  reviews_count: number;
  is_amazons_choice: boolean;
}

export interface Results {
  paid: PaidProduct[];
  organic: OrganicProduct[];
  suggested: any[];
  amazons_choices: any[];
  instant_recommendations: any[];
}

export interface Content {
  url: string;
  page: number;
  pages: number;
  query: string;
  results: Results;
  parse_status_code: number;
  total_results_count: number;
}

export interface Result {
  content: Content;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export interface Root {
  results: Result[];
}
