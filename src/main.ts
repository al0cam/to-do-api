import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task/task.module';
import { ItemsModule } from './items/items.module';

async function bootstrap() {
  const app = await NestFactory.create([TaskModule, ItemsModule]);
  await app.listen(3000);
}
bootstrap();
