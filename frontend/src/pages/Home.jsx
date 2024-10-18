import { FaRegCircleUser } from "react-icons/fa6";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <section className="flex w-full h-full bg-white">
      <div className="flex flex-1  h-full justify-center items-center mr-[250px] mt-16 flex-col">
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
            <span>@username</span>
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

        <div className="w-[350px] mt-6">
          <img
            src="/images/suit.png"
            alt=""
            className="w-full object-contain"
          />
        </div>
      </div>

      <Sidebar />
    </section>
  );
}

export default Home;
