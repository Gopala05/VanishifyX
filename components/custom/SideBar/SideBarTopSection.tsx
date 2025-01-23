// Library Imports
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from "lucide-react";
import { useConvex } from "convex/react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

// Custom Imports
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { TopMenuType, TeamType, TopSideBarType } from "@/lib/types";
import { cn } from "@/lib/utils";
import Constants from "@/app/_constants/Constants";

const SideBarTopSection = ({
  user,
  filesUsed,
  setActiveTeamInfo,
}: TopSideBarType) => {
  const convex = useConvex();
  const router = useRouter();
  const [teams, setTeams] = useState<TeamType[]>();
  const [activeTeam, setActiveTeam] = useState<TeamType>();

  const menu: TopMenuType[] = [
    {
      name: "Create Team",
      path: "/team/create",
      icon: Users,
    },
    {
      name: "Settings",
      path: "",
      icon: Settings,
    },
  ];

  const getTeamList = async () => {
    const response = await convex.query(api.team.getTeam, {
      email: user?.email || "",
    });

    setTeams(response);
    setActiveTeam(response[0]);
  };

  const onMenuClick = (item: TopMenuType) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  useEffect(() => {
    user && getTeamList();
  }, [user]);

  useEffect(() => {
    activeTeam && setActiveTeamInfo(activeTeam);
  }, [activeTeam]);

  return (
    <div>
      <Popover>
        <PopoverTrigger className="w-full">
          <div className="flex justify-between items-center hover:bg-slate-200 p-3 rounded-lg cursor-pointer">
            <div className="flex gap-3 items-center">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="flex items-center gap-2 font-bold text-xl">
                {activeTeam?.teamName}
              </span>
            </div>
            <ChevronDown />
          </div>
        </PopoverTrigger>
        <PopoverContent className="ml-7 p-4">
          {/* Team Section */}
          <div>
            {teams?.map((team, index) => (
              <h2
                key={index}
                className={cn(
                  "p-2 hover:bg-blue-500 hover:text-white rounded-lg mb-1 cursor-pointer",
                  team._id === activeTeam?._id && "bg-blue-500 text-white"
                )}
                onClick={() => setActiveTeam(team)}
              >
                {team.teamName}
              </h2>
            ))}
          </div>
          <Separator className="mt-2 bg-slate-300" />

          {/* Menu Section */}
          <div>
            {menu.map((item, index) =>
              item.name !== "Create Team" ||
              teams && teams?.length < Constants.MAX_TEAMS_USE ? (
                <h2
                  key={index}
                  className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-base"
                  onClick={() => onMenuClick(item)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </h2>
              ) : null
            )}
            <LogoutLink>
              <h2 className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-base">
                <LogOut className="h-4 w-4" />
                Logout
              </h2>
            </LogoutLink>
            <Separator className="my-2 bg-slate-300" />

            {/* User Info Section */}
            {user && (
              <div className="flex items-center gap-3">
                <Image
                  src={user?.picture || ""}
                  alt="User Pic"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col max-w-52">
                  <span className="text-base font-bold">
                    {user.given_name} {user.family_name}
                  </span>
                  <span className="text-sm text-gray-500">{user.email}</span>
                </div>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>

      {/* All File Button */}
      <Button
        variant="outline"
        className="w-full justify-start gap-2 font-bold mt-8 bg-gray-100"
      >
        <LayoutGrid className="h-5 w-5" /> All Files
      </Button>
    </div>
  );
};

export default SideBarTopSection;
