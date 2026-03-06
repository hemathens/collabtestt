// Complex TypeScript class with multiple conflict points - Feature A
export class UserManager {
    private users: Map<string, User> = new Map();
    private version: string = "2.0.0";
    private maxUsers: number = 1000;

    constructor(maxUsers?: number) {
        this.maxUsers = maxUsers || 1000;
        console.log("UserManager initialized with max users:", this.maxUsers);
    }

    addUser(user: User): boolean {
        if (this.users.size >= this.maxUsers) {
            throw new Error("Maximum users reached");
        }
        this.users.set(user.id, user);
        return true;
    }

    getUser(id: string): User | undefined {
        return this.users.get(id);
    }

    deleteUser(id: string): boolean {
        return this.users.delete(id);
    }

    getAllUsers(): User[] {
        return Array.from(this.users.values());
    }

    getUserCount(): number {
        return this.users.size;
    }
}

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
