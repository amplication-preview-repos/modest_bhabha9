import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ZodiacSignServiceBase } from "./base/zodiacSign.service.base";

@Injectable()
export class ZodiacSignService extends ZodiacSignServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
