'use strict';

var loopback = require('loopback');

module.exports = function (Bookmark) {

    Bookmark.disableRemoteMethod('createChangeStream', true);

    Bookmark.checkBookmark = function (compositionId, cb) {

        let context = loopback.getCurrentContext();
        let accessToken = context.get('accessToken');
        if (!accessToken) {
            cb(null, false);
        } else {
            Bookmark.find({
                fields: { compositionId: true },
                where: { userId: accessToken.userId }
            }).then(bookmarks => {
                let compositionIds = bookmarks.map(bookmark => bookmark.compositionId);
                cb(null, compositionIds.indexOf(compositionId) > -1);
            });
        }
    }

    Bookmark.remoteMethod('checkBookmark', {
        accepts: { arg: 'compositionId', type: 'string', required: true },
        returns: { arg: 'bookmarked', type: 'boolean' },
        http: { path: '/checkBookmark', verb: 'get' }
    });
};
