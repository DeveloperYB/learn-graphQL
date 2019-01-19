let videos = [
    {
        id: '1',
        name: 'SKY 캐슬 1화',
        viewCnt: 2932,
        downloadCnt: 102,
        reviewCnt: 104
    },
    {
        id: '2',
        name: 'SKY 캐슬 2화',
        viewCnt: 211,
        downloadCnt: 12,
        reviewCnt: 45
    },
    {
        id: '3',
        name: 'SKY 캐슬 3화',
        viewCnt: 1038,
        downloadCnt: 101,
        reviewCnt: 12
    },
    {
        id: '4',
        name: '아는형님',
        viewCnt: 1038,
        downloadCnt: 101,
        reviewCnt: 12
    },
    {
        id: '5',
        name: '개그콘서트',
        viewCnt: 10038,
        downloadCnt: 7011,
        reviewCnt: 8764
    },
    {
        id: '6',
        name: '말모이',
        viewCnt: 1038,
        downloadCnt: 690,
        reviewCnt: 723
    }
];

export const getVideos = () => videos;

export const getById = id => {
    const filteredVideos = videos.filter(video => video.id === String(id));
    return filteredVideos[0];
};

export const deleteVideo = id => {
    const cleanedVideos = videos.filter(movie => movie.id !== String(id));
    if (videos.length > cleanedVideos.length) {
        videos = cleanedVideos;
        return true;
    } else {
        return false;
    }
};

export const addVideo = (name, viewCnt, downloadCnt, reviewCnt) => {
    const newVideo = {
        id: `${videos.length + 1}`,
        name,
        viewCnt,
        downloadCnt,
        reviewCnt
    };
    videos.push(newVideo);
    return newVideo;
};
