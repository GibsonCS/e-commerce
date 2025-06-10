import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Dashboard from "@/components/dashboard";

export default async function AdminPage() {
  //Get session data
  const session = await auth();
  if (!session) redirect("/login");

  const user = {
    username: session.user?.name,
    avatar: '454'
  }

  return (
    <div>
      <Dashboard user={user}/>  
    </div>
    
  );
}
