'use client'; // Next.js App Router-এর জন্য স্টেট ব্যবহার করতে এটি লাগবে

import React, { useState } from 'react';
import { orderScenarios } from '../../public/data/order';
import Image from 'next/image';
import { FaBox } from 'react-icons/fa';
import { CiWarning } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineMessage } from 'react-icons/md';


export default function OrderTrackingPage() {
  const [currentScenario, setCurrentScenario] = useState('normal');
  const data = orderScenarios[currentScenario];

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      
      {/* Evaluator Scenario Switcher Box */}
      <div className="mb-4 w-full max-w-md bg-white p-3 rounded-xl shadow-sm text-center">
        <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Test Task Scenarios:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <button onClick={() => setCurrentScenario('normal')} className={`px-3 py-1 text-xs rounded-lg font-medium transition ${currentScenario === 'normal' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>Normal</button>
          <button onClick={() => setCurrentScenario('delayed')} className={`px-3 py-1 text-xs rounded-lg font-medium transition ${currentScenario === 'delayed' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'}`}>Delayed</button>
          <button onClick={() => setCurrentScenario('notReceived')} className={`px-3 py-1 text-xs rounded-lg font-medium transition ${currentScenario === 'notReceived' ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'}`}>Not Received</button>
          <button onClick={() => setCurrentScenario('noTracking')} className={`px-3 py-1 text-xs rounded-lg font-medium transition ${currentScenario === 'noTracking' ? 'bg-slate-600 text-white' : 'bg-slate-100 text-slate-600'}`}>No Tracking</button>
        </div>
      </div>

      {/* Mobile Frame Container */}
      <div className="w-full max-w-97.5 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col">
        
        {/* Mobile Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <h1 className="font-bold text-sm tracking-wide">Order Tracking</h1>
          <span className="text-xs bg-blue-500/80 px-2.5 py-1 rounded-full font-mono">{data.id}</span>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          
          {/* Current Status Box */}
          <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-100 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-blue-600 font-semibold uppercase tracking-wider">Current Status</p>
              <h2 className="text-sm font-bold text-blue-900 mt-0.5">{data.status}</h2>
              <p className="text-xs text-slate-600 mt-1">Est: {data.estimatedDelivery}</p>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shadow-sm">
              <FaBox />
            </div>
          </div>

          {/* Conditional Alerts */}
          {data.alertType === 'delayed' && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-xl text-xs space-y-1">
              <p className="font-bold flex items-center gap-1"><CiWarning size={15} /> Delayed Order</p>
              <p className="text-slate-600">{data.alertMessage}</p>
            </div>
          )}

          {data.alertType === 'notReceived' && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl text-xs space-y-2">
              <p className="font-bold flex items-center gap-1"><ImCross /> Delivered but Not Received?</p>
              <p className="text-slate-600">{data.alertMessage}</p>
              <button onClick={() => alert('Support ticket raised!')} className="w-full bg-rose-600 hover:bg-rose-700 text-white py-1.5 rounded-lg font-medium transition shadow-sm">
                Report Missing Item
              </button>
            </div>
          )}

          {data.alertType === 'noTracking' && (
            <div className="bg-slate-50 border border-slate-200 text-slate-700 p-4 rounded-xl text-xs text-center space-y-1">
              <p className="text-xl flex justify-center items-center"><IoSearchSharp /></p>
              <p className="font-bold text-slate-800">Tracking Not Available Yet</p>
              <p className="text-slate-500">{data.alertMessage}</p>
            </div>
          )}

          {/* Timeline */}
          {data.timeline.length > 0 && (
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
              <h3 className="text-xs font-bold text-slate-700 mb-3">Timeline Progress</h3>
              <div className="space-y-3.5 pl-2 border-l-2 border-blue-200 ml-2">
                {data.timeline.map((item, index) => (
                  <div key={index} className="relative pl-4">
                    <div className={`absolute -left-4.25 top-1 w-3 h-3 rounded-full border-2 ${item.current ? 'bg-blue-600 border-blue-200 ring-4 ring-blue-100' : item.completed ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300'}`}></div>
                    <p className={`text-xs font-semibold ${item.current ? 'text-blue-600' : 'text-slate-800'}`}>{item.title}</p>
                    <p className="text-[10px] text-slate-500">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Summary */}
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex items-center gap-3">
            <img src={data.product.image} alt={data.product.name} className="w-14 h-14 object-cover rounded-xl border border-slate-200" />
            <div className="flex-1">
              <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{data.product.name}</h4>
              <p className="text-xs font-bold text-blue-600 mt-1">{data.product.price}</p>
            </div>
          </div>

          {/* Contact Support */}
          <button onClick={() => alert('Redirecting to customer support chat...')} className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-xl transition shadow-sm flex items-center justify-center gap-1">
            <MdOutlineMessage size={15}/> Contact Support
          </button>

        </div>
      </div>
    </main>
  );
}