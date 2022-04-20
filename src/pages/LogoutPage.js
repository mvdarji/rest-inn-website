import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('user');
        navigate('/login', { replace: true});
    }, [navigate]);

	return ('');
}

export default LogoutPage;