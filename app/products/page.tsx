"use client";

import { DataTable, ExtendedColumnDef } from "@/components/common/DataTable/data-table";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  status: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    stock: 50,
    status: "Active",
  },
  {
    id: "2",
    name: "Mouse",
    price: 29.99,
    category: "Electronics",
    stock: 200,
    status: "Active",
  },
  {
    id: "3",
    name: "Keyboard",
    price: 79.99,
    category: "Electronics",
    stock: 100,
    status: "Active",
  },
  {
    id: "4",
    name: "Monitor",
    price: 299.99,
    category: "Electronics",
    stock: 25,
    status: "Out of Stock",
  },
  {
    id: "5",
    name: "Headphones",
    price: 149.99,
    category: "Electronics",
    stock: 75,
    status: "Active",
  },
];

const columns: ExtendedColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] mt-28">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <DataTable
        columns={columns}
        data={mockProducts}
        title="Products"
        searchKey="name"
        searchPlaceholder="Search products..."
      />
    </div>
  );
}
