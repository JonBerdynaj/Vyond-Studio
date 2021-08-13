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
		case '/cc/edit': {
			title = 'Character Creator';
			attrs = {
				data: process.env.SWF_URL + '/cc.swf', // data: 'cc_.swf',
				type: 'application/x-shockwave-flash', id: 'char_creator', width: '100%', height: '100%',
			};
			params = {
				flashvars: {
					'apiserver': '/', 'storePath': process.env.STORE_URL + '/<store>',
					'clientThemePath': process.env.CLIENT_URL + '/<client_theme>', 'original_asset_id': query['id'] || null,
					'themeId': 'family', 'ut': 60, 'bs': 'default', 'appCode': 'go', 'page': '', 'siteId': 'go',
					'm_mode': 'school', 'isLogin': 'Y', 'isEmbed': 1, 'ctc': 'go', 'tlang': 'en_US',
				},
				allowScriptAccess: 'always',
				movie: process.env.SWF_URL + '/cc.swf', // 'http://localhost/cc.swf'
			};
			break;
		}

		case '/cc': {
			title = 'Character Creator Browser';
			attrs = {
				data: process.env.SWF_URL + '/cc_browser.swf', // data: 'cc_browser_.swf',
				type: 'application/x-shockwave-flash', id: 'char_creator', width: '100%', height: '100%',
			};
			params = {
				flashvars: {
					'apiserver': '/', 'storePath': process.env.STORE_URL + '/<store>',
					'clientThemePath': process.env.CLIENT_URL + '/<client_theme>', 'original_asset_id': query['id'] || null,
					'themeId': 'family', 'ut': 60, 'bs': 'default', 'appCode': 'go', 'page': '', 'siteId': 'go',
					'm_mode': 'school', 'isLogin': 'Y', 'isEmbed': 1, 'ctc': 'go', 'tlang': 'en_US',
				},
				allowScriptAccess: 'always',
				movie: process.env.SWF_URL + '/cc_browser.swf', // 'http://localhost/cc_browser.swf'
			};
			break;
		}

		case '/go_full': {
			let presave = query.movieId && query.movieId.startsWith('m') ? query.movieId :
				`m-${fUtil[query.noAutosave ? 'getNextFileId' : 'fillNextFileId']('movie-', '.xml')}`;
			title = 'Video Editor';
			attrs = {
				data: process.env.SWF_URL + '/go_full.swf',
				type: 'application/x-shockwave-flash', width: '100%', height: '100%',
			};
			params = {
				flashvars: {
					'apiserver': '/', 'storePath': process.env.STORE_URL + '/<store>', 'isEmbed': 1, 'ctc': 'go',
					'ut': 60, 'bs': 'default', 'appCode': 'go', 'page': '', 'siteId': 'go', 'lid': 13, 'isLogin': 'Y', 'retut': 1,
					'clientThemePath': process.env.CLIENT_URL + '/<client_theme>', 'themeId': 'business', 'tray': 'custom', 
					'tlang': 'en_US', 'presaveId': presave, 'goteam_draft_only': 1, 'isWide': 1, 'nextUrl': '/pages/html/list.html',
				},
				allowScriptAccess: 'always',
			};
			sessions.set({ movieId: presave }, req);
			break;
		}
	
		case '/videos/': {
			title = 'Video Player';
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
	res.end(`<script>document.title='${title}',flashvars=${JSON.stringify(params.flashvars)}</script><body style="margin:0px">${toObjectString(attrs, params)
		}</body>${stuff.pages[url.pathname] || ''}`);
	return true;
}
