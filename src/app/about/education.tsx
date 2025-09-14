import { education } from "./data";
export default function Education() {
  return (
    <div className="flex flex-col text-center gap-8 lg:text-left" data-aos="zoom-in">
      <div className="flex flex-col gap-4 ">
        <h3 className="text-2xl md:text-4xl font-bold text-primary-1000" data-aos="zoom-in">
          {education.title}
        </h3>
        <p className="opacity-70 mx-auto md:mx-0 text-xs  md:text-base " data-aos="zoom-in">
          {education.description}
        </p>
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-5 md:mx-0">
        {education.items.map((item, index) => {
          return (
            <li
              key={index}
              data-aos={item.fadeDir}
              className="dark:bg-primary-1000/10 bg-primary-1000/40 flex flex-col justify-center items-center
                           h-[180px] rounded-lg lg:items-start px-10"
            >
              <span className="text-primary-1000 " data-aos="zoom-in">{item.duration}</span>
              <h3 className="text-base sm:text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" data-aos="zoom-in">
                {item.institution}
              </h3>
              <div className=" flex justify-center items-center gap-3" data-aos="zoom-in">
                <span className="w-2 h-2 rounded-full bg-primary-1000 hidden md:block animate-pulse"></span>
                <p className="opacity-50 text-xs sm:text-base ">
                  {item.degree}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
