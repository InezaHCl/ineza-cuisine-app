import React from "react";
import Header from "./Header";
import AppNavigation from "./AppNavigation";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <AppNavigation />
    </div>
  );
}
