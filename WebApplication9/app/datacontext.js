(function () {
    'use strict';

    var serviceId = 'datacontext';

    // TODO: replace app with your module name
    angular.module('app').factory(serviceId, ['$q', datacontext]);

    function datacontext($q) {
        // Define the functions and properties to reveal.
        var service = {
            getUrun: getUrun
        };

        return service;

        function getUrun() {
            var urunler = [
                { urunAdi: "Ada şirket", urunResmi: "block_post_img1.jpg", urunAciklama: "Ada şirket " },
                { urunAdi: "Ada şirket", urunResmi: "block_post_img2.jpg", urunAciklama: "Ada acente " },
                { urunAdi: "Ada şirket", urunResmi: "block_post_img3.jpg", urunAciklama: "Ada adsf asfd  " }
            ];
            return $q.when(urunler);
        }

    }
})();