"use client";

import Navbar from "@/components/custom/Navbar";

interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
}

const events: Event[] = [
    {
      id: 1,
      date: "Jan 15, 2025",
      title: "Tech Conference 2025",
      description: "Join us for an amazing tech conference featuring industry leaders.",
    },
    {
      id: 2,
      date: "Feb 10, 2025",
      title: "Startup Bootcamp",
      description: "A one-day bootcamp for aspiring entrepreneurs to build and pitch their ideas.",
    },
    {
      id: 3,
      date: "Mar 5, 2025",
      title: "AI and Machine Learning Summit",
      description: "Explore the latest trends in AI and machine learning with top researchers.",
    },
    {
      id: 4,
      date: "Apr 18, 2025",
      title: "HealthTech Expo",
      description: "Showcasing cutting-edge innovations in healthcare technology.",
    },
    {
      id: 5,
      date: "May 12, 2025",
      title: "Web3 Hackathon",
      description: "A 48-hour hackathon focused on blockchain and decentralized applications.",
    },
    {
      id: 6,
      date: "Jun 25, 2025",
      title: "E-Commerce Innovation Fair",
      description: "Learn about the future of online shopping and retail technology.",
    },
    {
      id: 7,
      date: "Jul 14, 2025",
      title: "Sustainability and Green Energy Forum",
      description: "Discussing solutions for a sustainable and eco-friendly future.",
    },
    {
      id: 8,
      date: "Aug 22, 2025",
      title: "Gaming and Esports Convention",
      description: "Celebrating gaming culture with tournaments, panels, and exhibits.",
    },
    {
      id: 9,
      date: "Sep 9, 2025",
      title: "EdTech World Conference",
      description: "A global event focused on technology in education and learning solutions.",
    },
    {
      id: 10,
      date: "Oct 30, 2025",
      title: "Future of Robotics",
      description: "Dive into robotics advancements with live demonstrations and talks.",
    },
  ];

export default function DiscoverPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
  
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Search and Filter */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full p-3 border border-gray-200 rounded-lg"
            />
          </div>
  
          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden flex-grow">
                <div className="p-4">
                  <span className="text-sm text-gray-500">{event.date}</span>
                  <h2 className="text-xl font-semibold mt-2">{event.title}</h2>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                  <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}