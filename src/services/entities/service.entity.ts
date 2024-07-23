import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Service {
    @Prop({
        unique: true
    })
    name: string

    @Prop({})
    description: string

    @Prop({})
    price: number
}

export const srevicSchema = SchemaFactory.createForClass(Service);
