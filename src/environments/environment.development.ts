import { commonEnvironment } from './environment.common';

const env: Partial<typeof commonEnvironment> = { valor1: 'valor 11' };

export const environment = { ...commonEnvironment, ...env };
