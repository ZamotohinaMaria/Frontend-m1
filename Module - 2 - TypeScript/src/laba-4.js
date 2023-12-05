/// <reference path="laba-3-transport.ts" />
var owner1 = new Transport.Owner('Maria', 'Zamotohina', 'Andreevna', new Date('2004-01-23'), EDocuments.Passport_RF, 3333, 444444);
var owner2 = new Transport.Owner('Irina', 'Koroleva', 'Nikolaevna', new Date('1976-01-20'), EDocuments.Passport_FR, 3223, 111444);
var owner3 = new Transport.Owner('Pavel', 'Avdeev', 'Andreevich', new Date('1970-08-81'), EDocuments.Passport_UK, 5555, 666666);
owner1.print_owner_info();
var vechile = new Transport.Vechile('Toyoat', 'RAF-4', 2002, 323232, 23456, owner2);
vechile.print_vechile_info();
var car = new Transport.Car('Hydnai', 'Tussan', 2023, 323232323, 1212, owner3, ECusovType.close, ECarClass.J);
car.print_car_info();
var motobike = new Transport.Moto('Suzuki', 'RF-2023', 2023, 2324578, 9898, owner1);
