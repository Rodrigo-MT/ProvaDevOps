import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum RoomType {
  SINGLE = 'single',
  DOUBLE = 'double',
  SUITE = 'suite'
}

@Entity('rooms')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true })
  room_number: number;

  @Column({ type: 'int' })
  floor: number;

  @Column({ type: 'enum', enum: RoomType })
  type: RoomType;

  @Column({ type: 'boolean', default: false })
  occupied: boolean;
}
