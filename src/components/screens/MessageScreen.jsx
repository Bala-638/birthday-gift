"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happiest Birthday, Baby! You deserve all the happiness, love, and smiles in the world today and always. Unna Romba kashta paduthi irukka baby.but, konjam Happya vachi irunthu irukka.sooo, Sorry for everything i does to you
                        and Thanks for everything you does to Me. Innaiku unnoda Birthday, Mudinja varaikkum Happya iru Baby. Find a reason to smile every day,
                        and Love you So Much Baby, Once Again Happiest Birthday to My Love, My Life, My one and Only caretaker.Intha Photos lam Pathu iruppa antha photos edutha Memories lam yosichi paaru,
                        Antha Days lam one of the Happiest days in my Life and Sorryyyyy Babyyyy.... and Thanks for Everything Babyyyyy... and Love you So Much Babyyyyyyyyy..... 💗
                        Keep being the amazing person you are, spreading joy wherever you go. Wishing you endless happiness. Love You Pondattyyyyyy.....
                    </p>
                </motion.div>
            </div>
        </div>
    )
}