'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem('cookieConsent');
    if (hasConsented === null) {
      // Only show consent if no choice has been made
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 max-w-md bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] z-50"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-full">
                <Cookie className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-sm text-gray-700">
                <h3 className="font-semibold text-base mb-1">🍪 Cookie Notice</h3>
                <p className="leading-relaxed">
                  Psst! My website uses cookies to make your visit sweeter! They help enhance your experience and let me see which things are crowd favorites.
                  The cookie jar is yours to control!
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={declineCookies}
                className="text-sm flex-1 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
              >
                Decline
              </Button>
              <Button
                onClick={acceptCookies}
                className="text-sm flex-1 bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 