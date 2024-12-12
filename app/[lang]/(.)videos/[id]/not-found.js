"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Not found this id: {pathName}</h1>
    </div>
  );
}
