export const STRING_ROCK = 'rock';
export const STRING_SCISSORS = 'scissors';
export const STRING_PAPER = 'paper';

export type CardName = 'rock' | 'scissors' | 'paper';

export interface Card {
    imageUrl: string;
    backgroundColor: string;
    borderColor: string;
    name: CardName;
    altText: string;
}

export const GAME_RULES = {
    'rock': {
        beats: STRING_SCISSORS
    },
    'scissors': {
        beats: STRING_PAPER
    },
    'paper': {
        beats: STRING_ROCK
    }
};