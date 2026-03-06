// ========== BASE VERSION (feature-b) ==========
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


// ========== HEAD VERSION (feature-a) ==========
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


// ========== INSTRUCTIONS ==========
// 1. Review both versions above
// 2. Identify the changes you want to keep
// 3. Manually edit this file to combine them
// 4. Test thoroughly before committing