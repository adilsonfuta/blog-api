import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, PostsModule, CommentsModule],
  controllers:[],
  providers:[],
  exports:[DomainModule],

})
export class DomainModule {}
