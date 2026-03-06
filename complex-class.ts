// Complex TypeScript class with multiple conflict points
export class UserManager {
    private users: Map<string, User> = new Map();
    private version: string = "1.0.0";

    constructor() {
        console.log("UserManager initialized");
    }

    addUser(user: User): void {
        this.users.set(user.id, user);
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
}

interface User {
    id: string;
    name: string;
    email: string;
}
