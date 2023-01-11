export class Users{
      id:Number;
      name:string;
      password:string;
      role:string;
      image:string;

      constructor(id: Number,name: string,password: string,role: string,image:string){
            this.id=id;
            this.name=name;
            this.password=password;
            this.role=role;
            this.image=image;
      }

}