export async function fetchGif (word){
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=6ynSmjXRCkhqT3veyTjVjp6Sipj16KrJ&q=${word}&limit=21&lang=en`)
        console.log(`https://api.giphy.com/v1/gifs/search?api_key=6ynSmjXRCkhqT3veyTjVjp6Sipj16KrJ&q=${word}&limit=21&lang=en`)
        if(!response.ok){
            throw new Error('No se pudo obtener los gifs')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los gifs')
        throw error;
        
    }   
}