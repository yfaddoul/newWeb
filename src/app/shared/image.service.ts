import { Injectable } from '@angular/core'
import { NEVER, never } from 'rxjs';

@Injectable()
export class ImageService{
    visibleImages: { id: number; category: string;  url: string; }[] = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
    {"id":1, "category": "photography", "url":"assets/img/team/A32A8616.jpg"},
    {"id":2, "category": "photography",  "url":"assets/img/team/HDY00088-819x1024.jpg"},
    {"id":3, "category": "photography","url":"assets/img/team/HDY00225-Edit-819x1024.jpg"},
    {"id":4, "category": "photography",  "url":"assets/img/team/HDY01355-819x1024.jpg"},
    {"id":5, "category": "photography",  "url":"assets/img/team/HDY01147-819x1024.jpg"},
    {"id":6, "category": "branding",  "url":"assets/img/team/Screen-Shot-2023-06-01-at-1.05.13-PM-821x1024.png"},]