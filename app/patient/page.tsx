import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PatientPage() {
  // Sample exercise data - in a real app, this would come from an API
  const exercises = [
    {
      id: 1,
      title: "Shoulder Mobility",
      description: "Improve range of motion in your shoulders",
      duration: "15 minutes",
      level: "Beginner",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      title: "Knee Strengthening",
      description: "Build strength in your knee joints",
      duration: "20 minutes",
      level: "Intermediate",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "Back Rehabilitation",
      description: "Gentle exercises for back recovery",
      duration: "25 minutes",
      level: "Beginner",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 4,
      title: "Balance Training",
      description: "Improve stability and coordination",
      duration: "15 minutes",
      level: "Advanced",
      thumbnail: "/placeholder.svg?height=200&width=350",
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
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
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
              <span className="font-medium">John Doe</span>
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
            <h1 className="text-3xl font-bold">Your Exercise Program</h1>
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
                Download Program
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">Connect Camera</Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
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
                  className="text-teal-600"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">Today's Progress</h2>
                <p className="text-gray-600">Keep up the good work! You're making great progress.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1">3/4</div>
                    <p className="text-sm text-gray-500">Exercises Completed</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1">45 min</div>
                    <p className="text-sm text-gray-500">Time Spent</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1">85%</div>
                    <p className="text-sm text-gray-500">Form Accuracy</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Your Exercises</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exercises.map((exercise) => (
              <Link href={`/patient/exercise/${exercise.id}`} key={exercise.id}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <Image
                    src={exercise.thumbnail || "/placeholder.svg"}
                    alt={exercise.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="py-4 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-1">{exercise.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 flex-1">{exercise.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{exercise.duration}</span>
                      <span>{exercise.level}</span>
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

