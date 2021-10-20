import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
        .setTitle('Nest.js server TodoApp')
        .setDescription('Nest.js, TypeORM, PostgreSql, Client-side by React')
        .setVersion('1.0.0')
        .addTag('George Korobko')
        .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(process.env.PORT || 4000).then(() => console.log(`app liste to PORT ${process.env.PORT}`));
}
bootstrap();
