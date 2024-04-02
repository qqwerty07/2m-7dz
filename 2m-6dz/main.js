class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Имя - ${this.name}; возраст ${this.age}`);
    }
}



class Student extends User {
    constructor(name, age, username, password) {
        super(name, age);
        this.username = username;
        this._password = password; 
    }

    printInfo(password) {
        if (password === this._password) {
            console.log(`Имя - ${this.name}; возраст ${this.age}; username - ${this.username}`);
        } else {
            console.log("Неверный пароль!");
        }
    }
}

const user1 = new User("Иван", 25);


const student1 = new Student("Алексей", 20, "alex123", "qwerty");


student1.printInfo("qwerty"); 
