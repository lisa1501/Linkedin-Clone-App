import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Image from "next/image";



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

        </header>
    )
}

export default Header;