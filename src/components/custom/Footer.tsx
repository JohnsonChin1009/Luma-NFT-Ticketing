"use client";

import { FaGithub } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className="bg-white border-t border-gray-300 text-center flex justify-evenly items-center space-x-12 lg:space-x-[300px] text-[10px] lg:text-[16px] px-4 py-4">
                <p className="font-semibold">
                    Built with 🖤
                </p>
                <a href="https://github.com/Laikaiyong/Luma.git" target="_blank" className="text-black text-[20px] lg:text-[32px] hover:text-gray-800 ease-in-out">
                    <FaGithub />
                </a>
            </footer>
        </>
    )
}