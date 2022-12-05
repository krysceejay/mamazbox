export interface IProductItem {
    id: string;
    name: string;
    stock: string;
    // "weight": "444l",
    slug: string;
    selling_price: number | string;
    discount_price: string;
    discount_percent: string;
    cartQuantity?: number;
    discount_status: string;
    product_status: string;
    product_images: {
      secure_url: string;
    }[];
  }