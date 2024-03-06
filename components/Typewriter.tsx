'use client';
import React, { useState, useEffect } from 'react';

export default function Typewriter() {
  const phrases = ['Made with Next.JS'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentTypingIndex === phrases[currentPhraseIndex].length) {
        setIsDeleting(true);
      } else if (isDeleting && currentTypingIndex === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }

      setCurrentTypingIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    if (currentTypingIndex === phrases[currentPhraseIndex].length && !isDeleting) {
      setTypingSpeed(250); // Delay before deleting the phrase
    } else if (currentTypingIndex === 0 && isDeleting) {
      setTypingSpeed(100); // Delay before typing the next phrase
    }

    return () => clearTimeout(timeout);
  }, [currentTypingIndex, currentPhraseIndex, isDeleting, typingSpeed]);

  return (
    <div style={{ color : 'white'}}>
      {phrases[currentPhraseIndex].substring(0, currentTypingIndex)}
    </div>
  );
};


