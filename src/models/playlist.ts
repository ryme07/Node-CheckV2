export class Playlist {
    public id!: number;
    public title!: string;
    public genre!: string;

    constructor(input: Playlist) {
        Object.assign(this, input);
    }
}
