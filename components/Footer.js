import Image from "next/image";
import Link from "next/link";
import Floating from "./floating";

const Footer = () => {
    return (
        <footer className="text-gray-500 flex flex-col md:flex-row container mx-auto gap-10 my-10">

            <div className=" w-full">
                <Link href="/">
                    <a>
                        <div className="logo flex items-center gap-5 cursor-pointer">
                            <Image
                                src="/assets/svg/shark.svg"
                                width={75}
                                height={52}
                                alt="shark"
                            />
                            <div>
                                <p className=" font-hotpizza text-xl">
                                La Realeza
                            </p>
                                <p className="text-sm">feast like a king</p>
                            </div>
                        </div>
                    </a>
                </Link>


            </div>
            <div className=" w-full">
                <div className="nav-items flex flex-col sm:flex-row text-xl gap-5 sm:gap-12 justify-between">
                    <Link href="/">
                        <a className=" cursor-pointer hover:text-mustard-red ease-in-out duration-200">
                            Home
                        </a>
                    </Link>
                    <Link href="/menu">
                        <a className=" cursor-pointer hover:text-mustard-red ease-in-out duration-200">
                            Menu
                        </a>
                    </Link>
                    <Link href="/services">
                        <a className=" cursor-pointer hover:text-mustard-red ease-in-out duration-200">
                            Services
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a className=" cursor-pointer hover:text-mustard-red ease-in-out duration-200">
                            Contact
                        </a>
                    </Link>
                </div>

            </div>
            <div className="w-full">

                <h3 className="font-medium text-xl">Join Us</h3>
                <Floating/>

            </div>


        </footer>
    );
};

export default Footer;
