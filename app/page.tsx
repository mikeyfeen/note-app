import Image from "next/image";
import Notelist from "@/app/components/notelist";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Notelist />
      </main>
    </div>
  );
}
