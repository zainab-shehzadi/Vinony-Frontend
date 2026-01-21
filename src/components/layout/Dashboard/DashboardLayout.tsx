import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

export default function DashboardLayout() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
      <div className="flex h-screen">
        <Sidebar toggle={toggle} />
        {toggle && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setToggle(false)}
          />
        )}
        <div className="w-full">
          <Header setToggle={setToggle} toggle={toggle} />
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
