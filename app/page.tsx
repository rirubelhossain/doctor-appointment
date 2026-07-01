import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-3xl font-extrabold text-blue-600">
            MediCare
          </h1>

          {/* Menu */}
          <div className="flex gap-8 font-semibold text-gray-700">

            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>

            <Link href="/book" className="hover:text-blue-600 transition">
              Book
            </Link>

            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>

          </div>

          {/* Login Button */}
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            Login
          </Link>

        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}

      

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
              🏥 Doctor Appointment System
            </span>

            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Book Your Doctor Appointment Online
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Find experienced doctors and book appointments anytime,
              anywhere.
            </p>

            <div className="flex gap-4">

              <Link
                href="/book"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700"
              >
                Book Appointment
              </Link>

              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white"
              >
                Our Services
              </Link>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

            <div className="text-7xl">
              👨‍⚕️
            </div>

            <h2 className="text-3xl font-bold mt-4">
              Welcome
            </h2>

            <p className="text-gray-600 mt-3">
              Your Health Is Our Priority
            </p>

          </div>

        </div>

      </section>
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      Why Choose MediCare?
    </h2>

    <p className="text-center text-gray-600 mb-12">
      We provide trusted healthcare services with experienced doctors and modern facilities.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-blue-50 p-8 rounded-3xl shadow-lg text-center">
        <div className="text-6xl mb-5">👨‍⚕️</div>
        <h3 className="text-2xl font-bold mb-3">Expert Doctors</h3>
        <p className="text-gray-600">
          Highly qualified specialists with years of experience.
        </p>
      </div>

      <div className="bg-green-50 p-8 rounded-3xl shadow-lg text-center">
        <div className="text-6xl mb-5">🕒</div>
        <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
        <p className="text-gray-600">
          Book appointments anytime from anywhere.
        </p>
      </div>

      <div className="bg-pink-50 p-8 rounded-3xl shadow-lg text-center">
        <div className="text-6xl mb-5">❤️</div>
        <h3 className="text-2xl font-bold mb-3">Patient Care</h3>
        <p className="text-gray-600">
          We care about every patient and provide quality treatment.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-20 bg-slate-100">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Our Specialist Doctors
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      {[1,2,3,4].map((doctor)=>(
        <div
          key={doctor}
          className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition"
        >

          <div className="h-52 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-7xl text-white">
            👨‍⚕️
          </div>

          <div className="p-6 text-center">

            <h3 className="text-xl font-bold">
              Dr. John Smith
            </h3>

            <p className="text-blue-600 mt-2">
              Cardiologist
            </p>

            <button className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
              View Profile
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

<section className="py-20 bg-blue-600 text-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-8 text-center">

      <div>
        <h2 className="text-5xl font-bold">50+</h2>
        <p>Doctors</p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">10K+</h2>
        <p>Patients</p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">15+</h2>
        <p>Departments</p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">24/7</h2>
        <p>Emergency</p>
      </div>

    </div>

  </div>
</section>
<footer className="bg-slate-900 text-white py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

    <div>
      <h2 className="text-3xl font-bold mb-5">
        MediCare
      </h2>

      <p className="text-gray-400">
        Professional healthcare services with online appointment booking.
      </p>
    </div>

    <div>
      <h3 className="font-bold mb-4">Quick Links</h3>

      <ul className="space-y-2 text-gray-400">
        <li>Home</li>
        <li>Doctors</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">Services</h3>

      <ul className="space-y-2 text-gray-400">
        <li>Cardiology</li>
        <li>Neurology</li>
        <li>Dental</li>
        <li>Pediatrics</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">Contact</h3>

      <p className="text-gray-400">
        📍 Berlin, Germany
      </p>

      <p className="text-gray-400 mt-2">
        📞 +49 123 456 789
      </p>

      <p className="text-gray-400 mt-2">
        ✉ info@medicare.com
      </p>
    </div>

  </div>

  <div className="text-center mt-12 border-t border-gray-700 pt-6 text-gray-500">
    © 2026 MediCare. All rights reserved.
  </div>
</footer>

    </main>
  );
}