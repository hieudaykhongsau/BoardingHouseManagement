import i18n from '../../i18n';
import showToast from '../../utils/toast';

export const handleAuthError = (error) => {
    const errorCode = error?.code;
    const t = i18n.t.bind(i18n);

    switch (errorCode) {
        case 'auth/popup-closed-by-user':
            // Khi người dùng bấm đăng nhập rồi tự tay đóng popup
            showToast.info(t('auth.popup_closed'));
            return;

        case 'auth/cancelled-popup-request':
            showToast.warning(t('auth.cancelled_popup'));
            return;

        case 'auth/popup-blocked':
            showToast.error(t('auth.popup_blocked'));
            return;

        case 'auth/network-request-failed':
            showToast.error(t('auth.network_error'));
            return;

        case 'auth/account-exists-with-different-credential':
            showToast.error(t('auth.account_exists'));
            return;

        default: {
            const serverMessage = error?.response?.data?.message;
            const message = serverMessage || error?.message || t('auth.login_failed');
            showToast.error(message);
            return;
        }
    }
};
