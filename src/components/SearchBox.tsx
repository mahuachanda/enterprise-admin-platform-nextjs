"use client";
import {useState} from "react";

export default function SearchBox() {
    const [search, setSearch] =useState("");
        return (<div>
        <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>)
}