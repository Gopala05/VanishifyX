// Library Imports
import React from "react";
import Image from "next/image";
import Link  from "next/link";
import { Link as LinkIcon, Save } from "lucide-react";

// Custom Imports
import { Button } from "@/components/ui/button";

const WorkSpaceHeader = ({ onSave, fileName }: any) => {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <Link href="/dashboard" className="flex gap-2 items-center">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h2 className="text-xl font-semibold">{fileName}</h2>
      </Link>

      <div className="flex items-center gap-4">
        <Button
          className="h-8 text-xs gap-2 bg-yellow-500 hover:bg-yellow-600"
          onClick={() => onSave()}
        >
          <Save className="h-4 w-4" /> Save
        </Button>
        <Button className="h-8 text-xs gap-2 bg-blue-600 hover:bg-blue-700">
          Share <LinkIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default WorkSpaceHeader;
