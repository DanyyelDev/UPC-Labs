type User = {
    id: number,
    name: string,
    email: string,
    password: string,
    role: string,
    city: string,
    state: string,
    zip: string
}

type Lab = {
    id: number,
    name: string,
    location: string,
    categoryLab: string,
    capacity: string,
    instruments: Instrument[],
}

type Instrument = {
    id: number,
    name: string,
    image: string,
    description: string,
    state: string,
}