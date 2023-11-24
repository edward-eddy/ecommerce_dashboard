import { trigger, style, animate, transition } from '@angular/animations';

export const flipAnimation = trigger('flipAnimation', [
  transition(':enter', [
    style({ transform: 'rotateY(180deg)', opacity: 0 }),
    animate('500ms', style({ transform: 'rotateY(0)', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ transform: 'rotateY(0)', opacity: 1 }),
    animate('500ms', style({ transform: 'rotateY(180deg)', opacity: 0 })),
  ]),
]);