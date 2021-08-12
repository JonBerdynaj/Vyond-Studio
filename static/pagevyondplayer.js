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
	return `<object id="obj" ${Object.keys(attrs).map(key =>
		`${key}="${attrs[key].replace(/"/g, "\\\"")}"`
	).join(' ')}>${toParamString(params)}</object>`;
}

module.exports = function (req, res, url) {
	if (req.method != 'GET') return;
	const query = url.query;

	var attrs, params, title;
	switch (url.pathname) {
    case '/videos/': {
			title = 'Video Player';
			attrs = {
				data: process.env.SWF_URL + '/player.swf',
				type: 'application/x-shockwave-flash', width: '100%', height: '100%',
			};
			params = {
				flashvars: {
					'apiserver': '/', 'storePath': process.env.STORE_URL + '/<store>', 'ut': 60,
					'autostart': 1, 'isWide': 1, 'clientThemePath': process.env.CLIENT_URL + '/<client_theme>',
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

<title>Your Videos On Vyond</title>

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


<header class="video-page-topbar"><div class="video-page-topbar__logo video-page-topbar__logo--small video-page-topbar__logo--square"><a class="tooltip-trigger video-page-topbar__logo__link TooltipTrigger__StyledTooltipTrigger-sc-62e356-0 kCKWMb"><svg viewBox="0 0 128 128" class="video-page__img-back"><use xlink:href="/videos/list"></use></svg></a></div><div class="video-page-topbar__content__container"><div class="video-page-topbar__content"><div class="video-page-topbar__title"><form><input type="text" class="video-page__title-input HiddenTextField-sc-1bla01z-0 ifuQpm video-page__title-input HiddenTextField-sc-1bla01z-0 ifuQpm--medium" name="video_title" autocomplete="false" aria-label="Rename" value="'+flashvars.movieTitle+'"></form></div><nav class="video-page-topbar__nav"><div class="video-page-topbar__nav__right"><div class="video-page-topbar__nav__item"><span><button class="button  button--icon" type="button"><svg viewBox="0 0 128 128" class="button__icon"><path d="M116.5,25.4c-0.9-7.1-6.7-12.9-13.8-13.8c-5.2-0.7-10.1,1.2-13.4,4.6L15.5,89.9l-3.9,22.5l-0.2,1.2 c0,1.6,1.3,3,3,3c0.2,0,0.5,0,0.7-0.1c0,0,0,0,0,0l23.1-4l73.8-73.8C115.3,35.4,117.1,30.6,116.5,25.4z M33.2,106.8l-14.4,2.5v0 l2.5-14.4h12V106.8z M39.6,102V91.2c0-1.5-1.2-2.8-2.8-2.8H26l59.1-59.1l13.6,13.6L39.6,102z M107.4,34.2l-4.1,4.1L89.6,24.8 l4.1-4.1c2.1-2.1,5.1-3.2,8.4-2.7c4,0.6,7.2,3.9,7.9,7.8C110.6,29.1,109.5,32.2,107.4,34.2z M14.4,116.9c-1.8,0-3.2-1.5-3.2-3.2l0.2-1.3l3.9-22.6L89,15.9c3.1-3.1,7.2-4.8,11.5-4.8c0.7,0,1.4,0,2.1,0.1	c7.2,0.9,13.1,6.8,14.1,14.1c0.6,5.1-1.1,10.1-4.6,13.7l-73.8,73.8l-0.1,0l-23.2,4l0,0C14.7,116.9,14.5,116.9,14.4,116.9z M15.7,90 l-4,23.7c0,1.4,1.2,2.7,2.7,2.7c0.2,0,0.4,0,0.6-0.1l0.2,0l0,0l22.8-3.9l73.7-73.7c3.5-3.5,5.1-8.3,4.5-13.2 c-0.9-7-6.6-12.7-13.6-13.6c-4.9-0.6-9.7,1-13.2,4.5L15.7,90z M18.4,109.6l2.6-15h12.5V107l-0.2,0L18.4,109.6z M21.5,95.1 l-2.4,13.8l13.8-2.4V95.1H21.5z M39.3,102.7V91.2c0-1.4-1.1-2.5-2.5-2.5H25.4l59.7-59.7l14,14L39.3,102.7z M26.7,88.1h10.2 	c1.7,0,3.1,1.4,3.1,3.1v10.2l58.4-58.4L85.1,29.7L26.7,88.1z M103.2,38.8l-14-14l4.3-4.3c2.3-2.3,5.5-3.3,8.7-2.8 c4.1,0.7,7.4,4,8.1,8.1c0.5,3.2-0.5,6.4-2.8,8.7L103.2,38.8z M90,24.8L103.2,38l4-3.9c2.2-2.2,3.1-5.2,2.6-8.2 c-0.6-3.9-3.8-7-7.6-7.6c-3-0.5-6,0.5-8.2,2.6L90,24.8z"></path></svg></button></span></div><div class="video-page-topbar__nav__item menu__trigger"><span><button class="button  button--icon" type="button"><svg viewBox="0 0 128 128" class="button__icon"><circle cx="64.4" cy="23.2" r="13.4"></circle><circle cx="64.4" cy="64.2" r="13.4"></circle><circle cx="64.4" cy="105.1" r="13.4"></circle></svg></button></span></div><div class="video-page-topbar__nav__item"><a class="tooltip-trigger help-button TooltipTrigger__StyledTooltipTrigger-sc-62e356-0 kCKWMb"><div class="help-icon-container"><svg viewBox="0 0 20 20" class="icon"><use xlink:href="#2677f3405e297793a0b8bfc03722de29"></use></svg></div></a></div></div></nav></div></div></header>

<!-- END OF HEADER -->

${toObjectString(attrs, params)}

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
    </script>

<script type="text/javascript">

</script>

</body>
</html>`);
	return true;
}
