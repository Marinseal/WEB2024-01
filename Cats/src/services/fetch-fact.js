export async function fetchFact(){
    try {
        const resp = await fetch('https://catfact.ninja/fact?max_length=140');
        const data = await resp.json();
        return data.fact

    } catch (error) {
        console.log('No se obtuvieron los datos', error)
        return error
    }
}