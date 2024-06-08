/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { ZodiacSign } from "./ZodiacSign";
import { ZodiacSignCountArgs } from "./ZodiacSignCountArgs";
import { ZodiacSignFindManyArgs } from "./ZodiacSignFindManyArgs";
import { ZodiacSignFindUniqueArgs } from "./ZodiacSignFindUniqueArgs";
import { CreateZodiacSignArgs } from "./CreateZodiacSignArgs";
import { UpdateZodiacSignArgs } from "./UpdateZodiacSignArgs";
import { DeleteZodiacSignArgs } from "./DeleteZodiacSignArgs";
import { ZodiacSignService } from "../zodiacSign.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ZodiacSign)
export class ZodiacSignResolverBase {
  constructor(
    protected readonly service: ZodiacSignService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ZodiacSign",
    action: "read",
    possession: "any",
  })
  async _zodiacSignsMeta(
    @graphql.Args() args: ZodiacSignCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ZodiacSign])
  @nestAccessControl.UseRoles({
    resource: "ZodiacSign",
    action: "read",
    possession: "any",
  })
  async zodiacSigns(
    @graphql.Args() args: ZodiacSignFindManyArgs
  ): Promise<ZodiacSign[]> {
    return this.service.zodiacSigns(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ZodiacSign, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ZodiacSign",
    action: "read",
    possession: "own",
  })
  async zodiacSign(
    @graphql.Args() args: ZodiacSignFindUniqueArgs
  ): Promise<ZodiacSign | null> {
    const result = await this.service.zodiacSign(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ZodiacSign)
  @nestAccessControl.UseRoles({
    resource: "ZodiacSign",
    action: "create",
    possession: "any",
  })
  async createZodiacSign(
    @graphql.Args() args: CreateZodiacSignArgs
  ): Promise<ZodiacSign> {
    return await this.service.createZodiacSign({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ZodiacSign)
  @nestAccessControl.UseRoles({
    resource: "ZodiacSign",
    action: "update",
    possession: "any",
  })
  async updateZodiacSign(
    @graphql.Args() args: UpdateZodiacSignArgs
  ): Promise<ZodiacSign | null> {
    try {
      return await this.service.updateZodiacSign({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ZodiacSign)
  @nestAccessControl.UseRoles({
    resource: "ZodiacSign",
    action: "delete",
    possession: "any",
  })
  async deleteZodiacSign(
    @graphql.Args() args: DeleteZodiacSignArgs
  ): Promise<ZodiacSign | null> {
    try {
      return await this.service.deleteZodiacSign(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
