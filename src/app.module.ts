import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata"
import {join} from "path";
import { UsersModule } from './users/users.module';
import { ArticleModule } from './article/article.module';
import { TeamModule } from './team/team.module';
import { CommentModule } from './comment/comment.module';
import { PlayerModule } from './player/player.module';
import { AuthModule } from './auth/auth.module';


@Module({
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  imports: [AuthModule],
})

@Module({
  imports: [
    UsersModule,ArticleModule,TeamModule,CommentModule,ArticleModule,PlayerModule,CommentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cnioe88l5elc73fdtp70-a.frankfurt-postgres.render.com',
      port: 5432,
      username: 'w311_isy25_db_user',
      password: 'Bq8MGHzAONkhJrkgajVWYqsTQLz9j2Ae',
      database: 'w311_isy25_db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      ssl: true
    }),
  ],
})

@Module({
  imports: [
    AuthModule.forRoot({
      // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: "https://try.supertokens.com",
      // apiKey: <API_KEY(if configured)>,
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/emailpassword/appinfo
        appName: "is-y25-w311",
        apiDomain: "http://[::1]:3000",
        websiteDomain: "http://[::1]:3000",
        apiBasePath: "/api/auth",
        websiteBasePath: "/auth"
      },
    }),
  ],
  controllers: [/* ... */],
  providers: [/* ... */],
})

export class AppModule {
}