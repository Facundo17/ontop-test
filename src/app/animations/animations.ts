import { animate, state, style, transition, trigger } from "@angular/animations";

// custom animations

// slide bar
export const slideBar =
    trigger('slideBar', [
        state('hide', style({
            transform: 'translateY(-100px)'
        })),

        state('show', style({
            transform: 'translateY(0)'
        })),
        transition('hide => show', [
            animate('0.5s')
        ])
    ]);


// floating button
export const animationButton = 
    trigger('showButton', [
        state('hide', style({
            bottom: '-300px'
        })),

        state('show', style({
            bottom: '0'
        })),
        transition('hide => show', [
            animate('0.5s')
        ])
]);

// fade transition
export const fadeInOut = 
    trigger('showOrHide', [
        state('hide', style({
            opacity: '0'
        })),

        state('show', style({
            opacity: '1'
        })),
        transition('hide <=> show', [
            animate('0.5s')
        ])
    ]);