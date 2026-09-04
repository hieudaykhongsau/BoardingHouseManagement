import { createContext, useContext, useState, useEffect } from "react";
import AuthService from "../service/authService";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const storedUser = localStorage.getItem('userData');

        if (token && storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Lỗi parse userData từ localStorage:", e);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('userData');
                setUser(null);
            }
        } else {
            setUser(null);
        }
        setLoading(false);
    }, []);

    const loginWithGoogle = async () => {
        try {
            const data = await AuthService.handleGoogleLogin();
            // Lấy dữ liệu user từ backend trả về và lưu vào state
            if (data?.userData) {
                setUser(data.userData);
            }
            return data;
        } catch (error) {
            console.error("Lỗi đăng nhập bằng Google trong context:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await AuthService.logout();
            setUser(null);
        } catch (error) {
            console.error("Lỗi đăng xuất:", error);
        }
    };

    const value = {
        user,
        loading,
        loginWithGoogle,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};