import React from "react";

const User = () => {
  return (
    <main className="min-h-screen bg-white grid">
      <div className="h-3/5 relative bg-cover bg-[url('https://th.bing.com/th/id/OIP.mnVfqsrwycAiaxy_A0Y_UQHaEK?pid=ImgDet&w=3840&h=2160&rs=1')] ">
        <div className="bg-black flex sm:flex-row flex-col flex-nowrap justify-between absolute bottom-6 text-white bg-opacity-70 w-full h-[70px]">
          <div className="h-32 sm:w-32 w-full flex flex-row justify-center">
            <img
              className="w-32 mx-4 bottom-0.5 my-auto h-32 border-4 rounded-full object-cover"
              src="https://jooinn.com/images/man39s-face-11.jpg"
            />
          </div>

          <div className="flex-row sm:flex hidden justify-center items-center">
            <ul className="bottom-5 left-64 flex sm:flex-row flex-col my-auto justify-center items-center w-min col-span-3">
              <li className="mx-5 font-semibold my-auto">Timeline</li>
              <li className="mx-5 font-semibold my-auto">About</li>
              <li className="mx-5 font-semibold my-auto">Album</li>
              <li className="mx-5 font-semibold my-auto">Friends</li>
            </ul>
          </div>

          <div className="bottom-4 right-4 flex my-auto justify-center col-span-3">
            <div className="sm:block hidden align-middle py-auto my-auto">
              1,299 people following her
            </div>
            <button className="bg-blue font-semibold px-4 text-white p-2 rounded-2xl mx-3">
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default User;
