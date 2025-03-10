import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.servece';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './schemas/track.schecma';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { FileService } from 'src/file/file.service';

@Module({
  controllers: [TrackController],
  providers: [TrackService, FileService],
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
})
export class TrackModule {}
