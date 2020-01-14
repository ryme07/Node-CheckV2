export class Track {

    public id!: number;
    public playlist_id!: number;
    public title!: string;
    public artist!: string;
    public album_picture!: string;
    public youtube_url!: string;

    constructor(input: Track) {
        Object.assign(this, input);
    }
}
