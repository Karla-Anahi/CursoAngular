/*
    ===== Código de TypeScript =====
*/

interface SuperHero{
       name: string;
       age: number;
       address:Address;
    
    showAddress: ()=>string; 
}

interface Address{

        street: string;
        county:string;
        city:string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        county: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.county;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};
