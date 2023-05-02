export interface IMovie {
    id: number,
    poster_path: string,
    original_title: string,
    overview: string,
    vote_average: number,
    release_date: string,
    runtime: number,
    homepage: string,
    genres: {
        id: number,
        name: string
    }[]
};

export interface IMedia {
    page: number,
    results: {
        id: number,
        poster_path: string,
        original_title: string,
        overview: string,
        vote_average: number,
        release_date: string,
        runtime: number,
        homepage: string,
        genres: {
            id: number,
            name: string
        }[]
    }[],
    total_pages: number,
    total_results: number
};

export interface IMediaDetail {
    page: number,
    results: {
        adult: boolean,
        backdrop_path: string,
        belongs_to_collection: {
            backdrop_path: string,
            id: number,
            name: string,
            poster_path: string
        },
        budget: number,
        genres: {
            "id": number,
            "name": string
        }[],
        homepage: string,
        id: number,
        imdb_id: string,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        production_companies: {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string
        },
        production_countries: {
            iso_3166_1: string,
            name: string,
        },
        release_date: string,
        revenue: number,
        runtime: number,
        spoken_languages: {
            english_name: string,
            iso_639_1: string,
            name: string
        },
        status: string,
        tagline: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }[],
    total_pages: number,
    total_results: number
};


