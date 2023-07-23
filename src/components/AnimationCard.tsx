import GradientTracing from "@/components/GradientTracing";

const AnimationCard = () => {
  return (
    <div className="relative w-[500px] h-[300px]">
      <div className="absolute w-[300px] h-[200px] top-[50px] left-[100px] border-2 border-gray-200 rounded-lg flex flex-col">
        <h3 className="text-center my-4 text-lg font-bold text-gray-600">
          Card
        </h3>
      </div>
      <GradientTracing
        width={317}
        height={65}
        path="M316 0 V10 C316 12.2091 314.209 14 312 14 H5 C2.79086 14 1 15.7909 1 18 V80"
      />
    </div>
  );
};

export default AnimationCard;
