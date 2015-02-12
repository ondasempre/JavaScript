var hotel = {
name: 'B&B',
rooms: 40,
booked: 25,
gym: true,
roomTypes: ['twin','double','suite'],

checkAvalability: function() {
    return this.rooms - this.booked;
    }
};


var hotelRoma = hotel.name;
document.write(hotel.name + "</br>");
document.write(hotel.rooms + "</br>");
document.write(hotel.roomTypes + "</br>");

