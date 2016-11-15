(function() {
    'use strict';

    var options = ['allowClear', 'backButtonText', 'cancelButton', 'inputLabel',
        'maxDate', 'minDate', 'maxYear', 'minYear', 'locale',
        'inputDateFormat', 'popupDateFormat', 'showInputIcon', 'todayButton',
        'calendarIcon', 'prevIcon', 'nextIcon', 'clearIcon', 'fontIcon'
    ];

    angular
        .module('am.date-picker')
        .constant('OPTIONS', options);

})();
