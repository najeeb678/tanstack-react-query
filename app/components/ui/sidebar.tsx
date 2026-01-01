"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming you have a utils file for cn

const sidebarItems = [
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Orders",
    href: "/orders",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col fixed inset-y-0 z-50 bg-gray-900 border-r border-gray-700">
      <div className="flex h-14 items-center border-b border-gray-700 px-4">
        <h2 className="text-lg font-semibold text-white">Dashboard</h2>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
