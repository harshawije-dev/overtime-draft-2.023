import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Overtime example')
    .setDescription('The Description')
    .setVersion('1.0')
    .addTag('overtime')
    .build();

  const docs = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, docs);

  await app.listen(3000);
}
bootstrap();
