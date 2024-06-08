import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HoroscopeServiceBase } from "./base/horoscope.service.base";

@Injectable()
export class HoroscopeService extends HoroscopeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
