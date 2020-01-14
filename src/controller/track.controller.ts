import express, { Application, Router, Request, Response } from 'express';
import { TrackService } from '../service/track.service';

export const TrackController = (app: Application) => {

    const trackRouter: Router = express.Router();
    const trackService = new TrackService();

    trackRouter.get('/', async (req: Request, res: Response) => {
        const result = await trackService.findAll();
        res.send(result);
    });

    trackRouter.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        try {
            const result = await trackService.findById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('id n\'a pas été trouvé' + id);
        }
    });

    trackRouter.get('/title', async (req: Request, res: Response) => {
        const title = req.query.title;
        console.error(title);

        try {
            const result = await trackService.findByTitle(title);
            res.send(result);
        } catch (error) {
            res.status(404).send('titre non trouvé' + title);
        }
    });

    trackRouter.post('/', async (req: Request, res: Response) => {
        const tracks = req.body;
        trackService.update(tracks);
        res.send(tracks);
    });

    trackRouter.put('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const tracks = req.body;
        trackService.modifyTrack(tracks, id);
        res.send(tracks);
    });

    trackRouter.delete('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        trackService.delTrack(id);
        res.send();

    });

    app.use('/tracks', trackRouter);
};
