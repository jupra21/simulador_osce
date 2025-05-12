export const SIMULATOR_IDS = {
  BASIC_1: 'basic-1',
  BASIC_2: 'basic-2',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
} as const;

export type SimulatorId = typeof SIMULATOR_IDS[keyof typeof SIMULATOR_IDS];

export interface Simulator {
  id: SimulatorId;
  name: string;
  description: string;
  color: string;
}
