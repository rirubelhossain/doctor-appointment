"use client";

import { useRouter } from "next/navigation";

type AppointmentActionsProps = {
  id: number;
  status: string;
};

export default function AppointmentActions({
  id,
  status,
}: AppointmentActionsProps) {
  const router = useRouter();

  async function updateStatus(newStatus: string) {
    await fetch(`/api/appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    router.refresh();
  }

  async function deleteAppointment() {
    await fetch(`/api/appointments/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  }

  return (
    <div className="flex gap-2 items-center">
      <select
  value={status}
  onChange={(e) => updateStatus(e.target.value)}
  className="w-24 rounded-lg border border-gray-300 px-2 py-1 text-sm"
>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <button
        onClick={deleteAppointment}
        className="bg-slate-800 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}