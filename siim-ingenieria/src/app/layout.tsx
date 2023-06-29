import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIIM Group",
  description:
    "Distribuidora de Materiales y Equipos en las áreas de Detección y Extinción de Incendios, Seguridad Electrónica, Ferretería, Electricidad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={"/img/favicons/Light.svg"}
        />
      </head> */}
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
