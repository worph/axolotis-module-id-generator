import { AxModule } from 'axolotis-module-definition';
import { ContainerModule } from 'inversify';

declare function makeid(length: any): string;
declare class IdService {
    makeid(length: any): string;
}

declare const IdServiceName: unique symbol;

declare class AxIDModule implements AxModule {
    getModule(): ContainerModule;
}

export { AxIDModule, IdService, IdServiceName, makeid };
