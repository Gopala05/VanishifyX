// Library Imports
import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { useConvex, useMutation } from "convex/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// Custom Imports
import SideBarTopSection from "./SideBarTopSection";
import SideBarBottomSection from "./SideBarBottomSection";
import { api } from "@/convex/_generated/api";
import { TeamType } from "@/lib/types";
import { FileContext } from "@/context/FilesContext";

const SideBar = () => {
  const { user } = useKindeBrowserClient();
  const { setFiles } = useContext(FileContext);
  const convex = useConvex();
  const createFile = useMutation(api.files.createFile);
  const [activeTeamInfo, setActiveTeamInfo] = useState<TeamType>();
  const [filesUsed, setFilesUsed] = useState<number>(0);

  const onCreate = (fileName: string) => {
    createFile({
      fileName: fileName,
      teamId: activeTeamInfo?._id || "",
      createdBy: user?.email || "",
      archive: false,
      document: "",
      whiteboard: "",
    }).then(
      (resp) => {
        if (resp) {
          getFiles();
          toast("File created sccessfully!");
        }
      },
      (e) => {
        toast("Error while creating file");
        console.log(e);
      }
    );
  };

  const getFiles = async () => {
    const response = await convex.query(api.files.getFiles, {
      teamId: activeTeamInfo?._id || "",
    });
    setFiles(response);
    setFilesUsed(response?.length);
  };

  useEffect(() => {
    activeTeamInfo && getFiles();
  }, [activeTeamInfo]);

  return (
    <div className="flex flex-col h-screen fixed w-72 border-r-2 p-6">
      <div className="flex-1">
        <SideBarTopSection
          user={user}
          filesUsed={filesUsed}
          setActiveTeamInfo={(teamInfo) => setActiveTeamInfo(teamInfo)}
        />
      </div>

      <div>
        <SideBarBottomSection onCreate={onCreate} filesUsed={filesUsed} />
      </div>
    </div>
  );
};

export default SideBar;
