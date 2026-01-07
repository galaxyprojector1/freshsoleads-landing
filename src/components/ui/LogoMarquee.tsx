'use client'
import React from 'react';

export function LogoMarquee() {

    // --- Configuration des logos ---
    const platforms = [
        {
            name: "Google Ads",
            color: "group-hover:text-[#4285F4]",
            viewBox: "0 0 24 24",
            path: <path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.76-1.77 3.12-3.77 3.12-2.3 0-4.15-1.89-4.15-4.15s1.85-4.15 4.15-4.15c1.03 0 1.96.35 2.69 1.05l2.02-2.02C18.42 6.55 17 5.72 15 5.72c-3.9 0-7 3.1-7 7s3.1 7 7 7 2.12-.34 3.73-1.66 2.42-3.52 2.42-5.73 0-.75-.15-1.23z" />
        },
        {
            name: "Facebook",
            color: "group-hover:text-[#1877F2]",
            viewBox: "0 0 24 24",
            path: <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        },
        {
            name: "Instagram",
            color: "group-hover:text-[#E4405F]",
            viewBox: "0 0 24 24",
            path: <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        },
        {
            name: "LinkedIn",
            color: "group-hover:text-[#0A66C2]",
            viewBox: "0 0 24 24",
            path: <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        },
        {
            name: "TikTok",
            color: "group-hover:text-black",
            viewBox: "0 0 24 24",
            path: <path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.35-1.78 1.51-4.15 2.1-6.4 1.72-3.11-.53-5.54-3.13-5.74-6.26-.22-3.5 2.15-6.66 5.54-7.46.72-.17 1.48-.22 2.22-.09v3.85c-.17-.03-.35-.05-.52-.06-1.3-.06-2.48.56-3.15 1.63-.7 1.12-.66 2.57.11 3.65.77 1.09 2.16 1.64 3.48 1.38 1.43-.28 2.57-1.4 2.76-2.85.03-.5.03-1 0-1.5V.02z" />
        },
        {
            name: "Snapchat",
            color: "group-hover:text-[#FFFC00]",
            className: "group-hover:stroke-black",
            viewBox: "0 0 24 24",
            path: <path fill="currentColor" d="M12.003 0c-3.193 0-5.594 2.185-5.636 5.378-.009.684.148 1.408.437 2.069.043.098.051.18.016.236-.068.106-.299.16-.48.175-.436.037-.872.164-1.284.406-.39.23-.746.59-.858 1.066-.098.416.035.79.297 1.05.078.078.14.156.14.239 0 .093-.07.159-.168.214-1.04.585-1.503 1.258-1.503 2.072 0 .911.536 1.493 1.134 1.874.12.076.136.168.043.277-.669.785-.461 1.78.369 2.193.088.044.116.14.072.24-.316.719.123 1.619.986 1.834.408.102.83.08 1.23-.053.11-.037.203.016.287.082 1.281 1.002 2.923 1.41 4.57 1.41.012.002.023.002.035.002 1.786 0 3.523-.465 4.887-1.574.062-.051.142-.08.232-.047.387.139.795.166 1.191.072.885-.209 1.346-1.127 1.01-1.854-.041-.09-.018-.182.066-.223.854-.416 1.057-1.432.365-2.23-.09-.104-.074-.191.043-.266.611-.387 1.164-.973 1.164-1.896 0-.822-.473-1.498-1.529-2.086-.094-.053-.162-.115-.162-.205 0-.084.062-.162.139-.24 2.172-2.184-.814-2.834-1.635-2.898-.189-.016-.426-.07-.5-.18-.033-.053-.027-.133.016-.229.297-.674.461-1.41.451-2.115C17.653 2.215 15.23 0 12.003 0z" />
        },
        {
            name: "Microsoft Ads",
            color: "group-hover:text-[#00A4EF]",
            viewBox: "0 0 24 24",
            path: <path fill="currentColor" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
        },
        {
            name: "Pinterest",
            color: "group-hover:text-[#E60023]",
            viewBox: "0 0 24 24",
            path: <path fill="currentColor" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.512-6.224 7.512-1.21 0-2.348-.63-2.738-1.373 0 0-.599 2.287-.744 2.844-.282 1.084-1.064 2.456-1.549 3.235C9.54 24.879 10.75 25 12.017 25c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
        }
    ];

    return (
        <div className="w-full bg-white flex flex-col items-center justify-center font-sans">

            {/* Zone du bandeau défilant sans titre ni description autour */}
            <div className="w-full max-w-7xl mx-auto overflow-hidden relative marquee-container py-12">

                {/* Dégradés latéraux (Fade effect) */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                <div className="flex w-max animate-infinite-scroll items-center">

                    {/* --- BOUCLE 1 --- */}
                    <div className="flex items-center gap-20 px-10">
                        {platforms.map((platform, index) => (
                            <div
                                key={`p1-${index}`}
                                className="group flex flex-col items-center justify-center cursor-pointer gap-3 w-32"
                            >
                                {/* Icône */}
                                <div className={`w-14 h-14 flex items-center justify-center text-slate-400 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 ${platform.color} ${platform.className || ''}`}>
                                    <svg viewBox={platform.viewBox} className="w-full h-full fill-current">
                                        {platform.path}
                                    </svg>
                                </div>
                                {/* Texte du nom */}
                                <span className="text-sm font-bold text-slate-400 group-hover:text-slate-700 transition-colors duration-300">
                                    {platform.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* --- BOUCLE 2 (DUPLICATION) --- */}
                    <div className="flex items-center gap-20 px-10">
                        {platforms.map((platform, index) => (
                            <div
                                key={`p2-${index}`}
                                className="group flex flex-col items-center justify-center cursor-pointer gap-3 w-32"
                            >
                                {/* Icône */}
                                <div className={`w-14 h-14 flex items-center justify-center text-slate-400 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 ${platform.color} ${platform.className || ''}`}>
                                    <svg viewBox={platform.viewBox} className="w-full h-full fill-current">
                                        {platform.path}
                                    </svg>
                                </div>
                                {/* Texte du nom */}
                                <span className="text-sm font-bold text-slate-400 group-hover:text-slate-700 transition-colors duration-300">
                                    {platform.name}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
}
