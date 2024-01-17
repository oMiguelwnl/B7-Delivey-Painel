import { Address } from "./Address";
import { CartItem } from "./CartItem";
import { OrderStatus } from "./OrderStatus";

export type Order = {
  id: number;
  status: OrderStatus;
  orderDate: string;
  userid: string;
  userName?: string;
  shippingAddress: Address;
  shippingPrice: number;
  paymentType: "card" | "money";
  changeValue?: number;
  cupom?: string;
  cupomDiscount?: number;
  products: CartItem[];
  subtotal: number;
  total: number;
};
