import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HoroscopeResolverBase } from "./base/horoscope.resolver.base";
import { Horoscope } from "./base/Horoscope";
import { HoroscopeService } from "./horoscope.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Horoscope)
export class HoroscopeResolver extends HoroscopeResolverBase {
  constructor(
    protected readonly service: HoroscopeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
