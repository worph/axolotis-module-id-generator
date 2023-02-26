import {AxModuleAsync} from "axolotis-module-definition";
import {AsyncContainerModule, interfaces} from "inversify";
import {IdServiceID} from "./Identifier";

export * from "./Identifier";

export class AxBasicModule implements AxModuleAsync{
    getModule(): AsyncContainerModule {
        return new AsyncContainerModule(async (bind: interfaces.Bind) => {
            bind(IdServiceID).toDynamicValue(async () => {
                const {IdService} = await import("./services/IdService");
                return new IdService()
            }).inSingletonScope();
        });
    }

}
