function Hotel(name, rooms, booked)
{
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    
    this.check = function()
    {
        return this.rooms - this.booked;
    }
};


function print(var1,var2,var3)
{
    return "Nome: "+ var1 + " Camere: " + var2 + " Libere: "+ var3 + " ";
}



var hotelRoma = new Hotel('Hotel-da-Ubaldo',50,13);
var hotelMilano = new Hotel('Hotel-Italia',24,7);

var elHotel = document.getElementById('hotel1');
elHotel.textContent = print(hotelRoma.name,hotelRoma.rooms,hotelRoma.check());

var elHotel = document.getElementById('hotel2');
elHotel.textContent = print(hotelMilano.name,hotelMilano.rooms,hotelMilano.check());