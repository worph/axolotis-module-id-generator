import {AxModuleAsync} from "axolotis-module-definition";
import {AsyncContainerModule, interfaces} from "inversify";
import {IdServiceName} from "./Identifier";

export * from "./Identifier";

export class AxIDModule implements AxModuleAsync{
    getModule(): AsyncContainerModule {
        return new AsyncContainerModule(async (bind: interfaces.Bind) => {
            bind(IdServiceName).toDynamicValue(async () => {
                const {IdService} = await import("./services/IdService");
                return new IdService()
            }).inSingletonScope();
        });
    }

}
