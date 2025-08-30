'use client';

import { useState } from 'react';

interface ItineraryModalProps {
  onClose: () => void;
}

export default function ItineraryModal({ onClose }: ItineraryModalProps) {
  const [activeDay, setActiveDay] = useState(1);

  const itinerary = {
    1: {
      title: "Arrival & Golden Circle",
      location: "Reykjavik → Geysir → Gullfoss",
      accommodation: "Hotel Geysir (4.3★) - $180/night",
      driveTime: "3.5 hours total",
      activities: [
        { time: "10:00", activity: "Land at Keflavik Airport", cost: "Included" },
        { time: "11:30", activity: "Pick up rental car (4WD SUV)", cost: "$89/day" },
        { time: "13:00", activity: "Golden Circle: Thingvellir National Park", cost: "Free" },
        { time: "15:30", activity: "Geysir Geothermal Area", cost: "Free" },
        { time: "17:00", activity: "Gullfoss Waterfall", cost: "Free" },
        { time: "19:00", activity: "Check into Hotel Geysir", cost: "$180" },
        { time: "20:00", activity: "Dinner at Gullfoss Kaffi", cost: "$45pp" }
      ]
    },
    2: {
      title: "South Coast Adventure",
      location: "Geysir → Vik",
      accommodation: "Icelandair Hotel Vik (4.2★) - $195/night",
      driveTime: "4 hours with stops",
      activities: [
        { time: "09:00", activity: "Breakfast & checkout", cost: "$25pp" },
        { time: "10:30", activity: "Seljalandsfoss Waterfall", cost: "Free" },
        { time: "12:00", activity: "Skógafoss Waterfall", cost: "Free" },
        { time: "13:30", activity: "Lunch at Skógar Museum", cost: "$35pp" },
        { time: "15:00", activity: "Reynisfjara Black Sand Beach", cost: "Free" },
        { time: "16:30", activity: "Dyrhólaey Arch", cost: "Free" },
        { time: "18:00", activity: "Check into Hotel Vik", cost: "$195" },
        { time: "20:00", activity: "Northern Lights hunt (if clear)", cost: "Included" }
      ]
    },
    3: {
      title: "Glacier & Diamond Beach",
      location: "Vik → Höfn",
      accommodation: "Fosshotel Glacier Lagoon (4.1★) - $220/night",
      driveTime: "3.5 hours with stops",
      activities: [
        { time: "09:00", activity: "Breakfast & checkout", cost: "$25pp" },
        { time: "11:00", activity: "Glacier hike at Sólheimajökull", cost: "$89pp" },
        { time: "14:00", activity: "Lunch in Höfn", cost: "$40pp" },
        { time: "15:30", activity: "Jökulsárlón Glacier Lagoon", cost: "Free" },
        { time: "17:00", activity: "Diamond Beach", cost: "Free" },
        { time: "18:30", activity: "Check into Fosshotel", cost: "$220" },
        { time: "20:00", activity: "Lobster dinner in Höfn", cost: "$65pp" }
      ]
    },
    4: {
      title: "Return via Waterfalls",
      location: "Höfn → Reykjavik",
      accommodation: "Centerhotel Thingholt (4.4★) - $165/night",
      driveTime: "5.5 hours with stops",
      activities: [
        { time: "08:00", activity: "Early breakfast & checkout", cost: "$25pp" },
        { time: "09:30", activity: "Stop at Vestrahorn Mountain", cost: "Free" },
        { time: "12:00", activity: "Lunch at Cafe Nielsen", cost: "$35pp" },
        { time: "16:00", activity: "Secret Lagoon hot springs", cost: "$45pp" },
        { time: "18:30", activity: "Arrive & check into Reykjavik hotel", cost: "$165" },
        { time: "20:00", activity: "Dinner at Fiskmarkadurinn", cost: "$85pp" },
        { time: "22:00", activity: "Reykjavik nightlife exploration", cost: "$40pp" }
      ]
    },
    5: {
      title: "Blue Lagoon & Departure",
      location: "Reykjavik → Airport",
      accommodation: "N/A - Departure day",
      driveTime: "1 hour to airport",
      activities: [
        { time: "09:00", activity: "Breakfast & checkout", cost: "$25pp" },
        { time: "10:30", activity: "Last-minute souvenir shopping", cost: "$50pp" },
        { time: "12:00", activity: "Blue Lagoon (pre-booked)", cost: "$89pp" },
        { time: "15:00", activity: "Lunch at Blue Lagoon", cost: "$45pp" },
        { time: "16:30", activity: "Return rental car", cost: "Included" },
        { time: "17:30", activity: "Airport check-in", cost: "Free" },
        { time: "19:45", activity: "Flight departure", cost: "Booked separately" }
      ]
    }
  };

  const totalCosts = {
    accommodation: "$960 total",
    car: "$445 (5 days)",
    activities: "$670 for 2 people",
    food: "$800 for 2 people",
    total: "$2,875 for couple"
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700">
        <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Perfect 5-Day Iceland Ring Road</h2>
            <p className="text-emerald-100">Optimized for weather, driving conditions & experiences</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-emerald-200 text-3xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeDay === day
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Day {day}
              </button>
            ))}
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 mb-6" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Day {activeDay}: {itinerary[activeDay as keyof typeof itinerary].title}
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-300">
                <div>
                  <span className="text-emerald-400">Route:</span> {itinerary[activeDay as keyof typeof itinerary].location}
                </div>
                <div>
                  <span className="text-emerald-400">Drive Time:</span> {itinerary[activeDay as keyof typeof itinerary].driveTime}
                </div>
                <div>
                  <span className="text-emerald-400">Stay:</span> {itinerary[activeDay as keyof typeof itinerary].accommodation}
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {itinerary[activeDay as keyof typeof itinerary].activities.map((item, index) => (
                <div key={index} className="flex items-start justify-between py-2 border-b border-slate-700 last:border-0">
                  <div className="flex items-start">
                    <span className="text-emerald-400 font-mono text-sm mr-4 mt-1 min-w-12">
                      {item.time}
                    </span>
                    <span className="text-slate-200">{item.activity}</span>
                  </div>
                  <span className="text-orange-400 font-semibold text-sm ml-4">
                    {item.cost}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4">Total Trip Cost Breakdown</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Accommodation (4 nights):</span>
                  <span className="text-white font-semibold">{totalCosts.accommodation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Rental Car (4WD SUV):</span>
                  <span className="text-white font-semibold">{totalCosts.car}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Activities & Tours:</span>
                  <span className="text-white font-semibold">{totalCosts.activities}</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Food & Dining:</span>
                  <span className="text-white font-semibold">{totalCosts.food}</span>
                </div>
                <div className="flex justify-between border-t border-slate-600 pt-2">
                  <span className="text-emerald-400 font-bold">Total for 2 People:</span>
                  <span className="text-emerald-400 font-bold text-lg">{totalCosts.total}</span>
                </div>
                <div className="text-xs text-slate-400">
                  *Flights not included. Average savings vs. self-planning: $1,200
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors mr-4">
              Get My Custom Itinerary
            </button>
            <button
              onClick={onClose}
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}