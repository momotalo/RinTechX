import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white flex flex-col justify-between min-h-screen">
       <Header />
       <Footer />
    </div>
  );
}
