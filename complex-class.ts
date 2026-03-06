// Complex TypeScript class with multiple conflict points - Feature B
export class UserManager {
    private users: Map<string, User> = new Map();
    private version: string = "1.5.0";
    private adminUsers: Set<string> = new Set();

    constructor(initialUsers?: User[]) {
        if (initialUsers) {
            initialUsers.forEach(user => this.users.set(user.id, user));
        }
        console.log("UserManager initialized with", this.users.size, "users");
    }

    addUser(user: User): void {
        if (this.users.has(user.id)) {
            throw new Error("User already exists");
        }
        this.users.set(user.id, user);
        console.log("User added:", user.id);
    }

    getUser(id: string): User | undefined {
        const user = this.users.get(id);
        if (!user) {
            console.warn("User not found:", id);
        }
        return user;
    }

    deleteUser(id: string): boolean {
        const result = this.users.delete(id);
        this.adminUsers.delete(id);
        return result;
    }

    getAllUsers(): User[] {
        return Array.from(this.users.values());
    }

    promoteToAdmin(userId: string): void {
        if (this.users.has(userId)) {
            this.adminUsers.add(userId);
        }
    }

    isAdmin(userId: string): boolean {
        return this.adminUsers.has(userId);
    }
}

interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}
