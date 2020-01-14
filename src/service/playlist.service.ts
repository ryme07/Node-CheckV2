import { Playlist } from './../models/playlist';
import { PlaylistRepository } from './../repository/playlist.repository';

export class PlaylistService {

    private repository: PlaylistRepository;

    constructor() {
        this.repository = new PlaylistRepository();
    }

    async getAll() {
        const all = await this.repository.findAll();
        return all;
    }

    async getById(id: number) {
        if (!Number.isInteger(id)) {
            throw new Error('error');
        }

        return await this.repository.findById(id);
    }

    async update(playlist: Playlist) {
        const updatePlaylist = await this.repository.post(playlist);
        return updatePlaylist;
    }

    async modifyPL(playlist: Playlist, id: number) {
        const modifPl = await this.repository.modify(playlist, id);
        return modifPl;
    }

    async deletePL(id: number) {
        const delPl = await this.repository.delete(id);
        return delPl;
    }
}
