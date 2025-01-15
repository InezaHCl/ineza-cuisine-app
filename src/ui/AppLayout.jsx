import React from "react";
import Header from "./Header";
import AppNavigation from "./AppNavigation";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <div className="overflow-x-scroll">
        <main>
          <Outlet />
        </main>
      </div>

      <AppNavigation />
    </div>
  );
}
