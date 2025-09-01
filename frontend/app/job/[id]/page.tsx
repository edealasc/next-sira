"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Clock,
  Bookmark,
  ExternalLink,
  Building,
  Users,
  Calendar,
  Star,
  Share2,
  Bell,
  User,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock job data - in real app this would come from API
const jobData = {
  1: {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$140k - $180k",
    type: "Full-time",
    posted: "2 hours ago",
    match: 95,
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "Jest", "Figma"],
    description:
      "Join our team building the next generation of web applications with cutting-edge technology and innovative solutions.",
    fullDescription: `We are looking for a Senior Frontend Engineer to join our growing team. You'll be responsible for building and maintaining our web applications using modern technologies like React, TypeScript, and Next.js.

Key Responsibilities:
• Develop and maintain high-quality web applications
• Collaborate with design and backend teams
• Write clean, maintainable, and testable code
• Participate in code reviews and technical discussions
• Mentor junior developers

Requirements:
• 5+ years of experience with React and TypeScript
• Strong understanding of modern web development practices
• Experience with testing frameworks like Jest
• Excellent communication and collaboration skills`,
    companySize: "500-1000 employees",
    industry: "Technology",
    benefits: ["Health Insurance", "401k Matching", "Remote Work", "Unlimited PTO", "Stock Options"],
    applicationDeadline: "March 15, 2024",
  },
  2: {
    id: 2,
    title: "Product Manager",
    company: "InnovateLab",
    location: "Remote",
    salary: "$120k - $160k",
    type: "Full-time",
    posted: "4 hours ago",
    match: 88,
    skills: ["Product Strategy", "Analytics", "Agile", "User Research", "SQL", "Figma"],
    description:
      "Lead product development for our AI-powered platform and drive strategic initiatives across multiple teams.",
    fullDescription: `We're seeking an experienced Product Manager to lead our AI platform development. You'll work closely with engineering, design, and data teams to deliver innovative solutions.

Key Responsibilities:
• Define product strategy and roadmap
• Conduct user research and analyze market trends
• Work with engineering teams to deliver features
• Analyze product metrics and user feedback
• Collaborate with stakeholders across the organization

Requirements:
• 4+ years of product management experience
• Strong analytical and problem-solving skills
• Experience with AI/ML products preferred
• Excellent communication and leadership abilities`,
    companySize: "100-500 employees",
    industry: "AI/Machine Learning",
    benefits: ["Health Insurance", "Remote Work", "Learning Budget", "Flexible Hours", "Equity"],
    applicationDeadline: "March 20, 2024",
  },
  3: {
    id: 3,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    salary: "$100k - $140k",
    type: "Full-time",
    posted: "6 hours ago",
    match: 82,
    skills: ["Node.js", "React", "PostgreSQL", "AWS", "Docker", "Python"],
    description:
      "Build scalable web applications in a fast-paced environment with opportunities for rapid career growth.",
    fullDescription: `Join our fast-growing startup as a Full Stack Developer. You'll work on exciting projects and have the opportunity to shape our technical architecture.

Key Responsibilities:
• Build and maintain full-stack web applications
• Design and implement APIs and database schemas
• Deploy and monitor applications in cloud environments
• Collaborate with product and design teams
• Contribute to technical architecture decisions

Requirements:
• 3+ years of full-stack development experience
• Proficiency in Node.js, React, and SQL databases
• Experience with cloud platforms (AWS preferred)
• Strong problem-solving and debugging skills`,
    companySize: "10-50 employees",
    industry: "Startup",
    benefits: ["Health Insurance", "Equity", "Flexible Hours", "Learning Budget", "Catered Meals"],
    applicationDeadline: "March 25, 2024",
  },
}

export default function JobDetailsPage() {
  const params = useParams()
  const jobId = Number.parseInt(params.id as string)
  const job = jobData[jobId as keyof typeof jobData]
  const [isBookmarked, setIsBookmarked] = useState(false)

  if (!job) {
    return <div>Job not found</div>
  }

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
              <Link href="/home" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
              <a href="/matches" className="text-gray-700 hover:text-blue-600 transition-colors">
                Job Matches
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
              <Button variant="ghost" size="sm" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Jobs
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-2xl rounded-2xl">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-3xl font-bold text-gray-900">{job.title}</CardTitle>
                      <Badge className="bg-lime-100 text-lime-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {job.match}% match
                      </Badge>
                    </div>
                    <p className="text-blue-600 font-semibold text-xl mb-4">{job.company}</p>

                    <div className="flex items-center gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span className="font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        <span className="font-medium">{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span className="font-medium">{job.posted}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="rounded-xl hover:bg-blue-50"
                      onClick={() => setIsBookmarked(!isBookmarked)}
                    >
                      <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-current text-blue-600" : ""}`} />
                    </Button>
                    <Button variant="ghost" size="lg" className="rounded-xl hover:bg-blue-50">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-blue-200 text-blue-700 px-3 py-1 rounded-xl">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.fullDescription}</p>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">About {job.company}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Industry</p>
                      <p className="text-gray-600">{job.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Company Size</p>
                      <p className="text-gray-600">{job.companySize}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl rounded-2xl sticky top-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <button className="w-full group flex items-center justify-center bg-transparent border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="bg-lime-400 px-6 py-4 flex items-center group-hover:bg-lime-300 transition-colors">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="bg-black text-white px-8 py-4 font-semibold text-lg group-hover:bg-gray-800 transition-colors flex items-center flex-1 justify-center">
                      Apply Now
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </div>
                  </button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-xl border-blue-200 hover:bg-blue-50 bg-white/50"
                  >
                    Save for Later
                  </Button>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Application deadline: {job.applicationDeadline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {job.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-lime-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="bg-gradient-to-br from-lime-50 to-blue-50 border-lime-200 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Skill Match</span>
                    <Badge className="bg-lime-100 text-lime-800">{job.match}%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Application Success</span>
                    <Badge className="bg-blue-100 text-blue-800">High</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Competition Level</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
