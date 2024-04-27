export interface IProject {
    id: string;
    name: string;
    description: string;
    expectedProfit: number;
    profit: number;
    userId?: string;
}