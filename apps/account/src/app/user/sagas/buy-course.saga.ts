import { RMQService } from "nestjs-rmq";
import { UserEntity } from "../entities/user.entity";
import { PurchaseState } from "@purple/interfaces";
import { BuyCourseSagaState } from "./buy-course.state";

export class BuyCourseSaga {
	private state: BuyCourseSagaState;

	constructor(public user: UserEntity,public courseId: string, public rmqService: RMQService){}

	getState(){
		return this.state;
	}

	setState(state:PurchaseState, courseId: string){
	switch(state)
		{
			case PurchaseState.Started:
			break;
			case PurchaseState.WaitingForPayment:
			break;
			case PurchaseState.Purchased:
			break;
			case PurchaseState.Canceled:
			break;
		}
		this.state.setContext(this);
		// установкак контекста
		this.user.updateCourseStatus(courseId,state);
	}
}