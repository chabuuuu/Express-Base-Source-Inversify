import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.model";

@Entity()
export class Role {
    @PrimaryGeneratedColumn("uuid")
    id! : string 

    @Column("varchar", {length: 30})
    name! : string

    @OneToMany(() => Account, account => account.role)
    accounts!: Account[]
}