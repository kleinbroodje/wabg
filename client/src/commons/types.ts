import type { Component } from "vue";

export interface Game {
    id: string,
    title: string,
    description: string,
    duration: number,
    players: [number, number],  // min-max (2+ for example would be [2, 999])
    color: string,
    entry: Component,
}