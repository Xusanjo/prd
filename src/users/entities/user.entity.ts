import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
@Schema()
export class User {
   @Prop({
    unique: true
   })
   email: string

   @Prop()
   password: string
}

export const userSchema = SchemaFactory.createForClass(User);
