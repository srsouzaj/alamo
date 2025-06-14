import localFont from "next/font/local";

export const blink = localFont({
  src: [
    {
      path: "./BlinkMacSystemFont-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./BlinkMacSystemFont-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./BlinkMacSystemFont-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./BlinkMacSystemFont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./BlinkMacSystemFont-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./BlinkMacSystemFont-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./BlinkMacSystemFont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./BlinkMacSystemFont-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-blink",
  display: "swap",
});
