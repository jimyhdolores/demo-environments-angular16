import { commonEnvironment } from './environment.common';

const env: Partial<typeof commonEnvironment> = {};

export const environment = { ...commonEnvironment, ...env };
