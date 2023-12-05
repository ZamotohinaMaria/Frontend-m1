// tsc src/laba-3-transport.ts
// node src/laba-3-transport.js
// tsc --module commonjs src/laba-3-transport.ts

export namespace Transport{
    export enum EDocuments{
        Passport_RF = 'Паспорт РФ',
        Passport_UK = 'Паспорт Англии',
        Passport_FR = 'Паспорт Франции'
    }
    
    export enum ECusovType{
        ones =  'Однокамерный',
        duos = 'Двукамерный',
        trio = 'Трехкамерный',
        open = 'Открытый',
        close = 'Закрытый'
    }
    
    export enum ECarClass{
        B = 'Маленький',
        D = 'Полноразмерный',
        E = 'Бизнес-класс',
        S = 'Спортивный',
        J = 'Внедорожник'
    }


    export interface IOwner{
        name: string;
        surname: string;
        firstname: string;
        birthDate: Date;
        doc_type: EDocuments;
        doc_series: number;
        doc_number: number;
    
        print_owner_info: () => string;
    }
    
    export interface IVechile{
        stamp: string;
        model: string;
        release_year: number;
        VIN_number: number;
        registration_number: number;
        owner_info: IOwner;
        print_vechile_info: () => string
    }
    
    export class Vechile{
        private _stamp: string;
        private _model: string;
        private _release_year: number;
        private _VIN_number: number;
        private _registration_number: number;
        private _owner_info: IOwner;
    
        get stamp(): string {
            return this._stamp;
        }
    
        set stamp(value: string) {
            this._stamp = value;
        }
        ///////
        get model(): string {
            return this._model;
        }
    
        set model(value: string) {
            this._model = value;
        }
        ///////
        get release_year(): number {
            return this._release_year;
        }
    
        set release_year(value: number) {
            this._release_year = value;
        }
        ///////
        get VIN_number(): number {
            return this._VIN_number;
        }
    
        set VIN_number(value: number) {
            this._VIN_number = value;
        }
        ///////
        get registration_number(): number {
            return this._registration_number;
        }
    
        set registration_number(value: number) {
            this._registration_number = value;
        }
        ///////
        get owner_info(): IOwner {
            return this._owner_info;
        }
    
        set owner_info(value: IOwner) {
            this._owner_info = value;
        }
    
        print_vechile_info(): string{
            return 'stamp: '+ this._stamp + '\nmodel:' + this._model + '\nrelease_year:' + this._release_year +  
            '\nVIN number: '+ this._VIN_number + '\nregistration number: '+ this._registration_number + '\nowner info\n: '+ this._owner_info.print_owner_info() 
        }
    
        constructor(_stamp: string, _model: string, _release_year: number, 
            _VIN_number: number, _registration_number: number, _owner_info: IOwner){
                this._stamp = _stamp;
                this._model = _model;
                this._release_year = _release_year;
                this._VIN_number = _VIN_number;
                this._registration_number = _registration_number;
                this._owner_info = _owner_info;
            }
    }
    
    export class Owner implements IOwner{
        private _name: string;
        private _surname: string;
        private _firstname: string;
        private _birthDate: Date;
        private _doc_type: EDocuments;
        private _doc_series: number;
        private _doc_number: number; 
    
        get name(): string {
            return this._name;
        }
    
        set surname(value: string) {
            this._surname = value;
        }
        ///////
        get surname(): string {
            return this._surname;
        }
    
        set name(value: string) {
            this._name = value;
        }
        ///////
        get firstname(): string {
            return this._firstname;
        }
        
        set firstname(value: string) {
            this._firstname = value;
        }
        ///////
        get birthDate(): Date {
            return this._birthDate;
        }
    
        set birthDate(value: Date) {
            this._birthDate = value;
        }
        //////
        get doc_type(): EDocuments {
            return this._doc_type;
        }
        
        set doc_type(value: EDocuments) {
            this._doc_type = value;
        }
        ///////
        get doc_series(): number {
            return this._doc_series;
        }
        
        set doc_series(value: number) {
            this._doc_series = value;
        }
        ///////
        get doc_number(): number {
            return this._doc_number;
        }
        
        set doc_number(value: number) {
            this._doc_number = value;
        }
    
        print_owner_info(): string{
            return 'name: '+ this._name + '\nsurname:' + this._surname + '\nfirstname:' + this._firstname + '\nbirthDate:' + this._birthDate.toString +
            '\ndocument type: '+ this._doc_type + '\ndocument series: '+ this._doc_series + '\ndocument number: '+ this._doc_number 
        }
    
        constructor(name: string, surname: string, firstname: string, 
            birthDate: Date, doc_tipe: EDocuments, doc_series: number, doc_number: number){
                this._name = name;
                this._surname = surname;
                this._firstname = firstname;
                this._birthDate = birthDate;
                this._doc_type = doc_tipe;
                this._doc_series = doc_series;
                this._doc_number = doc_number;
            }
    }
    
    
    export interface ICar extends IVechile{
        cusov_type: ECusovType;
        car_class: ECarClass;
        print_car_info: () => string;
    }
    
    export class Car extends Vechile implements ICar {
        private _cusov_type: ECusovType;
        private _car_class: ECarClass;
    
        get cusov_type(): ECusovType {
            return this._cusov_type;
        }
        
        set cusov_type(value: ECusovType) {
            this._cusov_type = value;
        }
        ///////
        get car_class(): ECarClass {
            return this._car_class;
        }
        
        set car_class(value: ECarClass) {
            this._car_class = value;
        }
        ///////
    
        print_car_info(): string{
            return this.print_vechile_info() + '\ncar class' + this._car_class + '\ncosuv type' + this._cusov_type
        }
    
        constructor(_stamp: string, _model: string, _release_year: number, 
            _VIN_number: number, _registration_number: number, _owner_info: IOwner, _cusov_type: ECusovType, _car_class: ECarClass){
            super(_stamp, _model, _release_year, _VIN_number, _registration_number, _owner_info)
            this._cusov_type = _cusov_type;
            this._car_class = _car_class;
        }
    }
    
    export interface IMoto extends IVechile{
        rama_type: string;
        sport: boolean;
        print_moto_info: () => string;
    }
    
    export class Moto extends Vechile implements IMoto{
        private _rama_type: string;
        private _sport: boolean;
    
        get rama_type(): string {
            return this._rama_type;
        }
        
        set rama_type(value: string) {
            this._rama_type = value;
        }
        ///////
        get sport(): boolean {
            return this._sport;
        }
        
        set sport(value: boolean) {
            this._sport = value;
        }
        ///////
    
        print_moto_info(): string{
            return this.print_vechile_info() + '\nrama type' + this._rama_type + '\nsport or not:' + this._sport
        };
    
        constructor(_stamp: string, _model: string, _release_year: number, 
            _VIN_number: number, _registration_number: number, _owner_info: IOwner,  _rama_type: string, _sport: boolean){
                super(_stamp, _model, _release_year, _VIN_number, _registration_number, _owner_info)
                this._rama_type = _rama_type;
                this._sport = _sport;
            }
    }
    
    export interface IVehicleStorage<T extends IVechile>{
        created_date: Date;
        data: T[];
        getAll: () => T[];
    
        save(data: T): void;
    
        remove(index: number): void;
    }
    
    export class VehicleStorage<T extends IVechile> implements IVehicleStorage<T> {
        private _created_date: Date;
        private _data: T[];
    
        get created_date(): Date {
            return this._created_date;
        }
    
        get data(): T[] {
            return this._data;
        }
    
        getAll(): T[] {
            return this.data;
        }
    
        remove(index: number): void {
            this._data = this.data.splice(index, 1);
        }
    
        save(data: T): void {
            this._data.push(data);
        }
    
        constructor() {
            this._created_date = new Date();
            this._data = [];
        }
    }
}