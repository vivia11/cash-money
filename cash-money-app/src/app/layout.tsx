import SideBar from "./components/sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex">
          <SideBar/>
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
