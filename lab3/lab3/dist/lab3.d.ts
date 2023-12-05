declare enum Town {
    MOSCOW = "\u041C\u043E\u0441\u043A\u0432\u0430",
    SAMARA = "\u0421\u0430\u043C\u0430\u0440\u0430",
    KEMEROVO = "\u041A\u0435\u043C\u0435\u0440\u043E\u0432\u043E",
    RIGA = "\u0420\u0438\u0433\u0430",
    NEW_YORK = "\u041D\u044C\u044E-\u0419\u043E\u0440\u043A"
}
declare enum AnimalType {
    DOG = "\u0421\u043E\u0431\u0430\u043A\u0430",
    CAT = "\u041A\u043E\u0448\u043A\u0430",
    MOUSE = "\u041C\u044B\u0448\u044C",
    FISH = "\u0420\u044B\u0431\u0430",
    PARROT = "\u041F\u043E\u043F\u0443\u0433\u0430\u0439",
    MONKEY = "\u041E\u0431\u0435\u0437\u044C\u044F\u043D\u0430",
    RAT = "\u041A\u0440\u044B\u0441\u0430",
    HAMSTER = "\u0425\u043E\u043C\u044F\u043A"
}
interface IOwner {
    name: string;
    surname: string;
    birthDate: Date;
    ownerInfo: () => string;
}
interface IAnimal {
    type: AnimalType;
    name: string;
    description: string;
    town: Town;
    animalInfo: () => string;
    owner: IOwner;
}
interface ICat extends Animal {
    clawStatus: boolean;
    voice: () => 'miyau';
}
interface IDog extends Animal {
    carriesSlippers: boolean;
    voice: () => 'gau-gaw-gav';
}
declare class Owner implements IOwner {
    private _birthDate;
    private _name;
    private _surname;
    get birthDate(): Date;
    set birthDate(value: Date);
    get name(): string;
    set name(value: string);
    get surname(): string;
    set surname(value: string);
    constructor(birthDate: Date, name: string, surname: string);
    ownerInfo(): string;
}
declare class Animal implements IAnimal {
    private _description;
    private _name;
    private _town;
    private _type;
    private _owner;
    get owner(): IOwner;
    set owner(value: IOwner);
    get description(): string;
    set description(value: string);
    get name(): string;
    set name(value: string);
    get town(): Town;
    set town(value: Town);
    get type(): AnimalType;
    set type(value: AnimalType);
    constructor(description: string, name: string, town: Town, type: AnimalType);
    animalInfo(): string;
}
declare class Dog extends Animal implements IDog {
    private _carriesSlippers;
    get carriesSlippers(): boolean;
    set carriesSlippers(value: boolean);
    constructor(description: string, name: string, town: Town);
    voice(): "gau-gaw-gav";
}
declare class Cat extends Animal implements ICat {
    get clawStatus(): boolean;
    set clawStatus(value: boolean);
    private _clawStatus;
    constructor(description: string, name: string, town: Town);
    voice(): "miyau";
}
interface IAnimalStorage<T extends IAnimal> {
    created: Date;
    data: T[];
    getAll: () => T[];
    save(data: T): void;
    remove(index: number): void;
}
declare class AnimalStorage<T extends IAnimal> implements IAnimalStorage<T> {
    private readonly _created;
    private _data;
    get created(): Date;
    get data(): T[];
    constructor();
    getAll(): T[];
    remove(index: number): void;
    save(data: T): void;
}
declare const dog: IDog;
declare const dog1: IDog;
declare const owner: IOwner;
declare const cat: ICat;
declare const cat1: ICat;
declare const fish: IAnimal;
declare const hamster: IAnimal;
declare const parrot: IAnimal;
declare const mouse: IAnimal;
declare const rat: IAnimal;
declare const monkey: IAnimal;
declare const catStorage: IAnimalStorage<ICat>;
declare const dogStorage: IAnimalStorage<IDog>;
declare const animalStorage: IAnimalStorage<IAnimal>;
