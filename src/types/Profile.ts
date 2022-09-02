interface Profile {
    id: number | string,
    fullname: string,
    age: number | string,
    city: string,
    initials: string,
    hobbies: Hobby[],
}

interface Profile {
    country?: string,
}

interface Hobby {
    id: number | string,
    hobby: string,
    rating: number | string,
}

export {
    Profile,
    Hobby,
}
