import { Calendar } from "app/components/Calendar";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-full mt-10">
      <p>home</p>
      <Calendar />
    </div>
  );
}
