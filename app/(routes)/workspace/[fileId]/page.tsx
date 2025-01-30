"use client";

// Library Imports
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useConvex } from "convex/react";

// Custom Imports
import WorkSpaceHeader from "@/components/custom/WorkSpace/Header";
import Canvas from "@/components/custom/WorkSpace/Canvas";
import Editor from "@/components/custom/WorkSpace/Editor";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { FileType } from "@/lib/types";

const WorkSpaceView = () => {
  const convex = useConvex();
  const params = useParams<{ fileId: Id<"files"> }>();
  const [trigger, setTrigger] = useState<boolean>(false);
  const [fileData, setFileData] = useState<FileType>();

  const getDocumentData = async () => {
    const fileData = await convex.query(api.files.getFileData, {
      _id: params.fileId,
    });
    setFileData(fileData);
  };

  useEffect(() => {
    params.fileId && getDocumentData();
  }, []);

  return (
    <div>
      <WorkSpaceHeader
        onSave={() => setTrigger(!trigger)}
        fileName={fileData?.fileName}
      />

      {/* WorkSpace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="h-[91vh]">
          <Editor trigger={trigger} fileId={params.fileId} data={fileData} />
        </div>

        {/* White Canvas */}
        <div className="h-[91vh] shadow-md shadow-black">
          <Canvas trigger={trigger} fileId={params.fileId} data={fileData} />
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceView;
