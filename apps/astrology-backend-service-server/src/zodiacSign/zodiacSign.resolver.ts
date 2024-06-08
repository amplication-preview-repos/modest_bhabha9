import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ZodiacSignResolverBase } from "./base/zodiacSign.resolver.base";
import { ZodiacSign } from "./base/ZodiacSign";
import { ZodiacSignService } from "./zodiacSign.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ZodiacSign)
export class ZodiacSignResolver extends ZodiacSignResolverBase {
  constructor(
    protected readonly service: ZodiacSignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
