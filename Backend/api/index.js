// api/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001; // Puedes cambiarlo si quieres

app.use(cors());
app.use(express.json());

const datos = {
  inicio: {
    titulo: "Bienvenido a Farmacia SaludVida",
    descripcion: "Somos tu farmacia de confianza, abierta 24/7.",
    items: ["Atención personalizada", "Farmacéuticos certificados", "Ambiente higiénico"]
  },
  medicamentos: {
    titulo: "Medicamentos disponibles",
    descripcion: "Contamos con analgésicos, antibióticos, vitaminas y más.",
    items: ["Paracetamol", "Amoxicilina", "Vitamina C", "Ibuprofeno", "Jarabe para la tos"]
  },
  servicios: {
    titulo: "Nuestros servicios",
    descripcion: "Toma de presión, control de glucosa, asesoría farmacéutica.",
    items: ["Toma de presión", "Control de azúcar", "Aplicación de inyecciones", "Atención domiciliaria"]
  },
  promociones: {
    titulo: "Promociones del mes",
    descripcion: "Hasta 20% de descuento en medicamentos seleccionados.",
    items: ["Descuento en vitaminas", "2x1 en jarabes", "10% en productos naturales"]
  }
};

app.get('/api/seccion/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.json(datos[nombre] || { error: 'Sección no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});
