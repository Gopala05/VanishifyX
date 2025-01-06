// Library Imports
import type { Metadata } from "next";
import "@/style/globals.css";
import { Toaster } from "sonner";

// Custom Imports
import { ConvexClientProvider } from "./ConvexClientProvider";

export const metadata: Metadata = {
  title: "VanishifyX",
  description: "A clone of Eraser.io",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          {children}
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
