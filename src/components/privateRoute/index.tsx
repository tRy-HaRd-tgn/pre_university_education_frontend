"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state: any) => state.userSlice.auth);
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <>{children}</> : null;
};
