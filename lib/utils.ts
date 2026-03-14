import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python:     "#3572A5",
  Java:       "#b07219",
  "Jupyter Notebook": "#DA5B0B",
  HTML:       "#e34c26",
  CSS:        "#563d7c",
  Go:         "#00ADD8",
  Rust:       "#dea584",
  Shell:      "#89e051",
};
