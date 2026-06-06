import React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
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
          
          {/* Content Area */}
          <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>

        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
