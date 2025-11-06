"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";



const AdminDashboardLogic = () => {
  const [viewsData, setViewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);



// base url 
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000" ;
  // console.log(baseUrl);


  // Fetch data only when authenticated
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchViewsData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/views/all`, {
          headers: {
            "x-client-key": process.env.NEXT_PUBLIC_SECRETE_KEY,
          },
        });
        setViewsData(res.data);
      } catch (error) {
        console.error("Error fetching views:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchViewsData();
  }, [isAuthenticated]);

  // Handle password submit
  const handleSubmit = async (e) => {

      

    e.preventDefault();
    if (!password) return alert("Please enter password");

    setAuthLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/admin-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-client-key": process.env.NEXT_PUBLIC_SECRETE_KEY,
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (data.status === true) {
        setIsAuthenticated(true);
      } else {
        alert(data.message || "Invalid password");
      }
    } catch (err) {
      console.error("Password verification failed:", err);
      alert("Error verifying password");
    } finally {
      setAuthLoading(false);
    }
  };

  // Analytics calculations
  const totalPages = viewsData.length;
  const totalViews = viewsData.reduce((acc, curr) => acc + curr.totalViews, 0);
  const uniqueCountries = new Set(
    viewsData.flatMap((item) => item.countries.map((c) => c.country))
  ).size;

  const barData = viewsData.map((item) => ({
    name: item.slug,
    views: item.totalViews,
  }));

  const countryViews = {};
  viewsData.forEach((item) => {
    item.countries.forEach((c) => {
      countryViews[c.country] = (countryViews[c.country] || 0) + c.views;
    });
  });
  const pieData = Object.entries(countryViews).map(([country, views]) => ({
    name: country,
    value: views,
  }));

  const colors = [
    "#4F46E5",
    "#22C55E",
    "#F59E0B",
    "#EC4899",
    "#0EA5E9",
    "#A855F7",
  ];

  return (
    <>
      {!isAuthenticated ? (
        // 🔐 Password Modal
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 w-[90%] max-w-md flex flex-col items-center gap-4"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Admin Access 🔐
            </h2>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={authLoading}
              className={`w-full py-2 rounded-lg text-white font-medium ${
                authLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {authLoading ? "Verifying..." : "Access Dashboard"}
            </button>
          </form>
        </div>
      ) : (
        // ✅ Dashboard
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            📊 Admin Dashboard – Page View Analytics
          </h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-md rounded-2xl p-5 text-center hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Total Pages
              </h2>
              <p className="text-3xl font-bold text-blue-600">{totalPages}</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-5 text-center hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Total Views
              </h2>
              <p className="text-3xl font-bold text-green-600">{totalViews}</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-5 text-center hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Unique Countries
              </h2>
              <p className="text-3xl font-bold text-purple-600">
                {uniqueCountries}
              </p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                📈 Views Per Page
              </h2>
              {barData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#4F46E5" radius={[6, 6, 0, 0]}>
                      {barData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-center text-gray-500 italic">
                  No data available
                </p>
              )}
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                🌍 Views By Country
              </h2>
              {pieData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {pieData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-center text-gray-500 italic">
                  No country data
                </p>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Slug (Page)</th>
                  <th className="py-3 px-4 text-left">Total Views</th>
                  <th className="py-3 px-4 text-left">Countries & Views</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center py-5 text-gray-500 italic"
                    >
                      Loading data...
                    </td>
                  </tr>
                ) : viewsData.length > 0 ? (
                  viewsData.map((item, index) => (
                    <tr
                      key={item._id || index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-medium text-blue-600">
                        {item.slug}
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {item.totalViews}
                      </td>
                      <td className="py-3 px-4">
                        {item.countries && item.countries.length > 0 ? (
                          <ul className="space-y-1">
                            {item.countries.map((c, i) => (
                              <li key={i} className="flex justify-between">
                                <span className="text-gray-700">
                                  {c.country}
                                </span>
                                <span className="font-semibold text-gray-900">
                                  {c.views}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-gray-500">No Data</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center py-5 text-gray-500 italic"
                    >
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboardLogic;
