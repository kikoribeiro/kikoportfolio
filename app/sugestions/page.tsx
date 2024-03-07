import Typewriter from "@/components/Typewriter";
import Navbar from "@/components/Navbar";
import "../globals.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="py-20 h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Drop sugestions down here</h1>
          <p className="text-lg mb-8">FORM WILL BE HERE</p>
          <Typewriter />
        </div>
      </div>
    </>
  );
}
