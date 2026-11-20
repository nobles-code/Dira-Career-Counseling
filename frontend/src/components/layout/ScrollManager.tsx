// src/components/layout/ScrollManager.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// The router does not restore scroll on navigation: jump to the #anchor, else reset to top.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView();
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}