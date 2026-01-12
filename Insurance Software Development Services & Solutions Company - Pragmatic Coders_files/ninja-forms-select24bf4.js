var dcwdDropdownFieldController = Marionette.Object.extend({
    initialize: function () {
        this.listenTo(nfRadio.channel('listselect'), 'render:view', this.renderView);
    },

    renderView: function (view) {
        if (view.model.get('container_class').includes('enable-select2')) {
            var el = jQuery(view.el).find('.nf-element');

            var lang = document.documentElement.lang || (navigator.language || navigator.userLanguage);
            var placeholderText = (lang && lang.indexOf('pl') === 0) ? 'Wybierz tematy' : 'Select topics';

            // Prevent multiple select2 initializations
            if (!el.hasClass('select2-hidden-accessible')) {
                el.select2({
                    minimumResultsForSearch: Infinity,
                    multiple: true,
                    tags: true,
                    tokenSeparators: [',', ':'],
                    placeholder: placeholderText,
                });
            }

            // Hide and disable the search field, remove empty tags
            el.on('select2:opening select2:closing', function( event ) {
                var searchfield = jQuery(this).parent().find('.select2-search__field');
                searchfield.prop('disabled', true);

                // First empty element remove fix
                jQuery('.enable-select2 .select2-selection__choice').each(function() {
                    if (!jQuery(this).attr('title')) {
                        jQuery(this).remove();
                    }
                });
            });

            // Helper function to update hidden fields
            function updateHiddenFields($select) {
                var selectedValues = $select.val() || [];
                selectedValues = selectedValues.filter(function(v) { return v.trim() !== ""; });
                var selectedString = selectedValues.join(',');
                var $form = $select.closest('form');
                $form.find('.selected_interests').val(selectedString);
                $form.find('.selected_tags').val(selectedString.toUpperCase().replace(/\s+/g, '_'));
            }

            // Update hidden fields after selecting an option
            el.on('select2:select', function (e) {
                updateHiddenFields(jQuery(this));
            });

            // Update hidden fields after removing an option (e.g. clicking "x")
            el.on('select2:unselect', function (e) {
                updateHiddenFields(jQuery(this));
            });
        }
    },
});

jQuery(document).ready(function ($) {
    if ($('.nf-form-cont').length) {
        new dcwdDropdownFieldController();
    }
});