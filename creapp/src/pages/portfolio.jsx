import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "App para Barbería",
    description:
      "Gestión de citas con WhatsApp Business, Google Forms y AppSheet. Automatización total con experiencia sencilla.",
    type: "App",
    image: "https://via.placeholder.com/300x200?text=App+para+Barbería",
  },
  {
    title: "Dashboard Clínico",
    description:
      "Power BI con análisis de Mipres, tiempos de atención y uso de servicios para toma de decisiones clínicas.",
    type: "Dashboard",
    image: "https://via.placeholder.com/300x200?text=Dashboard+Clínico",
  },
  {
    title: "Identidad de Marca: Carolay",
    description:
      "Boutique juvenil con estilo único. Creamos logo, paleta de colores y eslogan para una marca viral.",
    type: "Marca",
    image: "https://via.placeholder.com/300x200?text=Identidad+de+Marca",
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Habilita el autoplay
    autoplaySpeed: 2000, // Tiempo entre desplazamientos (en milisegundos)
  };

  return (
    <section className="px-6 py-12 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10">Portafolio</h2>
      <LayoutGroup>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              layout
              key={index}
              onClick={() => setSelected(selected === index ? null : index)}
              className={`cursor-pointer rounded-2xl border border-gray-200 p-6 shadow hover:shadow-lg transition duration-300 ease-in-out ${
                selected === index ? "bg-gray-50" : ""
              }`}
            >
              {/* Imagen del proyecto */}
              <motion.img
                layout
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              {/* Título del proyecto */}
              <motion.h3 layout className="text-xl font-semibold mb-2 text-center">
                {project.title}
              </motion.h3>
              {/* Descripción y botón solo si está seleccionado */}
              {selected === index && (
                <motion.div layout className="mt-4 text-center">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => window.location.href = "#projects"}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Ver más proyectos
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </Slider>
      </LayoutGroup>
    </section>
  );
};

export default Portfolio;
