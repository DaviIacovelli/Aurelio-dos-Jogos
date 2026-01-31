import Header from "./_components/header";
//@ts-expect-error vtnc ts
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Header />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
