export type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive'; // union type 
}

export const users: User[] = [
    { id: 1, name: 'John Doe', email: '', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: '', role: 'User', status: 'inactive' },
    { id: 3, name: 'Alice Johnson', email: '', role: 'User', status: 'active' },
    { id: 4, name: 'Bob Brown', email: '', role: 'Admin', status: 'inactive' },
]
