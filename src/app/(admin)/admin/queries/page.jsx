"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Mail, Trash2, Loader2, AlertCircle } from "lucide-react";

export default function AdminQueriesPage() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await fetch("/api/queries");
        if (res.ok) {
          const data = await res.json();
          setQueries(data);
        } else {
          console.error("Failed to load queries: status", res.status);
        }
      } catch (err) {
        console.error("Error loading queries:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQueries();
  }, []);

  const handleDeleteQuery = async (id) => {
    if (!confirm("Are you sure you want to delete this query?")) return;
    try {
      const res = await fetch(`/api/queries/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        setQueries((prev) => prev.filter((q) => q._id !== id));
      } else {
        const errData = await res.json();
        alert(errData.error || "Failed to delete query.");
      }
    } catch (err) {
      console.error("Error deleting query:", err);
      alert("An error occurred while deleting the query.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
        <h1 className="text-2xl font-bold text-[#1e2547]">Contact Queries</h1>
        <p className="text-gray-500 text-sm mt-1">Review contact form submissions and reply directly via email.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)] overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <Loader2 className="h-8 w-8 animate-spin text-[#6878d6] mb-3" />
            <span className="text-sm font-semibold">Loading queries...</span>
          </div>
        ) : queries.length > 0 ? (
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow>
                <TableHead className="w-[180px] font-bold text-[#1e2547] py-4 pl-6 text-xs uppercase tracking-wider">Name</TableHead>
                <TableHead className="w-[240px] font-bold text-[#1e2547] py-4 text-xs uppercase tracking-wider">Email</TableHead>
                <TableHead className="font-bold text-[#1e2547] py-4 text-xs uppercase tracking-wider">Message</TableHead>
                <TableHead className="w-[120px] text-right font-bold text-[#1e2547] py-4 pr-6 text-xs uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {queries.map((query) => (
                <TableRow key={query._id} className="hover:bg-gray-50/40">
                  <TableCell className="font-bold text-[#1e2547] py-4 pl-6 text-sm">
                    {query.name}
                  </TableCell>
                  
                  <TableCell className="text-[#6878d6] font-semibold py-4 text-sm">
                    <a href={`mailto:${query.email}`} className="hover:underline">
                      {query.email}
                    </a>
                  </TableCell>
                  
                  <TableCell className="py-4 text-sm max-w-[400px]">
                    <div className="overflow-x-auto whitespace-nowrap py-1 pr-4 text-gray-500 scrollbar-thin">
                      {query.message}
                    </div>
                  </TableCell>
                  
                  <TableCell className="text-right py-4 pr-6">
                    <div className="flex items-center justify-end gap-2">
                      <a
                        href={`mailto:${query.email}?subject=Regarding your message to DigitalAgency`}
                        className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#6878d6] hover:border-[#6878d6] hover:bg-[#6878d6]/5 transition-all"
                        title="Send Email"
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </a>

                      <button
                        onClick={() => handleDeleteQuery(query._id)}
                        className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-200 hover:bg-red-50 cursor-pointer transition-all"
                        title="Delete Query"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center text-gray-400">
            <AlertCircle className="h-8 w-8 mb-2 text-gray-300" />
            <span className="text-sm font-semibold">No queries found</span>
          </div>
        )}
      </div>
    </div>
  );
}
