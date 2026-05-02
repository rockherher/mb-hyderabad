import { clsx, type ClassValue } from 'clsx';
import type { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const handleScroll = (
  e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  id: string,
  cb?: () => void
): void => {
  e.preventDefault();
  const el = document.querySelector<HTMLElement>(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    cb?.();
  }
};