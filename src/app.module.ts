import { Module } from "@nestjs/common";
import { TaskModule } from "./task/task.module";
import { ItemsModule } from "./items/items.module";


@Module({
    imports: [TaskModule, ItemsModule],
    controllers: [],
    providers: [],
})
export class AppModule {}