"use client";

import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";

// Example usage
export function useAppPathMatch(APP_EDITOR_URL: string) {
  const pathname = usePathname();

  // Create a matcher using path-to-regexp
  const matcher = match(APP_EDITOR_URL, { decode: decodeURIComponent });

  return matcher(pathname); // returns { params, path, index } or false
}
