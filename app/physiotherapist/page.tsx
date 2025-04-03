import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function PhysiotherapistPage() {
  // Sample patient data - in a real app, this would come from an API
  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 32,
      injury: "Shoulder Injury",
      progress: 75,
      lastSession: "2 days ago",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Sarah Smith",
      age: 28,
      injury: "Knee Rehabilitation",
      progress: 45,
      lastSession: "Yesterday",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 35,
      injury: "Back Pain",
      progress: 60,
      lastSession: "3 days ago",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Emily Wilson",
      age: 30,
      injury: "Ankle Sprain",
      progress: 85,
      lastSession: "Today",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "David Brown",
      age: 42,
      injury: "Hip Replacement",
      progress: 30,
      lastSession: "1 week ago",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "Jessica Taylor",
      age: 26,
      injury: "Wrist Fracture",
      progress: 50,
      lastSession: "4 days ago",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Rebuild360 Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold">Rebuild360</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span className="font-medium">Dr. Sarah Johnson</span>
            </div>
            <Link href="/">
              <Button variant="outline">Sign Out</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Patient Management</h1>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Export Data
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Add New Patient</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{patients.length}</h2>
                    <p className="text-gray-500">Total Patients</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">12</h2>
                    <p className="text-gray-500">Sessions Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M2 12h20"></path>
                      <path d="M12 2v20"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">4</h2>
                    <p className="text-gray-500">New Patients</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Patient List</h2>
            <div className="w-64">
              <Input type="text" placeholder="Search patients..." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((patient) => (
              <Link href={`/physiotherapist/patient/${patient.id}`} key={patient.id}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-0">
                    <div className="p-6 flex items-start gap-4">
                      <Image
                        src={patient.avatar || "/placeholder.svg"}
                        alt={patient.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{patient.name}</h3>
                        <p className="text-gray-500 text-sm">
                          {patient.age} years • {patient.injury}
                        </p>
                        <div className="mt-2">
                          <div className="flex justify-between mb-1">
                            <span className="text-xs font-medium">Recovery Progress</span>
                            <span className="text-xs font-medium">{patient.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${
                                patient.progress < 40
                                  ? "bg-red-500"
                                  : patient.progress < 70
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                              }`}
                              style={{ width: `${patient.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-3 bg-gray-50 border-t flex justify-between items-center">
                      <span className="text-xs text-gray-500">Last session: {patient.lastSession}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0"
                      >
                        View Details →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Rebuild360 Logo"
                width={32}
                height={32}
                className="rounded bg-white"
              />
              <span className="text-lg font-bold">Rebuild360</span>
            </div>

            <div className="text-sm text-gray-300">© {new Date().getFullYear()} Rebuild360. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

