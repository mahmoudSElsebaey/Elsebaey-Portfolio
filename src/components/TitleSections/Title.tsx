type TitleProps = {
  mainTitle: string;
  subTitle: string;
};

export default function Title({ mainTitle, subTitle }: TitleProps) {
  return (
    <div className="pt-15" data-aos="zoom-in">
      <h2
        className=" text-center text-4xl sm:text-5xl md:text-6xl text-primary-1000 uppercase font-extrabold"
        data-aos="zoom-in"
      >
        {mainTitle}
      </h2>
      <div
        className="flex justify-center items-center gap-2 "
        data-aos="zoom-in"
      >
        <div className="flex flex-col gap-1 w-[15%] md:w-[25%]">
          <span
            className="h-[1px] bg-primary-1000/70 "
            data-aos="zoom-in"
          ></span>
          <span
            className="h-[1px] bg-primary-1000/70 "
            data-aos="zoom-in"
          ></span>
        </div>
        <h3
          className="w-fit text-center text-[13px] md:text-[16px] dark:text-white/70 text-black/70 capitalize animate-pulse "
          data-aos="zoom-in"
        >
          {subTitle}
        </h3>
        <div
          className="flex flex-col gap-1 w-[15%] md:w-[25%]"
          data-aos="zoom-in"
        >
          <span
            className="h-[1px] bg-primary-1000/70 "
            data-aos="zoom-in"
          ></span>
          <span
            className="h-[1px] bg-primary-1000/70 "
            data-aos="zoom-in"
          ></span>
        </div>
      </div>
    </div>
  );
}
