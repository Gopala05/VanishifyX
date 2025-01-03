"use client";
// Library Imports
import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

// Custom Imports
import { Button } from "@/components/ui/button";

const DashboardView = () => {
  return (
    <div>
      DashboardView
      <Button>
        <LogoutLink>LogOut</LogoutLink>
      </Button>
    </div>
  );
};
export default DashboardView;
