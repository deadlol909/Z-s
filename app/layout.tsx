import "@/styles/globals.css";
import { AppProviders } from "@/context/app-providers";
import { NavigationShell } from "@/components/navigation/navigation-shell";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body><AppProviders><NavigationShell>{children}</NavigationShell></AppProviders></body>
    </html>
  );
}
