import { requireAuthServer as requireAuth } from "./auth-server";

// const ADMIN_USERNAME = "admin";
// const ADMIN_PASSWORD = "admin123"; // In production, use environment variables and hashed passwords

// The server functions are re-exported for backward compatibility
// The original login, logout, isAuthenticated, and requireAuth functions are now imported from auth-server

export { requireAuth };
