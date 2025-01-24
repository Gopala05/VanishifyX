// Library Imports
import React, { useState } from "react";
import { Archive, Flag, Github } from "lucide-react";

// Custom Imports
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { BottomSideBarType } from "@/lib/types";
import Constants from "@/app/_constants/Constants";
import Pricing from "./Pricing";

const SideBarBottomSection = ({ filesUsed, onCreate }: BottomSideBarType) => {
  const [fileName, setFileName] = useState<string>("");
  const progressPercentage = (filesUsed / 5) * 100;

  const menuList = [
    {
      name: "Getting Started",
      icon: Flag,
      path: "",
    },
    {
      name: "GitHub",
      icon: Github,
      path: "",
    },
    {
      name: "Archive",
      icon: Archive,
      path: "",
    },
  ];

  return (
    <div>
      {menuList.map((menu, index) => (
        <h2
          key={index}
          className="flex gap-2 p-2 text-sm items-center hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <menu.icon className="h-5 w-5" />
          {menu.name}
        </h2>
      ))}

      {/* Add New File */}
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-3 justify-start">
            New File
          </Button>
        </DialogTrigger>
        {filesUsed < Constants.MAX_FREE_USE ? (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New File</DialogTitle>
              <DialogDescription>
                <Input
                  onChange={(e) => setFileName(e.target.value)}
                  placeholder="File Name..."
                  className="mt-3 text-black"
                />
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!(fileName && fileName.length > 3)}
                  onClick={() => onCreate(fileName)}
                >
                  Create
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        ) : (
          <Pricing />
        )}
      </Dialog>

      {/* Progress Bar */}
      <div className="h-4 w-full bg-gray-300 rounded-full mt-5">
        <div
          className="h-4 bg-blue-600 rounded-full"
          style={{
            width: `${progressPercentage}%`,
            transition: "width 0.5s ease-out",
          }}
        ></div>
      </div>

      {/* Files remaining */}
      <h2 className="text-sm mt-3">
        <strong>{filesUsed}</strong> out of&nbsp;
        <strong>{Constants.MAX_FREE_USE}</strong> files used
      </h2>
      <h2 className="text-xs mt-1">
        <u className="cursor-pointer">Upgrade</u> your plan for unlimited
        access.
      </h2>
    </div>
  );
};

export default SideBarBottomSection;
