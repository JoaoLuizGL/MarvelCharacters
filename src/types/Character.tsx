export type CharacterProps = {
    id: number;
    name: string;
    image?: string,
    description: string;
    comics?: number;
    series?: number;
    stories?: number;
    events?: number;
    total: number;
    // urls: string;
}