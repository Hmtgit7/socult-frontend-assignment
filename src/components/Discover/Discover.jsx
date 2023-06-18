import React, { useState } from "react";
import { people } from "./people";
import { useRouter } from "next/router";

const Discover = () => {
  const route = useRouter();

  const [friendOne, setFriendOne] = useState(false);
  const [friendTwo, setFriendTwo] = useState(false);
  const [friendThree, setFriendThree] = useState(false);
  const [friendFour, setFriendFour] = useState(false);
  const [friendFive, setFriendFive] = useState(false);
  const [friendSix, setFriendSix] = useState(false);
  const [friendSeven, setFriendSeven] = useState(false);

  const add = "Add Friend";
  const added = "Added";

  return (
    <div className="bg-white p-3 shadow-md hover:shadow-lg h-min  rounded-md ">
      <div className="text-textgray text-xl min-h  font-semibold ">
        Who to Follow
        <div className="flex my-4 py-2 " key="John">
          <img
            src="https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
            <span
              onClick={(e) => {
                e.preventDefault();
                route.push("/user");
              }}
              className="text-blue cursor-pointer hover:text-slate-600"
            >
              Diana Amber
            </span>
            <span
              onClick={() => setFriendOne(!friendOne)}
              className={` hover:text-green-600 cursor-pointer ${
                friendOne === false ? "text-green" : "text-red"
              }`}
            >
              {friendOne === false ? add : added}
            </span>
          </div>
        </div>
        <div className="flex my-4 py-2 " key="John">
          <img
            src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
            <span
              onClick={(e) => {
                e.preventDefault();
                route.push("/user1");
              }}
              className="text-blue cursor-pointer hover:text-slate-600"
            >
              Cris Haris
            </span>
            <span
              onClick={() => setFriendTwo(!friendTwo)}
              className={` hover:text-green-600 cursor-pointer ${
                friendTwo === false ? "text-green" : "text-red"
              }`}
            >
              {friendTwo === false ? add : added}
            </span>
          </div>
        </div>
        <div className="flex my-4 py-2 " key="John">
          <img
            src="https://jooinn.com/images/man39s-face-11.jpg"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
            <span
              onClick={(e) => {
                e.preventDefault();
                route.push("/user2");
              }}
              className="text-blue cursor-pointer hover:text-slate-600"
            >
              Olivia Steward
            </span>
            <span
              onClick={() => setFriendThree(!friendThree)}
              className={` hover:text-green-600 cursor-pointer ${
                friendThree === false ? "text-green" : "text-red"
              }`}
            >
              {friendThree === false ? add : added}
            </span>
          </div>
        </div>
        <div className="flex my-4 py-2 " key="John">
          <img
            src="https://images.alphacoders.com/752/752287.jpg"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
            <span
              onClick={(e) => {
                e.preventDefault();
                route.push("/user3");
              }}
              className="text-blue cursor-pointer hover:text-slate-600"
            >
              Brian Walton
            </span>
            <span
              onClick={() => setFriendFive(!friendFive)}
              className={` hover:text-green-600 cursor-pointer ${
                friendFive === false ? "text-green" : "text-red"
              }`}
            >
              {friendFive === false ? add : added}
            </span>
          </div>
        </div>
        <div className="flex my-4 py-2 " key="John">
          <img
            src="https://m0.her.ie/wp-content/uploads/2013/07/c460ad5e029b818cfcab33d52ad4d9317d84ebcc.jpeg"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
            <span
              onClick={(e) => {
                e.preventDefault();
                route.push("/user4");
              }}
              className="text-blue cursor-pointer hover:text-slate-600"
            >
              Sophia Page
            </span>
            <span
              onClick={() => setFriendFour(!friendFour)}
              className={` hover:text-green-600 cursor-pointer ${
                friendFour === false ? "text-green" : "text-red"
              }`}
            >
              {friendFour === false ? add : added}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
