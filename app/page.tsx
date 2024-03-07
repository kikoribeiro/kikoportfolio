import Typewriter from "@/components/Typewriter";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="py-20 h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio</h1>
          <p className="text-lg mb-8">The One and Only</p>
          <Typewriter />
        </div>
      </div>
    </>
  );
}
