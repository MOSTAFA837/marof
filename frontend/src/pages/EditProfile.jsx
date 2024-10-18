import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function EditProfile() {
  const MAX_TEXT_LENGTH = 286;
  const [text, setText] = useState("");

  function handleTextAreaChange(e) {
    const value = e.target.value;

    if (value.length <= MAX_TEXT_LENGTH) {
      setText(value);
    }
  }

  return (
    <section className="flex w-full h-full bg-white">
      <div className="flex flex-1  h-full justify-center items-center mr-[250px] my-16 flex-col">
        <div className="flex justify-between gap-24">
          <FaRegCircleUser className="w-[24.5px] h-[24.5px]" />

          <p className="w-[15px] h-[19px] font-medium">
            Marof
            <span className="text-[#40E378]">.</span>
          </p>

          <img src="/images/site.svg" alt="" />
        </div>

        <div className="flex relative my-10">
          <input
            type="text"
            className="w-[277px] h-[38px] px-4 rounded-full"
            placeholder="ابحث هنا ..."
          />

          <img
            src="/images/search.svg"
            className="w-6 absolute top-2 left-2 flex juscent-center items-center"
            alt=""
          />
        </div>

        <div className="flex gap-2 w-[350px]">
          <img src="/images/profile.svg" className="w-[50px] h-[50px]" alt="" />

          <div className="flex flex-col">
            <span>اسم المستخدم</span>
            <span>username@</span>
          </div>
        </div>

        <p className="w-[350px] my-4">
          السلام عليكم ورحمة الله وبركاته ، اخبرنا عنك بالمختصر وتواصل مع من
          حولك. ⚡️
        </p>

        <div className="flex flex-col gap-1">
          <div className="flex gap-4 w-[350px]">
            <div className="flex gap-2">
              <img src="/images/location.svg" alt="" />
              <p className="text-[#40E378]">كوكب الأرض</p>
            </div>

            <div className="flex gap-2">
              <img src="/images/link.svg" alt="" />
              <p className="text-[#4A98E9]">yourwebsite.com </p>
            </div>
          </div>

          <div className="flex gap-4 w-[350px]">
            <div className="flex gap-2">
              <img src="/images/calender.svg" alt="" />
              <p className="text-[#72767A]">انضم يوليو 2024</p>
            </div>

            <div className="flex gap-2">
              <img src="/images/eye.svg" alt="" />
              <p className="text-[#72767A]">آخر ظهور سبتمبر 2024</p>
            </div>
          </div>
        </div>

        <div className="w-[350px] my-6 flex gap-2 justify-between border-b border-[#9B9B9B400] pb-6">
          <img
            src="/images/bg.png"
            className="w-[50px] h-[50px] object-cover rounded-lg"
            alt=""
          />
          <img
            src="/images/bg.png"
            className="w-[50px] h-[50px] object-cover rounded-lg"
            alt=""
          />
          <img
            src="/images/bg.png"
            className="w-[50px] h-[50px] object-cover rounded-lg"
            alt=""
          />
          <img
            src="/images/bg.png"
            className="w-[50px] h-[50px] object-cover rounded-lg"
            alt=""
          />
          <img
            src="/images/bg.png"
            className="w-[50px] h-[50px] object-cover rounded-lg"
            alt=""
          />

          <img src="/images/plus.svg" alt="" />
          <img src="/images/trash.svg" alt="" />
        </div>

        <form action="">
          <div className="w-[350px] flex flex-col mb-4">
            <label htmlFor="name" className="mb-4 font-medium">
              الاسم
            </label>
            <input
              type="text"
              id="name"
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
              placeholder="username@"
              className="w-full h-12 px-2 size-6 text-end"
            />
          </div>

          <div className="w-[350px] flex flex-col">
            <label htmlFor="brief" className="mb-4 font-medium">
              نبذة عني ({text.length}/{MAX_TEXT_LENGTH})
            </label>
            <textarea
              cols={30}
              type="text"
              id="brief"
              value={text}
              onChange={handleTextAreaChange}
              placeholder="السلام عليكم ورحمة الله وبركاته ، اخبرنا عنك بالمختصر  وتواصل مع من حولك. ⚡️"
              className="w-full h-36 px-2 size-6"
            />
          </div>

          <div className="w-[350px] flex flex-col mb-4 font-medium">
            <label htmlFor="email" className="mb-4">
              <span>الموقع الالكتروني</span>
              <span className="text-[#72767A] mr-4">اختياري</span>
            </label>

            <input
              type="text"
              id="email"
              placeholder="اكتب هنا ..."
              className="w-full h-12 px-2 size-6"
            />
          </div>

          <div className="w-[350px] flex flex-col mb-4 font-medium">
            <label htmlFor="email" className="mb-4">
              <span>الموقع الجغرافي</span>
              <span className="text-[#72767A] mr-4">اختياري</span>
            </label>

            <input
              type="text"
              id="email"
              placeholder="اكتب هنا ..."
              className="w-full h-12 px-2 size-6"
            />
          </div>

          <button className="w-full h-14 font-semibold bg-[#40E378] rounded-lg btn-shadow">
            تحديث
          </button>
        </form>
      </div>

      <Sidebar />
    </section>
  );
}

export default EditProfile;
