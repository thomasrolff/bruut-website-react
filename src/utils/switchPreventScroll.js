export function switchPreventScroll(value) {
    if (value === true) {
        window.addEventListener('scroll', e => {
          window.scrollTo(0, 0);
        })

        document.body.setAttribute("class", "no-scroll");
    } else {
        document.body.removeAttribute("class", "no-scroll");
    }
}
