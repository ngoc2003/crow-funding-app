import React, { useState } from "react";
import Checkbox from "./checkbox/Checkbox";

const Term = () => {
  const [acceptTerm, setAcceptTerm] = useState(false);
  return (
    <div className="flex items-start mb-5 gap-x-5">
      <Checkbox
        name="term"
        checked={acceptTerm}
        onClick={() => setAcceptTerm(!acceptTerm)}
      >
        <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
          I agree to the
          <span className="underline text-secondary"> Terms of Use</span> and
          have read and understand the
          <span className="underline text-secondary"> Privacy policy.</span>
        </p>
      </Checkbox>
    </div>
  );
};

export default Term;
