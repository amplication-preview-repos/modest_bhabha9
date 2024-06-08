import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompatibilityServiceBase } from "./base/compatibility.service.base";

@Injectable()
export class CompatibilityService extends CompatibilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
