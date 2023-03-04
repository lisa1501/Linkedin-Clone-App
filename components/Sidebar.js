import Image from "next/image";
import { Avatar } from "@mui/material";
import { signOut } from 'next-auth/react'

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
            </div>
    
            {/* bottom */}
        </div>
    )
}

export default Sidebar