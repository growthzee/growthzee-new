"use client";

import { useRouter } from "next/navigation";

export function useAuthRedirect() {
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/admin/login");
  };

  return { redirectToLogin };
}
