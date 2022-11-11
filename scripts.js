function ctrlC(project) {
    var link;
    if (project == 1) {link='https://xsaze.github.io/sign-up-form/'}
    if (project == 2) {link='https://xsaze.github.io/calculator-update/'}
    if (project == 3) {link='https://xsaze.github.io/etch-a-sketch/'}
    if (project == 4) {link='https://xsaze.github.io/rock-paper-scissors/'}
    if (project == 5) {link='https://xsaze.github.io/landing-page/'}
    navigator.clipboard.writeText(link);
}