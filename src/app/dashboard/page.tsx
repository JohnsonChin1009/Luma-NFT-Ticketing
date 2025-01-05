"use client";

import { useState } from "react";
import { useWallet } from '@solana/wallet-adapter-react';
import { Loader2 } from "lucide-react";
import Image from 'next/image'
import Navbar from "@/components/custom/Navbar";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  price: string;
  guests: number;
  available: number;
  minted: number;
  image: string;
}

export default function DashboardPage() {
  const { publicKey } = useWallet();
  const [minting, setMinting] = useState<number | null>(null);

  const mintTicket = async (eventId: number) => {
    if (!publicKey) return;
    setMinting(eventId);
    // NFT minting logic would go here
    setTimeout(() => setMinting(null), 2000);
  };

  const events: Event[] = [
    {
      id: 1,
      title: "Notion SupaPower: Teamspace Management",
      date: "2025-01-10",
      time: "6:00 PM",
      price: "0.1 SOL",
      guests: 6,
      available: 50,
      minted: 6,
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/r4/055fcb44-54d0-45d7-a6c9-27c5f5240b5e",
    },
    {
      id: 2,
      title: "Notion SupaPower: Database Customization",
      date: "2025-01-17",
      time: "6:00 PM",
      price: "0.2 SOL",
      guests: 4,
      available: 40,
      minted: 4,
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/re/6d9be330-e358-45bd-bfc0-4ddccee3fb5c",
    },
    {
      id: 3,
      title: "Notion 109: Google Calendar Integration",
      date: "2025-01-24",
      time: "6:00 PM",
      price: "0.15 SOL",
      guests: 7,
      available: 30,
      minted: 7,
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/i3/4f8abf96-5719-491a-b95d-a30d4457c1ee",
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[white]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl lg:text-3xl font-bold text-slate-900">Events</h1>
          <div className="flex space-x-4">
            <button className="bg-white px-4 py-2 rounded-full text-slate-900 font-medium shadow-sm">
              Upcoming
            </button>
            <button className="px-4 py-2 rounded-full text-slate-500">
              Past
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg p-6 lg:p-[40px] shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <div className="text-slate-500 mb-2 text-[12px] lg:text-[16px]">
                    {event.date.split("-").slice(1).join("/")}
                    <span className="ml-2">Friday</span>
                  </div>
                  <div className="text-slate-400 mb-2 text-[14px] lg:text-[16px]">{event.time}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="w-[200px] h-[200px] lg:hidden relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      objectFit="contain"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center text-orange-500 mb-2 text-[14px] lg:text-[16px]">
                    <span className="mr-2">⚠️</span>
                    Location Missing
                  </div>
                  <div className="space-y-2">
                    <div className="text-slate-400 text-[14px] lg:text-[16px]">
                      {event.guests} guests • {event.minted}/{event.available} tickets minted
                    </div>
                    <div className="text-slate-600 font-semibold text-[14px] lg:text-[16px]">
                      Price: {event.price}
                    </div>
                  </div>
                  <button 
                    onClick={() => mintTicket(event.id)}
                    disabled={!publicKey || minting === event.id}
                    className={`mt-4 text-[14px] lg:text-[16px] flex items-center justify-center px-4 py-2 rounded-lg ${
                      publicKey ? 'bg-[#1C1C1C] hover:bg-[#2B2B2B] text-white' : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {minting === event.id ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : null}
                    {!publicKey ? 'Connect Wallet to Purchase' : 'Mint NFT Ticket'}
                  </button>
                </div>
                {/* Desktop Image */}
                <div className="hidden lg:block w-[300px] h-[300px] relative">
                  <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}