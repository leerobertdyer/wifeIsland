// import { createFlickr } from "flickr-sdk";

const API_KEY = process.env.NEXT_PUBLIC_FLICKR_API_KEY
const user_id = process.env.NEXT_PUBLIC_FLICKR_USER_ID
// const { flickr } = createFlickr(API_KEY)

const apiUrl = 'https://api.flickr.com/services/rest/';

type Photo = {
    id: string
    url_s: string,
    url_l: string
}

type FlickrResponse= {
    photos: {
        photo: Photo[]
    }
}


export async function getPhotos(): Promise<Photo[]>  {

    function shuffleArray<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j]!, array[i]!]; // Using non-null assertion here
        }
        return array;
    }
    
    const params = new URLSearchParams({
        method: 'flickr.photos.search',
        api_key: API_KEY ?? '',
        user_id: user_id ?? '',
        tags: 'wifeisland',
        per_page: '100',
        page: '1',
        extras: 'url_s, url_l', 
        format: 'json',
        nojsoncallback: '1', 
      });
    
    const url = `${apiUrl}?${params.toString()}`;
    
try {
    const response = await fetch(url)
    const data = await response.json() as FlickrResponse;
    const photos = data.photos.photo
    shuffleArray(photos)
    console.log('All WI Photos: ', photos)
    return photos
} catch (error) {
    console.error(`error getting photos:`)
    return []
}
}
