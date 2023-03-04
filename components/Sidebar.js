import Image from "next/image";
import { Avatar } from "@mui/material";
import { signOut } from 'next-auth/react';
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

const Sidebar = () => {
    return (
        <div className="space-y-2 min-w-max max-w-lg">
            {/* top */}
            <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center
                            text-center border border-gray-300 dark:border-none">
                <div className="relative w-full h-14">
                    <Image src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg" 
                            priority alt="logo" fill="true" />
                </div>
                <Avatar 
                    onClick={signOut}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOlN7qulppjwD_BeyT_J4me7qT__P3cy66A&usqp=CAU"
                    className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"/>

                <div className="mt-3 py-4  space-x-0.5">
                    <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
                        hello world
                    </h4>
                    <p className="text-black/60 dark:text-white/75 text-sm">
                        helloworld@gmai.com
                    </p>
                </div>

                <div className="hidden md:inline text-left dark:text-white/75 text-sm">
                    <div className="font-medium sidebarButton space-y-0.5">
                        <div className="flex justify-between space-x-2">
                            <h4>who viewed your profile</h4>
                            <span className="text-blue-500">321</span>
                        </div>

                        <div className="flex justify-between space-x-2">
                            <h4>Views of your post</h4>
                            <span className="text-blue-500">1802</span>
                        </div>
                    </div>

                    <div className="sidebarButton">
                        <h4 className="leading-4 text-xs">
                            Access exclusive tools & insights
                        </h4>
                        <h4 className="dark:text-white font-medium">
                            <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
                            Try Premium for free
                        </h4>
                    </div>

                    <div className="sidebarButton flex items-center space-x-1.5">
                        <BookmarkOutlinedIcon className="!-ml-1" />
                        <h4 className="dark:text-white font-medium">My items</h4>
                    </div>


                </div>
            </div>
    
            {/* bottom */}
        </div>
    )
}

export default Sidebar