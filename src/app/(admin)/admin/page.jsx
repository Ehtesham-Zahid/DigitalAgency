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
import { Input } from "@/components/ui/input";
import * as LucideIcons from "lucide-react";
import { Plus, Edit2, Trash2, HelpCircle } from "lucide-react";

// List of available icons for selection
const AVAILABLE_ICONS = [
  "SquarePen",
  "AppWindow",
  "Send",
  "Lightbulb",
  "CreditCard",
  "CircleUser",
  "Briefcase",
  "Settings",
  "BarChart",
  "Globe",
  "Shield",
  "Heart"
];

// Helper to render icon by name safely
const renderIcon = (iconName) => {
  const IconComponent = LucideIcons[iconName] || HelpCircle;
  return <IconComponent className="h-5 w-5 text-[#6878d6]" />;
};

export default function AdminPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // Form & action states
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState("");
  const [currentService, setCurrentService] = useState({ _id: null, title: "", icon: "Briefcase", description: "" });
  const [serviceToDelete, setServiceToDelete] = useState(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/services");
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to retrieve services from catalog.");
      }
      setServices(data);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchServices();
  }, []);

  const handleAddService = async (e) => {
    e.preventDefault();
    if (!currentService.title || !currentService.description || !currentService.icon) return;

    setActionLoading(true);
    setActionError("");

    try {
      const res = await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: currentService.title,
          description: currentService.description,
          icon: currentService.icon
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create service.");
      }

      setServices((prev) => [...prev, data]);
      setIsAddOpen(false);
      setCurrentService({ _id: null, title: "", icon: "Briefcase", description: "" });
    } catch (err) {
      setActionError(err.message || "Failed to create service.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleEditService = async (e) => {
    e.preventDefault();
    if (!currentService.title || !currentService.description || !currentService.icon) return;

    setActionLoading(true);
    setActionError("");

    try {
      const res = await fetch(`/api/services/${currentService._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: currentService.title,
          description: currentService.description,
          icon: currentService.icon
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update service.");
      }

      setServices((prev) =>
        prev.map((s) => (s._id === currentService._id ? data : s))
      );
      setIsEditOpen(false);
      setCurrentService({ _id: null, title: "", icon: "Briefcase", description: "" });
    } catch (err) {
      setActionError(err.message || "Failed to update service.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteService = async () => {
    if (!serviceToDelete) return;

    setActionLoading(true);
    setActionError("");

    try {
      const res = await fetch(`/api/services/${serviceToDelete._id}`, {
        method: "DELETE"
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to delete service.");
      }

      setServices((prev) => prev.filter((s) => s._id !== serviceToDelete._id));
      setIsDeleteOpen(false);
      setServiceToDelete(null);
    } catch (err) {
      setActionError(err.message || "Failed to delete service.");
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
        <div>
          <h1 className="text-2xl font-bold text-[#1e2547]">Services Catalog</h1>
          <p className="text-gray-500 text-sm mt-1">Manage the digital services offered to clients on the home and services pages.</p>
        </div>
        
        <Dialog open={isAddOpen} onOpenChange={(open) => {
          setIsAddOpen(open);
          if (!open) {
            setActionError("");
            setCurrentService({ _id: null, title: "", icon: "Briefcase", description: "" });
          }
        }}>
          <DialogTrigger asChild>
            <Button className="bg-[#6878d6] hover:bg-[#5767c5] text-white font-bold h-10 px-4 rounded-lg shadow-sm hover:shadow cursor-pointer flex items-center gap-2 text-xs uppercase tracking-wider">
              <Plus className="h-4 w-4" /> Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-white border border-gray-100 shadow-xl rounded-xl p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-[#1e2547]">Add New Service</DialogTitle>
              <DialogDescription className="text-gray-500 text-xs mt-1">
                Fill in the details below to add a service to the catalog.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddService} className="space-y-4 py-4">
              {actionError && (
                <div className="bg-rose-50 text-rose-800 border border-rose-100 rounded-lg p-3.5 text-xs font-semibold">
                  {actionError}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">Service Title</label>
                <Input
                  type="text"
                  required
                  disabled={actionLoading}
                  value={currentService.title}
                  onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                  placeholder="e.g. App Development"
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3.5 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6878d6] focus:bg-white text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">Icon</label>
                <select
                  disabled={actionLoading}
                  value={currentService.icon}
                  onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:border-[#6878d6] focus:bg-white text-sm"
                >
                  {AVAILABLE_ICONS.map((icon) => (
                    <option key={icon} value={icon}>
                      {icon}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">Description</label>
                <textarea
                  required
                  rows={4}
                  disabled={actionLoading}
                  value={currentService.description}
                  onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
                  placeholder="Describe the service..."
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6878d6] focus:bg-white text-sm resize-none"
                />
              </div>
              <DialogFooter className="pt-4 flex flex-row justify-end gap-2 border-t border-gray-100 -mx-6 -mb-6 p-6 bg-gray-50 rounded-b-xl">
                <DialogClose asChild>
                  <Button type="button" variant="outline" disabled={actionLoading} className="border-gray-200 hover:bg-gray-100 hover:text-gray-900 font-semibold rounded-lg text-xs uppercase cursor-pointer">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" disabled={actionLoading} className="bg-[#6878d6] hover:bg-[#5767c5] text-white font-bold rounded-lg text-xs uppercase cursor-pointer px-4">
                  {actionLoading ? "Creating..." : "Create"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-xl border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)] overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 text-sm font-medium animate-pulse">
            Loading services catalog...
          </div>
        ) : error ? (
          <div className="p-8 text-center text-rose-600 text-sm font-semibold">
            {error}
          </div>
        ) : services.length === 0 ? (
          <div className="p-8 text-center text-gray-500 text-sm font-medium">
            No services found. Add a service using the button above.
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow>
                <TableHead className="w-[80px] font-bold text-[#1e2547] py-4 pl-6 text-xs uppercase tracking-wider">Icon</TableHead>
                <TableHead className="w-[200px] font-bold text-[#1e2547] py-4 text-xs uppercase tracking-wider">Title</TableHead>
                <TableHead className="font-bold text-[#1e2547] py-4 text-xs uppercase tracking-wider">Description</TableHead>
                <TableHead className="w-[120px] text-right font-bold text-[#1e2547] py-4 pr-6 text-xs uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service._id} className="hover:bg-gray-50/40">
                  <TableCell className="py-4 pl-6">
                    <div className="h-10 w-10 rounded-lg bg-[#6878d6]/10 flex items-center justify-center">
                      {renderIcon(service.icon)}
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-[#1e2547] py-4 text-sm">{service.title}</TableCell>
                  <TableCell className="text-gray-500 max-w-md truncate py-4 text-sm">{service.description}</TableCell>
                  <TableCell className="text-right py-4 pr-6">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => {
                          setCurrentService(service);
                          setIsEditOpen(true);
                        }}
                        className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#6878d6] hover:border-[#6878d6] hover:bg-[#6878d6]/5 cursor-pointer transition-all"
                        title="Edit Service"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          setServiceToDelete(service);
                          setIsDeleteOpen(true);
                        }}
                        className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-200 hover:bg-red-50 cursor-pointer transition-all"
                        title="Delete Service"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <Dialog open={isEditOpen} onOpenChange={(open) => {
        setIsEditOpen(open);
        if (!open) {
          setActionError("");
          setCurrentService({ _id: null, title: "", icon: "Briefcase", description: "" });
        }
      }}>
        <DialogContent className="sm:max-w-md bg-white border border-gray-100 shadow-xl rounded-xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-[#1e2547]">Edit Service</DialogTitle>
            <DialogDescription className="text-gray-500 text-xs mt-1">
              Update the service details below and save your changes.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditService} className="space-y-4 py-4">
            {actionError && (
              <div className="bg-rose-50 text-rose-800 border border-rose-100 rounded-lg p-3.5 text-xs font-semibold">
                {actionError}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">Service Title</label>
              <Input
                type="text"
                required
                disabled={actionLoading}
                value={currentService.title}
                onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3.5 px-4 text-gray-700 focus:outline-none focus:border-[#6878d6] focus:bg-white text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">Icon</label>
              <select
                disabled={actionLoading}
                value={currentService.icon}
                onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:border-[#6878d6] focus:bg-white text-sm"
              >
                {AVAILABLE_ICONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">Description</label>
              <textarea
                required
                rows={4}
                disabled={actionLoading}
                value={currentService.description}
                onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:border-[#6878d6] focus:bg-white text-sm resize-none"
              />
            </div>
            <DialogFooter className="pt-4 flex flex-row justify-end gap-2 border-t border-gray-100 -mx-6 -mb-6 p-6 bg-gray-50 rounded-b-xl">
              <DialogClose asChild>
                <Button type="button" variant="outline" disabled={actionLoading} className="border-gray-200 hover:bg-gray-100 hover:text-gray-900 font-semibold rounded-lg text-xs uppercase cursor-pointer">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={actionLoading} className="bg-[#6878d6] hover:bg-[#5767c5] text-white font-bold rounded-lg text-xs uppercase cursor-pointer px-4">
                {actionLoading ? "Saving..." : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteOpen} onOpenChange={(open) => {
        setIsDeleteOpen(open);
        if (!open) {
          setActionError("");
          setServiceToDelete(null);
        }
      }}>
        <DialogContent className="sm:max-w-md bg-white border border-gray-100 shadow-xl rounded-xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-[#1e2547]">Delete Service</DialogTitle>
            <DialogDescription className="text-gray-500 text-xs mt-1 text-left">
              Are you sure you want to delete <span className="font-bold text-[#1e2547]">"{serviceToDelete?.title}"</span>? This action is permanent and cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="pt-4 flex flex-row justify-end gap-2 border-t border-gray-100 -mx-6 -mb-6 p-6 bg-gray-50 rounded-b-xl">
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={actionLoading} className="border-gray-200 hover:bg-gray-100 hover:text-gray-900 font-semibold rounded-lg text-xs uppercase cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              disabled={actionLoading}
              onClick={handleDeleteService}
              className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs uppercase cursor-pointer px-4"
            >
              {actionLoading ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
