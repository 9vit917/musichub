import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schecma';
import { Model, ObjectId } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FILE_TYPE, FileService } from 'src/file/file.service';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {}

  async create(
    dto: CreateTrackDto,
    picture: Express.Multer.File,
    audio: Express.Multer.File,
  ): Promise<Track> {
    const audioPath = this.fileService.createFile(FILE_TYPE.AUDIO, audio);
    const picturePath = this.fileService.createFile(FILE_TYPE.IMAGE, picture);
    const track = await this.trackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath,
    });
    return track;
  }

  async getAll(
    search: string = '',
    count: number = 10,
    offset: number = 0,
  ): Promise<Track[]> {
    const tracks = await this.trackModel
      .find({ artist: new RegExp(search, 'i') })
      .limit(count)
      .skip(offset);
    return tracks;
  }

  async getOne(id: ObjectId): Promise<string | Track> {
    const trackById = await this.trackModel
      .findById(id)
      .populate('comments')
      .then((track) => (track ? track : `Track not found`));

    return trackById;
  }

  async delete(id: ObjectId) {
    const trackForRemove = await this.trackModel
      .findByIdAndDelete(id)
      .then((deletedTrack) => {
        if (deletedTrack) {
          return {
            message: 'Track deleted successfully!',
            track: deletedTrack,
          };
        } else {
          return { message: 'Track not found' };
        }
      })
      .catch((error) => {
        console.error('Error deleting track:', error);
      });
    return trackForRemove;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    track?.comments.push(comment);
    await track?.save();
    return comment;
  }

  async listen(id) {
    await this.trackModel.findById(id).then((track) => {
      if (track) {
        track.listens += 1;
        track.save();
      } else return `Track not found`;
    });
  }
}
