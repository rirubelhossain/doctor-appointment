import AppointmentActions from "@/components/AppointmentActions";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const appointments = await prisma.appointment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <section className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          View all doctor appointment requests.
        </p>

        <table className="w-full border">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 border w-[15%]">Name</th>
<th className="p-3 border w-[15%]">Email</th>
<th className="p-3 border w-[12%]">Phone</th>
<th className="p-3 border w-[18%]">Doctor</th>
<th className="p-3 border w-[15%]">Appointment</th>
<th className="p-3 border w-[10%]">Status</th>
<th className="p-3 border w-[15%]">Actions</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item) => (
              <tr key={item.id}>
                <td className="p-3 border">{item.fullName}</td>
                <td className="p-3 border">{item.email}</td>
                <td className="p-3 border">{item.phone}</td>
                <td className="p-3 border">{item.doctor}</td>
                <td className="p-3 border">
                  {new Date(item.appointment).toLocaleString()}
                </td>
                <td className="p-3 border">
  <span
    className={`px-3 py-1 rounded-full text-white font-semibold
      ${
        item.status === "Approved"
          ? "bg-green-600"
          : item.status === "Rejected"
          ? "bg-red-600"
          : "bg-yellow-500"
      }`}
  >
    {item.status}
  </span>
</td>

                <td className="p-3 border">
                    <AppointmentActions
    id={item.id}
    status={item.status}
  />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}