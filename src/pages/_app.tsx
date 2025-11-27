import Layout from "@/layout/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

const drukCyr = localFont({
  src: [
    {
      path: "../../public/fonts/DrukCyr-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/DrukCyr-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/DrukCyr-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/DrukCyr-Super.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-druk-cyr",
});

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/helvetica-light-587ebe5a59211.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${gilroy.variable} ${drukCyr.variable} ${helvetica.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
