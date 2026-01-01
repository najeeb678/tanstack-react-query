import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 font-sans">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Welcome to Our Dashboard!</h1>
        <p className="mb-8 text-gray-300">Use the sidebar to navigate to Products or Orders.</p>
        <div className="space-x-4">
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
          >
            View Products
          </Link>
          <Link
            href="/orders"
            className="inline-block px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
