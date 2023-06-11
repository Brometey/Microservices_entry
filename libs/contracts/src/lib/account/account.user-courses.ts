import { IsString } from 'class-validator';
import { IUserCourses} from '@purple/interfaces'
export namespace AccountUserCourses{
	 // сервис.команда.тип 
	export const topic = 'account.user-courses.query'

	export class Request {
		@IsString()
		id: string;
	}
 
	export class Response{
		courses: IUserCourses[]
	}

}


