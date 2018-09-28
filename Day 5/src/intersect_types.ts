interface Fruit{
    color: string
}

interface Vegetable{
    taste: string
}

let carrot: Fruit & Vegetable = {
    color: 'orange',
    taste: 'sweet'
}