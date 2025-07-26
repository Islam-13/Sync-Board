import Navbar from "./_components/Navbar";
import OrgSidebar from "./_components/OrgSidebar";
import Sidebar from "./_components/sidebar/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="h-full">
      <Sidebar />

      <div className="h-full pl-[60px]">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />

          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardLayout;
