// ForceRefresh.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ForceRefresh() {
  const navigate = useNavigate();

  useEffect(() => {
    // Force the browser to reload the page from the server
    navigate('/');
  }, [navigate]);

  return null; // This component doesn't need to render anything
}

export default ForceRefresh;


