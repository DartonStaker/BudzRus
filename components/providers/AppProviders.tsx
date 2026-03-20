"use client";

import { CatalogProvider } from "./CatalogProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <CatalogProvider>{children}</CatalogProvider>;
}
