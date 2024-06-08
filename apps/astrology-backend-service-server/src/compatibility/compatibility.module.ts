import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CompatibilityModuleBase } from "./base/compatibility.module.base";
import { CompatibilityService } from "./compatibility.service";
import { CompatibilityController } from "./compatibility.controller";
import { CompatibilityResolver } from "./compatibility.resolver";

@Module({
  imports: [CompatibilityModuleBase, forwardRef(() => AuthModule)],
  controllers: [CompatibilityController],
  providers: [CompatibilityService, CompatibilityResolver],
  exports: [CompatibilityService],
})
export class CompatibilityModule {}
