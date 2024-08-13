import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function start() {
  dotenv.config();
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);


  await app.listen(PORT, () => console.log('Server is running on port ' + PORT))
}
start();
