"use client";

// Library Imports
import React, { useEffect } from "react";
import { useConvex, useMutation } from "convex/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// Custom Imports
import { api } from "@/convex/_generated/api";
import { UserType } from "@/lib/types";
import Header from "@/components/custom/Dashboard/Header";
import FileListTable from "@/components/custom/Dashboard/FileListTable";

const DashboardView = () => {
  const convex = useConvex();
  const { user }: UserType = useKindeBrowserClient();
  const createUser = useMutation(api.user.createUser);

  const checkUser = async () => {
    const response = await convex.query(api.user.getUser, {
      email: user?.email || "",
    });

    if (!response?.length) {
      createUser({
        name: user?.given_name || "",
        email: user?.email || "",
        image: user?.picture || "",
      }).then((resp) => {
        console.log(resp);
      });
    }
  };

  useEffect(() => {
    user && checkUser();
  }, [user]);
  return (
    <div className="p-8">
      <Header />
      <FileListTable />
    </div>
  );
};
export default DashboardView;
