interface CommitmentCardProps {
  title: string;
  percen: string;
  dec: string;
}

export default function CommitmentCard({
  title,
  percen,
  dec,
}: CommitmentCardProps) {
  return (
    <div
      className="
        flex flex-col justify-between rounded-[20px]
        bg-black/40
        px-8 py-12 h-full transition-all duration-300 border border-transparent
        hover:border-t hover:border-l hover:border-[#80e01a]
        hover:bg-[#80e01a1a]
        hover:shadow-[0_0_40px_rgba(128,224,26,0.35)]
      "
    >
      {/* Title */}
      <p className="text-white uppercase text-[16px] font-medium">{title}</p>

      {/* Content */}
      <div className="mt-8">
        <h2 className="text-white text-4xl font-medium">{percen}</h2>
        <p className="text-white/80 mt-6 font-mono text-[16px]">{dec}</p>
      </div>
    </div>
  );
}
