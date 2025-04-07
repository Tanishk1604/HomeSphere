import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// 👇 Add this for API calls
export const baseURL = import.meta.env.VITE_API_BASE;

export const apiRequest = async (endpoint, method = "GET", data = null) => {
  try {
    const res = await fetch(`${baseURL}${endpoint}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : null,
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "API error");
    return result;
  } catch (err) {
    console.error("API Request Error:", err.message);
    throw err;
  }
};
