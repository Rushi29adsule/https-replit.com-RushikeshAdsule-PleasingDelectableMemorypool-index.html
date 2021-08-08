class company
{
    constructor(modelname,engine,type) 
    {
        this.modelname=modelname;
        this.engine=engine;
        this.type=type;
    }
    getcompany()
    {
        return this.modelname;
    }
}

class car extends company
{
    constructor(modelname,engine,type,launch,gear,country)
    {
        super(modelname,engine,type);
        this.launch=launch;
        this.gear=gear;
        this.country=country; 

    }
    getcar()
    {
        return this.modelname;
    }
   
    
}
 let car1=new car('X7','SUV','V8',2019,'8 speed auto',250);
 console.log(car1.getcompany())

 let car2=new car('Aventador','Sports','V12',2011,'7 speed auto',350);
 console.log(car2.getcompany())

 let car3=new car('Phantom','Sedan','V12',2017,'8 speed auto',250);
 console.log(car3.getcompany())

 let car4=new car('Escalade','SUV','V8',2021,'10 speed auto',130);
 console.log(car4.getcompany())