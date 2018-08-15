import { NgModule } from '@angular/core';

import { TaskAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TaskAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TaskAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TaskAppSharedCommonModule {}
