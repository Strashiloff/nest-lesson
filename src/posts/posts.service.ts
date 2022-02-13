import { Injectable } from '@nestjs/common';
import { Post } from './post.model';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post)
    private postsRepository: typeof Post,
    private filesService: FilesService
  ) {}

  async createPost(dto: CreatePostDto, image: any) {
    const fileName = await this.filesService.createFile(image);
    const post = await this.postsRepository.create({
      ...dto,
      image: fileName
    });

    return post;
  }
}
