import Link from "next/link";
export default function Sidebar() {
    return (
        <aside className="w-64 bg-zinc-50 font-sans dark:bg-black">
            <nav>
                <ul>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/users">Users</Link></li> {/* Next.js Link component for client-side navigation */}
                    <li><Link href="/settings">Settings</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/reports">Reports</Link></li>
                </ul>
            </nav>
        </aside>
    );
}