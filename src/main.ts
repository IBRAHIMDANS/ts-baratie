import './prelude';
import './postlude';
import Reception from './core/Reception';
import * as cluster from 'cluster';

if (cluster.isMaster) {
	Reception.run();
} else {
	const onProcess = (): void => {};
}
