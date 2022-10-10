$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Soekarno Hatta", "Halim Perdanakusuma", "Kerta Jati",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["**Soekarno Hatta", "**Halim Perdanakusuma", "**Kerta Jati",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    $(document).on('click','.send', function(){
        /* Inputan Formulir */
        var input_name          = $("#name").val(),
            input_tujuan        = $("#tujuan").val(),
            input_alamat        = $("#alamat").val(),
            input_phone         = $("#phone").val(),
            input_product       = $("#product").val(),
            input_description   = $("#description").val();
     
        /* Pengaturan Whatsapp */
        var walink      = 'https://web.whatsapp.com/send',
            phone       = '6281224386780',
            text        = 'Halo saya ingin memesan ',
            text_yes    = 'Pesanan Anda berhasil terkirim.',
            text_no     = 'Isilah formulir terlebih dahulu.';
     
        /* Smartphone Support */
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var walink = 'whatsapp://send';
        }
     
        if(input_name != "" && input_alamat != "" && input_phone != "" && input_product != ""){
            /* Whatsapp URL */
            var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
                '*Nama* : ' + input_name + '%0A' +
                '*Alamat* : ' + input_alamat+ '%0A' +
                '*Tujuan*  : ' + input_tujuan + '%0A' +
                '*Nomor Kontak / Whatsapp* : ' + input_phone + '%0A' +
                '*Produk* : ' + input_product + '%0A' +
                '*Catatan* : ' + input_description + '%0A';
     
            /* Whatsapp Window Open */
            window.open(checkout_whatsapp,'_blank');
            document.getElementById("text-info").innerHTML = '<div class="alert alert-success">'+text_yes+'</div>';
        } else {
            document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">'+text_no+'</div>';
        }
    });
});
