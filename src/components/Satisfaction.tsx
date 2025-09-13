import CommitmentCard from "@/common/CommitmentCard";
import Map from "@/common/Map";

export default function Satisfaction() {
  return (
    <section id="about" className="w-full relative overflow-hidden">
      {/* Background: black base + left neon green glow + hotspot + subtle right bloom + faint texture */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Black base */}
        <div className="absolute inset-0 bg-black" />
        {/* Left neon glow */}
        {/* <div className="absolute -left-24 top-0 w-[720px] h-[720px] rounded-full bg-[#80e01a] blur-[180px] opacity-45" /> */}
        {/* White hotspot inside the green for realism */}
        <div className="absolute left-40 top-24 w-64 h-64 rounded-full bg-white blur-[140px] opacity-10" />
        {/* Subtle right-hand fill so edges don't feel empty */}
        <div className="absolute right-[-10%] top-10 w-[560px] h-[560px] rounded-full bg-[#80e01a] blur-[220px] opacity-15" />
        {/* Original section texture very faint so glow remains visible */}
        <div
          className="absolute inset-0 bg-[url('/images/satisfaction.png')] bg-cover bg-center opacity-15"
          style={{ backgroundPosition: "center center" }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full pt-20 min-h-screen">
        <div className="container mx-auto flex flex-col justify-between py-20 px-5 min-h-screen">
          <div className="text-center max-w-6xl mx-auto px-4">
            <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-medium md:leading-[70px]">
              We Deliver{" "}
              <span className="text-[#80e01a]">Innovative Solutions</span> That
              Drive Business Success.
            </h1>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-20 px-4">
            <CommitmentCard
              title="Satisfaction"
              percen="100%"
              dec="We are dedicated to delivering high-quality work and exceeding expectations, ensuring a 100% satisfaction rate with every project."
            />
            <CommitmentCard
              title="COMMITMENT"
              percen="101%"
              dec="We are dedicated to meeting deadlines, maintaining clear communication, and ensuring the highest quality in all our work."
            />
            <CommitmentCard
              title="PROJECTS"
              percen="800+"
              dec="With a track record of completing over 800+ projects, We pride ourselves on delivering quality work on time & within budget."
            />
            <CommitmentCard
              title="CLIENTS"
              percen="500+"
              dec="We've had the privilege of working with over 300 clients worldwide, treating each with the utmost respect and professionalism."
            />
          </div>

          <div className="text-center max-w-6xl mx-auto px-4 mt-10">
            <h2 className="lg:text-[56px] md:text-[40px] text-[32px] text-white font-medium">
              World <span className="text-[#80e01a]">domination</span> 25%
            </h2>
          </div>
        </div>
      </div>

      {/* Map with matching background below */}
      <Map />
    </section>
  );
}
