import { IsString } from 'class-validator';

export namespace AccountBuyCourse{
	 // сервис.команда.тип 
	export const topic = 'account.buy-course.command'

	export class Request {
		@IsString()
		userId: string;

		@IsString()
		courseId: string;
	}
 
	export class Response{
		paymentUrl: string;	
	}

}


