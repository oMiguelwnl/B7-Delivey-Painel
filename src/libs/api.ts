import { Category } from "@/types/Category";
import { Order } from "@/types/Order";
import { OrderStatus } from "@/types/OrderStatus";
import { Product } from "@/types/Product";

const tmpProduct: Product = {
  id: 999,
  image:
    "https://saopaulosecreto.com/wp-content/uploads/2022/10/Get-Burger-1024x683.jpg",
  category: {
    id: 99,
    name: "Burgers",
  },
  name: "Burgão Boladão",
  price: 35.3,
  description: "O Melhor burger do mundo",
};

export const api = {
  login: async (
    email: string,
    password: string
  ): Promise<{ error: string; token?: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email !== "suport@gmail.com") {
          resolve({ error: "E-mail e/ou senha não batem" });
        } else {
          resolve({ error: "", token: "123" });
        }
      }, 1000);
    });
  },
  forgotPassword: async (email: string): Promise<{ error: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ error: "" });
      }, 1000);
    });
  },
  redefinePassword: async (
    password: string,
    token: string
  ): Promise<{ error: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ error: "" });
      }, 1000);
    });
  },
  getOrders: async (): Promise<Order[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const orders: Order[] = [];
        const statuses: OrderStatus[] = ["preparing", "sent", "delivered"];

        // TODO: Create Product Array
        for (let i = 0; i < 6; i++) {
          orders.push({
            id: parseInt("12" + i),
            status: statuses[Math.floor(Math.random() * 3)],
            orderDate: "2024-03-21 12:20",
            userid: "1",
            userName: "João",
            shippingAddress: {
              id: 33,
              cep: "99999999",
              address: "Rua do céu",
              number: "1233",
              neighborhood: "Algum",
              city: "Rio de Janeiro",
              state: "RJ",
              complement: "AAAS2",
            },
            shippingPrice: 12,
            paymentType: "card",
            changeValue: 0,
            cupom: "Sorte",
            cupomDiscount: 2,
            products: [
              { qt: 2, product: tmpProduct },
              {
                qt: 3,
                product: { ...tmpProduct, id: 544, name: "Burger Nacional" },
              },
            ],
            subtotal: 99,
            total: 123,
          });
        }

        resolve(orders);
      }, 1000);
    });
  },
  changeOrderStatus: async (id: number, newStatus: OrderStatus) => {
    return true;
  },
  getCategories: async (): Promise<Category[]> => {
    const list: Category[] = [
      { id: 99, name: "Burgers" },
      { id: 98, name: "Refrigerantes" },
      { id: 97, name: "Doces" },
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(list);
      }, 200);
    });
  },

  getProducts: async (): Promise<Product[]> => {
    const list: Product[] = [
      { ...tmpProduct, id: 123 },
      { ...tmpProduct, id: 124 },
      { ...tmpProduct, id: 125 },
      { ...tmpProduct, id: 126 },
      { ...tmpProduct, id: 127 },
      { ...tmpProduct, id: 1238 },
      { ...tmpProduct, id: 129 },
      { ...tmpProduct, id: 130 },
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(list);
      }, 500);
    });
  },
  DeleteProduct: async (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  },
  createProduct: async (form: FormData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  },
  updateProduct: async (form: FormData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  },
};
