import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ExercisePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the specific exercise data based on the ID
  const exerciseId = params.id

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
            <Link href="/patient">
              <Button variant="outline">Back to Exercises</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-black rounded-xl overflow-hidden aspect-video relative mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
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
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Exercise Video"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h1 className="text-2xl font-bold mb-2">
                  {exerciseId === "1"
                    ? "Shoulder Mobility Exercise"
                    : exerciseId === "2"
                      ? "Knee Strengthening Exercise"
                      : exerciseId === "3"
                        ? "Back Rehabilitation Exercise"
                        : "Balance Training Exercise"}
                </h1>
                <div className="flex gap-4 mb-4">
                  <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                    {exerciseId === "1" || exerciseId === "3"
                      ? "Beginner"
                      : exerciseId === "2"
                        ? "Intermediate"
                        : "Advanced"}
                  </span>
                  <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                    {exerciseId === "1"
                      ? "15 minutes"
                      : exerciseId === "2"
                        ? "20 minutes"
                        : exerciseId === "3"
                          ? "25 minutes"
                          : "15 minutes"}
                  </span>
                </div>

                <p className="text-gray-700 mb-6">
                  This exercise is designed to help you recover and strengthen your
                  {exerciseId === "1"
                    ? " shoulder muscles and improve mobility. Focus on maintaining proper form and breathing throughout the exercise. If you feel any pain, stop immediately and consult your physiotherapist."
                    : exerciseId === "2"
                      ? " knee joints and surrounding muscles. Move slowly and with control. This exercise helps improve stability and reduces the risk of future injuries."
                      : exerciseId === "3"
                        ? " back muscles gently and safely. Pay attention to your posture and core engagement throughout the movement. This exercise helps alleviate pain and improve function."
                        : " balance and coordination. Start by holding onto a stable surface if needed, and gradually work towards performing the exercise without support."}
                </p>

                <div className="flex gap-4">
                  <Button className="bg-teal-600 hover:bg-teal-700">Start Exercise with Camera</Button>
                  <Button variant="outline">Download Instructions</Button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold mb-4">Exercise Instructions</h2>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Preparation</h3>
                      <p className="text-gray-700">
                        Stand with your feet shoulder-width apart, maintaining good posture with your shoulders relaxed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Movement</h3>
                      <p className="text-gray-700">
                        Slowly raise your arms to shoulder height, keeping them straight. Hold for 5 seconds, then
                        slowly lower.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Repetition</h3>
                      <p className="text-gray-700">
                        Repeat this movement 10 times, rest for 30 seconds, then perform 2 more sets.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-600">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Progression</h3>
                      <p className="text-gray-700">
                        As you get stronger, you can add light weights or resistance bands to increase difficulty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">Your Progress</h2>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Completion Rate</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Form Accuracy</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Range of Motion</span>
                        <span className="text-sm font-medium">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">Physiotherapist Notes</h2>
                  <p className="text-gray-700 mb-4">
                    Focus on maintaining proper form throughout the exercise. Try to increase repetitions gradually as
                    you build strength.
                  </p>
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
                        className="text-blue-600"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Dr. Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Updated 3 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">Related Exercises</h2>
                  <div className="space-y-4">
                    <Link href="/patient/exercise/1" className="flex gap-3 group">
                      <Image
                        src="/placeholder.svg?height=60&width=80"
                        alt="Exercise thumbnail"
                        width={80}
                        height={60}
                        className="rounded object-cover"
                      />
                      <div>
                        <h3 className="font-medium group-hover:text-teal-600 transition-colors">Shoulder Mobility</h3>
                        <p className="text-sm text-gray-500">15 minutes • Beginner</p>
                      </div>
                    </Link>

                    <Link href="/patient/exercise/2" className="flex gap-3 group">
                      <Image
                        src="/placeholder.svg?height=60&width=80"
                        alt="Exercise thumbnail"
                        width={80}
                        height={60}
                        className="rounded object-cover"
                      />
                      <div>
                        <h3 className="font-medium group-hover:text-teal-600 transition-colors">Knee Strengthening</h3>
                        <p className="text-sm text-gray-500">20 minutes • Intermediate</p>
                      </div>
                    </Link>

                    <Link href="/patient/exercise/3" className="flex gap-3 group">
                      <Image
                        src="/placeholder.svg?height=60&width=80"
                        alt="Exercise thumbnail"
                        width={80}
                        height={60}
                        className="rounded object-cover"
                      />
                      <div>
                        <h3 className="font-medium group-hover:text-teal-600 transition-colors">Back Rehabilitation</h3>
                        <p className="text-sm text-gray-500">25 minutes • Beginner</p>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
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

