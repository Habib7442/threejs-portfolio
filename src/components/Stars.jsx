import { halfStar, fullStar, blankStar } from "../assets";
const Stars = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <img className="w-20 h-30" src={fullStar} alt="" />
        ) : stars >= number ? (
          <img className="w-20 h-30" src={halfStar} alt="" />
        ) : (
          <img className="w-20 h-30" src={blankStar} alt="" />
        )}
      </span>
    );
  });

  return <div className="flex justify-center items-center">{ratingStar}</div>;
};

export default Stars;
