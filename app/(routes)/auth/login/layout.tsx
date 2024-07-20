export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-50">
      {children}
    </div>
  );
}
