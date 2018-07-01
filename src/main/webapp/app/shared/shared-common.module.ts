import { NgModule } from '@angular/core';

import { TransportSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TransportSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TransportSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TransportSharedCommonModule {}
