import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import ThemeProviderNext from "@/components/ThemeProviderNext";
import ThemeProviderMaterial from "@/components/ThemeProviderMaterial";
import Header from "@/components/Header";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Anasayfa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProviderNext>
          <ThemeProviderMaterial>
            <Header />
            {children}
          </ThemeProviderMaterial>
        </ThemeProviderNext>
      </body>
    </html>
  );
}
