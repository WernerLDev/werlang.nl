import "./main.scss";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Providers } from "../providers";
import { HtmlWithTheme } from "../components/HtmlWithTheme";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const lora = Lora({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "werlang.nl",
  description: "Personal website of Werner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <HtmlWithTheme>
        <body className={lora.className}>
          <div className="fluid-container page-wrapper">
            <Navigation
              menuItems={[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/blog", label: "Blog" },
              ]}
            />
            {children}
          </div>

          <Footer />
        </body>
      </HtmlWithTheme>
    </Providers>
  );
}
