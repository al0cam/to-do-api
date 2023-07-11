import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task/task.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
