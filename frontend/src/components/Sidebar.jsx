import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed h-full w-[250px] right-0 top-0 m-12 mt-16">
      <Link
        to="/"
        className={`flex mb-6 justify-between items-center ${
          location.pathname === "/" ? "text-black" : "text-black/50"
        }`}
      >
        <div className="flex gap-4">
          <img
            src="/images/vector.svg"
            className={`w-6 ${location.pathname !== "/" && "opacity-50"}`}
            alt=""
          />
          <p className="font-semibold">اكتشف</p>
        </div>

        <IoIosArrowBack />
      </Link>

      <Link
        to="/edit-profile"
        className={`flex gap-16 justify-between items-center ${
          location.pathname === "/edit-profile" ? "text-black" : "text-black/50"
        }`}
      >
        <div className="flex gap-4">
          <img
            src="/images/pen.svg"
            className={`w-6 ${
              location.pathname !== "/edit-profile" && "opacity-50"
            }`}
            alt=""
          />

          <p className="font-semibold">الملف التعريفي</p>
        </div>

        <IoIosArrowBack />
      </Link>
    </div>
  );
}
