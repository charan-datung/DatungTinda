// TODO: Dashboard shell — sidebar nav, top bar, auth guard, Supabase session provider

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-[var(--color-dark)]" />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
