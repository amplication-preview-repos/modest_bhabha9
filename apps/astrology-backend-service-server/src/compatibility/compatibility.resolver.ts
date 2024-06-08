import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CompatibilityResolverBase } from "./base/compatibility.resolver.base";
import { Compatibility } from "./base/Compatibility";
import { CompatibilityService } from "./compatibility.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Compatibility)
export class CompatibilityResolver extends CompatibilityResolverBase {
  constructor(
    protected readonly service: CompatibilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
