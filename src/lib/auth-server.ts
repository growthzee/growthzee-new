import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

export async function loginServer(username: string, password: string) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("admin-session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return { success: true };
  }
  return { success: false, error: "Invalid credentials" };
}

export async function logoutServer() {
  const cookieStore = await cookies();
  cookieStore.delete("admin-session");
}

export async function isAuthenticatedServer() {
  const cookieStore = await cookies();
  return cookieStore.has("admin-session");
}

export async function requireAuthServer() {
  if (!(await isAuthenticatedServer())) {
    redirect("/admin/login");
  }
}
