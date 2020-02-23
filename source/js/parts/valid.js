export default function validEmail() {
    $('#formEmail').on('input focus blur', function() {

        if (this.validity.valueMissing) {
            $(this).css('border', '2px solid red').css('color', 'red');
            $('.form-error').removeClass('hidden');
        }
        
        if (this.validity.patternMismatch) {
            $(this).css('border', '2px solid red').css('color', 'red');
            $('.form-error').removeClass('hidden');
        } else {$(this).css('border', '2px solid green').css('color', 'black');
        $('.form-error').addClass('hidden');
    }

    });
    
}