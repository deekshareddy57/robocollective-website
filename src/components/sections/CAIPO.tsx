"use client";

import { motion } from "framer-motion";


export function CAIPO() {
    return (
        <section className="relative w-full min-h-screen bg-black flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-24 overflow-hidden border-t border-neutral-800/50 py-24 md:py-0">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 space-y-6 pt-12 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                        Meet <span className="text-[#00DBFF]">CAIPO</span>
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-xl">
                        CAIPO combines tactile sensors, gesture intelligence, and a holographic interface to help teams experience next-generation robotic presence.
                    </p>
                    <a
                        href="https://caipo-new-website.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-[#00DBFF] font-semibold hover:underline"
                    >
                        Learn more about CAIPO
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-[#00DBFF] to-transparent mt-12"
                />
            </div>

            {/* Right Content - 3D Spline */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative flex items-center justify-center mt-12 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing"
                >
                    {/* Spline iframe embed - 100% crash proof alternative to @splinetool/react-spline */}
                    <iframe
                        src="https://my.spline.design/iWYqI71r83hJvW67/"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        className="absolute inset-0 w-full h-full"
                    />
                </motion.div>

                {/* Subtle Glow behind the model */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00DBFF]/10 blur-[100px] rounded-full pointer-events-none" />
            </div>

        </section>
    );
}
