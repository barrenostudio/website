"use client";

import Navbar from "@/components/Navbar";
import Archives from "./Archives";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-noche-black">
      <header>
        <Navbar />
      </header>

      <main className="relative flex min-h-screen flex-col items-center justify-center gap-[160px] bg-noche-black">
        <Archives />
      </main>
    </div>
  );
}
