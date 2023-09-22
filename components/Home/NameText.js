import React, { useEffect, useState } from "react";

const NameText = () => {
  const name = "박주희";
  const [nameText, setNameText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setNameText((prev) => {
        console.log(prev);
        const result = prev ? prev + name[count] : name[0];
        setCount(count + 1);

        console.log(count);

        if (count >= name.length) {
          setCount(0);
          setNameText("");
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return <div className="w-300">{nameText}</div>;
};

export default NameText;
