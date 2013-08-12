DomainUserAgent
===============

This Chromium/Google Chrome extension changes the user agent depending on the
hostname.

The idea behind the extension is to let the browser use a different user agent
on a per-domain base.

The idea comes from the observation that Google loads a lot of completely
useless javascript code and by using a different UserAgent it is possible to
convince them to send a page that is faster to render and use. However the
per-domain behaviour is needed because other websites might completely refuse
to work instead.

This is a very ugly workaround. In a perfect world it wouldn't be needed and
Google wouldn't slow our computers down, but in the real world it could be
an helpful thing.

If you think (like me) that the HTML pages would need a nice CSS, please go
ahead and do it, patches are welcome.

License and stuff
=================
All the code is released under GPL3 or greater.

The icon comes from Oxygen.

The rest was written by Salvo 'LtWorf' Tomaselli <tiposchi@tiscali.it>
