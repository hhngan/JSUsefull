setInterval(function () {
    jQuery('.mn-discovery-entity-card').each(function () {
        var button = jQuery(this).find('.artdeco-button--secondary');
        var friendName = jQuery(this).find('.mn-discovery-person-card__name').text();
        var toScroll = jQuery(document).height();
        if (jQuery(button).length) {
            if (!jQuery(button).hasClass('clicked')) {
                jQuery(button).click();
                console.log('Sent connect with ' + friendName.trim());
                jQuery(button).addClass('clicked');
            }
            if (jQuery(button).hasClass('clicked')) {
                jQuery("html, body").animate({ scrollTop: toScroll }, 0);
                jQuery(button).closest('li').remove();
            }
        }
    })
}, 5000);
