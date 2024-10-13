// Common types used in the project

export interface Service {
    id: string;
    name: string;
    avgRating: number;
}

export interface Rating {
    service_id: string;
    id: string;
    rating: number;
    comment: string;
}