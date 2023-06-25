let isEven: boolean = false;
let num: number = 4;
let str: string = "";

type User1 = {
    name: string;
    age: number;
}

interface Another1 {
    firstName: string;
    id: number;
    get1Name: () => string;
}

class Another1Class implements Another1 {
    firstName: string;
    id: number;

    get1Name() {
        return this.firstName;
    }
}

const pesho1 = {
    name: "Pesho",
    age: 21,
} as 1;

const another1List = [
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
] as Another1[];

another1List.forEach(({firstName, id}) => {
    console.log(`${id}: ${firstName}`);
});

