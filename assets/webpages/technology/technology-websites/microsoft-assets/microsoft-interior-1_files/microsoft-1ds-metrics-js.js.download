const analytics = new oneDS.ApplicationInsights();

// Required to capture UHF search telemetry
window.owap = analytics;

var dataSharing = GPC_DataSharingOptIn;

if (location.hostname.split('.').reverse().splice(0,2).reverse().join('.') != 'microsoft.com') {
    dataSharing = false;
}

var config = {
    instrumentationKey: oneds_object.tenant_key,
    channelConfiguration:{ // Post channel configuration
        eventsLimitInMem: 50
    },
    propertyConfiguration: { // Properties Plugin configuration
        userAgent: 'Custom User Agent',
        gpcDataSharingOptIn: dataSharing, 
        callback: {
            userConsentDetails: siteConsent ? siteConsent.getConsent:undefined
        },
    },
    webAnalyticsConfiguration:{ // Web Analytics Plugin configuration
        urlCollectHash:true,
        urlCollectQuery:true,
        autoCapture: {
            scroll: true,
            pageView: true,
            onLoad: true,
            click: true,
            resize: true,
            jsError: true
        },
        coreData: {
            market: oneds_object.market,
            pageType: oneds_object.pagetype,
            pageName: oneds_object.name
        }
    }
};
//Initialize SDK
analytics.initialize(config, []);

console.info( 'Microsoft 1DS initialized' );
