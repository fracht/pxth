import toPath from 'lodash/toPath';

import { RootPath } from './RootPath';
import { RootPathToken } from '.';

export const parseSegmentsFromString = (src: string | RootPath): string[] =>
    src === RootPathToken ? [] : toPath(src);
