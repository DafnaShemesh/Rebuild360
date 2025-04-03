import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#333b6a] text-white">
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        {/* לוגו + כיתוב גדול */}
        <div className="flex items-center gap-6 mb-12">
          <Image
            src="/logo.png"
            alt="Rebuild360 Icon"
            width={130}
            height={130}
          />
          <div className="text-left leading-tight">
            <p className="text-[#b7feae] text-7xl font-extrabold tracking-tight">REBUILD</p>
            <p className="text-[#b7feae] text-6xl font-extrabold tracking-tight">360</p>
          </div>
        </div>

        {/* תיאור קצר */}
        <p className="text-lg max-w-xl mb-10 text-white/80">
          Physical therapy platform for injured soldiers
        </p>

        {/* כפתורים */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-md">
          <Link href="/patient" className="w-full">
            <Button className="w-full bg-[#b7feae] text-[#1a1a1a] hover:bg-[#a0f9a0] text-xl py-6 rounded-xl">
              I'm a Patient
            </Button>
          </Link>

          <Link href="/physiotherapist" className="w-full">
            <Button className="w-full bg-white text-[#333b6a] hover:bg-gray-200 text-xl py-6 rounded-xl">
              I'm a Physiotherapist
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
