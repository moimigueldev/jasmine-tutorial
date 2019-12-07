import { Component } from '@angular/core';

export interface Post {
    title: string;
    description: string;
    totalLikes: number;
}

@Component({
    selector:'app-post',
    templateUrl: './PostComponent.html',
    styleUrls:['./PostComponent.css']
})
export class PostComponent {
    totaLikes: number;;

     like() {
        this.totaLikes++;
    }

     dislike() {
        // tslint:disable-next-line: whitespace
        // tslint:disable-next-line: curly
     if(this.totaLikes) this.totaLikes--;
    }
} 

