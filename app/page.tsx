"use client";

// Library Imports
import Nav from "@/components/custom/Nav";
import Home from "@/components/custom/Home";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

const LandingPageView = () => {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  });

  return (
    <>
      <Nav show={true} />
      <Home />
    </>
  );
};
export default LandingPageView;
