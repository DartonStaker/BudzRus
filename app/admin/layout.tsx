/**
 * Admin root layout — no chrome here so `/admin/login` stays full-screen.
 * Panel chrome lives in `app/admin/(dashboard)/layout.tsx`.
 */
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
