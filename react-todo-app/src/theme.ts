// src/theme.ts
import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  accentColor: "#ffce33",
  cardBgColor: "#1e272e",

  bgColor: "#0b0f14",
  textColor: "#e9eef2",
  cardBg: "rgba(255,255,255,0.06)",
  cardBorder: "rgba(255,255,255,0.10)",
  surface: "rgba(255,255,255,0.05)",
  primary: "#78a6ff",
  danger: "#ff6b6b",
  success: "#6ee7b7",
  warn: "#f8d56b",
  inputBg: "rgba(255,255,255,0.07)",
  shadow: "0 10px 30px rgba(0,0,0,0.25)",
  radius: "18px",
  gap: "16px",
  blur: "12px",
};

export const lightTheme: DefaultTheme = {
  accentColor: "#3b82f6",
  cardBgColor: "#ffffff",

  bgColor: "#f7f9fc",
  textColor: "#0b0f14",
  cardBg: "rgba(255,255,255,0.7)",
  cardBorder: "rgba(14, 28, 45, 0.06)",
  surface: "rgba(255,255,255,0.85)",
  primary: "#3b82f6",
  danger: "#ef4444",
  success: "#10b981",
  warn: "#f59e0b",
  inputBg: "rgba(255,255,255,0.9)",
  shadow: "0 8px 20px rgba(14,28,45,0.08)",
  radius: "18px",
  gap: "16px",
  blur: "8px",
};
