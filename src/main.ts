import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as process from "process";
import * as hbs from "express-handlebars";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3000;


  //app.useStaticAsviewsets(join(__dirname, '..', 'public'));
  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.engine(
      'hbs',
      hbs.engine({
            extname: 'hbs',
            partialsDir: join(__dirname, '..', 'views/partials'),
            defaultLayout: 'main',
            layoutsDir: join(__dirname,'..', 'views/layouts')
          }
      )
  )
  const config = new DocumentBuilder()
  .setTitle('Sports site')
  .setDescription('Sports site API')
  .setVersion('1.0')
  .addTag('Sports site')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();