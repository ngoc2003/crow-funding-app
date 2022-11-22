import React, { useEffect, useState } from "react";
import Coming from "../../images/coming.png";
const ComingSoon = () => {
  const [result, setResult] = useState("");
  const [index, setIndex] = useState(0);
  const s = ". . . . .";
  useEffect(() => {
    setTimeout(() => {
      setResult(result + s.charAt(index));
    }, 500);
    if (index === s.length - 1) {
      setIndex(0);
      setResult("");
    } else {
      setIndex(index + 1);
    }
  }, [result]);

  return (
    <div className="flex items-center gap-8">
      <div className="flex-1">
        <img src={Coming} alt="" />
      </div>
      <div className="flex-1 font-semibold text-secondary">
        This Page will Coming Soon {result}
      </div>
    </div>
  );
};

export default ComingSoon;
