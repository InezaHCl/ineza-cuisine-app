import React from "react";
import Header from "./Header";
import AppNavigation from "./AppNavigation";
import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log(navigation);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl px-2 md:px-0">
          <Outlet />
        </main>
      </div>

      <AppNavigation />
    </div>
  );
}
