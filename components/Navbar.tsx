import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-extrabold text-blue-600">
          MediCare
        </h1>

        <div className="flex gap-8 font-semibold text-gray-700">

          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>

          <Link href="/book" className="hover:text-blue-600">
            Book
          </Link>

          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>

        </div>

        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}