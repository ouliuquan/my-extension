/**
 * Generated using theia-extension-generator
 */
import { MyHelloWorld01CommandContribution, MyHelloWorld01MenuContribution } from './my-hello-world01-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(MyHelloWorld01CommandContribution);
    bind(MenuContribution).to(MyHelloWorld01MenuContribution);
});
