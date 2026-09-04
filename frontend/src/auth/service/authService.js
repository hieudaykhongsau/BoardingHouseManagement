import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import api from "../../config/axios";

const AuthService = {
    handleGoogleLogin: async () => {
        try {
            // 1. Dùng Firebase làm Identity Provider để lấy idToken của Google
            const result = await signInWithPopup(auth, googleProvider);
            const firebaseToken = await result.user.getIdToken();

            // 2. Gửi firebaseToken sang BE để verify và sinh JWT riêng của hệ thống
            const response = await api.post('/auth/google', {
                token: firebaseToken
            });

            const { accessToken, userData } = response.data;

            // 3. Lưu JWT của BE vào localStorage
            if (accessToken) {
                localStorage.setItem('accessToken', accessToken);
                if (userData) {
                    localStorage.setItem('userData', JSON.stringify(userData));
                }
            }

            return response.data;
        } catch (error) {
            console.error("Lỗi đăng nhập Google:", error);
            throw error;
        }
    },

    logout: async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Lỗi signOut Firebase:", error);
        } finally {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userData');
        }
    }
};

export default AuthService;