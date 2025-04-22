"use client";
import * as motion from "motion/react-client";
import React from "react";
import Lottie from "lottie-react"; // <-- Importa Lottie correctamente
import teamAnimation from '../assets/team-animation.json';

const values = [
    "Creatividad con propósito",
    "Tecnología con humanidad",
    "Simplicidad en la ejecución",
    "Resultados medibles",
];

export default function About() {
    return (
        <div className="min-h-screen bg-white px-6 py-16 md:px-20 lg:px-40">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center"
            >
                Sobre Nosotros
            </motion.h1>

            {/* Contenedor principal con texto + imagen */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Texto */}
                <div className="flex-1">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10"
                    >
                        En <span className="font-semibold text-indigo-700">Creapp</span>{" "}
                        creemos que la tecnología debe ser <strong>accesible</strong>,{" "}
                        <strong>funcional</strong> y <strong>visual</strong>. <br />
                        Somos una firma joven de desarrollo y análisis, especializada en
                        acompañar a empresas que quieren mejorar su operación{" "}
                        <em>sin morir en el intento</em>.
                        <br />
                        Hacemos que tus{" "}
                        <span className="text-blue-600 font-medium">datos</span> trabajen
                        por ti, que tus{" "}
                        <span className="text-blue-600 font-medium">procesos</span> se
                        automaticen, y que tu{" "}
                        <span className="text-blue-600 font-medium">marca</span> tenga una
                        identidad clara y poderosa.
                    </motion.p>

                    {/* Valores */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                            Nuestros Valores
                        </h2>
                        <ul className="space-y-4">
                            {values.map((val, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-blue-50 border-l-4 border-indigo-500 text-gray-700 p-4 rounded-lg shadow-sm"
                                >
                                    {val}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Imagen animada */}
                <motion.div
                    className="flex-1 w-full max-w-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Lottie animationData={teamAnimation} loop={true} />
                </motion.div>
            </div>
        </div>
    );
}
