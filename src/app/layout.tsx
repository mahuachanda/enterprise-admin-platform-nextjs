import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


export const metadata: Metadata = {
  title: "Enterprise Admin Platform",
  description: "This is my application for managing enterprise resources.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>
        <Header/>
        <div className="flex">
          <Sidebar/>
        
       
        <main className="flex-1">
            {children}
        </main>
        </div>
      </body>
    </html>
  );
}
