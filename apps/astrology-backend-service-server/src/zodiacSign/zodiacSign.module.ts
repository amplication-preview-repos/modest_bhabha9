import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ZodiacSignModuleBase } from "./base/zodiacSign.module.base";
import { ZodiacSignService } from "./zodiacSign.service";
import { ZodiacSignController } from "./zodiacSign.controller";
import { ZodiacSignResolver } from "./zodiacSign.resolver";

@Module({
  imports: [ZodiacSignModuleBase, forwardRef(() => AuthModule)],
  controllers: [ZodiacSignController],
  providers: [ZodiacSignService, ZodiacSignResolver],
  exports: [ZodiacSignService],
})
export class ZodiacSignModule {}
