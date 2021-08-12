const sessions = require('../data/sessions');
const fUtil = require('../fileUtil');
const stuff = require('./info');

function toAttrString(table) {
	return typeof (table) == 'object' ? Object.keys(table).filter(key => table[key] !== null).map(key =>
		`${encodeURIComponent(key)}=${encodeURIComponent(table[key])}`).join('&') : table.replace(/"/g, "\\\"");
}
function toParamString(table) {
	return Object.keys(table).map(key =>
		`<param name="${key}" value="${toAttrString(table[key])}">`
	).join(' ');
}
function toObjectString(attrs, params) {
	return `<object ${Object.keys(attrs).map(key =>
		`${key}="${attrs[key].replace(/"/g, "\\\"")}"`
	).join(' ')}>${toParamString(params)}</object>`;
}

module.exports = function (req, res, url) {
	if (req.method != 'GET') return;
	const query = url.query;

	var attrs, params, title;
	switch (url.pathname) {
          case '/videos/': {
			attrs = {
				data: process.env.SWF_URL + '/player.swf',
				type: 'application/x-shockwave-flash', width: '100%', height: '100%', id: 'Player',
			};
			params = {
				flashvars: {
					'movieOwner': 'Gabby+the+PatB+Girl', 'movieOwnerId': '05_ECIL1n9t4', 'movieId': '', 'movieLid': '0', 
					'movieTitle': '', 'movieDesc': '', 'userId': '', 'username': '', 'uemail': '', 'ut': '-1', 'numContact': '',
					'apiserver': '/', 'duration': '', 'playcount': 1, 'thumbnailURL': '/movie_thumbs/m-0.png', 'copyable': '0', 
					'isPublished': '1','ctc': 'go', 'tlang': 'en_US', 'is_private_shared': '0', 'autostart': '0', 'appCode': 'go', 
					'is_slideshow': '0', 'originalId': '0Y7-ebJ36Ip4', 'is_emessage': '0', 
					'storePath': process.env.STORE_URL + '/<store>', 'clientThemePath': process.env.CLIENT_URL + '/<client_theme>',
					'animationPath': process.env.SWF_URL + '/', 'isEmbed': '0', 'refuser': null, 'utm_source': null, 'uid': null, 
					'isTemplate': '0', 'showButtons': '1', 'chain_mids': '', 'averageRating': 5, 'ratingCount': '1', 
					'fb_app_url': '/', 'ad': 1, 'endStyle': 0, 'isWide': '1', 'pwm': 1, 
					's3base': 'https://josephcrosmanplays532.github.io/s3base/,https://assets.vyond.com/', 
					'initcb': 'flashPlayerLoaded', 'showshare': false,
				},
				allowScriptAccess: 'always',
			};
			break;
		}

		default:
			return;
	}
	res.setHeader('Content-Type', 'text/html; charset=UTF-8');
	Object.assign(params.flashvars, query);
	res.end(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link rel="dns-prefetch" href="https://d2bm7x1jqouzel.cloudfront.net">
<link rel="dns-prefetch" href="//d3v4eglovri8yt.cloudfront.net">

<title>Video Player</title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="description" content="">
<meta property="og:site_name" content="Vyond">
<meta property="fb:app_id" content="177116303202">

<meta name="google-site-verification" content="K_niiTfCVi72gwvxK00O4NjsVybMutMUnc-ZnN6HUuA">


<link href="https://josephcrosmanplays532.github.io/fonts/1/sailec.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/common_combined.css.gz.css" rel="stylesheet" type="text/css">

<!--[if lt IE 9]>
<style text="text/css">
.top-nav.collapse {height: auto;overflow: visible;}
</style>
<![endif]-->

<script>
var srv_tz_os = -4, view_name = "go", user_cookie_name = "u_info";
var user_role = 9;
</script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/common_combined.js.gz.js"></script>
<script type="text/javascript" src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/../po/goserver_js-en_US.json.gz.json"></script>
<script type="text/javascript">
var I18N_LANG = 'en_US';
var GT = new Gettext({'locale_data': json_locale_data});
</script>

<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/amplitude/go_amp.js.gz.js"></script>

<!-- Vyond Cookie Consent -->
<script>(function(v,y,o,n){v[n]=v[n]||[];
var f=y.getElementsByTagName(o)[0],d=y.createElement(o);
d.type='text/javascript';d.async=true;d.src=
'https://ga.vyond.com/ajax/cookie_policy';
f.parentNode.insertBefore(d,f);
})(window,document,'script','_vyccq');</script>
<!-- End Vyond Cookie Consent -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TXV7MD');

dataLayer.push({"userId":"0qgLvWzILhPQ"});
</script>
<!-- Google Tag Manager -->

<script>
function redirectWithFlashvars() {
		window.open('/videos/edit/?movieId='+flashvars.movieId+')
	}
</script>

<!-- Start of Zendesk Widget script -->
<script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(c){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("//assets.zendesk.com/embeddable_framework/main.js","h5goanimate.zendesk.com");/*]]>*/</script>
<!-- End of Zendesk Widget script -->
<script>
zE(function() {
    zE.identify({"name":"viriwi9329","email":"viriwi9329@697av.com"});
    zE.hide();
});
</script>


</head>
<body class="en_US has-user" >
<script type="text/javascript">
if (self !== top) {
            jQuery('body').hide();
    }
</script>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXV7MD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<script type="text/javascript">
        jQuery.extend(CCStandaloneBannerAdUI, {"actionshopSWF":"https:\/\/d3v4eglovri8yt.cloudfront.net\/animation\/66453a3ba2cc5e1b\/actionshop.swf","apiserver":"http:\/\/ga.vyond.com\/","clientThemePath":"https:\/\/d3v4eglovri8yt.cloudfront.net\/static\/d38bebddb37ae645\/<client_theme>","userId":"0qgLvWzILhPQ"});
</script>

<div class="page-container">


<div class="site-header">
    <div class="navbar site-nav" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                <a class="navbar-brand" href="/videos/list" title="Go Back To The Video List">
                    <img alt="Vyond" src="/pages/img/vyond/left.png">
                </a>
            </div>

            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav navbar-right">
<li class="dropdown">
    <a class="dropdown-toggle" href="https://ga.vyond.com/zendesk_sso_login" data-toggle="dropdown">Help<span class="dropdown-caret"></span></a>
    <ul class="dropdown-menu dropdown-menu-help">

        <li>
            <a href="#" onclick="zE.activate({hideOnClose: true});amplitudeTrackCtaHelp('quick_search');return false;">Quick Search</a>
        </li>
        <li>
            <a href="https://ga.vyond.com/zendesk_sso_login" onclick="amplitudeTrackCtaHelp('help_center');" target="_blank">Help Center</a>
        </li>
        <li>
            <a href="https://product.vyond.com/" onclick="amplitudeTrackCtaHelp('whats_new');" target="_blank">What’s New</a>
        </li>
    </ul>
</li>

<script>
    $('.dropdown-menu-help').click(function(e) {
        e.stopPropagation();
    });
</script>
<li>
<a href="#" oneclick="redirectWithFlashVars(flashvars.movieId)"><span class="link-pencil"></span></a>
</li>

<script>
    $('.dropdown-menu-create').click(function(e) {
        e.stopPropagation();
    });
</script>
<li class="dropdown">
    <a class="dropdown-toggle" href="https://app.vyond.com/v2/profile" data-toggle="dropdown">
        <span class="hidden-sm hidden-md hidden-lg">Your Account</span>
        <div class="site-nav__profile-image">
            <div class="badge-circle">JC</div>
        </div><span class="dropdown-caret"></span>
    </a>
    <ul class="dropdown-menu dropdown-menu-user">
        <li class="dropdown-user-profile">
            <div class="dropdown-user-profile__display-name">
                Joseph Crosman            </div>
            <div class="dropdown-user-profile__status">
                Free trial | <a href="https://www.vyond.com/pricing">Upgrade now</a>            </div>
        </li>
        <li class="divider"></li>
        <li><a href="https://app.vyond.com/v2/profile">Profile Settings</a></li>
        <li><a href="https://app.vyond.com/v2/users/list">Users</a></li>
        <li><a href="https://app.vyond.com/v2/security">Security</a></li>
        <li><a href="https://app.vyond.com/v2/subscription">Subscription</a></li>
        <li class="divider"></li>
        <li><a href="https://app.vyond.com/video/list" onClick="amplitudeTrackSwitchVideoMaker('Go to Vyond Studio')">Go to Vyond Studio</a></li>
        <li class="divider"></li>
        <li><a class="gtm-logout" href="https://ga.vyond.com/logoff">Log Out</a></li>
    </ul>
</li>

<script>
    $('.dropdown-menu-user').click(function(e) {
        e.stopPropagation();
    });
</script>
                </ul>
            </div>
    </div>
</div>

<script>
    $('.logout-link').click(function(){
        amplitudeTrackEvent(AMPLITUDE_EVENT.LOGOUT, null);
    });
</script>

<!-- END OF HEADER -->

<script>flashvars=${JSON.stringify(params.flashvars)}</script>${toObjectString(attrs, params)}
<h1>More Videos To Watch</h1>
<main>
	<table>
		<thead>
			<tr>
				<td></td>
				<td>Video Title</td>
				<td>Last Modified</td>
				<td></td>
			</tr>
		</thead>
		<tbody></tbody>
		<tfoot>
			<tr>
				<td colspan="127"><a id="load_more" oneclick="loadRows()" href="javascript:;">LOAD MORE...</a></td>
			</tr>
		</tfoot>
	</table>
</main>
<!-- FOOTER -->

<footer class="site-footer site-footer--light">
    <div class="container">
        <a href="https://www.vyond.com/terms">Terms of Service</a> | <a href="https://www.vyond.com/privacy">Privacy Policy</a> | <a
        href="https://www.vyond.com/cookies">Cookie Policy</a>
    </div>
</footer>


<div id="studio_container" style="display: none;">
    <div id="studio_holder"><!-- Full Screen Studio -->
        <div style="top: 50%; position: relative;">
            You can't use Vyond because Flash might be disabled. <a href="https://get.adobe.com/flashplayer/">Enable Flash</a>.
        </div>
    </div>
</div>

</div>
<!-- END OF PAGE STRUCTURE -->



<div id="offer_container">
</div>
<script type="text/javascript">
function redirectWithFlashVars(flashvars.movieId) {
		window.open('/videos/edit/?movieId=' + flashvars.movieId + ');
	}
</script>

<script type="text/javascript">
	const closeReq = new XMLHttpRequest();
	closeReq.open('GET', '/events/close');
	closeReq.send();

	var json;
	var tbody = document.getElementsByTagName('tbody')[0];
	var loadMore = document.getElementById('load_more');
	const listReq = new XMLHttpRequest();
	listReq.open('GET', '/movieList');
	listReq.send();

	var C = 0;
	function loadRows() {
		let c = C; C += 69;
		for (; c < C; c++) {
			if (c > json.length - 1) {
				loadMore.remove();
				break;
			}

			const tbl = json[c];
			const date = tbl.date.substr(0, 10) + ' ' + tbl.date.substr(11);
			tbody.insertAdjacentHTML('beforeend',
				'<tr><td><img src="/movie_thumbs/' + tbl.id + '.png"></td><td><div>' + tbl.title + '</div><div>' + tbl.desc + '</div><div>' + tbl.durationString + '</div></div></div></div></td><td><span>' + date + '</span></td><td><a href="/videos/?movieId=' + tbl.id + '&movieTitle=' + tbl.title + '&movieDesc=' + tbl.desc + '&duration=' + tbl.durationString + '&date=' + date + '"></a></td></tr>');
		}
	}

	loadMore.onclick = loadRows;
	listReq.onreadystatechange = function (e) {
		if (listReq.readyState != 4) return;
		json = JSON.parse(listReq.responseText);
		loadRows();
	}
</script>
<style>
.link-pencil{display:inline-block;width:12px;height:0;padding-bottom:12px;background:transparent url('../pages/img/vyond/pencil.png') no-repeat 0 0;background-size:cover;margin-left:8px}
html {
	font-family: 'Sailec', Arial, sans-serif;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

body {
	margin: 0;
	background-color: #fff;
	color: #474747;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;
	position: relative;
	width:100%;
	height:100%;
}

header {
	height: 44px;
	align-content: center;
	background-color: #1e1e1e;
	color: #fff;
	text-align: center;
	display: inline-block;
	width: 100%;
}

#logo {
	float: left;
	margin-left: 10px;
	margin-top: 4px;
	height: 35px;
}

#headbuttons {
	margin-right: 20px;
	float: right;
}

.button_big,
.button_small {
	margin-left: 10px;
	margin-top: 7px;
	display: inline-block;
	padding-top: 5px;
	padding-bottom: 3px;
	border-radius: 3px;
	font-size: 14px;
	text-decoration: none;
	color: #fff;
}

.button_big {
	background-color: #d85e27;
	width: 160px;
}

.button_big:hover {
	text-decoration: underline;
}

.button_small:hover {
	color: #d85e27;
}

.button_big:hover,
.button_small:hover {
	cursor: pointer;
}

#char_dropdown {
	width: 200px;
}

#char_dropdown>menu {
	position: relative;
	display: none;
	top: 100%;
	left: 0;
	z-index: 1000;
	float: left;
	width: 190px;
	padding: 10px 0;
	margin: 9px 0 0;
	font-size: 14px;
	text-align: left;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 4px;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}

#char_dropdown:hover>menu {
	display: block;
	cursor:default
}

#char_dropdown>menu>a {
	display: block;
	padding: 2px 20px;
	clear: both;
	font-weight: normal;
	color: #333;
	text-decoration: none;
}

#char_dropdown>menu>a:hover {
	cursor: pointer;
	color: #d85e27;
}

#char_dropdown>menu>a:hover {
	color: #d85e27;
	background-color: #f5f5f5;
}

#char_dropdown>menu>hr {
	border: 1px solid #e5e5e5;
	margin: 10px 0;
}

#char_dropdown>menu>h2 {
	font-size: 15px;
	color: #000;
	margin:0;
	padding:2px 20px;
	font-weight:bold
}


table {
	width: 100%;
	max-width: 100%;
	margin-bottom: 127px;
	margin-right: auto;
	margin-left: auto;
	background-color: transparent;
	border-collapse: collapse;
	border-spacing: 0;
	font-size: 14px;
}

@media(min-width: 768px) {
	table {
		width: 750px;
	}
}

@media(min-width: 992px) {
	table {
		width: 970px;
	}
}

@media(min-width: 1200px) {
	table {
		width: 1170px;
	}
}

thead {
	font-weight: 200;
}

td {
	padding: 8px;
	vertical-align: middle;
	line-height: 1.42857143;
}

thead {
	border-bottom: 2px solid #ddd;
}

tbody>tr {
	border-top: 0;
	border-bottom: 1px solid #ddd;
}

tbody>tr:hover {
	background-color: #f5f5f5;
}

tr>:nth-child(1) {
	width: 64px;
}

tr>:nth-child(1)>img {
	height: 36px;
}

tr>:nth-child(1) {
	word-break: break-word;
}

tr>:nth-child(2) {
	color: #999;
}

tr>:nth-child(3) {
	width: 250px;
}

tr>:nth-child(3)>* {
	display: inline-block;
	text-align: center;
	font-size: 12px;
	width: 8.5px;
}

tr>:nth-child(4) {
	font-family: 'GlyphiconsRegular';
	text-decoration: none;
	padding-top: 5px;
	font-size: 14px;
	width: 80px;
}

tr>:nth-child(4)>a {
	display: inline-block;
	text-decoration: none;
	padding-right: 10px;
	color: #474747;
}

tr>:nth-child(4)>a:hover {
	color: #d85e27;
}

tr>:nth-child(4)>:nth-child(1)::before {
	content: '\E174';
}

tr>:nth-child(4)>:nth-child(2)::before {
	content: '\E235';
}

tr>:nth-child(4)>:nth-child(3)::before {
	content: '\E182';
}

tfoot>tr>td {
	text-align: center;
	border: none;
}

tfoot>tr>td>a {
	text-decoration: none;
	color: #474747;
	font-size: 14px;
}

form {
	display: none;
}

footer{
	position:fixed;
	left:5px;
	bottom:5px;
	color:#474747;
}

footer>a{
	color:#474747;
	text-decoration:none;
}

@font-face {
	font-family: 'Sailec';
	font-weight: 100;
	src: url('../fonts/Sailec-Thin.woff') format('woff');
}

@font-face {
	font-family: 'Sailec';
	font-weight: 200;
	src: url('../fonts/Sailec-Light.woff') format('woff');
}

@font-face {
	font-family: 'Sailec';
	font-weight: 400;
	src: url('../fonts/Sailec-Regular.woff') format('woff');
}

@font-face {
	font-family: 'Sailec';
	font-weight: 500;
	src: url('../fonts/Sailec-Medium.woff') format('woff');
}

/* font weight 500 and font weight 700 (bold) are the same for better integration support */
@font-face {
	font-family: 'Sailec';
	font-weight: 700;
	src: url('../fonts/Sailec-Medium.woff') format('woff');
}

@font-face {
	font-family: 'GlyphiconsRegular';
	src: url('../fonts/glyphicons-regular.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}
</style>
</body>
</html>`);
	return true;
}
