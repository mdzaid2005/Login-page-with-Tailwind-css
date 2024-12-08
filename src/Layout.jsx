import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import  AppSidebar  from "./SideBar";

export default function Layout({ children }) {
  return (
    <SidebarProvider className="w-96">
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
