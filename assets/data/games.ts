import { Game } from "src/app/interfaces/game.interface";

export const games: Game[]  =  [
    {
        img: "hogwarts-legacy.jpeg",
        title: "Hogwarts Legacy: Edição Digital Deluxe",
        discount: 30,
        current_price: 244.93,
        old_price: 349.90,
        labels: ["PS5", "PS4"]
    },
    {
        img: "call-of-duty-MWII.jpeg",
        title: "Call of Duty®: Modern Warfare® II - Pacote Multigeração",
        discount: 50,
        current_price: 164.50,
        old_price: 329.00,
        labels: ["PS5", "PS4"]
    },
    {
        img: "the-last-of-us.jpeg",
        title: "The Last of Us™ Parte I",
        discount: 29,
        current_price: 248.42,
        old_price: 349.90,
        labels: ["PS5"]
    },
    {
        img: "stray.jpeg",
        title: "Stray",
        discount: 25,
        current_price: 112.12,
        old_price: 149.50,
        labels: ["PS5", "PS4"]
    }
]