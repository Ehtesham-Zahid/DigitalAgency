import { Poppins } from "next/font/google";
import "../globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Admin - DigitalAgency",
  description: "Admin panel login and dashboard pages",
};

export default function AdminLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f7fafe] font-sans antialiased">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
