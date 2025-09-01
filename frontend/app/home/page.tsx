"use client"

import { useState } from "react"
import { Search, MapPin, DollarSign, Clock, Bookmark, ExternalLink, Filter, Bell, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const jobRecommendations = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$140k - $180k",
    type: "Full-time",
    posted: "2 hours ago",
    match: 95,
    skills: ["React", "TypeScript", "Next.js"],
    description:
      "Join our team building the next generation of web applications with cutting-edge technology and innovative solutions.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLab",
    location: "Remote",
    salary: "$120k - $160k",
    type: "Full-time",
    posted: "4 hours ago",
    match: 88,
    skills: ["Product Strategy", "Analytics", "Agile"],
    description:
      "Lead product development for our AI-powered platform and drive strategic initiatives across multiple teams.",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    salary: "$100k - $140k",
    type: "Full-time",
    posted: "6 hours ago",
    match: 82,
    skills: ["Node.js", "React", "PostgreSQL"],
    description:
      "Build scalable web applications in a fast-paced environment with opportunities for rapid career growth.",
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")

  return (
    <div className="min-h-screen bg-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #3b82f6 1px, transparent 1px),
                linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Dotted pattern overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Scattered dots of various sizes */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-32 left-40 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-16 left-60 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 left-80 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-24 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-36 right-40 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-20 right-60 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-44 right-80 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-32 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-52 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-48 right-32 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-36 right-52 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>

        {/* Large circles */}
        <div className="absolute top-24 left-1/4 w-16 h-16 border border-blue-300 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-1/4 w-20 h-20 border border-blue-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/6 w-12 h-12 border border-blue-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/6 w-14 h-14 border border-blue-300 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-blue-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/2 right-1/3 w-18 h-18 border border-blue-300 rounded-full opacity-30"></div>
      </div>

      <header className="relative z-20 bg-transparent backdrop-blur-sm border-b border-blue-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-lg">JA</span>
              </div>
              <span className="font-bold text-2xl text-gray-900">JobAI</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/home" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                Dashboard
              </a>
              <a href="/resume-enhancer" className="text-gray-700 hover:text-blue-600 transition-colors">
                Resume Enhancer
              </a>
              <a href="/agents" className="text-gray-700 hover:text-blue-600 transition-colors">
                AI Agents
              </a>
              <a href="/applications" className="text-gray-700 hover:text-blue-600 transition-colors">
                Applications
              </a>
            </nav>

            {/* User Profile */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="rounded-full">
                <Bell className="h-5 w-5" />
              </Button>
              <Link href="/profile">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Search Section */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4 leading-tight">Find Your Dream Job</h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Discover opportunities that match your skills with AI-powered precision
          </p>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-blue-200 shadow-2xl rounded-3xl">
            <div className="flex gap-6 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-16 text-lg border-blue-200 focus:border-blue-400 rounded-xl bg-white/50"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Location"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="pl-12 h-16 text-lg border-blue-200 focus:border-blue-400 rounded-xl bg-white/50"
                />
              </div>
              <button className="group flex items-center bg-transparent border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-lime-400 px-6 py-5 flex items-center group-hover:bg-lime-300 transition-colors">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div className="bg-black text-white px-8 py-5 font-semibold text-lg group-hover:bg-gray-800 transition-colors">
                  Search Jobs
                </div>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="lg" className="rounded-xl border-blue-200 hover:bg-blue-50 bg-white/50">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl">
                Remote
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl">
                Full-time
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl">
                $100k+
              </Badge>
            </div>
          </Card>
        </div>

        {/* AI Recommendations Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-gray-900">AI Recommendations</h2>
            <Button variant="outline" size="lg" className="rounded-xl border-blue-200 hover:bg-blue-50 bg-white/50">
              <Bell className="h-4 w-4 mr-2" />
              Set Alerts
            </Button>
          </div>

          <div className="grid gap-8">
            {jobRecommendations.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-blue-200 rounded-2xl"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl font-bold text-gray-900">{job.title}</CardTitle>
                        <Badge className="bg-lime-100 text-lime-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {job.match}% match
                        </Badge>
                      </div>
                      <p className="text-blue-600 font-semibold text-lg">{job.company}</p>
                    </div>
                    <Button variant="ghost" size="lg" className="rounded-xl hover:bg-blue-50">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-6 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-medium">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">{job.posted}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">{job.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {job.skills.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-blue-200 text-blue-700 px-3 py-1 rounded-xl"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/job/${job.id}`}>
                      <button className="group flex items-center bg-transparent border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="bg-lime-400 px-4 py-3 flex items-center group-hover:bg-lime-300 transition-colors">
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                        </div>
                        <div className="bg-black text-white px-6 py-3 font-semibold group-hover:bg-gray-800 transition-colors flex items-center">
                          View Details
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </div>
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
