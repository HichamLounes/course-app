export class course {
    id: number;
    name: string;
    author: string;
    duration: number;
    type: string;
    price: number;
    rating: number;
    image: string;
    desc: string;


    public constructor(id: number, name: string, author: string, duration: number, type: string, price: number, rating: number, image: string, desc: string) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.duration = duration;
        this.type = type;
        this.price = price;
        this.rating = rating;
        this.image = image;
        this.desc = desc;

    }
}