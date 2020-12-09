import {
    animateScroll as scroll,
    scroller,
} from "react-scroll";

export function scrollToTop() {
    scroll.scrollToTop();
}

export function scrollTo(to) {
    scroller.scrollTo(to, {
        duration: 800,
        delay: 0,
        spy: true,
        offset: 0,
        smooth: 'easeInOutQuart',
    })
}