import { InjectRepository} from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { Todo } from "../entities/todo.entity";

export class TodoRepository {
    constructor(
        @InjectRepository(Todo)
        private readonly databaseService: Repository<Todo>
    ){}

    async create( createTodoDto: CreateTodoDto): Promise<CreateTodoDto> {
        return createTodoDto;
    }
    remove(id: number): void {
        
    }
}
