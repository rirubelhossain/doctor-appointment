import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { status } = await request.json();
  const { id } = await params;

  const appointment = await prisma.appointment.update({
    where: {
      id: Number(id),
    },
    data: {
      status,
    },
  });

  return NextResponse.json(appointment);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.appointment.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({
    message: "Appointment deleted",
  });
}