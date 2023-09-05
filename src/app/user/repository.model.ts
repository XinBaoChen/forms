import { User } from "./user.model";
import { dataSoure } from "./dataSource.model";

export class UserRepository{
    private dataSource: dataSoure
    private users:User[]

    constructor(){
        this.dataSource = new dataSoure()
        this.users = new Array<User>()
        this.dataSource.getUser().forEach(u=>this.users.push(u))
    }
    getUsers():User[]{
        return this.users
    }
    getUserId(id:number){
        return this.users.find(u=> u.id == id)
    }
    addUser(user:User){
        this.users.push(user)
    }
}