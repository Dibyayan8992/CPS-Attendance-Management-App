
/**
 * If this is not production, _gaq and mixpanel will not be defined.
 */
function doTracking(category, item, label) {
    try {
        if (typeof ga != 'undefined') {
            ga('send', 'event', category, item, label);
            // _gaq.push(['_trackEvent', category, item, label]);
        }
    } catch (err) {
        console.log(err);
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
    if (mixpanel) {
        mixpanel.people.set(item, value);
    }
}
