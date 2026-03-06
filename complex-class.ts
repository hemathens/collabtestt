export class UserManager {
  private users: Map<string, User> = new Map();
  private version: string = "1.5.0";
  private adminUsers: Set<string> = new Set();
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
  role: string;
}