$('body').tooltip({
    selector: '[data-toggle="tooltip"]'
});

const TYPES = ['info', 'warning', 'success', 'error'],
    TITLES = {
        'info': 'Notice!',
        'success': 'Awesome!',
        'warning': 'Watch Out!',
        'error': 'Please cross check!'
    },
    CONTENT = {
        'info': 'Hello, world! This is a toast message.',
        'success': 'The action has been completed.',
        'warning': 'It\'s all about to go wrong',
        'error': 'It all went wrong.'
    };

function show_error_toast(pause_on_hover = true,content_message) {
    let type = 'error',
        title = TITLES[type],
        content = CONTENT[type];

    $.toast({
        title: title,
        subtitle: '',
        content: content_message,
        type: type,
        pause_on_hover: pause_on_hover,
        delay: 5000
    });
}

function show_image_toast() {
    let type = TYPES[Math.floor(Math.random() * TYPES.length)],
        title = TITLES[type],
        content = CONTENT[type];

    $.toast({
        title: title,
        subtitle: '11 mins ago',
        content: content,
        type: type,
        delay: 5000,
        img: {
            src: 'https://via.placeholder.com/25',
            class: 'rounded',
            title: 'Thumbnail Title',
            alt: 'Alternative'
        }
    });
}

function show_random_snack() {
    let type = TYPES[Math.floor(Math.random() * TYPES.length)],
        content = CONTENT[type].replace('toast', 'snack');

    $.toast({
        title: content,
        type: type,
        delay: 5000
    });
}

function show_success_toast(pause_on_hover = false) {
    let type = 'success',
        title = TITLES[type],
        content = CONTENT[type];

    $.toast({
        title: title,
        subtitle: '',
        content: content,
        type: type,
        delay: 5000,
    });
}