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
              Numbers That Prove
              <span className="text-[#80e01a]"> Our Performance</span> Marketing
              Works.
            </h1>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-20 px-4">
            <CommitmentCard
              title="Average ROAS"
              percen="3.5x to 4.2x"
              dec="Across Meta, Google, Amazon & Flipkart campaigns managed in the last 6 months."
            />
            <CommitmentCard
              title="Ad Spend Managed"
              percen="₹1.5Cr+"
              dec="Performance budgets handled for D2C, e‑commerce and lead‑gen brands."
            />
            <CommitmentCard
              title="Brands Scaled"
              percen="20+"
              dec="D2C and online businesses we’ve helped grow with performance marketing."
            />
            <CommitmentCard
              title="Client Retention"
              percen="98%"
              dec="Most clients stay with us 6+ months because we focus on ROAS, not vanity metrics."
            />
          </div>

          <div className="text-center max-w-6xl mx-auto px-4 mt-10">
            <h2 className="lg:text-[56px] md:text-[40px] text-[32px] text-white font-medium">
              From India to the World –{" "}
              <span className="text-[#80e01a]">Our Client</span> Footprint
            </h2>
          </div>
        </div>
      </div>

      {/* Map with matching background below */}
      <Map />
    </section>
  );
}
