import { Controller, Post, UseGuards} from '@nestjs/common';
import { JWTAuthGuard } from '../guards/jwt.guard';
import { UserId } from '../guards/user.decorator';

@Controller()
export class UserController {
	constructor(){}

	@UseGuards(JWTAuthGuard)
	@Post('info')
	async register (@UserId() userId: string){}

}
