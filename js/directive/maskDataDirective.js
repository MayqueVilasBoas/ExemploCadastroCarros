angular.module('teste').directive("dataMask", function () {
    return {
        link : function(scope, element, attrs) {
            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('00/00/0000', options);

            function putMask() {
                var mask;
                mask = "00/00/0000";
                $(element).mask(mask, options);//aplica a mascara novamente
            }
        }
    }
});
