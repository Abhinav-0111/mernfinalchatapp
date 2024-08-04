import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedUser } from "../redux/userSlice";
// import extractTime from "../utiles/exactTime";

const Chat = ({ item }) => {
    const dispatch = useDispatch();
    const { onlineUsers } = useSelector((state) => state.user);
    // const { messages } = useSelector((state) => state.message);
    const isOnline = onlineUsers.includes(item?._id);
    // const istym = messages.length;
    // const tym = messages[istym - 1];
    // const formattedTime = extractTime(tym?.createdAt);
    // console.log(item);

    return (
        <>
            <Link to={`/inbox`}>
                <div
                    className="chat1"
                    onClick={() => {
                        dispatch(getSelectedUser(item));
                    }}
                >
                    <div
                        className={`flex avatar ${
                            isOnline ? "online" : ""
                        } items-center justify-center h-12 w-12 rounded-full`}
                    >
                        <img
                            src={item?.profilePhoto}
                            alt="profileimg"
                            className="h-full w-full overflow-hidden cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col ml-5 overflow-hidden">
                        <span className="flex text-[16px] font-bold">
                            {item?.name}
                        </span>
                        {/* <span className="truncate w-full">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Saepe laboriosam eaque eum atque rem
                            repudiandae commodi labore facilis velit, doloremque
                            est placeat deleniti voluptatem autem exercitationem
                            maiores, dolorum ratione magnam.
                        </span> */}
                    </div>
                    {/* <span className="text-center">{formattedTime}</span> */}
                </div>
            </Link>
        </>
    );
};

export default Chat;
