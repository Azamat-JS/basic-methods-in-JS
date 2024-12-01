// class Flight {
//     #allSeats = [0, 1, 2, 3, 4, 5, 6,
//         7, 8, 9, 10, 11, 12, 13,
//         14, 15, 16, 17, 18, 19, 20]
//     #orderedSeats = []
//     constructor(flightNumber, departureTime, destination) {
//         this.flightNumber = flightNumber
//         this.departureTime = departureTime
//         this.destination = destination
//     }

//     bookSeat(seat) {
//         if (!this.#orderedSeats.includes(seat) && this.#allSeats.includes(seat)) {
//             this.#orderedSeats.push(seat)
//             console.log('Seat booked successfuly');
//         } else {
//             console.log('Seat booked unsuccessfuly');
//         }
//     }

//     cancelSeat(seat) {
//         if (this.#orderedSeats.includes) {
//             this.#orderedSeats.splice(this.#orderedSeats.indexOf(seat), 1)
//             console.log('Seat canceled successfuly');
//         }
//     }

//     getAvailableSeats() {
//         this.#allSeats.forEach(element => {
//             if (!this.#orderedSeats.includes(element)) {
//                 console.log(element)
//             }
//         });
//     }
// }
// const flight = new Flight(15, '15:30', 'Tashkent')

// flight.getAvalibleSeats()
// flight.bookSeat(15)
// flight.getAvalibleSeats()
// flight.bookSeat(15)
// flight.cancelSeat(15)
// flight.getAvalibleSeats()
// flight.bookSeat(15)
// flight.getAvalibleSeats()
//----------------------------------------------------

// class Flight {
//   #allPlaces = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22, 23, 24, 25, 26, 27, 28, 29, 30,
//   ];
//   #booked = [];
//   orderSeat(seat) {
//     if (seat < 1 || seat >= 30) {
//       console.log(`The number is not inserted properly`);
//     } else {
//       if (this.#allPlaces.includes(seat) && !this.#booked.includes(seat)) {
//         this.#booked.push(seat);
//         console.log(`${seat} number was booked`);
        
//       } else {
//         console.log(`This seat number is not available`);
//       }
//     }
//   }
//   getAvailableSeats(){
//     for (let i = 1; i < this.#allPlaces.length; i++) {
//         if (this.#booked.includes(this.#allPlaces[i - 1])){
//         continue
//         }
//         console.log(i);
        
//     }
//   }
//   cancelSeat(seat){
//     if(this.#booked.includes(seat)){
//         this.#booked.splice(this.#booked.indexOf(seat), 1)

//     }
//     console.log(`seat cancelled successfully`);
    
//   }
// }
// const flight = new Flight()

// flight.orderSeat(5)
// flight.getAvailableSeats()
// flight.cancelSeat(5)
// flight.getAvailableSeats()
