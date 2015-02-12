var hotel = {
name: 'B&B',
rooms: 40,
booked: 25,
gym: true,
roomTypes: ['twin','double','suite'],

checkAvailability: function() {
    return this.rooms - this.booked;
    }
};


var elName = document.getElementById('hotel');
elName.textContent = hotel.name;


var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();


