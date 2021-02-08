function solve(arr, criteria) {

    function splitLine (line) {
        return line.split('|');
    }

    function convertToTicket ([destination, price, status]) {
        return new Ticket(destination, Number(price), status);
    }

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const sortMapper = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a,b) => a.price - b.price,
        'status': (a,b) => a.status.localeCompare(b.status)
    }

    return arr
            .map(splitLine)
            .map(convertToTicket)
            .sort(sortMapper[criteria])
}
