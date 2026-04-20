import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import Contact from "./Contact";

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-white flex flex-col justify-center items-center relative overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 text-center shadow-xl max-w-xl">

            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-pink-500 text-transparent bg-clip-text">
                Explore Beautiful Images
            </h1>

            <p className="text-gray-300 mt-4 text-lg">
                See the world through every lens.
            </p>

            <div className="flex justify-center gap-4 mt-8">

            <Link
                to="/Image"
                className="bg-amber-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
            >
                View Gallery
            </Link>

            <Link
                to="/Contact"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
                Contact
            </Link>

            </div>
        </div>

    </div>
    );
};

export default Home;