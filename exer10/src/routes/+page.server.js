export async function load( serverLoadEvent ) {
    const { fetch } = serverLoadEvent
    const number = await fetch("http://127.0.0.1:5000/number")
        .then(res => res.json())
    return {
        number: number.number
    }
}