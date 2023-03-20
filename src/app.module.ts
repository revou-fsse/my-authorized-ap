import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthenticationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
