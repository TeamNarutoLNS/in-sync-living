import { useEffect } from 'react';

const OmniWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.async = true;
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=e747ea03f5f17401d661ed14e5e4b989';

    document.body.appendChild(script);

    // Cleanup on unmount to avoid multiple instances
    return () => {
      const existing = document.getElementById('omnidimension-web-widget');
      if (existing) {
        document.body.removeChild(existing);
      }
    };
  }, []);

  return null; // Or return a placeholder <div> if needed
};

export default OmniWidget;
