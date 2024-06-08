import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ZodiacSignService } from "./zodiacSign.service";
import { ZodiacSignControllerBase } from "./base/zodiacSign.controller.base";

@swagger.ApiTags("zodiacSigns")
@common.Controller("zodiacSigns")
export class ZodiacSignController extends ZodiacSignControllerBase {
  constructor(
    protected readonly service: ZodiacSignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
