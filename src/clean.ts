import { BuildContext } from './util/interfaces';
import { BuildError } from './util/errors';
import { emptyDirSync } from 'fs-extra';
import { Logger } from './logger/logger';


export function clean(context: BuildContext) {
  const logger = new Logger('clean');

  try {
    Logger.debug(`clean ${context.buildDir}`);

    emptyDirSync(context.buildDir);
    logger.finish();

  } catch (e) {
    throw logger.fail(new BuildError(`Error cleaning ${context.buildDir}, ${e}`));
  }

  return Promise.resolve();
}
