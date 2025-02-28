export const metadata = {
  title: "Aida - Foodbank Finder App",
  description: "Aida - Foodbank Finder App",
  icons: {
    icon: "/favicon.ico",
  },
};

import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
