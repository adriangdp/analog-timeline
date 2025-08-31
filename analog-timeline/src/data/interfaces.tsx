/**
 * Represents a song
 * @property title - Song's title
 * @property artist - Song's performer
 * @property album - Optional - Song's original album. Blanck for Single
 * @property cover - Path to cover image
 */

export interface Song{
    title:string;
    artist:string;
    album?:string;
    cover:string;
}

/**
 * Represents a historical event
 * @property title - Title or headline for the event
 * @property description - Brief description of the event
 * @property image - Path to event image
 */

export interface HistoryEvent {
    title: string;
    description:string;
    image:string;
}

/**
 * Data contained in a Timeline point
 * @property year - Year of the event AND song
 * @property event - Historical event related to that year
 * @property song - Song released in the same year
 */

export interface TimelineEvent {
    year: number;
    event: HistoryEvent;
    song: Song;
}