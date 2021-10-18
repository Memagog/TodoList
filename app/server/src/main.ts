import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });

  const config = new DocumentBuilder()
        .setTitle('Nest.js server TodoApp')
        .setDescription('Nest.js, TypeORM, PostgreSql, Client-side by React')
        .setVersion('1.0.0')
        .addTag('George Korobko')
        .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
