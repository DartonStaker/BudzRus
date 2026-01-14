// Mock data for admin dashboard
// Will be replaced with Supabase queries later

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image_url?: string;
  created_at: string;
}

export interface Order {
  id: number;
  customer_id: number;
  customer_name: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: number;
  created_at: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  total_orders: number;
  total_spent: number;
  created_at: string;
}

export interface Invoice {
  id: number;
  invoice_number: string;
  order_id: number;
  customer_name: string;
  amount: number;
  status: "paid" | "unpaid";
  created_at: string;
}

export interface Payment {
  id: number;
  order_id: number;
  customer_name: string;
  amount: number;
  method: string;
  status: "completed" | "pending" | "failed" | "refunded";
  transaction_id: string;
  created_at: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url?: string;
  order: number;
  visible: boolean;
  created_at: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  featured_image?: string;
  status: "draft" | "published";
  published_at?: string;
  created_at: string;
}

// Mock data generators
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Brownies",
    description: "Delicious cannabis-infused brownies",
    price: 100,
    category: "Edibles",
    stock: 50,
    created_at: "2025-01-10",
  },
  {
    id: 2,
    name: "Cannabis Chocolates",
    description: "Premium chocolate with cannabis",
    price: 120,
    category: "Edibles",
    stock: 30,
    created_at: "2025-01-11",
  },
  {
    id: 3,
    name: "Pre-Roll Pack",
    description: "Premium pre-rolled cannabis",
    price: 150,
    category: "Canna Bar",
    stock: 25,
    created_at: "2025-01-12",
  },
];

export const mockOrders: Order[] = [
  {
    id: 1,
    customer_id: 1,
    customer_name: "John Doe",
    status: "pending",
    total: 250,
    items: 2,
    created_at: "2025-01-14",
  },
  {
    id: 2,
    customer_id: 2,
    customer_name: "Jane Smith",
    status: "processing",
    total: 150,
    items: 1,
    created_at: "2025-01-13",
  },
  {
    id: 3,
    customer_id: 1,
    customer_name: "John Doe",
    status: "delivered",
    total: 300,
    items: 3,
    created_at: "2025-01-12",
  },
];

export const mockCustomers: Customer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+27 12 345 6789",
    address: "123 Main St, Johannesburg",
    total_orders: 5,
    total_spent: 1250,
    created_at: "2025-01-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+27 12 345 6790",
    address: "456 Oak Ave, Cape Town",
    total_orders: 3,
    total_spent: 450,
    created_at: "2025-01-05",
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: 1,
    invoice_number: "INV-2025-001",
    order_id: 1,
    customer_name: "John Doe",
    amount: 250,
    status: "unpaid",
    created_at: "2025-01-14",
  },
  {
    id: 2,
    invoice_number: "INV-2025-002",
    order_id: 2,
    customer_name: "Jane Smith",
    amount: 150,
    status: "paid",
    created_at: "2025-01-13",
  },
];

export const mockPayments: Payment[] = [
  {
    id: 1,
    order_id: 2,
    customer_name: "Jane Smith",
    amount: 150,
    method: "Credit Card",
    status: "completed",
    transaction_id: "TXN-001",
    created_at: "2025-01-13",
  },
  {
    id: 2,
    order_id: 1,
    customer_name: "John Doe",
    amount: 250,
    method: "PayPal",
    status: "pending",
    transaction_id: "TXN-002",
    created_at: "2025-01-14",
  },
];

export const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Infused Burger",
    description: "Delicious burger with cannabis infusion",
    price: 170,
    category: "Main Course",
    order: 1,
    visible: true,
    created_at: "2025-01-10",
  },
  {
    id: 2,
    name: "Cannabis Pizza",
    description: "Pizza slice with cannabis",
    price: 150,
    category: "Main Course",
    order: 2,
    visible: true,
    created_at: "2025-01-11",
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Guide to Cannabis Edibles",
    content: "Learn everything about cannabis edibles...",
    author: "Admin",
    status: "published",
    published_at: "2025-01-10",
    created_at: "2025-01-09",
  },
  {
    id: 2,
    title: "Understanding Different Cannabis Strains",
    content: "Explore the world of cannabis strains...",
    author: "Admin",
    status: "draft",
    created_at: "2025-01-12",
  },
];

