import users from "../assets/data/users.json";

class AuthService {
  private currentUser: any = null;

  async login(username: string, password: string): Promise<boolean> {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("user");
  }

  getUser() {
    return this.currentUser || JSON.parse(localStorage.getItem("user") || "null");
  }

  isAuthenticated() {
    return this.getUser() !== null;
  }
}

export default new AuthService();
