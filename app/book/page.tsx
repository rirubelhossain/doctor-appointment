import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-600">
            MediCare
          </h1>

          <div className="flex gap-8 font-semibold text-gray-700">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/book" className="hover:text-blue-600">Book</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </div>

          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
          >
            Login
          </Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Book Doctor Appointment
          </h1>

          <p className="text-gray-600 mb-8">
            Fill out the form below to request your appointment.
          </p>

          <form className="grid gap-5">
            <input className="border rounded-xl px-4 py-3" placeholder="Full Name" />

            <input className="border rounded-xl px-4 py-3" type="email" placeholder="Email Address" />

            <input className="border rounded-xl px-4 py-3" placeholder="Phone Number" />

            <select className="border rounded-xl px-4 py-3">
              <option>Select Doctor</option>
              <option>Dr. John Smith - Cardiologist</option>
              <option>Dr. Sarah Lee - Dentist</option>
              <option>Dr. David Khan - Neurologist</option>
            </select>

            <input className="border rounded-xl px-4 py-3" type="date" />

            <input className="border rounded-xl px-4 py-3" type="time" />

            <textarea
              className="border rounded-xl px-4 py-3"
              placeholder="Describe your problem"
            />

            <button
              type="button"
              className="bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700"
            >
              Submit Appointment
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}