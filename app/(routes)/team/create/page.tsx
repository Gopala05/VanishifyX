"use client";

// Library Imports
import React, { useState } from "react";
import { Users } from "lucide-react";
import { useMutation } from "convex/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Custom Imports
import Nav from "@/components/custom/Nav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { api } from "@/convex/_generated/api";
import { UserType } from "@/lib/types";

const CreateTeamView = () => {
  const createTeam = useMutation(api.team.createTeam);
  const { user }: UserType = useKindeBrowserClient();
  const router = useRouter();
  const [teamName, setTeamName] = useState<string>("");

  const createNewTeam = () => {
    createTeam({
      teamName,
      createdBy: user?.email || "",
    }).then((resp) => {
      if (resp) {
        router.push("/dashboard");
        toast("Team created Successfully!");
      }
    });
  };
  return (
    <>
      <Nav show={false} className="bg-white text-black" />

      <div className="px-6 md:px-0 bg-white text-black flex flex-col items-center h-screen justify-center gap-y-5">
        <Badge className="bg-teal-600 hover:bg-teal-600 hover:cursor-pointer rounded-xl text-lg gap-x-2 py-1 px-3">
          <Users /> Team's Name
        </Badge>
        <h2 className="font-bold text-center text-5xl py-3">
          What should we call your team?
        </h2>
        <h2 className="text-gray-500 text-center text-lg">
          You can always change this later from settings.
        </h2>

        <div className="mt-7 w-11/12 md:w-9/12 lg:w-[35vw] flex flex-col gap-y-3">
          <label htmlFor="team-name" className="text-lg text-gray-700">
            Team Name
          </label>
          <Input
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Team Name"
            id="team-name"
            className="border-teal-600 focus-visible:ring-teal-600 focus-visible:ring-offset-teal-600"
          />
        </div>

        <Button
          onClick={() => createNewTeam()}
          className="bg-blue-500 hover:bg-blue-800 text-lg rounded-xl mt-9 w-11/12 md:w-9/12 lg:w-[35vw]"
        >
          Create Team
        </Button>
      </div>
    </>
  );
};

export default CreateTeamView;
