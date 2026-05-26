// Carousel

// Array storage class
let carouselArr = [];

class Carousel {
    constructor(image, caption, url) {
        this.image = image;
        this.caption = caption;
        this.url = url || '#';
    }

    static Start(arr) {
        if (!Array.isArray(arr)) {
            throw 'Method Start needs an array of carousel items.';
        }

        if (arr.length === 0) {
            return;
        }

        Carousel._items = arr;
        Carousel._size = arr.length;
        Carousel._sequence = 0;
        Carousel._render();
        Carousel._resetInterval();
    }

    static _render() {
        const carousel = document.getElementById('carousel');
        const title = document.getElementById('carousel-title');
        if (!carousel || !title) {
            return;
        }

        const current = Carousel._items[Carousel._sequence];
        carousel.innerHTML = `
            <a href="${current.url}" class="carousel-link">
                <img src="img/${current.image}" alt="${current.caption}" class="carousel-image" />
                <div class="carousel-overlay">
                    <span>${current.caption}</span>
                </div>
            </a>
        `;

        title.innerHTML = `<a href="${current.url}" class="carousel-title-link">Veja mais sobre este lançamento</a>`;
    }

    static _resetInterval() {
        if (Carousel._interval) {
            clearInterval(Carousel._interval);
        }

        Carousel._interval = setInterval(() => {
            Carousel.Next();
        }, 6000);
    }

    static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel._render();
        Carousel._resetInterval();
    }

    static Prev() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel._render();
        Carousel._resetInterval();
    }
}
