import React, { ReactNode } from "react";
import SideNav from "../ui/dashboard/SideNav";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100vh] min-w-full bg-slate-300 flex items-center justify-center gap-2">
      <div className="min-w-64 min-h-[100vh] bg-blue-300">
        <SideNav />
      </div>
      <div className="flex-grow">
        {
          children
        }
      </div>
    </div>
  );
}
