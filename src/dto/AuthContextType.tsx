import {User} from "./User";

export interface AuthContextType {
    user: User | null;
    login: (credentials: { phone: string; password: string }) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
}
