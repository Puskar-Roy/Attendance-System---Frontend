import { FaHandPaper } from "react-icons/fa";
const Home = () => {
  return (
    <div className="pt-[3.25rem] px-[3rem] flex flex-col gap-[3rem] ubuntu-bold">
      <div className="flex flex-col gap-[50px]">
        <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-400 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
        <div>
          <h1 className="text-2xl font-bold ">
            Your <span className="text-indigo-500">Attendence</span>
          </h1>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex justify-center  gap-6">
            <div>
              <h1 className="font-bold">Total Present</h1>
              <div className="border-2  border-green-500 h-[100px] w-[170px] shadow-lg rounded-lg flex justify-center items-center text-black mt-2">
                20 days
              </div>
            </div>
            <div>
              <h1 className="font-bold">Total Present</h1>
              <div className="border-2  border-rose-500 h-[100px] w-[170px] shadow-lg rounded-lg flex justify-center items-center text-black mt-2">
                10 days
              </div>
            </div>
          </div>
          <button className="px-3 py-3 bg-indigo-500 rounded-xl w-[86%] mx-auto text-white ubuntu-medium flex justify-center items-center gap-3 hover:bg-indigo-400">
            <FaHandPaper />
            Give Todays Attendance
          </button>
          {/* <h1 className="p-2 text-center ubuntu-light bg-green-200 w-[350px] mx-auto rounded text-black">
            {" "}
            Attendance Successfull!
          </h1>
          <h1 className="p-2 text-center ubuntu-light bg-rose-200 w-[350px] mx-auto rounded text-black">
            {" "}
            Attendance Failed!
          </h1> */}
        </div>
        <div>
          <h1 className="text-2xl font-bold ">
            Your <span className="text-indigo-500">Profile</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
