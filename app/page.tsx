import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center gap-8 row-start-2 sm:items-start">
        <div className="flex flex-col items-center text-center">
          <Image
            className=""
            src="/logo-white.png"
            alt="Barreno studio logo"
            width={180}
            height={180}
            priority
          />

          <h1 className="text-4xl">Barreno Studio</h1>
          <p className="text-2xl pb-6">website coming soon</p>

          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="mailto:hello@barreno.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email us
          </a>
        </div>
      </main>
    </div>
  );
}
