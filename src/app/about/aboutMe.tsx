import { about } from "./data";

export default function AboutMe() {
  return (
    <div className="container mx-auto my-5" data-aos="zoom-in">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15"
        data-aos="zoom-in"
      >
        {about.map((item, index) => {
          return (
            <p
              key={index}
              className="first-letter:font-bold first-letter:float-left first-letter:text-[70px] first-letter:leading-[60px]
               first-letter:ml-[-3px] first-letter:pr-1
                 tracking-wide border-dashed border-r-2 border-b-2 rounded-[30px] border-primary-1000/10 hover:border-primary-1000/50 pr-3 pb-3"
              data-aos="zoom-in"
            >
              <span
                className="text-primary-1000 font-bold text-xl"
                data-aos="zoom-in"
              >
                {item.title}
              </span>{" "}
              <span className="opacity-75 text-sm" data-aos="zoom-in">
                {item.desc}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
