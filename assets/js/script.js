var typed = new Typed(".typing-text", {
    strings: [
        "backend architecture and development",
        "building robust chatbot platforms",
        "computer vision-driven automation",
        "full-stack development for AI-driven applications",
        "data-driven decision making with AI"
    ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .github', { interval: 600 });
srtop.reveal('.home .linkedin', { interval: 800 });
srtop.reveal('.home .skype', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .whatsapp', { interval: 600 });
srtop.reveal('.home .facebook', { interval: 600 });

particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#000000"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#000000",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#000000",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);

document.addEventListener('DOMContentLoaded', function () {
    const restrictedKeys = [
        { ctrl: true, shift: true, keyCode: 'I'.charCodeAt(0) },  // Ctrl+Shift+I (Inspect)
        { ctrl: true, shift: true, keyCode: 'C'.charCodeAt(0) },  // Ctrl+Shift+C (Console)
        { ctrl: true, shift: true, keyCode: 'J'.charCodeAt(0) },  // Ctrl+Shift+J (Debugger)
        { ctrl: true, keyCode: 'U'.charCodeAt(0) },               // Ctrl+U (View Source)
        { keyCode: 123 }                                          // F12 (Dev Tools)
    ];

    function isRestrictedKey(e) {
        return restrictedKeys.some(function (combination) {
            return (
                (combination.ctrl === undefined || combination.ctrl === e.ctrlKey) &&
                (combination.shift === undefined || combination.shift === e.shiftKey) &&
                combination.keyCode === e.keyCode
            );
        });
    }

    document.addEventListener('keydown', function (e) {
        if (isRestrictedKey(e)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('touchstart', function (e) {
        if (e.touches.length > 2) {
            e.preventDefault();
            return false;
        }
    });
});
