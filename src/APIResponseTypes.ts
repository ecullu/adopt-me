export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface Pet {
    id: number;
    name: string;
    breed: string;
    animal: Animal;
    description: string;
    images: string[];
    city: string;
    state: string;
}

export interface PetAPIResponse {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets: Pet[];
}

export interface BreedListAPIResponse {
    animal: Animal;
    breeds: string[];
}