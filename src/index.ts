import {AxModule} from "axolotis-module-definition";
import {ContainerModule, interfaces} from "inversify";
import {IdServiceID} from "./Identifier";
import {IdService} from "./services/IdService";
export {IdService} from "./services/IdService";

export * from "./Identifier";

export class AxBasicModule implements AxModule{
    getModule(): ContainerModule {
        console.log("AxBasicModule installed 2");
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(IdService.name).toDynamicValue(() => {
                return new IdService()
            }).inSingletonScope();
            bind(IdServiceID).toDynamicValue(() => {
                return new IdService()
            }).inSingletonScope();

        });
    }

}