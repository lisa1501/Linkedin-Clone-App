import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";



import HeaderLink from "./HeaderLink";



const Header = () => {
    return (
        <header>
            <div className="flex items-center space-x-2 w-full max-w-xs">
                <img alt="logo" src="https://www.iconsdb.com/icons/preview/white/linkedin-3-xl.png" width="45" height="45" /> 
                <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rouded w-full">
                    <SearchRoundedIcon />
                    <input
                        type="text"
                        placeholder="Search"
                        className="hidden md:inline-flex bg-transparent text-sm focus:outline-none
                            placeholder-black/70 dark:placeholder-white/75 flex-grow"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-6">
                <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
                <HeaderLink Icon={GroupIcon} text="My Network" feed />
                <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
                <HeaderLink Icon={ChatIcon} text="Messaging" feed />
                <HeaderLink Icon={NotificationsIcon} text="Notifications" feed active/>
                <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
                <HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />
            </div>

        </header>
    )
}

export default Header;