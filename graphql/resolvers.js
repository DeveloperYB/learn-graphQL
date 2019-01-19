import { getVideos, getById, addVideo, deleteVideo } from './db';
import { getMovies } from './connectAPI';
const resolvers = {
    Query: {
        videos: () => getVideos(),
        video: (_, { id }) => getById(id),
        movies: (_, { limit, rating, sorting }) => getMovies(limit, rating, sorting)
    },
    Mutation: {
        addVideo: (_, { name, viewCnt, downloadCnt, reviewCnt }) =>
            addVideo(name, viewCnt, downloadCnt, reviewCnt),
        deleteVideo: (_, { id }) => deleteVideo(id)
    }
};
/* 
It means "don't care"/"anonymous parameter".
Since the first argument is not actually used by the function,
don't bother assigning a proper name to it.

The full signature for a resolver function is (parent, args, context, info) => {}
*/
export default resolvers;
