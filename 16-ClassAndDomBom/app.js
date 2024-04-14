class Human{
    constructor(name,surname,age=0,gender,nationality){

        this.name=name;
        this.surname=surname;
        this.age=age;
        this.gender=gender;
        this.nationality=nationality;

    }

    getFullNmae(){
        return (`${this.name} ${this.surname}`)
    }
    getBirthYear(){
        const currentYear = new Date().getFullYear();
        return currentYear-this.age
    }
}





class User extends Human{
    constructor(name,surname,age=0,gender,nationality,username,email,isAdmin,isLogged,password,bio){
        super(name,surname,age,gender,nationality)
        this.username=username;
        this.email=email;
        this.isAdmin=typeof isAdmin == "boolean" ? isAdmin : console.log("enter boolean")
        this.password=password.length >=5 ? password : console.log("Passoword is short");
        this.bio = bio.length <= 30 ? bio : console.log("Bio length is very Long");
        this.isLogged = typeof isLogged== "boolean" ? isLogged : False;
    }
    getFullNmae(){
        return super.getFullNmae()
    }
    getBirthYear(){
        return super.getBirthYear()
    }
    changePassword(currentPassword,newPassword){
        if(currentPassword===this.password){
            if(currentPassword===newPassword){
                return "new password and current password is the same"
            }
            else{
                this.password=newPassword;
                return "password updated successfully"
            }

        }
        else{
            alert(`Your current password - ${this.password}`)
        }

    }
    changeEmail(users,newEmail){

        const emailExits=users.some(user=>user.email===newEmail);
        if(!emailExits){
            if(this.email===newEmail){
                return "new email and current email is the same"
            }
            else{
                this.email=newEmail
                return "email updated successfully"
            }

        }
        else{
            alert(`Your current email - ${this.email}`)
        }

    }
    sortUsersByUsername = (usersArray)=>{
        return usersArray.sort((a,b) => a.username.localeCompare(b.username));
    }
    filterByBirthYear = (users,year)=>{
        let result=users.filter(elem=>elem.age>year);
        console.log(result);
    }
    login = (users, username, password) => {
        let user = users.find(elem => elem.username === username);
        if (!user) {
            return 'User not found!';
        } else if (user.password !== password) {
            return 'Incorrect username or password!';
        } else if (user.isLogged) {
            return 'Another user currently logged in!';
        } else {
            user.isLogged = true;
            alert('Successfully logged in');
            return 'Successfully logged in';
        }
    }
    LogOut = (users,username) =>{
        let result=users.find(elem=>elem.username===username);
    
        if(!result){
            return 'user not found'
        }
        else if(users.isLogged==true){
            users.isLogged==false;
            return "succesfully"
            
        }
        else{
            return 'user did not logged in to log out!'
        }
    
    }
    CreateUser=(users,person)=>{

     users.push(person)
     console.log(users);


} 

   DeleteUser=(users,username)=>{

    let result=users.findIndex(elem=>elem.username===username);
    
    if(result!==-1){
        users.splice(result,1)
        return "User deleted successfully"
    }
    else{
       return "use not found"
    }



} 
}



const person= new User("umud","elizade",22,"kisi","baku","umudalizada","umud200@mail.ru",true,false,"2002umud","Developer")
const person2= new User("eli","eliyev",19,"kisi","sumqayit","eliko","eli201220@gmail.com",false,false,"123sr4","NO bio Yet")
const person3= new User("aygun","eliyeva",19,"qadin","samaxi","ayka","ayka@gmail.com",true,false,"1234ayka","IT-fornt-end")
const person4= new User("firuze","aliyev",23,"qadin","gence","fira","firuzaaliyeva@gmail.com",false,false,"123yumurta","IT-back-end")
let users=[person,person2,person3,person4];
console.log(person);
console.log(person.getFullNmae());
console.log(person.getBirthYear());
console.log(person.changePassword("2002umud","arvwze"));
let array=[person,person2,person3,person4]
console.log(person.sortUsersByUsername(users));
person.filterByBirthYear(users,20);
console.log(person.login(users,"ayka", "1234ayka"));
console.log(person.LogOut(users,"ayka"));
console.log(users);
let person5 = new User("Elvira","Abasova",21,"qadin","Celilabad","elviraabas","elviraabasova@gmail.com",true,false,"elvira123","Hello I am Elvira")
person.CreateUser(users,person5)
console.log(person.DeleteUser(users,"umudalizada"));