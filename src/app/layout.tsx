// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100 text-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-5">
          <h1 className="text-xl font-bold">VMAS Dashboard</h1>
          <nav className="mt-4 space-y-2">
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
              Dashboard
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
              Settings
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
              Logout
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
