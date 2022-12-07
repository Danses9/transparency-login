function onLoginBtnClick() {
    if ($('.login').css('display') == 'none') {
        $('.sign-up').hide();
        $('.login').show();
        $('.form').css('top', '35%');
        $('.form').css('min-height', '350px');
    }
}

function onSignupBtnClick() {
    if ($('.sign-up').css('display') == 'none') {
        $('.login').hide();
        $('.sign-up').show();
        $('.form').css('top', '40%');
        $('.form').css('min-height', '830px');
    }
}
