// Handles the animation and interraction of the carousel cells

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.2/flickity.min.css">
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