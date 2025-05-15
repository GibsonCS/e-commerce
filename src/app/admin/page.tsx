import Aside from "@/components/Aside";
import {auth} from '../../../auth'
import { redirect } from "next/navigation";

export default async function AdminPage() {
    const session = await auth()

    if(!session?.user?.email) {
      redirect('/login')
    }

  return (
    <div className="flex h-full">
      <Aside />
      {/* <div className="flex  border bg-amber-400">dsds</div> */}
    </div>
  );
}
