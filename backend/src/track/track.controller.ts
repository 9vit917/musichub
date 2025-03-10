import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TrackService } from './track.servece';
import { CreateTrackDto } from './dto/create-track.dto';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(
    @UploadedFiles()
    files: { picture: Express.Multer.File[]; audio: Express.Multer.File[] },
    @Body() dto: CreateTrackDto,
  ) {
    const { picture, audio } = files;
    return this.trackService.create(dto, picture[0], audio[0]);
  }

  @Get()
  getAll(
    @Query('search') search: string,
    @Query('count') count: number,
    @Query('offset') offset: number,
  ) {
    return this.trackService.getAll(search, count, offset);
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.trackService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }

  @Get('/listen')
  listen(@Param('id') id: ObjectId) {
    return this.trackService.listen(id);
  }
}
