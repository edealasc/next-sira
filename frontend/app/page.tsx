"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
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

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-semibold text-gray-900">NextSira</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              For Companies
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              For Candidates
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Resources
            </a>
          </div>

          <Link href="/signin">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
              Sign in
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 pt-8 sm:pt-16 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find perfect jobs
            <br />
            with AI matching
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            AI-powered job matching, automated applications, and career insights.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-12">One intelligent platform.</p>

          <div className="flex items-center justify-center">
            <button className="group flex items-center bg-transparent border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-lime-400 px-4 sm:px-5 py-4 flex items-center group-hover:bg-lime-300 transition-colors">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className="bg-black text-white px-6 sm:px-8 py-4 font-semibold text-base sm:text-lg group-hover:bg-gray-800 transition-colors">
                Start job search
              </div>
            </button>
          </div>
        </div>
      </main>

      <div className="relative z-10 px-4 sm:px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/modern-ai-dashboard-interface-showing-job-matching.png"
              alt="AI-powered job matching dashboard showing analytics and job recommendations"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <section className="relative z-10 px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-12">
            Trusted by job seekers at thousands of companies
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-8 sm:space-x-16 whitespace-nowrap">
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 bg-black rounded-sm"></div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">GOOGLE</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 flex-shrink-0">META</span>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">APPLE</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">NETFLIX</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">UBER</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 flex-shrink-0">AIRBNB</span>
              <span className="text-lg sm:text-xl font-bold text-gray-900 flex-shrink-0">STRIPE</span>
              <span className="text-lg sm:text-xl font-bold text-gray-900 flex-shrink-0">SPOTIFY</span>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">TESLA</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 bg-purple-500 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">TWITCH</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 italic flex-shrink-0">FIGMA</span>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">NOTION</span>
              </div>

              {/* Duplicate logos for seamless loop */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 bg-black rounded-sm"></div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">GOOGLE</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 flex-shrink-0">META</span>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">APPLE</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">NETFLIX</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">UBER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 sm:px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI-powered job search</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Let artificial intelligence handle the heavy lifting while you focus on landing your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Matching */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Smart Job Matching</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our AI analyzes your skills, experience, and preferences to find jobs that perfectly match your profile
                with 94% accuracy.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                  1,247+ jobs matched daily
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* AI Agents */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Auto-Apply Agents</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Deploy AI agents that apply to relevant jobs 24/7, customizing each application with your personal brand
                and experience.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                  89 applications sent this week
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Resume Enhancement */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-purple-500 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">AI Resume Optimizer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automatically tailor your resume for each job application, highlighting relevant skills and optimizing
                for ATS systems.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                  87% higher response rate
                </div>
                <div className="w-8 h-8 bg-purple-500 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Interview Prep */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Interview Preparation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get personalized interview questions, practice sessions, and feedback based on the specific role and
                company culture.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full">
                  23 interviews scheduled
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Salary Intelligence */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-teal-500 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Salary Negotiation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-powered salary insights and negotiation strategies based on real market data and your specific
                experience level.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-teal-600 font-semibold bg-teal-50 px-3 py-1 rounded-full">
                  Average 23% salary increase
                </div>
                <div className="w-8 h-8 bg-teal-500 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Career Insights */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-pink-500 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Career Path Analysis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover skill gaps, growth opportunities, and career trajectories with AI-driven insights from millions
                of career paths.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-pink-600 font-semibold bg-pink-50 px-3 py-1 rounded-full">
                  5 skill recommendations
                </div>
                <div className="w-8 h-8 bg-pink-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Ready to supercharge your job search?</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of professionals who've found their dream jobs with AI-powered assistance
              </p>
              <div className="flex items-center justify-center">
                <button className="group flex items-center bg-transparent border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="bg-lime-400 px-4 sm:px-6 py-4 sm:py-5 flex items-center group-hover:bg-lime-300 transition-colors">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </div>
                  <div className="bg-white text-black px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg group-hover:bg-gray-100 transition-colors">
                    Get started free
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-700">
              Everything you need to know about NextSira and how it works
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">How does AI job matching work?</h3>
              <p className="text-gray-700 leading-relaxed">
                Our AI analyzes your resume, skills, experience, and preferences to match you with relevant job
                opportunities. It considers factors like job requirements, company culture, salary expectations, and
                career goals to provide highly accurate matches with a 94% success rate.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Are AI agents safe to use for job applications?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, our AI agents are completely safe and ethical. They customize each application using your authentic
                information and never misrepresent your qualifications. You maintain full control and can review all
                applications before they're sent. The agents simply automate the repetitive parts of job searching.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">How much does NextSira cost?</h3>
              <p className="text-gray-700 leading-relaxed">
                We offer a free tier that includes basic job matching and limited AI agent usage. Our premium plans
                start at $29/month and include unlimited AI applications, advanced resume optimization, interview
                preparation, and priority support. Enterprise plans are available for teams and organizations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Can I control which jobs the AI applies to?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. You set all the parameters including job types, salary ranges, company sizes, locations, and
                specific requirements. The AI only applies to jobs that match your criteria, and you can pause, modify,
                or stop the agents at any time. You're always in complete control.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">How quickly will I see results?</h3>
              <p className="text-gray-700 leading-relaxed">
                Most users see their first job matches within 24 hours of setting up their profile. AI agents typically
                start applying to relevant positions within 48 hours. Interview requests usually come within the first
                week, though this varies by industry and experience level.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                What makes NextSira different from other job sites?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike traditional job boards, NextSira actively works for you 24/7. Instead of manually searching and
                applying to jobs, our AI handles the entire process while you focus on interview preparation and skill
                development. We're the only platform that combines intelligent matching, automated applications, and
                comprehensive career support in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-gray-900 text-white">
        <div className="px-4 sm:px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-900 rounded-sm"></div>
                  </div>
                  <span className="text-2xl font-bold">NextSira</span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                  The AI-powered job search platform that finds perfect opportunities and applies for you automatically.
                </p>
                <div className="flex items-center">
                  <button className="group flex items-center bg-transparent border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="bg-lime-400 px-4 py-3 flex items-center group-hover:bg-lime-300 transition-colors">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    <div className="bg-white text-black px-6 py-3 font-semibold group-hover:bg-gray-100 transition-colors">
                      Start free trial
                    </div>
                  </button>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="text-lg font-bold mb-6">Product</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      AI Job Matching
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Auto-Apply Agents
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Resume Optimizer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Interview Prep
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Salary Insights
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-bold mb-6">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-lg font-bold mb-6">Support</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Status Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800 mt-16 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-gray-400 mb-4 md:mb-0">© 2024 NextSira. All rights reserved.</div>
                <div className="flex items-center space-x-8">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Added CSS animation styles for the marquee effect */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
