export async function fetchImg(text){
    try {
        const imgUrl = `https://cataas.com/cat/says/${text}?fontSize=25&fontColor=white`;
        return imgUrl;
        
    } catch (error) {
        console.log('No se obtuvo la imagen', error)
        throw error
    }
}