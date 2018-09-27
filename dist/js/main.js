const DURATION = 2000;
const FPS = 60;

function animateScroll(anchor, section) {
    document.querySelector(anchor).addEventListener('click', function (e) {
        e.preventDefault();

        let start = document.body.getBoundingClientRect().top;
        let end = document.querySelector(section).getBoundingClientRect().top;
        if (section === '.info') {
            end -= 120;
        }
        let offset = end - start;
        let step = offset / (DURATION / FPS);

        function scroll() {
            console.log(start, end);

            if (start < end) {
                start += step;
                window.scroll(0, start);
                window.requestAnimationFrame(scroll);
            }
        }

        window.requestAnimationFrame(scroll);

    });
}


animateScroll('.nav_about', '.info');
animateScroll('.nav_projects', '.projects');
animateScroll('.nav_contact', '.contact');