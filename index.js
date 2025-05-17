// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database.js');

// Modelos activos
const Company = require('./models/company');
const Quotation = require('./models/quotation');

// Crear app
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


// Rutas
const companyRoutes = require('./routes/company.routes');
const quotationRoutes = require('./routes/quotation.routes');

app.use('/api/company', companyRoutes);
app.use('/api/quotations', quotationRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor de Cotizaciones funcionando ✔️');
});

// Conectar base de datos y levantar servidor
sequelize.authenticate()
  .then(() => {
    console.log('🔌 Conexión a la base de datos exitosa');
    return sequelize.sync(); // Sincroniza todos los modelos
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar a la base de datos:', err);
  });
