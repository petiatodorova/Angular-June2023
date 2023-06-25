let isEven: boolean = false;
let num: number = 4;
let str: string = "";

type User = {
    name: string;
    age: number;
}

interface AnotherUser {
    firstName: string;
    id: number;
    getUserName: () => string;
}

class AnotherUserClass implements AnotherUser {
    firstName: string;
    id: number;

    getUserName() {
        return this.firstName;
    }
}

const peshoUser = {
    name: "Pesho",
    age: 21,
} as User;

const anotherUserList = [
    {
        firstName: 'Ivan',
        id: 1
    },
    {
        firstName: 'Mitko',
        id: 2
    },
    {
        firstName: 'Maria',
        id: 3
    }
] as AnotherUser[];

anotherUserList.forEach(({firstName, id}) => {
    console.log(`${id}: ${firstName}`);
});