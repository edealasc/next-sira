"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, User, Edit3, MapPin, Briefcase, Award, Settings, Save } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior Software Engineer",
    company: "Tech Startup Inc.",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies.",
    experience: "5+ years",
    skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"],
    education: "BS Computer Science - Stanford University",
    salary: "$120,000 - $150,000",
    remote: true,
    jobTypes: ["Full-time", "Contract"],
  })

  const handleSave = () => {
    setIsEditing(false)
    // Save logic would go here
  }

  return (
    <div className="min-h-screen bg-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 2px 2px, rgb(59 130 246 / 0.3) 1px, transparent 0),
            linear-gradient(90deg, rgb(59 130 246 / 0.1) 1px, transparent 1px),
            linear-gradient(rgb(59 130 246 / 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px, 20px 20px, 20px 20px",
          }}
        />

        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-200/15 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-300/20 rounded-full blur-xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-transparent backdrop-blur-sm border-b border-blue-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-lg">JA</span>
              </div>
              <span className="font-bold text-2xl text-gray-900">NextSira</span>
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/home" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/applications" className="text-gray-700 hover:text-blue-600 transition-colors">
                Applications
              </Link>
              <Link href="/resume-enhancer" className="text-gray-700 hover:text-blue-600 transition-colors">
                Resume Enhancer
              </Link>
              <span className="text-gray-400">AI Agents</span>
            </nav>
            {/* User Profile */}
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-transparent">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <Link href="/profile">
                <button className="rounded-full flex items-center gap-2 bg-gray-300 px-3 py-1">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="font-medium text-gray-900">{profile.name}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
              <p className="text-gray-600 mt-1">Manage your personal information and job preferences</p>
            </div>
            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="flex items-center space-x-2 px-4 py-2 bg-lime-400 text-black rounded-xl hover:bg-lime-500 transition-colors"
            >
              {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
              <span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-md bg-white/80 rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">SJ</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="text-xl font-semibold text-gray-900 bg-transparent border-b border-gray-300 text-center mb-2 focus:outline-none focus:border-lime-400"
                  />
                ) : (
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{profile.name}</h2>
                )}

                {isEditing ? (
                  <input
                    type="text"
                    value={profile.title}
                    onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                    className="text-gray-600 bg-transparent border-b border-gray-300 text-center mb-4 focus:outline-none focus:border-lime-400"
                  />
                ) : (
                  <p className="text-gray-600 mb-4">{profile.title}</p>
                )}

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{profile.experience} experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="backdrop-blur-md bg-white/80 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Personal Information</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.phone}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                {isEditing ? (
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                  />
                ) : (
                  <p className="text-gray-900">{profile.bio}</p>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="backdrop-blur-md bg-white/80 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Skills</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-lime-100 text-lime-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Job Preferences */}
            <div className="backdrop-blur-md bg-white/80 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Job Preferences</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                  <p className="text-gray-900">{profile.salary}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Remote Work</label>
                  <p className="text-gray-900">{profile.remote ? "Yes" : "No"}</p>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Types</label>
                <div className="flex flex-wrap gap-2">
                  {profile.jobTypes.map((type, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
