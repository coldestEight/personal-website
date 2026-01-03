"use client";
import SidebarLayout from "../components/SidebarLayout";
import Navbar from "../components/navbar";
import miniTitle from "../components/miniTitle";
import ParticlesBackground from "../components/particleBackground";

export default function CoopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      {miniTitle("Co-op Work Term Reports")}
      <SidebarLayout>{children}</SidebarLayout>
    </>
  );
}
