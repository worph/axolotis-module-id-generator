import {AxModule} from "axolotis-module-definition";
import {ContainerModule, interfaces} from "inversify";
import {IdServiceName} from "./Identifier";
import {IdService} from "./services/IdService";
export * from "./services/IdService";

export * from "./Identifier";

export class AxIDModule implements AxModule{
    getModule(): ContainerModule {
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(IdServiceName).toDynamicValue(() => {
                return new IdService();
            }).inSingletonScope();

        });
    }

}
