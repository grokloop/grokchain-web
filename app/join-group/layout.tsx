import type { Metadata } from "next";

export const metadata: Metadata = { title: "Join group" };

export default function JoinGroupLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
