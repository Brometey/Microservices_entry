import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { UserRepository } from './repositories/user.repository';
import { UserCommand } from './user.command';
import { UserQueries } from './user.queries';

@Module({
  imports: [MongooseModule.forFeature(
    [{ name: User.name, schema: UserSchema}]
  )],
  providers: [UserRepository],
  exports: [UserRepository], 
  controllers: [UserCommand, UserQueries]
})
export class UserModule {}
