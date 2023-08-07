import { IsString } from 'class-validator';
import { PurchaseState } from '@purple/interfaces';

export namespace AccountChangedCourse{
	 // сервис.команда.тип 
	export const topic = 'account.changed-course.event'

	export class Request {
		@IsString()
		userId: string;

		@IsString()
		courseId: string;

		@IsString()
		state: PurchaseState;
	}
}
