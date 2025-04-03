import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the specific patient data based on the ID
  const patientId = Number.parseInt(params.id)

  // Sample patient data
  const patient = {
    id: patientId,
    name:
      patientId === 1
        ? "Dafna Shemesh"
        : patientId === 2
          ? "Sarah Smith"
          : patientId === 3
            ? "Michael Johnson"
            : patientId === 4
              ? "Dafna Shemesh"
              : patientId === 5
                ? "David Brown"
                : "Jessica Taylor",
    age:
      patientId === 1
        ? 32
        : patientId === 2
          ? 28
          : patientId === 3
            ? 35
            : patientId === 4
              ? 30
              : patientId === 5
                ? 42
                : 26,
    injury:
      patientId === 1
        ? "Shoulder Injury"
        : patientId === 2
          ? "Knee Rehabilitation"
          : patientId === 3
            ? "Back Pain"
            : patientId === 4
              ? "Ankle Sprain"
              : patientId === 5
                ? "Hip Replacement"
                : "Wrist Fracture",
    progress:
      patientId === 1
        ? 75
        : patientId === 2
          ? 45
          : patientId === 3
            ? 60
            : patientId === 4
              ? 85
              : patientId === 5
                ? 30
                : 50,
    lastSession:
      patientId === 1
        ? "2 days ago"
        : patientId === 2
          ? "Yesterday"
          : patientId === 3
            ? "3 days ago"
            : patientId === 4
              ? "Today"
              : patientId === 5
                ? "1 week ago"
                : "4 days ago",
    avatar: "/dafna.PNG?height=150&width=150",
    email: "patient@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, USA",
    startDate: "January 15, 2023",
    totalSessions: 24,
    nextAppointment: "April 15, 2023 at 10:00 AM",
  }

  // Sample exercise data
  const exercises = [
    {
      id: 1,
      title: "Shoulder Mobility",
      description: "Improve range of motion in shoulders",
      assignedDate: "March 10, 2023",
      completionRate: 80,
      thumbnail: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 2,
      title: "Knee Strengthening",
      description: "Build strength in knee joints",
      assignedDate: "March 15, 2023",
      completionRate: 65,
      thumbnail: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 3,
      title: "Back Rehabilitation",
      description: "Gentle exercises for back recovery",
      assignedDate: "March 20, 2023",
      completionRate: 50,
      thumbnail: "/placeholder.svg?height=80&width=120",
    },
  ]

  // Sample progress data for chart
  const progressData = [
    { week: "Week 1", accuracy: 45, pain: 8 },
    { week: "Week 2", accuracy: 50, pain: 7 },
    { week: "Week 3", accuracy: 60, pain: 6 },
    { week: "Week 4", accuracy: 65, pain: 5 },
    { week: "Week 5", accuracy: 70, pain: 4 },
    { week: "Week 6", accuracy: 75, pain: 3 },
    { week: "Week 7", accuracy: 80, pain: 2 },
    { week: "Week 8", accuracy: 85, pain: 2 },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#333b6a] text-[#b7feae] border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* שמאל: לוגו עם לינק לדף הבית */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Rebuild360 Icon"
              width={65}
              height={65}
              className="rounded"
            />
            <div className="leading-tight">
              <p className="text-xl font-extrabold">REBUILD</p>
              <p className="text-lg font-bold">360</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/physiotherapist">
              <Button variant="outline">Back to Patients</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="bg-[#333b6a] p-6 text-[#b7feae]">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Image
                  src={patient.avatar || "/placeholder.svg"}
                  alt={patient.name}
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-white"
                />
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{patient.name}</h1>
                  <p className="mb-4">
                    {patient.age} years • {patient.injury}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <p className="text-sm">Patient Since</p>
                      <p className="font-bold">{patient.startDate}</p>
                    </div>
                    <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <p className="text-sm">Total Sessions</p>
                      <p className="font-bold">{patient.totalSessions}</p>
                    </div>
                    <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <p className="text-sm">Recovery Progress</p>
                      <p className="font-bold">{patient.progress}%</p>
                    </div>
                  </div>
                </div>
                <div className="md:ml-auto flex gap-2 mt-4 md:mt-0">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">Edit Profile</Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                    Message
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h2 className="text-lg font-bold mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-500"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <span>{patient.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-500"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{patient.address}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-bold mb-4">Next Appointment</h2>
                  <Card>
                    <CardContent className="p-4">
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
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                            <line x1="16" x2="16" y1="2" y2="6"></line>
                            <line x1="8" x2="8" y1="2" y2="6"></line>
                            <line x1="3" x2="21" y1="10" y2="10"></line>
                            <path d="M8 14h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 18h.01"></path>
                            <path d="M12 18h.01"></path>
                            <path d="M16 18h.01"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">{patient.nextAppointment}</p>
                          <p className="text-sm text-gray-500">In-person session</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          Reschedule
                        </Button>
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          Confirm
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-lg font-bold mb-4">Recovery Progress</h2>
                  <div className="h-24 flex items-end gap-1">
                    {progressData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-blue-600 rounded-t" style={{ height: `${data.accuracy}%` }}></div>
                        <span className="text-xs text-gray-500 rotate-90 origin-top-left translate-x-4 -translate-y-1 whitespace-nowrap">
                          {data.week}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="exercises" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="exercises">Assigned Exercises</TabsTrigger>
              <TabsTrigger value="progress">Progress Reports</TabsTrigger>
              <TabsTrigger value="notes">Clinical Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="exercises" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Current Exercise Program</h2>
                  <Button className="bg-blue-600 hover:bg-blue-700">Assign New Exercise</Button>
                </div>

                <div className="space-y-4">
                  {exercises.map((exercise) => (
                    <Card key={exercise.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <Image
                            src={exercise.thumbnail || "/placeholder.svg"}
                            alt={exercise.title}
                            width={120}
                            height={80}
                            className="w-full sm:w-32 h-24 object-cover"
                          />
                          <div className="p-4 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <h3 className="font-bold">{exercise.title}</h3>
                              <span className="text-sm text-gray-500">Assigned: {exercise.assignedDate}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1 mb-3">{exercise.description}</p>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs font-medium">Completion Rate</span>
                                <span className="text-xs font-medium">{exercise.completionRate}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="h-1.5 rounded-full bg-blue-600"
                                  style={{ width: `${exercise.completionRate}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 flex flex-row sm:flex-col gap-2 justify-end">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Progress Reports</h2>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Recovery Metrics</h3>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Range of Motion</span>
                            <span className="text-sm font-medium">70%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Pain Level Reduction</span>
                            <span className="text-sm font-medium">65%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Strength Improvement</span>
                            <span className="text-sm font-medium">55%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "55%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Overall Recovery</span>
                            <span className="text-sm font-medium">{patient.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${patient.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Pain Level Tracking</h3>
                      <div className="h-40 flex items-end gap-2">
                        {progressData.map((data, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className="w-full bg-red-500 rounded-t opacity-80"
                              style={{ height: `${data.pain * 10}%` }}
                            ></div>
                            <span className="text-xs text-gray-500">{data.week}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>Initial Assessment</span>
                        <span>Current</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Session Attendance</h3>
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: 28 }).map((_, index) => (
                          <div
                            key={index}
                            className={`h-8 rounded-md flex items-center justify-center text-xs ${
                              index % 3 === 0
                                ? "bg-blue-100 text-blue-800"
                                : index % 7 === 0
                                  ? "bg-gray-100 text-gray-400"
                                  : "bg-gray-50 text-gray-300"
                            }`}
                          >
                            {index + 1}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-4 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-blue-100 rounded"></div>
                          <span>Attended</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-gray-100 rounded"></div>
                          <span>Missed</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-gray-50 rounded"></div>
                          <span>Upcoming</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Clinical Notes</h2>
                  <Button className="bg-blue-600 hover:bg-blue-700">Add New Note</Button>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold">Initial Assessment</h3>
                        <span className="text-xs text-gray-500">January 15, 2023</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">
                        Patient presents with {patient.injury} following military service. Initial range of motion is
                        limited to 40%. Pain level reported as 8/10. Recommended starting with gentle mobility exercises
                        3 times per week.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Dr. Sarah Johnson</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold">Progress Update</h3>
                        <span className="text-xs text-gray-500">February 28, 2023</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">
                        Patient showing good progress with mobility exercises. Range of motion improved to 55%. Pain
                        level reduced to 5/10. Introducing light resistance training to build strength.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Dr. Sarah Johnson</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold">Latest Assessment</h3>
                        <span className="text-xs text-gray-500">March 30, 2023</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">
                        Continued improvement observed. Range of motion now at 70%. Pain level at 3/10. Patient is
                        adhering well to the exercise program. Camera-guided exercises showing good form accuracy.
                        Recommend increasing exercise frequency to 4 times per week.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Dr. Sarah Johnson</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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

