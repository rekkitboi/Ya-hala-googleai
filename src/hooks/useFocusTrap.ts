import { useEffect, useRef } from 'react';

export const useFocusTrap = (isActive: boolean) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let focusableElements = Array.from(
      modal.querySelectorAll<HTMLElement>(focusableElementsString)
    ).filter(el => {
      // Exclude hidden elements
      return el.offsetWidth > 0 && el.offsetHeight > 0;
    });

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element initially
    firstElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      } else if (e.key === 'Escape') {
        // Optional: you can handle escape key here or in the component
      }
    };

    modal.addEventListener('keydown', handleKeyDown);

    return () => {
      modal.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);

  return modalRef;
};
