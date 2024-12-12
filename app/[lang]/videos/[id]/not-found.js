"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const lastSection = pathName.split("/").pop(); // Split by '/' and get the last part

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Not found this id: {lastSection}</h1>
    </div>
  );
}
