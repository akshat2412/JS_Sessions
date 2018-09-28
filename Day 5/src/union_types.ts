namespace Union{

    interface Fruit{
        color: string,
        weight: number
    }
    
    interface Vegetable{
        taste: string,
        weight: string
    }
    
    type obj = Fruit | Vegetable

    let carrot: obj = {
        color: 'red',
        taste: 'sweet',
        weight: "5"
    }
}