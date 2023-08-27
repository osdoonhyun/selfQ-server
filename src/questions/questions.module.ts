import { Module } from '@nestjs/common';
import { QuestionsService } from '@questions/questions.service';
import { QuestionsController } from '@questions/questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '@questions/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
