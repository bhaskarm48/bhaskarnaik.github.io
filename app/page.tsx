import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-blue-500/30 font-sans text-foreground">
      {/* 500vh Scrolly section containing canvas and Hero overlay */}
      <ScrollyCanvas />

      {/* Experience Timeline / Cards */}
      <div className="bg-[#121212] border-t border-white/5">
        <Experience />
      </div>

      {/* Projects Grid */}
      <div className="bg-[#121212] border-t border-white/5">
        <Projects />
      </div>

      {/* Education Summary */}
      <section className="bg-[#121212] py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-md shadow-2xl">
            <h2 className="text-3xl font-semibold text-white mb-4">Education</h2>
            <p className="text-xl text-blue-300 font-medium">
              Masters in Management and Information System
            </p>
            <p className="text-neutral-400 mt-2 text-lg">
              University of Illinois at Springfield, USA
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-[#121212] border-t border-white/10 text-center flex flex-col items-center justify-center space-y-4">
        <span className="text-neutral-500 font-medium tracking-wide">
          © {new Date().getFullYear()} Bhaskar Naik Mudavath. All rights reserved.
        </span>
      </footer>
    </main>
  );
}
