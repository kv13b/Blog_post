import Link from "next/link";
import { Button } from "../ui/button";

export function NavBar(){
    return(
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
            <Link href="/">
                <h1 className="text-3xl font-semibold">
                Blog<span className="text-blue-500">Karthik</span>
            </h1>
            </Link>
            <div className="hidden sm:flex items-center gap-6">
                <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/">
                Home
                </Link>
            </div>
            <div className="hidden sm:flex items-center gap-6">
                <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/dashboard">
                DashBoard
                </Link>
            </div>
            </div>
            <div className="flex items-center gap-4">
                <Button>Login</Button>
                <Button variant="secondary">SignUp</Button>
            </div>
        </nav>
    )
}