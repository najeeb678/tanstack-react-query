"use client";

import { DataTable, ExtendedColumnDef } from "@/components/common/DataTable/data-table";

interface Order {
  id: string;
  customer: string;
  total: number;
  status: string;
  date: string;
}

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Doe",
    total: 1029.98,
    status: "Completed",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    total: 79.99,
    status: "Pending",
    date: "2024-01-16",
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    total: 449.98,
    status: "Shipped",
    date: "2024-01-14",
  },
  {
    id: "ORD-004",
    customer: "Alice Brown",
    total: 299.99,
    status: "Completed",
    date: "2024-01-13",
  },
  {
    id: "ORD-005",
    customer: "Charlie Wilson",
    total: 149.99,
    status: "Processing",
    date: "2024-01-17",
  },
];

const columns: ExtendedColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] mt-28">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <DataTable
        columns={columns}
        data={mockOrders}
        title="Orders"
        searchKey="customer"
        searchPlaceholder="Search orders..."
      />
    </div>
  );
}
