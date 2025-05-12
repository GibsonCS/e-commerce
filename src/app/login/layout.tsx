export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex bg-gradient-to-br from-gray-950 to-gray-700">
      {children}
    </section>
  );
}
