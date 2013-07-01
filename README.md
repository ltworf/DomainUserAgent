DomainUserAgent
===============

This extension changes the user agent depending on the hostname.

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
