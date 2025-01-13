"use client";

// Library Imports
import React, { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";

// Custom Imports
import { api } from "@/convex/_generated/api";
import SideBar from "@/components/custom/SideBar/SideBar";
import { FileType, UserType } from "@/lib/types";
import { FileContext } from "@/context/FilesContext";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user }: UserType = useKindeBrowserClient();
  const convex = useConvex();
  const router = useRouter();
  const [files, setFiles] = useState<FileType>();

  const checkTeam = async () => {
    const response = await convex.query(api.team.getTeam, {
      email: user?.email || "",
    });

    if (!response.length) {
      router.push("team/create");
    }
  };

  useEffect(() => {
    user && checkTeam();
  }, [user]);
  return (
    <FileContext.Provider value={{ files, setFiles }}>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </FileContext.Provider>
  );
};

export default DashboardLayout;
