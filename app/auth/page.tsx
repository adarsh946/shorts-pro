import React, { useState } from "react";
import { LogIn, UserPlus, Mail, Lock, User, Chrome, Video } from "lucide-react";
import Link from "next/link";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Auth Form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Video className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                Shorts-Pro
              </span>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900">
              {isLogin ? "Welcome back" : "Create account"}
            </h2>
            <p className="text-gray-600 mt-2">
              {isLogin
                ? "Please enter your details to sign in"
                : "Get started with your free account"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                    placeholder="Enter your name"
                  />
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                  placeholder="Enter your email"
                />
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                  placeholder="••••••••"
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition duration-200 font-medium"
            >
              <Chrome className="w-5 h-5 text-blue-500" />
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Promotional Content */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-700 via-violet-600 to-indigo-800 p-12 items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Build your audience</h1>
          <p className="text-xl mb-8">
            Share your moments with the world through short videos and images
          </p>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-sm opacity-80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm opacity-80">Daily Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100K+</div>
              <div className="text-sm opacity-80">Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
