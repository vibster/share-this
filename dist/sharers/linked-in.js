!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.ShareThisViaLinkedIn=e()}}(function(){return function e(n,r,t){function o(f,u){if(!r[f]){if(!n[f]){var l="function"==typeof require&&require;if(!u&&l)return l(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[f]={exports:{}};n[f][0].call(c.exports,function(e){var r=n[f][1][e];return o(r?r:e)},c,c.exports,e,n,r,t)}return r[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}({1:[function(e,n,r){"use strict";r.render=function(e,n,r){var t=this.getText(e),o=this.getShareUrl(t,r);return'<a href="'+o+'" target="_blank" rel="noopener nofollow noreferrer">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n            <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964\n                -1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0\n                2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758\n                .614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377z\n                m1.188 8.68H2.37V6h2.376v7.635z" fill="currentcolor"/>\n        </svg></a>'};var t=250;r.getText=function(e){var n=e.trim();return n.length>t-2&&(n=n.slice(0,t-3).trim()+"…"),"“"+n+"”"},r.getShareUrl=function(e,n){return"https://www.linkedin.com/shareArticle?mini=true&summary="+encodeURIComponent(e)+"&url="+encodeURIComponent(n)},r.name="linked-in"},{}]},{},[1])(1)});