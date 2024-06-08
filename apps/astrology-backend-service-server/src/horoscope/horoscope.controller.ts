import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HoroscopeService } from "./horoscope.service";
import { HoroscopeControllerBase } from "./base/horoscope.controller.base";

@swagger.ApiTags("horoscopes")
@common.Controller("horoscopes")
export class HoroscopeController extends HoroscopeControllerBase {
  constructor(
    protected readonly service: HoroscopeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
