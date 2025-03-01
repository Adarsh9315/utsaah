import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import "../app/css/bootstrap.min.css";
import "../app/css/style.css";
import "../app/css/owl.carousel.min.css";
import "../app/css/magnific-popup.css";
import "../app/css/font-awesome.min.css";
import "../app/css/themify-icons.css";
import "../app/css/nice-select.css";
import "../app/css/flaticon.css";
import "../app/css/gijgo.css";
import "../app/css/animate.css";
import "../app/css/slicknav.css";
import "../app/css/embla.css"
import LoadRazorpayScript from "../components/molecules/loadRazorpayScript";

export const metadata: Metadata = {
  title: "Charifit",
  description: "Charifit is a charity that helps cancer patients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <LoadRazorpayScript />
        {children}
        <Footer />
      </body>
    </html>
  );
}
