import { toast as sonnerToast } from 'sonner';

/**
 * Centralized Toast utility using Sonner
 * Pre-configured with distinct semantic colors and sleek glassmorphism styling
 */
export const showToast = {
    /**
     * Success toast (Emerald green theme)
     */
    success: (message, description, options = {}) => {
        return sonnerToast.success(message, {
            description,
            duration: 3500,
            style: {
                background: 'rgba(6, 44, 28, 0.92)',
                color: '#ecfdf5',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                boxShadow: '0 8px 24px -4px rgba(6, 78, 59, 0.4)'
            },
            ...options
        });
    },

    /**
     * Error toast (Rose/Red theme)
     */
    error: (message, description, options = {}) => {
        return sonnerToast.error(message, {
            description,
            duration: 4500,
            style: {
                background: 'rgba(45, 10, 16, 0.92)',
                color: '#fff1f2',
                border: '1px solid rgba(244, 63, 94, 0.35)',
                boxShadow: '0 8px 24px -4px rgba(159, 18, 57, 0.4)'
            },
            ...options
        });
    },

    /**
     * Warning toast (Amber/Yellow theme)
     */
    warning: (message, description, options = {}) => {
        return sonnerToast.warning(message, {
            description,
            duration: 4000,
            style: {
                background: 'rgba(45, 30, 8, 0.92)',
                color: '#fffbeb',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                boxShadow: '0 8px 24px -4px rgba(180, 83, 9, 0.35)'
            },
            ...options
        });
    },

    /**
     * Info toast (Sky/Blue theme)
     */
    info: (message, description, options = {}) => {
        return sonnerToast.info(message, {
            description,
            duration: 3500,
            style: {
                background: 'rgba(8, 30, 48, 0.92)',
                color: '#f0f9ff',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                boxShadow: '0 8px 24px -4px rgba(3, 105, 161, 0.35)'
            },
            ...options
        });
    },

    /**
     * Loading toast
     */
    loading: (message, options = {}) => {
        return sonnerToast.loading(message, {
            style: {
                background: 'rgba(23, 27, 34, 0.92)',
                color: '#f8fafc',
                border: '1px solid rgba(255, 255, 255, 0.15)'
            },
            ...options
        });
    },

    /**
     * Dismiss toast by id or all
     */
    dismiss: (id) => sonnerToast.dismiss(id)
};

export default showToast;
