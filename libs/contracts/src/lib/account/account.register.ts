export namespace AccountRegister {
	 // сервис.команда.тип 
	export const topic = 'account.login.command'

	export class Request {
		email: string;
		password: string;
		displayName?: string;
	}

	export class Response{
		email: string;
	}

}


