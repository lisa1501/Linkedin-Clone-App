import React from 'react'
import Image from "next/image";

const home = () => {
    return (
        <div>
            <header>
                <div className="relative w-36 h-10">
                    <Image 
                        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" 
                        width={100}
                        height={30} 
                    />
                </div>
                <div>
                    
                </div>
            </header>
        </div>
    )
}

export default home