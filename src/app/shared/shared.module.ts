import {NgModule} from '@angular/core';
import {
  NgbAccordion, NgbAccordionModule,
  NgbAlert, NgbAlertModule,
  NgbCarousel, NgbCarouselModule,
  NgbCollapse, NgbCollapseModule,
  NgbDatepicker, NgbDatepickerModule,
  NgbDropdown, NgbDropdownModule,
  NgbModal, NgbModalModule,
  NgbPagination, NgbPaginationModule,
  NgbPopover, NgbPopoverModule,
  NgbProgressbar, NgbProgressbarModule,
  NgbRating, NgbRatingModule,
  NgbTabset, NgbTabsetModule,
  NgbTimepicker, NgbTimepickerModule,
  NgbTooltip, NgbTooltipModule,
  NgbTypeahead, NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';

export const BOOTSTRAP_MODULE = [
  NgbAccordionModule,
  NgbAlertModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbPopoverModule,
  NgbProgressbarModule,
  NgbRatingModule,
  NgbTabsetModule,
  NgbTimepickerModule,
  NgbTooltipModule,
  NgbTypeaheadModule
];

@NgModule({
    declarations: [],
    exports: [BOOTSTRAP_MODULE],
    imports: [BOOTSTRAP_MODULE],
    providers: []
  }
)
export class SharedModule {

}
