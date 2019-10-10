export function sortByRank(list) {
  return list.sort((a, b) => b.rank - a.rank );      
}

export function adjustGalleryPhotos(photos) {
    const galleryPhotos = [];
    const defaultWidth = 3;
    const defaultHeight = 2;

    photos.forEach(function (photo) {             
        const isCustomSize = photo.width > 0 && photo.height > 0;        
        galleryPhotos.push( { 
                                src:'/images/' + photo.src, 
                                srcSet: [
                                  '/images/thumbnails/' + photo.src + " 500w",
                                  '/images/thumbnails/' + photo.src + " 800w",
                                  '/images/thumbnails/' + photo.src + " 1024w",
                                  '/images/thumbnails/' + photo.src + " 1600w",
                                ],
                                sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],                                
                                width: isCustomSize ? photo.width : defaultWidth, 
                                height: isCustomSize ? photo.height : defaultHeight, 
                                alt:"",
                                title: "",
                                rank: photo.rank,
                                description: photo.description });                                
    });
    return galleryPhotos;
  }
  
  export function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }