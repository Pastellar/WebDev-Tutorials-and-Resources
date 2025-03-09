// The following JS code was injected alongside HTML and CSS code


// Carousel
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.2/flickity.min.css"></link>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.2/flickity.pkgd.min.js"></script>
<script>
    var flkty = new Flickity('.carousel', {
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        pageDots: false,
        imagesLoaded: true,
    });
</script>


// Accordion
<script>
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".bio-header").forEach(header => {
            header.addEventListener("click", function () {
                const content = this.nextElementSibling;
                const isOpen = content.classList.contains("open");
                document.querySelectorAll(".bio-content").forEach(bio => {
                    if (bio !== content) {
                        bio.classList.remove("open");
                        bio.style.maxHeight = "0px";
                        bio.style.opacity = "0";
                        bio.previousElementSibling.classList.remove("active");
                    }
                });
                if (!isOpen) {
                    content.classList.add("open");
                    this.classList.add("active");
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.opacity = "1";
                } else {
                    content.classList.remove("open");
                    this.classList.remove("active");
                    content.style.maxHeight = "0px";
                    content.style.opacity = "0";
                }
            });
        });
    });
</script>