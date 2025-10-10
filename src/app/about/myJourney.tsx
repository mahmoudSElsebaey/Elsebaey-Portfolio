import Certificates from "./certificates";
import Education from "./education";

export default function MyJourney() {
  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-col gap-10">
        <Education />
        <Certificates />
      </div>
    </div>
  );
}
