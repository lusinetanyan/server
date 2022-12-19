export class Performance {

    constructor(id, title, numberOfAvailableSeats) {
        this._id = id;
        this._title = title;
        this._numberOfAvailableSeats = numberOfAvailableSeats;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

}
