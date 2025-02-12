import React from "react";
import Link from "next/link";
import {
  Video,
  Sparkles,
  Users,
  TrendingUp,
  Camera,
  ChevronRight,
  Star,
  Heart,
  Trophy,
  Play,
} from "lucide-react";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Video className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Shorts-Pro
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/auth"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:opacity-90 transition duration-200 font-medium shadow-lg shadow-blue-500/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  The Future of Short-Form Content
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Create & Share
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Amazing Moments
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Join millions of creators who are sharing their stories through
                captivating short videos and stunning images. Your creativity
                knows no bounds! ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/auth"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition duration-200 shadow-lg shadow-blue-500/20"
                >
                  Start Creating <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition duration-200 border"
                >
                  Learn More <Play className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <img
                src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?auto=format&fit=crop&w=800&q=80"
                alt="Creator Studio"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">1M+ Creators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Creators Love Shorts-Pro 💫
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create content that stands out
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pro Creation Tools 🎨
              </h3>
              <p className="text-gray-600">
                Advanced editing tools, filters, and effects to make your
                content shine
              </p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Engaged Community 🤝
              </h3>
              <p className="text-gray-600">
                Connect with millions of creators and grow your audience
                organically
              </p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Smart Analytics 📊
              </h3>
              <p className="text-gray-600">
                Detailed insights to understand your audience and grow your
                reach
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Top Creators 🌟
            </h2>
            <p className="text-xl text-gray-600">
              Join the fastest growing creator community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-white shadow-lg">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                1M+
              </div>
              <div className="text-gray-600 font-medium">
                Active Creators 🎥
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                50K+
              </div>
              <div className="text-gray-600 font-medium">Daily Posts 🚀</div>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                100K+
              </div>
              <div className="text-gray-600 font-medium">App Downloads 📱</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Share Your Story? 🎬
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join our vibrant community of creators and start sharing your unique
            perspective with the world
          </p>
          <Link
            href="/auth"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition duration-200 shadow-lg shadow-blue-500/20"
          >
            Get Started Now <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <Video className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Shorts-Pro
              </span>
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900">
                Help
              </a>
            </div>
            <div className="text-gray-600">
              © 2024 Shorts-Pro. All rights reserved. 🚀
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
