import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from '@root/common/entities/common.entity';
import { Question } from '@questions/entities/question.entity';

@Entity()
export class Answer extends CommonEntity {
  @ManyToOne(() => Question, (question: Question) => question.answers)
  public question: Question;

  @Column('text', { array: true })
  public answers: string[];
}
