export interface EventModel {
    id: number;
    name: string;
    description: string;
    date: Date;
    status: EventStatus;
}

export enum EventStatus {
    PENDING,
    IN_PROGRESS,
    FINISHED
}