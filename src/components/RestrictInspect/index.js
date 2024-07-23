import { useEffect } from 'react';

const RestrictInspect = () => {
  useEffect(() => {
    function detectDevTools() {
      let threshold = 160;
      const interval = setInterval(() => {
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
          alert('Admin Disabled Developer Tools for a Better Experience');
          clearInterval(interval);
        }
      }, 1000);
    }

    function handleContextMenu(event) {
      event.preventDefault();
      alert('Admin Disabled Developer Tools for a Better Experience');
    }

    function handleKeyDown(event) {
      if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
        alert('Admin Disabled Developer Tools for a Better Experience');
      }
    }

    detectDevTools();
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default RestrictInspect;
