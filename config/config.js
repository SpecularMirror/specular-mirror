/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interfacee
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.1.123"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "it",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Milano",
				locationID: "3173435", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "9e992cd96c914586f417d9ff96187b7a"
			}
		},
        {
    		module: 'MMM-Screencast',
    		position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
    		config: {
    			position: 'bottomRight',
    			height: 300,
    			width: 500,
                castName: 'Specular'
    		}
        },
        {
          module: "MMM-NowPlayingOnSpotify",
          position: "top_left",

          config: {
            clientID: "0e20dc02dc1d430792f83aabf9d4ac7e",
            clientSecret: "0318f36cbfbc4a91b7f509c0cdb89f12",
            accessToken: "BQCNaFNCEiaPImCdyCtg_RseUk69LmpC8FN-7udi-tANOIbaosTMwY90HDedC95iHVjfCoriOoY6nbDmoTLbkPz8TKXm-gRYfo1WLb6TF1nFtgB25ve_P8jcHy01TTmTMXFxUZyrEDa_mCn6qc81OAajZV2la3of",
            refreshToken: "AQACTJSkZgtmgy6SRR2Jq6_rEJUeAoAswm1BoSCGsLBmYk_aO8WP8XLy3HWVA8EuGFlXPz46RKcnuYcab9RIRRPeCOpNHKcRJa24TRnqHny55XbwOSgDwqOahJWWJqJkz7g"
          }
        },
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Milano",
				locationID: "3173435", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "9e992cd96c914586f417d9ff96187b7a"
			}
		},
		{
			module: "MMM-GoogleAssistant",
			position: "top_right",
			config: {
				maxWidth: "100%",
				header: "",
			publishKey: 'pub-c-7bef603d-ddb0-430a-bda4-f2d07e10ddb6',
			subscribeKey: 'sub-c-35a47ec0-f34d-11ea-afa2-4287c4b9a283',
			updateDelay: 500
			}
		},
		{
            module: 'MMM-GoogleTasks',
            header: "Google Tasks",
            position: "top_left",
            config: {
                listID: "MTE5MTA2Mzg4ODE3MTQ5NzUyMzQ6MDow"
            }
		},
		{
			module: "MMM-CalendarWeek",
			position: "bottom_bar",	// This can be any of the regions. Best results in bottom region.
			config: {
				colored: false,
				coloredSymbolOnly: false,
				calendars: [
					{
					url: 'https://calendar.google.com/calendar/ical/segato117%40gmail.com/private-633f579ddab562519ff05093dac5a5e7/basic.ics',
					symbol: 'calendar'
					}
				]
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "ANSA News",
						url: "https://www.ansa.it/sito/ansait_rss.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
