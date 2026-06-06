"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";
import { LayoutGrid, MessageSquare, Globe, LogOut } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const menuItems = [
    {
      title: "Services CRUD",
      url: "/admin",
      icon: LayoutGrid
    },
    {
      title: "Contact Queries",
      url: "/admin/queries",
      icon: MessageSquare
    }
  ];

  return (
    <Sidebar collapsible="icon" className="border-r border-gray-200">
      <SidebarHeader className="py-4 border-b border-gray-100 flex flex-row items-center px-4 justify-between">
        <Link href="/admin" className="flex items-center gap-2 font-black text-[#1e2547] tracking-tight group-data-[collapsible=icon]:hidden">
          <span>DIGITAL<span className="text-[#6878d6]">ADMIN</span></span>
        </Link>
        <div className="h-6 w-6 rounded bg-[#6878d6] flex items-center justify-center text-white font-bold text-xs md:hidden group-data-[collapsible=icon]:flex mx-auto shrink-0 select-none">
          D
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 px-2 group-data-[collapsible=icon]:hidden">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 font-semibold cursor-pointer ${
                        isActive
                          ? "bg-[#6878d6] text-white hover:bg-[#6878d6] hover:text-white"
                          : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <Link href={item.url} className="flex items-center gap-3 w-full">
                        <item.icon className={`h-4.5 w-4.5 ${isActive ? "text-white" : "text-gray-400"}`} />
                        <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-100 space-y-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="View Live Site"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-all font-semibold cursor-pointer"
            >
              <Link href="/" className="flex items-center gap-3 w-full">
                <Globe className="h-4.5 w-4.5 text-gray-400" />
                <span className="group-data-[collapsible=icon]:hidden">View Site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Logout"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-all font-semibold cursor-pointer"
            >
              <Link href="/login" className="flex items-center gap-3 w-full">
                <LogOut className="h-4.5 w-4.5 text-red-400" />
                <span className="group-data-[collapsible=icon]:hidden">Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
