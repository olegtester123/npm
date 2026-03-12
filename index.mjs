// ESM: phantom mpath usage via import (never declared in package.json)
import mpath from 'mpath';

console.log('ESM mpath (phantom):', mpath?.version ?? 'loaded');
