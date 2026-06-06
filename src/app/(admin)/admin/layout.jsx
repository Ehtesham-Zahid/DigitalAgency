"use client";

import React from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { Bell } from "lucide-react";

export default function AdminDashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#f7fafe] font-sans">
        {/* App Sidebar */}
        <AppSidebar />

        {/* Sidebar Inset (Main Dashboard Area) */}
        <SidebarInset className="flex flex-col flex-1 min-h-screen bg-[#f7fafe]">
          
          {/* Header */}
          <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 shrink-0 sticky top-0 z-30 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-gray-500 hover:text-gray-900 cursor-pointer" />
              <div className="h-4 w-[1px] bg-gray-200" />
              <span className="text-sm font-semibold text-[#1e2547]">Admin Dashboard</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="h-9 w-9 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full cursor-pointer relative transition-all">
                <Bell className="h-4.5 w-4.5" />
                <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 bg-red-500 rounded-full" />
              </button>
              
              <div className="h-4 w-[1px] bg-gray-200" />
              
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-[#6878d6]/10 flex items-center justify-center text-[#6878d6] font-bold text-sm">
                  A
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-bold text-[#1e2547] leading-none">Admin User</span>
                  <span className="text-[10px] font-semibold text-gray-400 mt-0.5 leading-none">admin@example.com</span>
                </div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>

        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
