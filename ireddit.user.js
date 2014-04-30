// ==UserScript==
// @name        Force i.Reddit
// @namespace   http://jake.wasdin.net
// @description Redirects all traffic requested on reddit.com to i.reddit.com
// @include     http://reddit.com/*
// @include     http://*.reddit.com/*
// @include     http://i.reddit.com/*
// @include     http://*.reddit.com/*.compact
// @version     1
// @grant       none
// ==/UserScript==

//The MIT License (MIT)
//Copyright (c) 2014 Jake Wasdin
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var url = document.baseURI;
var location = url.indexOf("reddit.com");

// if reddit.com is loaded, redirect the page to i.reddit.com
if (url.indexOf('i.reddit.com') == -1) {
    alert(url.indexOf("i.reddit.com"));
    var temp = url.substring((location+10),url.length);
   var new_url = 'http://i.reddit.com' + temp;
    window.location.replace(new_url);
} 

// rewrite any links in the page to stay on the i.reddit.com subdomain 
else {
    document.body.innerHTML = document.body.innerHTML.replace(/reddit.com/g, 'i.reddit.com');
}

