 "use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, ArrowLeft } from "lucide-react"

export default function UploadVideoPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0])
      setFileName(e.target.files[0].name)
    }
  }

  const handleUpload = async () => {
    if (!videoFile) {
      alert("Please select a video")
      return
    }

    const formData = new FormData()
    formData.append("video", videoFile)
    setLoading(true)

    try {
      const response = await axios.post("http://localhost:8000/api/analyze/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      setResults(response.data)
      console.log(response.data)
    } catch (error) {
      console.error("Upload failed:", error)
      alert("Upload or analysis failed.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#333b6a] text-[#b7feae] border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Rebuild360 Icon" width={65} height={65} className="rounded" />
            <div className="leading-tight">
              <p className="text-xl font-extrabold">REBUILD</p>
              <p className="text-lg font-bold">360</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#b7feae] text-[#333b6a] flex items-center justify-center font-bold">
                DS
              </div>
              <span className="font-medium text-white">Dafna Shemesh</span>
            </div>
            <Link href="/">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#333b6a]">
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Link href="/patient" className="mr-4">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Exercises
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Upload Exercise Video</h1>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload Squat Video</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-sm text-gray-500 mb-4">Drag and drop your video here, or click to browse</p>
                  <div className="flex justify-center">
                    <label htmlFor="video-upload" className="cursor-pointer">
                      <div className="inline-flex h-10 items-center justify-center rounded-md bg-[#5d6ac4] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#4e5baa]">
                        Select Video
                      </div>
                    </label>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoChange}
                      className="hidden"
                      id="video-upload"
                    />
                  </div>
                  {fileName && <p className="mt-4 text-sm font-medium">Selected: {fileName}</p>}
                </div>

                <div className="flex justify-center">
                  <Button
                    className="bg-[#5d6ac4] hover:bg-[#4e5baa] text-white px-8"
                    onClick={handleUpload}
                    disabled={loading || !videoFile}
                  >
                    {loading ? "Analyzing..." : "Upload & Analyze"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {loading && (
            <Card>
              <CardContent className="py-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#5d6ac4] border-t-transparent mb-4"></div>
                  <p className="text-lg font-medium">Analyzing your video...</p>
                  <p className="text-sm text-gray-500">This may take a few moments</p>
                </div>
              </CardContent>
            </Card>
          )}

          {results.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rep</TableHead>
                      <TableHead>Min Depth</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Valid</TableHead>
                      <TableHead>Back Staight</TableHead>
                      <TableHead>Knees over Toes</TableHead>



                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((rep) => (
                      <TableRow key={rep.rep}>
                        <TableCell className="font-medium">{rep.rep}</TableCell>
                        <TableCell>{rep.min_depth}</TableCell>
                        <TableCell>{rep.duration_sec}</TableCell>
                        <TableCell>{rep.back_straight}</TableCell>
                        <TableCell>{rep.knees_over_toes}</TableCell>

                        <TableCell>
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-opacity-20 text-lg">
                            {rep.valid ? "✅" : "❌"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}