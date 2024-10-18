import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function Register() {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    phone: ph,
    bio: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const MAX_TEXT_LENGTH = 286;

  function handleTextAreaChange(e) {
    const value = e.target.value;

    if (value.length <= MAX_TEXT_LENGTH) {
      setUser({ ...user, bio: value });
    }
  }

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          // eslint-disable-next-line no-unused-vars
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchaVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (data.error) {
        toast.error(data.error);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        // create new user in mongodb
        setUser(res.user);
        console.log(user);
        handleRegister();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className="m-auto w-full flex justify-center items-center">
      <Toaster toastOptions={{ duration: 4000 }} />

      <div id="recaptcha-container"></div>

      <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
        {showOTP ? (
          <div className="flex gap-6 flex-col my-16 items-center justify-center max-w-[400px] m-auto">
            <img
              src="/images/site.svg"
              className="w-12 h-12 flex items-center justify-center"
              alt=""
            />

            <div>
              <p className="font-medium text-2xl text-center mb-4">التحقق</p>
              <p className="font-normal text-xl text-center text-[#9E9E9E]">
                أدخل رمز التحقق المرسل إلى رقم هاتفك
              </p>
            </div>

            <OtpInput
              value={otp}
              onChange={setOtp}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="opt-container"
            />

            <button
              onClick={onOTPVerify}
              className="w-full h-12 font-semibold bg-[#40E378] rounded-lg btn-shadow"
            >
              التحقق والدخول
            </button>
          </div>
        ) : (
          <div className="flex gap-6 flex-col my-16 items-center justify-center max-w-[400px] m-auto">
            <img
              src="/images/site.svg"
              className="w-12 h-12 flex items-center justify-center"
              alt=""
            />

            <div>
              <p className="font-medium text-2xl text-start">
                انشأ حسابا جديدا!
              </p>
            </div>

            <form className="flex items-start flex-col gap-6 justify-start">
              <div className="w-[350px] flex flex-col mb-4">
                <label htmlFor="name" className="mb-4 font-medium">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  value={user.name}
                  placeholder="اكتب هنا ..."
                  className="w-full h-12 px-2 size-6"
                />
              </div>

              <div className="w-[350px] flex flex-col">
                <label htmlFor="username" className="mb-4 font-medium">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  value={user.username}
                  placeholder="username@"
                  className="w-full h-12 px-2 size-6 text-end"
                />
              </div>

              <div className="w-[350px] flex flex-col">
                <label htmlFor="phone" className="mb-4 font-medium">
                  رقم الهاتف
                </label>

                <PhoneInput
                  country={"eg"}
                  value={ph}
                  onChange={setPh}
                  inputClass="w-full h-12 px-2 size-6"
                />
              </div>

              <label htmlFor="password" className="font-medium">
                كلمة المرور
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="كلمة المرور"
                  className="h-12 w-[363px] px-4 rounded-lg text-end"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  value={user.password}
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

              <div className="w-[350px] flex flex-col">
                <label htmlFor="brief" className="mb-4 font-medium">
                  نبذة عني ({text.length}/286)
                </label>
                <textarea
                  cols={30}
                  type="text"
                  onChange={(e) => {
                    handleTextAreaChange();
                    setUser({ ...user, bio: e.target.value });
                  }}
                  value={user.bio}
                  placeholder="السلام عليكم ورحمة الله وبركاته ، اخبرنا عنك بالمختصر  وتواصل مع من حولك. ⚡️"
                  className="w-full h-36 px-2 size-6"
                />
              </div>

              {/* <button
                onClick={onSignup}
                className="w-full h-12 font-semibold bg-[#40E378] rounded-lg btn-shadow"
                type="submit"
              >
                التالي
              </button> */}
              <button
                onClick={handleRegister}
                className="w-full h-12 font-semibold bg-[#40E378] rounded-lg btn-shadow"
                type="submit"
              >
                التالي
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
