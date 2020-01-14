import { TrackRepository } from '../repository/track.repository';
import { Track } from '../models/track';

export class TrackService {

    private repository: TrackRepository;

    constructor() {
        this.repository = new TrackRepository();
    }

    async findAll() {
        const allTrack = await this.repository.getAll();
        return allTrack;
    }

    async findById(id: number) {
        if (!Number.isInteger(id)) {
            throw new Error('error');
         }
        return await this.repository.getById(id);
    }

    async findByTitle(title: string) {
        const byTitle = await this.repository.getByTitle(title);
        return byTitle;
    }

    async update(track: Track) {
        const updateTrack = await this.repository.postTrack(track);
        return updateTrack;
    }

    async modifyTrack(track: Track, id: number) {
        const modTrack = await this.repository.putTrack(track, id);
        return modTrack;
    }

    async delTrack(id: number) {
        const delTrack = await this.repository.deleteT(id);
        return delTrack;
    }

}
