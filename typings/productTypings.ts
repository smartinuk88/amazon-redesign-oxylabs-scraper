export interface Ad {
  pos: number;
  asin: string;
  type: string;
  price: number;
  title: string;
  images: string[];
  rating: number;
  location: string;
  price_upper: number;
  reviews_count: number;
  is_prime_eligible: boolean;
}

// Ladder (nested category hierarchy) interface
export interface Ladder {
  url: string;
  name: string;
}

// Category interface containing a list of ladders
export interface Category {
  ladder: Ladder[];
}

// Delivery date information interface
export interface DeliveryDate {
  by: string | null;
  from: string | null;
}

// Delivery details interface
export interface Delivery {
  date: DeliveryDate;
  type: string;
}

// SalesRank ladder details
export interface SalesRankLadder {
  url: string;
  name: string;
}

// SalesRank interface containing the rank and ladder information
export interface SalesRank {
  rank: number;
  ladder: SalesRankLadder[];
}

// Rating distribution interface
export interface RatingStarsDistribution {
  rating: number;
  percentage: number;
}

// Refurbished product information interface
export interface RefurbishedProductLink {
  url: string;
  title: string;
}

export interface RefurbishedProduct {
  link: RefurbishedProductLink;
  condition_title: string;
}

// ProductDetails interface
export interface ProductDetails {
  asin: string;
  batteries: string;
  item_weight: string;
  manufacturer: string;
  customer_reviews: string;
  best_sellers_rank: string;
  country_of_origin: string;
  item_model_number: string;
  product_dimensions: string;
  date_first_available: string;
  is_discontinued_by_manufacturer: string;
}

// Main Product Content interface
export interface Content {
  ads: Ad[];
  url: string;
  asin: string;
  page: number;
  price: number;
  stock: string;
  title: string;
  coupon: string;
  images: string[];
  rating: number;
  category: Category[];
  currency: string;
  delivery: Delivery[];
  _warnings: string[];
  deal_type: string;
  page_type: string;
  price_sns: number;
  variation: any[];
  has_videos: boolean;
  sales_rank: SalesRank[];
  top_review: string;
  asin_in_url: string;
  description: string;
  price_upper: number;
  pricing_str: string;
  pricing_url: string;
  discount_end: string;
  manufacturer: string;
  max_quantity: number;
  price_buybox: number;
  product_name: string;
  bullet_points: string;
  is_addon_item: boolean;
  price_initial: number;
  pricing_count: number;
  reviews_count: number;
  sns_discounts: any[];
  developer_info: any[];
  lightning_deal: any;
  price_shipping: number;
  is_prime_pantry: boolean;
  product_details: ProductDetails;
  featured_merchant: any[];
  is_prime_eligible: boolean;
  parse_status_code: number;
  product_dimensions: string;
  refurbished_product: RefurbishedProduct;
  answered_questions_count: number;
  rating_stars_distribution: RatingStarsDistribution[];
}

// Main Result interface
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

// Root interface containing the results array
export interface Root {
  results: Result[];
}
