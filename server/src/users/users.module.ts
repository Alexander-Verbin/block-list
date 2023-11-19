import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DbModule } from 'src/db/db.module';

@Module({
  providers: [UsersService],
  imports: [DbModule],
  exports: [UsersService],
})
export class UsersModule {}
