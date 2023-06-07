import { InjectModel } from "@nestjs/mongoose";
import { User } from "../models/user.model";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";
import { IUser } from "@purple/interfaces";

@Injectable()
export class UserRepository {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<IUser>
	) {}

	async createUser(user:UserEntity){
		const newUser = new this.userModel(user);
		console.log(newUser);
		return newUser.save();
	}

	async findUser(email: string) {
		return this.userModel.findOne({email}).exec();
	}

	async deleteUser(email:string) {
		this.userModel.deleteOne({email}).exec();
	}
}