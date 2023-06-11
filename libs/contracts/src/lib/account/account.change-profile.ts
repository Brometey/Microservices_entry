import {IUser} from '@purple/interfaces'
import { IsString } from 'class-validator'
export namespace AccountChangeProfile{
	 // сервис.команда.тип 
	export const topic = 'account.change-profile.command'
	export class Request {
		@IsString()
		id: string;

		@IsString()
		user: Pick<IUser, 'displayName'>
	}
 
	export class Response{

	}
}


