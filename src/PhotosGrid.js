import {useEffect, useState} from 'react';
import {loadData} from './fetch-data';
import Photo from './Photo';

function PhotosGrid() {
    const [photos, setPhotos] = useState([]);
    useEffect(async ()=> {
        const data = await loadData(`https://jsonplaceholder.typicode.com/photos`);
        setPhotos(data);
    }, []);
    return (
        <div>
            {
                photos.map((photo) => (<Photo key={photo.id} title={photo.title} image={photo.url} />))
            }
        </div>
    );
}

export default PhotosGrid;