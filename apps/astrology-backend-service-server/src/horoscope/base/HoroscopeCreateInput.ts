/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumHoroscopeSign } from "./EnumHoroscopeSign";

@InputType()
class HoroscopeCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dailyPrediction?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  monthlyPrediction?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumHoroscopeSign,
  })
  @IsEnum(EnumHoroscopeSign)
  @IsOptional()
  @Field(() => EnumHoroscopeSign, {
    nullable: true,
  })
  sign?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  weeklyPrediction?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  yearlyPrediction?: string | null;
}

export { HoroscopeCreateInput as HoroscopeCreateInput };
