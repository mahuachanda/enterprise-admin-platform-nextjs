"use client";
import { useState } from "react";
export default function EditUser() {
    const [isEditing, setIsEditing] = useState(false);
 return (
    <div>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit User"}
        </button>
    </div>
  );
}