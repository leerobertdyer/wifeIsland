import "~/styles/globals.css";
import { overlock } from "./fonts";

export const metadata = {
  title: "Wife Island",
  description: "Dreamy Original Folk Music From Asheville, NC",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden font-sans ${overlock.className}`}>{children}</body>
    </html>
  );
}
