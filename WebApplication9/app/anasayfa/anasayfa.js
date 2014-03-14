(function () {
    'use strict';

    var controllerId = 'anasayfa';

    // TODO: replace app with your module name
    angular.module('app').controller(controllerId,['$q', 'datacontext', anasayfa]);

    function anasayfa($q, datacontext) {
        var vm = this;

        vm.title = 'anasayfa';
        vm.urunler = [];

        activate();
        
        function activate() {
            var promises = [getUrun()];
            $q.all(promises).then(function() {
            });
        }
        
        function getUrun() {
            return datacontext.getUrun().then(function(data) {
                return vm.urunler = data;
            });
        }
    }
})();
