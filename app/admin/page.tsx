import AppointmentActions from "@/components/AppointmentActions";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import Navbar from "@/components/Navbar";
export default async function AdminPage() {
  const cookieStore = await cookies();
const isLoggedIn = cookieStore.get("admin_login");

if (!isLoggedIn) {
  redirect("/login");
}
  const appointments = await prisma.appointment.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <section className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-4">
  <h1 className="text-4xl font-bold text-blue-600">
    Admin Dashboard
  </h1>

  <LogoutButton />
</div>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed border text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 border w-[14%]">Name</th>
                <th className="p-3 border w-[18%]">Email</th>
                <th className="p-3 border w-[12%]">Phone</th>
                <th className="p-3 border w-[18%]">Doctor</th>
                <th className="p-3 border w-[14%]">Appointment</th>
                <th className="p-3 border w-[10%]">Status</th>
                <th className="p-3 border w-[14%]">Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="p-3 border truncate">{item.fullName}</td>
                  <td className="p-3 border truncate">{item.email}</td>
                  <td className="p-3 border truncate">{item.phone}</td>
                  <td className="p-3 border truncate">{item.doctor}</td>
                  <td className="p-3 border text-xs">
                    {new Date(item.appointment).toLocaleString()}
                  </td>

                  <td className="p-3 border">
                    <span
                      className={`inline-block w-24 text-center px-2 py-1 rounded-full text-white text-xs font-bold ${
                        item.status === "Approved"
                          ? "bg-green-600"
                          : item.status === "Rejected"
                          ? "bg-red-600"
                          : item.status === "Completed"
                          ? "bg-blue-600"
                          : item.status === "Cancelled"
                          ? "bg-slate-600"
                          : "bg-yellow-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-3 border">
                    <AppointmentActions id={item.id} status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}