import { Account } from "@/models/account.model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn("uuid")
    id! : string 

    @Column("varchar", {length: 30})
    name! : string

    @OneToMany(() => Account, account => account.role)
    accounts!: Account[]
}