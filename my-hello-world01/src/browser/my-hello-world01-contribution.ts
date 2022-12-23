import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';

export const MyHelloWorld01Command: Command = {
    id: 'MyHelloWorld01.command',
    label: 'Say Hello'
};

@injectable()
export class MyHelloWorld01CommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(MyHelloWorld01Command, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class MyHelloWorld01MenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: MyHelloWorld01Command.id,
            label: MyHelloWorld01Command.label
        });
    }
}
