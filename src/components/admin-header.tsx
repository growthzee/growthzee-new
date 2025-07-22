import Link from "next/link";
import { Button } from "@/components/ui/button";

import { PlusCircle, LogOut, Home } from "lucide-react";
import { logoutAction } from "@/app/admin/actions";

export function AdminHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Growthzee Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/admin/posts/new">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                <PlusCircle className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </Link>

            <form action={logoutAction}>
              <Button variant="outline" type="submit" className="text-white">
                <LogOut className="w-4 h-4 mr-2 text-white" />
                Logout
              </Button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
