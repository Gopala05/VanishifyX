"use client";

// Library Imports
import React, { useEffect, useState } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { useMutation } from "convex/react";

// Custom Imports
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { FileType } from "@/lib/types";

const Canvas: React.FC<{
  trigger: boolean;
  fileId: Id<"files">;
  data: FileType | undefined;
}> = ({ trigger, fileId, data }) => {
  const [canvasData, setCanvasData] = useState<readonly ExcalidrawElement[]>(
    []
  );
  const updateCanvasData = useMutation(api.files.updateCanvasData);
  const saveCanvasData = () => {
    updateCanvasData({
      _id: fileId,
      canvas: JSON.stringify(canvasData),
    });
  };

  useEffect(() => {
    trigger && saveCanvasData();
  }, [trigger]);

  return (
    <div className="h-[91vh] border-l">
      {data && (
        <Excalidraw
          initialData={{
            elements: data?.whiteboard ? JSON.parse(data.whiteboard) : [],
          }}
          onChange={(excalidrawElements, appState, files) =>
            setCanvasData(excalidrawElements)
          }
        >
          <MainMenu>
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.Help />
            <MainMenu.DefaultItems.ToggleTheme />
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>

          <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
            <WelcomeScreen.Hints.HelpHint />
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.Heading>
                Start Creating...
              </WelcomeScreen.Center.Heading>
              <WelcomeScreen.Center.Menu>
                <WelcomeScreen.Center.MenuItemHelp />
              </WelcomeScreen.Center.Menu>
            </WelcomeScreen.Center>
          </WelcomeScreen>
        </Excalidraw>
      )}
    </div>
  );
};

export default Canvas;
