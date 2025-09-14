import Certificates from "./certificates";
import Education from "./education";

export default function MyJourney() {
  return (
    <div className="flex flex-col gap-10">
      <Education />
      <Certificates />
    </div>
  );
}
