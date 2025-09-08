import Image from "next/image";
import { FaStar } from "react-icons/fa"; // Only need full star icon

interface ReviewCardProps {
  username: string;
  country: string;
  comment: string;
  countryCode?: string;
}

export default function ReviewCard({
  username,
  country,
  comment,
  countryCode,
}: ReviewCardProps) {
  const getFlagUrl = (code: string) =>
    `https://flagcdn.com/w20/${code.toLowerCase()}.png`;

  return (
    <div className="bg-black/40 backdrop-blur-sm mx-auto max-w-[370px] min-h-[250px] rounded-xl p-6 border border-white/10 hover:border-[#80e01a] hover:bg-[#80e01a1a] transition-colors duration-300 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_0_rgba(128,224,26,0.15)]">
      {/* User info with flag */}
      <div className="flex justify-start items-start gap-3 mb-4">
        <div className="rounded-full  flex flex-col items-start justify-center">
          <span className="text-white font-medium text-[18px]">{username}</span>
          <div className="flex items-center">
            {countryCode && (
              <div className="w-5 h-3 relative">
                <Image
                  src={getFlagUrl(countryCode) || "/placeholder.svg"}
                  alt={`${countryCode} flag`}
                  fill
                  className="object-cover rounded-sm"
                  unoptimized={true}
                />
              </div>
            )}
            <h3 className="text-white/60 ml-1 font-medium text-[12px]">
              {country}
            </h3>
          </div>
        </div>
      </div>
      {/* Username and Name with Flag */}
      <div></div>

      {/* Comment */}
      <p className="text-white/80 text-[16px]">{comment}</p>
      {/* Fixed 5-star rating */}
      <div className="flex items-center gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
    </div>
  );
}
