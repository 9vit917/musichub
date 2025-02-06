import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Track } from './track.schecma';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  userName: string;

  @Prop()
  text: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Track' } })
  track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
