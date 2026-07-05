import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user || user.password !== data.password) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
  message: "Login successful",
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
});

response.cookies.set("admin_login", "true", {
  httpOnly: true,
  path: "/",
});

return response;
}