import express, { Router, Request, Response, Application } from 'express';
import { PlaylistService } from '../service/playlist.service';

export const PlaylistController = (app: Application) => {

    const playlistRouter: Router = express.Router();
    const playlistService = new PlaylistService();

    playlistRouter.get('/', async (req: Request, res: Response) => {
        const result = await playlistService.getAll();
        res.send(result);
    });

    playlistRouter.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);

        try {
            const result = await playlistService.getById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id n\'a pas été trouvé' + id);
        }
    });

    playlistRouter.post('/', (req: Request, res: Response) => {
        const playlist = req.body;
        playlistService.update(playlist);
        res.send(playlist);
    });

    playlistRouter.put('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const playlist = req.body;
        playlistService.modifyPL(playlist, id);
        res.send(playlist);
    });

    playlistRouter.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        playlistService.deletePL(id);
        res.send();
    });

    app.use('/playlists', playlistRouter);
};
