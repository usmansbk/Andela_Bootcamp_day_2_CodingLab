  'use strict';
  const Car = require('../car.js');
  describe("Car Class: Create a car, make it drive", function() {

    it("The car should be a type of `object`, and an instance of the `Car` class", function() {
      var honda = new Car('Honda');
      expect(typeof honda).toEqual(typeof {});
      expect(honda instanceof Car).toBeTruthy();
    });

    it("The car should be called 'General' if no name is passed as a parameter", function() {
      var gm = new Car();
      expect(gm.name).toEqual('General');
      expect(gm.model).toBe('GM');
    });

    it("The car name and model should be a property of the car", function() {
      var toyota  = new Car('Toyota', 'Corolla');
      expect(toyota.name).toBe('Toyota');
      expect(toyota.model).toBe('Corolla');
    });

    it("The car shoud have four (4) doors except its a Porshe or Koenigsegg", function() {
      var opel  = new Car('Opel', 'Omega 3');
      expect(opel.numOfDoors).toBe(4);

      var porshe = new Car('Porshe', '911 Turbo');
      expect(porshe.numOfDoors).toBe(2);
      porshe.drive(5);
      expect(porshe.speed).toBe('250 km/h');
      expect((function(){return new Car('Koenigsegg', 'Agera R');}()).numOfDoors).toBe(2);
    });

    it("The car shoud have four (4) wheels except its a type of trailer", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      expect(man.numOfWheels).toBe(8);
      expect(man.isSaloon).toBe(false);

      var koenigsegg = new Car('Koenigsegg', 'Agera R');
      expect(koenigsegg.numOfWheels).toBe(4);
      expect(koenigsegg.isSaloon).toBeTruthy();
    });

    it("The Trailer should have speed 0 km/h until you put `the pedal to the metal`", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      expect(man.speed).toBe('0 km/h');
      man.drive(7);
      expect(man.speed).toBe('77 km/h');
    });

    it("The car drive function should return the instance of the Car class", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      var drivingMan = man.drive(7);
      expect(drivingMan instanceof Car).toBeTruthy();
      expect(typeof drivingMan.drive).toBe(typeof (function (){}));
      expect(man.speed).toBe(drivingMan.speed);
    });

  });