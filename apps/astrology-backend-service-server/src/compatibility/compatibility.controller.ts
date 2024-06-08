import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompatibilityService } from "./compatibility.service";
import { CompatibilityControllerBase } from "./base/compatibility.controller.base";

@swagger.ApiTags("compatibilities")
@common.Controller("compatibilities")
export class CompatibilityController extends CompatibilityControllerBase {
  constructor(
    protected readonly service: CompatibilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
