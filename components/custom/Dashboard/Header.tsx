// Library Imports
import React from "react";
import Image from "next/image";
import { Search, Send } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// Custom Imports
import { UserType } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user }: UserType = useKindeBrowserClient();
  return (
    <div className="flex justify-end items-center w-full gap-2">
      <div className="flex items-center border rounded-md px-2">
        <Search className="h-6 w-6" />
        &nbsp;
        <Input
          type="text"
          placeholder="Search..."
          className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400 font-semibold placeholder:text-base placeholder:tracking-wide"
        />
      </div>

      <div>
        {user?.picture && (
          <Image
            src={user?.picture}
            alt="User Image"
            width={30}
            height={30}
            className="rounded-full"
          />
        )}
      </div>

      <Button className="flex gap-2 text-lg items-center h-8 bg-blue-600 hover:bg-blue-700 tracking-wide">
        <Send className="h-4 w-4" /> Invite
      </Button>
    </div>
  );
};

export default Header;
