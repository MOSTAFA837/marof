import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex gap-6 flex-col my-16 items-center justify-center max-w-[400px] m-auto">
      <img
        src="/images/site.svg"
        className="w-12 h-12 flex items-center justify-center"
        alt=""
      />

      <div>
        <p className="font-medium text-2xl text-start">انضم الآن !</p>
        <p className="font-extrabold text-2xl">لتكون معروفاً لدى العالم</p>
      </div>

      <form className="flex items-start flex-col gap-6 justify-start" action="">
        <input
          type="text"
          placeholder="اسم المستخدم أو رقم الجوال"
          className="h-12 w-[363px] rounded-lg px-4"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="كلمة المرور"
            className="h-12 w-[363px] px-4 rounded-lg text-end"
          />

          {showPassword ? (
            <FaRegEye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-4 right-4 w-8 cursor-pointer"
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-4 right-4 w-8 cursor-pointer"
            />
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            htmlFor="remember"
            className="accent-[#40E378] checked:text-white size-4 rounded-lg"
          />
          <label id="remember" className="mr-2 font-normal">
            تذكرني
          </label>
        </div>

        <button className="w-full h-12 font-semibold bg-[#40E378] rounded-lg btn-shadow">
          تسجيل الدخول
        </button>
      </form>

      <div className="flex justify-between w-full">
        <Link
          to="/register"
          className="text-[#40E378] font-normal text-[16px] mx-6"
        >
          انشاء حساب
        </Link>
        <Link className="text-[#40E378] font-normal text-[16px] mx-6">
          نسيت كلمة المرور ؟
        </Link>
      </div>
    </div>
  );
}

export default Login;
