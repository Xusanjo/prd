import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string

    @Column()
    password: string

    @Column({
        enum: ["male", "female"]
    })
    gender: "male" | "female";

    @Column()
    age: number;
}
