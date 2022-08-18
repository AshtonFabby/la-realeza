import Image from "next/image"
const DownloadButton =(props)=>{
    return(
        <div className="flex gap-3 items-center bg-[#241f2a] rounded-lg w-52 p-3 cursor-pointer">
            <div className=" icon w-[30px] h-[30px]"> 
                <Image width={30} height={30} alt='click' src={props.icon}/>
            </div>
            <div className=" text-white leading-none">
                <p className=" line text-sm leading-none">{props.topText}</p>
                <p className=" text-xl font-medium leading-none">{props.bottomText}</p>
            </div>
        </div>
    )
}

export default DownloadButton