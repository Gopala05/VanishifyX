// Library Imports
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import moment from "moment";
import { Archive, MoreHorizontalIcon } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// Custom Imports
import { FileContext } from "@/context/FilesContext";
import { FileType, UserType } from "@/lib/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FileListTable = () => {
  const { files, setFiles } = useContext(FileContext);
  const { user }: UserType = useKindeBrowserClient();
  const router = useRouter();
  const [fileList, setFileList] = useState<FileType[]>([]);

  useEffect(() => {
    files && setFileList(files);
  }, [files]);

  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                File Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                Created At
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                Edited
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                Author
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {fileList.length > 0 &&
              fileList.map((file, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-50 cursor-pointer"
                  onClick={() => router.push(`/workspace/${file._id}`)}
                >
                  <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    {file.fileName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(file._creationTime).format("DD MMM YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(file._creationTime).format("DD MMM YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user?.picture && (
                      <Image
                        src={user?.picture}
                        alt="User Image"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem className="gap-3">
                          <Archive className="h-4 w-4" /> Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileListTable;
