import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HoroscopeModuleBase } from "./base/horoscope.module.base";
import { HoroscopeService } from "./horoscope.service";
import { HoroscopeController } from "./horoscope.controller";
import { HoroscopeResolver } from "./horoscope.resolver";

@Module({
  imports: [HoroscopeModuleBase, forwardRef(() => AuthModule)],
  controllers: [HoroscopeController],
  providers: [HoroscopeService, HoroscopeResolver],
  exports: [HoroscopeService],
})
export class HoroscopeModule {}
