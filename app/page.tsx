import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Rebuild360 Logo" width={40} height={40} className="rounded" />
            <span className="text-xl font-bold">Rebuild360</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <Image src="/logo.png" alt="Rebuild360 Logo" width={200} height={200} className="mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rebuild360</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Physical therapy platform for injured soldiers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Link href="/patient" className="w-full">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full px-8 py-8 rounded-xl text-xl">
                I'm a Patient
              </Button>
            </Link>

            <Link href="/physiotherapist" className="w-full">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full px-8 py-8 rounded-xl text-xl">
                I'm a Physiotherapist
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/logo.png" alt="Rebuild360 Logo" width={32} height={32} className="rounded bg-white" />
              <span className="text-lg font-bold">Rebuild360</span>
            </div>

            <div className="text-sm text-gray-300">© {new Date().getFullYear()} Rebuild360. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

