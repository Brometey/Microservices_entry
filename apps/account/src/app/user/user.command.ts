import { Body } from "@nestjs/common";
import { AccountBuyCourse, AccountChangeProfile, AccountCheckPayment } from "@purple/contracts";
import { RMQValidate, RMQRoute } from "nestjs-rmq";
import { UserRepository } from "./repositories/user.repository";
import { UserEntity } from "./entities/user.entity";

export class UserCommand{
	constructor(private readonly userRepository: UserRepository){}

	@RMQValidate()
	@RMQRoute(AccountChangeProfile.topic)
	async userInfo (@Body() {user, id} : AccountChangeProfile.Request): Promise<AccountChangeProfile.Response>{
		const existedUser = await this.userRepository.findUserById(id);
		if (!existedUser){
			throw new Error('Такого пользователя не существует')
		}
		const userEntity = new UserEntity(existedUser).updateProfile(user.displayName);
		await this.userRepository.updateUser(userEntity);
		return {}
	}

	@RMQValidate()
	@RMQRoute(AccountBuyCourse.topic)
	async buyCourse (@Body() {userId, courseId} : AccountBuyCourse.Request): Promise<AccountBuyCourse.Response>{
		
	}

	@RMQValidate()
	@RMQRoute(AccountCheckPayment.topic)
	async checkPayment (@Body() {userId, courseId} : AccountChangeProfile.Request): Promise<AccountCheckPayment.Response>{
		
	}
}

