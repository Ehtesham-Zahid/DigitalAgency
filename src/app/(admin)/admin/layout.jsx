import React from "react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { redirect } from "next/navigation";
import { verifyAdminToken } from "@/services/Admin";

export default async function AdminDashboardLayout({ children }) {
  const admin = await verifyAdminToken();

  if (!admin) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#f7fafe] font-sans">
        {/* App Sidebar */}
        <AppSidebar />

        {/* Sidebar Inset (Main Dashboard Area) */}
        <SidebarInset className="flex flex-col flex-1 min-h-screen bg-[#f7fafe]">
          {/* Top Bar for Mobile */}
          <header className="flex h-14 shrink-0 items-center gap-2 border-b border-gray-200/60 bg-white px-4 md:hidden">
            <SidebarTrigger className="text-gray-500 hover:text-gray-900 cursor-pointer" />
            <div className="h-6 w-px bg-gray-200 mx-1" />
            <div className="font-extrabold text-[#1e2547] text-xs uppercase tracking-wider">
              Digital<span className="text-[#6878d6]">Admin</span>
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
