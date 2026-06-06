import LoginForm from "@/components/admin/LoginForm";
import { verifyAdminToken } from "@/services/Admin";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const admin = await verifyAdminToken();
  
    if (admin) {
      redirect("/admin");
    }

  return (
    <div className="min-h-screen w-full bg-[#f7fafe] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
}
