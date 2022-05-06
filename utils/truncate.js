const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi doloremque ipsum modi quaerat ut veniam veritatis. Autem consectetur cum delectus eius enim excepturi, harum libero pariatur quidem saepe, veniam.'

export default function Truncate(data, length = 110) {

    if (data) {
        const string = data.toString()

        if (string.length > 3 && string.length > length) {
            return `${string.slice(0, length - 3)}...`
        }

        return string

    }
    return lorem
}