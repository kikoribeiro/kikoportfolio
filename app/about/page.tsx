import Typewriter from "@/components/Typewriter";
import Navbar from "@/components/Navbar";
import "../globals.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="py-20 h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Assumptions gets u killed
          </h1>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            World is changing
          </h2>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            “The strong should aid and protect the weak. Then, the weak will
            become strong, and they in turn will aid and protect those weaker
            than them. That is the law of nature.”
          </blockquote>
        </div>
      </div>
    </>
  );
}
