import { motion } from 'framer-motion';
import { Briefcase, BarChart, Paintbrush, Zap } from 'lucide-react'; // Usa los íconos que prefieras

const services = [
  {
    title: 'Apps Empresariales',
    description:
      'Diseñamos aplicaciones personalizadas y low-code para que tu negocio funcione como un reloj. CRM, inventarios, logística, turnos y más.',
    icon: <Briefcase size={32} className="text-blue-700" />,
  },
  {
    title: 'Dashboards y Análisis',
    description:
      'Visualizamos lo que otros no ven. Tableros en Power BI o Looker Studio con métricas clave, análisis predictivo y limpieza de datos profesional.',
    icon: <BarChart size={32} className="text-purple-600" />,
  },
  {
    title: 'Diseño de Marca y Presentaciones',
    description:
      'Tu marca también habla. Creamos identidades visuales modernas, logos memorables y presentaciones que venden.',
    icon: <Paintbrush size={32} className="text-pink-600" />,
  },
  {
    title: 'Automatización de Procesos',
    description:
      'Menos clics. Más resultados. Automatizamos flujos con herramientas como AppSheet, Google Sheets y WhatsApp Business.',
    icon: <Zap size={32} className="text-yellow-500" />,
  },
];

export default function Servicios() {
  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-16" id="servicios">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
        <p className="text-gray-500 mb-12">
          Soluciones a medida que combinan tecnología, creatividad y eficiencia.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4 flex items-center justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
