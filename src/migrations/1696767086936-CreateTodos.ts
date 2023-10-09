import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodos1696767086936 implements MigrationInterface {
  name = 'CreateTodos1696767086936';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "todos" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todos"`);
  }
}
