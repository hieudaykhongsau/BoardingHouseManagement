import { Link } from 'react-router-dom';

const NotFound = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f3f4f6',
            fontFamily: 'sans-serif'
        },
        title: {
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#1f2937',
            margin: '0 0 1rem 0'
        },
        text: {
            fontSize: '1.25rem',
            color: '#4b5563',
            marginBottom: '2rem'
        },
        button: {
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: '500'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.text}>Trang bạn tìm kiếm không tồn tại.</p>
            <Link to="/" style={styles.button}>
                Về Trang chủ
            </Link>
        </div>
    );
};

export default NotFound;
