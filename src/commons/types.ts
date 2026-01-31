export interface IGamePreview {
    id: number,
    title: string,
    description: string,
    duration: number,
    players: [number, number],  // min-max (2+ for example would be [2, 999])
    color: string,
    route: string,
}