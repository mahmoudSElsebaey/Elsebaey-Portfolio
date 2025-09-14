import { about } from "./data";
import { PiArrowBendDownRightFill } from "react-icons/pi";

export default function AboutMe() {
  return (
    <div className="flex flex-col text-center gap-8 md:text-left" data-aos="zoom-in">
      <div className="flex flex-col gap-4 " data-aos="zoom-in">
        <h3 className="text-2xl md:text-4xl font-bold text-primary-1000" data-aos="zoom-in">
          {about.title}
        </h3>
        <p className="opacity-70 mx-auto xl:mx-auto md:leading-7 text-xs md:text-base" data-aos="zoom-in">
          {about.description}
        </p>
      </div>
      {/* <ScrollArea className="h-[400px] transition-all"> */}
      <ul className="grid grid-cols-1 md:grid-cols-2 w-full text-base sm:text-xl leading-[2] mx-auto md:mx-0 ">
        {about.info.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center w-[90%] m-auto md:w-full gap-1"  data-aos="zoom-in"
            >
              <span className="text-primary-1000 flex gap-[2px] items-center">
                <PiArrowBendDownRightFill /> {item.fieldName}
              </span>
              <span className="text-sm sm:text-base ">{item.fieldValue}</span>
            </li>
          );
        })}
      </ul>
      {/* </ScrollArea> */}
    </div>
  );
}
