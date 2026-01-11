import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Header1 from "../components/Header1";

import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-[#111418] transition-colors duration-300 flex flex-col">
      {/* <Navbar /> */}
      <Header1 />
   
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* <Footer1 /> */}

    </div>
  );
}
