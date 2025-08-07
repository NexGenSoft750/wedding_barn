// app/admin/layout.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="admin-layout">
        <aside className="sidebar">Admin Sidebar</aside>
        <main>{children}</main>
      </div>
    );
  }
  