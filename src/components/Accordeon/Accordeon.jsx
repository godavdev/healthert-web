import { useState } from "react";
import AccordeonTitle from "./AccordeonTitle/AccordeonTitle";
import AccordeonCard from "./AccordeonCard/AccordeonCard";

export const Accordeon = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }
  return (
    <div className="flex flex-col items-center max-w-screen-xl">
      {items.map((item, index) => (
        <div key={index} className="mg:max-w-md lg:w-3/4 sm:w-3/4">
          <AccordeonTitle
            item={item}
            index={index}
            activeIndex={activeIndex}
            onClick={handleClick}
          />
        <AccordeonCard item={item} index={index} activeIndex={activeIndex} />
        </div>
      ))}
    </div>
  )
}