import { PartialType } from '@nestjs/swagger';
import { CreateTeamDto } from './create-team.dto';
import {IsNotEmpty} from "class-validator";

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
    @IsNotEmpty()
    name:string
}
