// Library Imports
import type { Metadata } from "next";
import "@/style/globals.css";

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
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
