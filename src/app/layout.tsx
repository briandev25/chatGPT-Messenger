import SideBar from "@/components/sidebar";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import "./globals.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginPage from "@/components/Login";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <LoginPage />
          ) : (
            <div className="flex">
              {/* Sidebar */}
              <SideBar />
              {/* ClientProvider - Notification */}
              <div className=" bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
