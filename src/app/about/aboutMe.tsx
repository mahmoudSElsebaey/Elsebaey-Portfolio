import { about } from "./data";

export default function AboutMe() {
  return (
    <div className="container mx-auto my-5">
      <section className="min-h-screen py-10 px-6 text-center font-sans">
        <div className="max-w-3xl mx-auto text-justify space-y-8 transition-all duration-300">
          {about.map((item, index) => {
            return (
              <p key={index} className="drop-cap">
                <span className="drop-cap inline-block">{item.title}</span> {item.desc}
              </p>
            );
          })}
        </div>
      </section>
    </div>
  );
}
