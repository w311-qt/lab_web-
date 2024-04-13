import {Controller, Get, Render, Res} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { SessionContainer } from "supertokens-node/recipe/session";
import { AuthGuard } from './auth/auth.guard';
import { Session } from './auth/session/session.decorator';

var testLogin = false


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getIndex(@Res() res: Response) {
    return res.render('index', {
      headerText: 'Sportnews',
      title: 'Sportnews',
      isGeneral: true,
      isLoggedIn: testLogin
    })
  }

  @Get('Vote')
  getVote(@Res() res: Response) {
    return res.render('vote', {
      headerText: 'Vote',
      title: 'Vote',
      isVote: true,
      isLoggedIn: testLogin
    })
  }

  @Get('cyber')
  getCyber(@Res() res: Response) {
    return res.render('cyber', {
      headerText: 'Cybersport News',
      title: 'CyberSportNews',
      isCyber: true,
      isLoggedIn: false
    })
  }

  @Get('contacts')
  getContacts(@Res() res: Response) {
    return res.render('contacts', {
      headerText: 'contacts',
      title: 'contacts',
      isContacts: true,
      isLoggedIn: false
    })
  }
  @Get('football')
  getFootball(@Res() res: Response) {
    return res.render('football', {
      headerText: 'Football News',
      title: 'Fotball News',
      isFootball: true,
      isLoggedIn: false
    })
  }

  @Get('comments')
  getComments(@Res() res: Response) {
    return res.render('comments', {
      headerText: 'comments',
      title: 'comments',
      isComments: true,
      isLoggedIn: testLogin
    })
  }

  @Get('loginuser')
  getLogin(@Res() res: Response) {
    return res.render('loginuser', {
      headerText: 'Login',
      title: 'login user',
      isLogin: true,
      isLoggedIn: false
    })
  }

  @Get('Profile')
  getProfile(@Res() res: Response) {
    return res.render('profile', {
      headerText: 'Profile',
      title: 'Profile',
      isProfile: true,
      isLoggedIn: true
    })
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
