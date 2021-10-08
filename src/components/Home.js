import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className={
        "home-header flex justify-center items-center text-white text-2xl"
      }
    >
      <Link to={"/"}>
        <h1
          className={
            "animate-pulse animate-fade-in-up bg-gray-500 py-6 px-10 mt-80"
          }
          style={{ borderRadius: "50px", opacity: 0.8 }}
        >
          Step Inside
        </h1>
      </Link>
    </div>
  );
}
