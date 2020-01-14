import { Track } from './../models/track';
import { DbHandler } from '../core/db.handler';

export class TrackRepository {

    private GET_ALL = 'SELECT * FROM track;';
    private GET_BY_ID = 'SELECT * FROM track WHERE id = ?;';
    private GET_BY_TITLE = 'SELECT * FROM track AS t WHERE t.title = ?;';
    private POST =  'INSERT INTO track SET ?;';
    private PUT_BY_ID = 'UPDATE track SET ? WHERE id = ?;';
    private DELETE_BY_ID = 'DELETE FROM track WHERE id = ?';

    private db: DbHandler;

    constructor() {
        this.db = DbHandler.getInstance();
    }

    async getAll() {
        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async getById(id: number) {
        const track = await this.db.query(this.GET_BY_ID, id);
        return track;
    }

    async getByTitle(title: string) {
        const trackByTitle = await this.db.query(this.GET_BY_TITLE, title);
        return trackByTitle;
    }

    async postTrack(track: Track) {
        const postTck = await this.db.query(this.POST, track);
        return postTck;
    }

    async putTrack(track: Track, id: number) {
        const putTrack = await this.db.query(this.PUT_BY_ID, [track, id]);
        return putTrack;
    }

    async deleteT(id: number) {
        const delTrack = await this.db.query(this.DELETE_BY_ID, id);
        return delTrack;
    }

}
