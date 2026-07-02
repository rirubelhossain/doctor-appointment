import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  const appointment = await prisma.appointment.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      doctor: data.doctor,
      appointment: new Date(data.appointment),
      message: data.message,
    },
  });

  return NextResponse.json({
    message: "Appointment saved successfully",
    appointment,
  });
}