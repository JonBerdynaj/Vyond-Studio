const http = require("http");
const defaultTypes = {
	family: "adam",
	anime: "guy",
};

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	if (req.method != "GET" || !url.pathname.startsWith("/videomaker/full")) return;
	var match = /\/videomaker\/full\/(\w+)(\/\w+)?(\/.+)?$/.exec(url.pathname);
	if (!match) return;
	[, theme, mode, id] = match;

	var redirect;
	switch (mode) {
		default: {
			var type = url.query.type || defaultTypes[theme] || "";
			redirect = `/go_full?tray=${theme}`;
			break;
		}
	}
	res.setHeader("Location", redirect);
	res.statusCode = 302;
	res.end();
	return true;
};
