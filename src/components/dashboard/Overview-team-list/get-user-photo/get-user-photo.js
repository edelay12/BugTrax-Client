export default function getUserPhoto(user){
    let photo;
switch(user){
    case 2: 
    photo = '/assets/headshots/1.jpg'
    break;
    case 3: 
    photo = '/assets/headshots/3.jpg'
    break;
    case 4: 
    photo = '/assets/headshots/4.jpg'
    break;
    case 5: 
    photo = '/assets/headshots/6.jpg'
    break;
    case 6: 
    photo = '/assets/headshots/2.jpg'
    break;
    case 7: 
    photo = '/assets/headshots/5.jpg'
    break;
    case 8: 
    photo = '/assets/headshots/10.png'
    break;
    case 9: 
    photo = '/assets/headshots/8.jpg'
    break;
    default: 
    photo = '/assets/headshots/headshot-1.jpg'
    }
    return photo
}
