import { TrackController } from './controller/track.controller';
import express from 'express';
import loaders from './loaders';
import { PlaylistController } from './controller/playlist.controller';

const startServer = async () => {
    const app = express();
    const port = 3000;

    await loaders(app);
    PlaylistController(app);
    TrackController(app);

    /*on ajoute les différents controllers au dessus*/

    app.listen(port, () => console.log(`Server is listening in port ${port}`));
};

startServer();
