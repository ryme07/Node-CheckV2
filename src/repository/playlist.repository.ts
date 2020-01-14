import { Playlist } from '../models/playlist';
import { DbHandler } from '../core/db.handler';

export class PlaylistRepository {

    private GET_ALL = 'SELECT * FROM playlist;';
    private GET_BY_ID = 'SELECT * FROM playlist WHERE id = ?';
    private POST_BY_ID =  'INSERT INTO playlist SET ?';
    private PUT_BY_ID = 'UPDATE playlist SET ? WHERE id = ?';
    private DELETE_BY_ID = 'DELETE FROM playlist WHERE id = ?';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();
    }

    async findAll() {
        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const playlist = await this.db.query(this.GET_BY_ID , id);
        return playlist;
    }

    async post(playlist: Playlist) {
        const postplaylist = await this.db.query(this.POST_BY_ID, playlist);
        return postplaylist;
    }

    async modify(playlist: Playlist, id: number) {
        const modifyplaylist = await this.db.query(this.PUT_BY_ID, [playlist, id]);
        return modifyplaylist;
    }

    async delete(id: number) {
        const deleteplaylist = await this.db.query(this.DELETE_BY_ID , id);
        return deleteplaylist;
    }
}
