import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function DashBoardRoute() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl  font-medium">Your Blog Articles</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Blog
        </Link>
      </div>
    </div>
  );
}
