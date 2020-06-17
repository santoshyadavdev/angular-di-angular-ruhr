import { InjectionToken } from "@angular/core";
import { Config } from './config';
import { environment } from '../environments/environment';

export let CONFIG_TOKEN = new InjectionToken<Config>('config toekn');

export let CONFIG_VALUE: Config = {
  apiEndPoint: environment.apiEndPoint,
  production: environment.production
}
