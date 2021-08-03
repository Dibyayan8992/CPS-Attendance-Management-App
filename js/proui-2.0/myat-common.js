var successNoticeImage = '/img/notice-success.png';
var warningNoticeImage = '/img/notice-warning.png';
var failureNoticeImage = '/img/notice-failure.png';
var noticeLoaderImage = '/img/ajax-loader-fb.gif';

function addLoadingNotice(title, text) { return addNotice(title, text, successNoticeImage, 'info'); }
function addSuccessNotice(title, text) { addNotice(title, text, successNoticeImage, 'success', 'gi gi-ok_2'); }
function addWarningNotice(title, text) { addNotice(title, text, warningNoticeImage, 'warning'); }
function addFailureNotice(title, text) { addNotice(title, text, failureNoticeImage, 'danger'); }

function addNotice(title, text, image, growlType, icon, canDismiss) {
    if (canDismiss == null) {
        canDismiss = true;
    }
    if (!growlType) {
        growlType = 'info';
    }
    if (title && !text) {
        text = title;
    }
    if (!title && text) {
        title = text;
    }
    return $.bootstrapGrowl('<h4 style="border-bottom: 1px solid #ccc;">'+title+'</h4><p>'+text+'</p>', {
        type: growlType,
        // icon: icon, 
        delay: 4000,
        allow_dismiss: canDismiss
        // image: image
    });
}

//function addLoadingNotice(text) {
//    return $.gritter.add({
//        title: 'Loading',
//        text: text,
//        image: noticeLoaderImage,
//        sticky: true
//    });
//}

function removeLoadingNotice(id) {
    $.gritter.remove(id, {
        fade: false
    });
}

function switchToRegularButton(button, text, style) {
    return switchButtonText(button, text, style);
}

function switchToSavingButton(button) {
    return switchButtonText(button, 'Saving...');
}

function switchToRemovingButton(button) {
    return switchButtonText(button, 'Removing...');
}

function switchToRunningButton(button) {
    return switchButtonText(button, 'Running...');
}

function switchToSendingButton(button) {
    return switchButtonText(button, 'Sending...');
}

function switchToSearchingButton(button) {
    return switchButtonText(button, 'Searching...');
}

function switchToSaveButton(button) {
    return switchButtonText(button, 'Save', 'success');
}

function switchToSaveAndAddAnotherButton(button) {
    return switchButtonText(button, 'Save &amp; Add Another', 'success');
}

function switchToDeleteButton(button) {
    return switchButtonText(button, 'Delete', 'primary');
}

function switchToSubmittingButton(button) {
    return switchButtonText(button, 'Submitting...');
}

function switchToPushingButton(button) {
    return switchButtonText(button, 'Pushing...');
}

function switchToDeletingButton(button) {
    return switchButtonText(button, 'Deleting...');
}

function switchToAddingButton(button) {
    return switchButtonText(button, 'Adding...');
}

function switchToUploadingButton(button) {
    return switchButtonText(button, 'Uploading...');
}

function switchToUpdatingButton(button) {
    return switchButtonText(button, 'Updating...');
}

function switchToUpgradingButton(button) {
    return switchButtonText(button, 'Upgrading...');
}

function switchToProcessingButton(button) {
    return switchButtonText(button, 'Processing...');
}

function switchButtonText(button, text, style, icon) {
    $(button).removeClass("btn-success").removeClass("btn-primary").removeClass("btn-warning").removeClass("btn-default").removeClass("btn-danger");
    if (text) {
        $(button).html(text);
    }
    if (style) {
        $(button).addClass("btn-"+style);
        // $(button).find("i").addClass("icon-"+style);
    } else {
        $(button).addClass("btn-default");
    }
    if (!icon) {
        $(button).find("i").addClass("icon-ban-circle icon-white");
    }
    return true;
}

/**
 * If this is not production, _gaq and mixpanel will not be defined.
 */
function doTracking(category, item, label) {
    try {
        if (typeof _gaq != 'undefined') {
            _gaq.push(['_trackEvent', category, item, label]);
        }
    } catch (err) {
    }
    try {
        if (typeof mixpanel != 'undefined') {
            mixpanel.track(label);
        }
    } catch (err) {
    }
}

function doTrackingIncrement(item) {
    try {
        if (mixpanel) {
            mixpanel.people.increment(item);
        }
    } catch (err) {
    }
}

function doTrackingProfilePropertyTS(item, ts) {
    if (!ts) {
        var date = new Date();
        ts = date.toISOString();
    }
    doTrackingProfileProperty(item, ts);
}

function doTrackingProfileProperty(item, value) {
    try {
        if (mixpanel) {
            mixpanel.people.set(item, value);
        }
    } catch (err) {
    }
}

function doPaymentTracking(value) {
    try {
        if (mixpanel) {
            mixpanel.people.track_charge(value);
        }
    } catch (err) {
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    if ($("#top-search").length > 0) {
        $.widget( "custom.catcomplete", $.ui.autocomplete, {
            _renderMenu: function( ul, items ) {
              var that = this,
                currentCategory = "";
              $.each( items, function( index, item ) {
                if ( item.category != currentCategory ) {
                  ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                  currentCategory = item.category;
                }
                that._renderItemData( ul, item );
              });
            }
          });
        $( "#top-search" ).catcomplete({
          source: "/search",//search?action=ajaxmegasearch",
          minLength: 3,
          select: function( event, ui ) {
            document.location = ui.item.value;
            return false;
          }
        });
    }
});