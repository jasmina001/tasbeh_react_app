import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Tasbeh from './tasbeh'; // src ichida joylashgan bo'lishi kerak

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 z-50
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-6">🌙 Tasbeh App</h2>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600">🏠 Dashboard</Link></li>
            <li><Link to="/tasbeh" className="text-gray-700 hover:text-blue-600">📿 Tasbeh</Link></li>
            <li><button className="text-gray-700 hover:text-blue-600">⚙️ Settings</button></li>
          </ul>
          <button
            className="mt-8 bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => setIsSidebarOpen(false)}
          >
            Yopish
          </button>
        </div>

        {/* Main content */}
        <main className="flex-1 p-6 ml-0 sm:ml-0">
          <div className="flex justify-between items-center mb-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => setIsSidebarOpen(true)}
            >
              ☰ Menyu
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              onClick={() => setIsModalOpen(true)}
            >
            Yordam
            </button>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700">Tasbeh soni</h3>
                    <p className="text-2xl font-bold text-blue-600 mt-2">99</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700">Foydalanuvchilar</h3>
                    <p className="text-2xl font-bold text-green-600 mt-2">245</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700">Online</h3>
                    <p className="text-2xl font-bold text-purple-600 mt-2">18</p>
                  </div>
                </div>
              }
            />
            <Route path="/tasbeh" element={<Tasbeh />} />
          </Routes>
        </main>

       
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-96 shadow-xl animate-scaleIn">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Yordam oynasi</h2>
              <p className="text-gray-600 mb-4">Bu yerda siz tasbeh zikr qilishingiz mumkin</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setIsModalOpen(false)}
              >
             Yopish
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
