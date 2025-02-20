// SkillSection.js
import React from "react";

const SkillSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main heading and image */}
        <div className="relative mb-8">
          <img
            src="/path-to-your-image.jpg" // Replace with actual image path
            alt="Student with books"
            className="w-full max-w-md mx-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              <span className="text-teal-600">Improve your Skill</span>
              <span className="block text-black">with Different Way</span>
            </h1>
          </div>
        </div>

        {/* Description and buttons */}
        <p className="text-gray-600 mb-8 max-w-md">
          Let's take an online course to improve your skills in a different way.
          You can set your own study time according to your learning speed. So
          you can study comfortable and absorb the material easily.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition">
            Get Started
          </button>
          <button className="bg-white text-teal-600 border border-teal-600 px-6 py-3 rounded hover:bg-gray-100 transition flex items-center gap-2">
            <span className="text-xl">▶</span> Watch Video
          </button>
        </div>

        {/* Certificate info */}
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <div className="flex items-center gap-2 text-teal-600">
            <span className="text-2xl">📜</span>
            <span>Certificate</span>
          </div>
          <p className="text-gray-600">
            There are certificates for all courses.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <span className="text-4xl font-bold text-yellow-500">10K+</span>
            <p className="text-gray-600">Students</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <span className="text-4xl font-bold text-yellow-500">20+</span>
            <p className="text-gray-600">Quality Course</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <span className="text-4xl font-bold text-yellow-500">10+</span>
            <p className="text-gray-600">Experience Mentors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
