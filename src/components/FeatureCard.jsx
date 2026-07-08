import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="rounded-full bg-gradient-to-br from-blue-950 to-blue-300 p-[4px]">
  <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#0B1E5B]">
    <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
  </div>
</div>

      <p className="text-white">{title}</p>
    </div>
  );
};

export default FeatureCard;