import { IsBoolean, IsEnum, IsInt, IsNotEmpty, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { RoomType } from '../entities/room.entity';

export class CreateRoomDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  room_number: number;

  @Type(() => Number)
  @IsInt()
  floor: number;

  @IsEnum(RoomType)
  type: RoomType;

  @IsBoolean()
  occupied: boolean;
}
