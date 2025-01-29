"use client";

// Library Imports
import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "convex/react";
import EditorJS, { ToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import { toast } from "sonner";

// Custom Imports
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { FileType } from "@/lib/types";

const rawData = {
  time: 1550476186479,
  blocks: [
    {
      data: {
        level: 2,
      },
      id: "defaultDoc",
      type: "header",
    },
  ],
  version: "2.8.1",
};

const Editor: React.FC<{
  trigger: boolean;
  fileId: Id<"files">;
  data: FileType | undefined;
}> = ({ trigger, fileId, data }) => {
  const ref = useRef<EditorJS>();
  const updateDocData = useMutation(api.files.updateDocData);

  const initEditorJS = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter a Heading...",
          },
        },
        list: {
          class: EditorjsList as unknown as ToolConstructable,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+Q",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+W",
          config: {
            titlePlaceholder: "Title",
            messagePlaceholder: "Message",
            logLevel: "WARN",
          },
        },
      },
      holder: "editorjs",
      autofocus: true,
      data: data?.document ? JSON.parse(data.document) : rawData,
    });

    ref.current = editor;
  };

  const saveDocumentHandler = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          updateDocData({
            _id: fileId,
            document: JSON.stringify(outputData),
          }).then(
            (resp) => {
              toast("Document saved successfully!");
            },
            (e) => {
              toast("Server Error!");
              console.log("Error in Document Save", e);
            }
          );
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };

  useEffect(() => {
    trigger && saveDocumentHandler();
  }, [trigger]);

  useEffect(() => {
    data && initEditorJS();
  }, [data]);
  return (
      <div id="editorjs"></div>
  );
};

export default Editor;
