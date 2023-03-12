import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          MidPrompts
        </h1>
      </Link>
      <a
        href="https://www.youtube.com/@asescodes"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Vercel Icon"
          src="/youtube.png"
          width={100}
          height={100}
        />
      </a>
    </header>
  );
}
