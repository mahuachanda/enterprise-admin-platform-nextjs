"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar() {

    const pathName = usePathname();//get the current path name from the browser.

    const navigation = [
        {label:"Dashboard", href:'/dashboard'},
        {label:"Users",href:'/users'},
        {label:"Settings",href:'/settings'},
        {label:"Products",href:'/products'},
        {label:"Reports",href:'/reports'}
    ]
    return (
        <aside className="w-64 bg-zinc-50 font-sans dark:bg-black">
            <nav>
                <ul>
                {navigation.map((item)=>(<li key={item.href}>
                    <Link  href={item.href} className = {pathName===item.href ? "active" : ""}>{item.label}</Link>
                </li>))}
                
                </ul>
            </nav>
        </aside>
    );
}