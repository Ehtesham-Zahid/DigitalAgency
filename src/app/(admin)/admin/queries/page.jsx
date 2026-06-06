"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Trash2, MailOpen, AlertCircle } from "lucide-react";

export default function AdminQueriesPage() {
  const [queries, setQueries] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "Hi, we would like to schedule a call next week to discuss our website redesign project. We have a budget of $15k and need a fresh look.",
      date: "2026-06-05",
      status: "New"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@designco.com",
      message: "Do you offer branding services? We love your work and would like to build a branding guideline for our corporate startup group.",
      date: "2026-06-04",
      status: "Replied"
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@logistics.net",
      message: "Interested in a search engine marketing campaign for our e-commerce business. Please send pricing and references for other platforms.",
      date: "2026-06-03",
      status: "Archived"
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@startup.io",
      message: "We need a SaaS dashboard UI design done in Figma. Is your team available for this? We are looking to kick off by mid-June.",
      date: "2026-06-02",
      status: "New"
    }
  ]);

  const [selectedQuery, setSelectedQuery] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [queryToDelete, setQueryToDelete] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleDeleteQuery = () => {
    if (!queryToDelete) return;
    setQueries((prev) => prev.filter((q) => q.id !== queryToDelete.id));
    setIsDeleteOpen(false);
    setQueryToDelete(null);
  };

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText) return;

    // Mark status as replied
    setQueries((prev) =>
      prev.map((q) => (q.id === selectedQuery.id ? { ...q, status: "Replied" } : q))
    );
    setReplyText("");
    setIsViewOpen(false);
    alert(`Reply sent to ${selectedQuery.email}!`);
  };

  const handleArchiveQuery = (queryId) => {
    setQueries((prev) =>
      prev.map((q) => (q.id === queryId ? { ...q, status: "Archived" } : q))
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "New":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            New
          </span>
        );
      case "Replied":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
            Replied
          </span>
        );
      case "Archived":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-50 text-gray-600 border border-gray-200">
            Archived
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
        <h1 className="text-2xl font-bold text-[#1e2547]">Contact Queries</h1>
        <p className="text-gray-500 text-sm mt-1">Review and reply to submissions sent via the public contact form.</p>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)] overflow-hidden">
        {queries.length > 0 ? (
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow>
                <TableHead className="w-[120px] font-bold text-[#1e2547] py-4 pl-6 text-xs uppercase tracking-wider">Date</TableHead>
                <TableHead className="w-[180px] font-bold text-[#1e2547] py-4 text-xs uppercase tracking-wider">Name</TableHead>
                <TableHead className="w-[220px] font-bold text-[#1e2547] py-4 text-xs uppercase tracking-wider">Email</TableHead>
                <TableHead className="font-bold text-[#1e2547] py-4 text-xs uppercase tracking-wider">Message Preview</TableHead>
                <TableHead className="w-[100px] font-bold text-[#1e2547] py-4 text-xs uppercase tracking-wider">Status</TableHead>
                <TableHead className="w-[120px] text-right font-bold text-[#1e2547] py-4 pr-6 text-xs uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {queries.map((query) => (
                <TableRow key={query.id} className="hover:bg-gray-50/40">
                  <TableCell className="py-4 pl-6 text-gray-500 text-sm">{query.date}</TableCell>
                  <TableCell className="font-bold text-[#1e2547] py-4 text-sm">{query.name}</TableCell>
                  <TableCell className="text-[#6878d6] font-semibold py-4 text-sm">
                    <a href={`mailto:${query.email}`} className="hover:underline">{query.email}</a>
                  </TableCell>
                  <TableCell className="text-gray-500 max-w-xs truncate py-4 text-sm">{query.message}</TableCell>
                  <TableCell className="py-4">{getStatusBadge(query.status)}</TableCell>
                  <TableCell className="text-right py-4 pr-6">
                    <div className="flex items-center justify-end gap-2">
                      {/* View Button */}
                      <button
                        onClick={() => {
                          setSelectedQuery(query);
                          setIsViewOpen(true);
                        }}
                        className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#6878d6] hover:border-[#6878d6] hover:bg-[#6878d6]/5 cursor-pointer transition-all"
                        title="View Details"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                      
                      {/* Archive Button */}
                      {query.status !== "Archived" && (
                        <button
                          onClick={() => handleArchiveQuery(query.id)}
                          className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 cursor-pointer transition-all"
                          title="Archive"
                        >
                          <MailOpen className="h-3.5 w-3.5" />
                        </button>
                      )}

                      {/* Delete Button */}
                      <button
                        onClick={() => {
                          setQueryToDelete(query);
                          setIsDeleteOpen(true);
                        }}
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
          <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400">
            <AlertCircle className="h-8 w-8 mb-2 text-gray-300" />
            <span className="text-sm font-semibold">No queries found</span>
          </div>
        )}
      </div>

      {/* View & Reply Dialog */}
      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent className="sm:max-w-lg bg-white border border-gray-100 shadow-xl rounded-xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-[#1e2547]">Query Details</DialogTitle>
            <DialogDescription className="text-gray-500 text-xs mt-1">
              Read the full message and send a direct response.
            </DialogDescription>
          </DialogHeader>
          
          {selectedQuery && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-[#1e2547] uppercase tracking-wider">From</span>
                  <p className="text-sm font-bold text-[#1e2547] mt-0.5">{selectedQuery.name}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#1e2547] uppercase tracking-wider">Email</span>
                  <p className="text-sm font-semibold text-[#6878d6] mt-0.5">{selectedQuery.email}</p>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#1e2547] uppercase tracking-wider">Message</span>
                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3.5 mt-1 leading-relaxed border border-gray-100">
                  {selectedQuery.message}
                </p>
              </div>

              {/* Reply Form */}
              <form onSubmit={handleSendReply} className="space-y-3 pt-2">
                <span className="text-[10px] font-bold text-[#1e2547] uppercase tracking-wider block">Send Reply</span>
                <textarea
                  required
                  rows={4}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder={`Write your response to ${selectedQuery.name}...`}
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6878d6] focus:bg-white text-sm resize-none"
                />
                <DialogFooter className="pt-4 flex flex-row justify-end gap-2 border-t border-gray-100 -mx-6 -mb-6 p-6 bg-gray-50 rounded-b-xl">
                  <DialogClose asChild>
                    <Button type="button" variant="outline" className="border-gray-200 hover:bg-gray-100 hover:text-gray-900 font-semibold rounded-lg text-xs uppercase cursor-pointer">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" className="bg-[#6878d6] hover:bg-[#5767c5] text-white font-bold rounded-lg text-xs uppercase cursor-pointer px-4">
                    Send Reply
                  </Button>
                </DialogFooter>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="sm:max-w-md bg-white border border-gray-100 shadow-xl rounded-xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-[#1e2547]">Delete Query</DialogTitle>
            <DialogDescription className="text-gray-500 text-xs mt-1 text-left">
              Are you sure you want to delete this query from <span className="font-bold text-[#1e2547]">"{queryToDelete?.name}"</span>? This action is permanent and cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="pt-4 flex flex-row justify-end gap-2 border-t border-gray-100 -mx-6 -mb-6 p-6 bg-gray-50 rounded-b-xl">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="border-gray-200 hover:bg-gray-100 hover:text-gray-900 font-semibold rounded-lg text-xs uppercase cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={handleDeleteQuery}
              className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs uppercase cursor-pointer px-4"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
