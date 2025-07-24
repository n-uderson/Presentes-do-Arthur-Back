import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URI; 

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conexão com MongoDB estabelecida com sucesso.");
})
.catch((error) => {
  console.error("Erro ao conectar ao MongoDB:", error);
});

export default mongoose;