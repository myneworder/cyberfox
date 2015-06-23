/* vim: set ft=javascript ts=2 et sw=2 tw=80: */
/* Any copyright is dedicated to the Public Domain.
   http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

// Test that the CanvasFrameAnonymousContentHelper does not insert content in
// XUL windows.

// This makes sure the 'domnode' protocol actor type is known when importing
// highlighter.
require("devtools/server/actors/inspector");
const {CanvasFrameAnonymousContentHelper} = require("devtools/server/actors/highlighter");

add_task(function*() {
  let doc = yield addTab("about:preferences");

  let nodeBuilder = () => {
    let root = doc.createElement("div");
    let child = doc.createElement("div");
    child.style = "width:200px;height:200px;background:red;";
    child.id = "child-element";
    child.className = "child-element";
    child.textContent = "test element";
    root.appendChild(child);
    return root;
  };

  info("Building the helper");
  let helper = new CanvasFrameAnonymousContentHelper(
    getMockTabActor(doc.defaultView), nodeBuilder);

  ok(!helper.content, "The AnonymousContent was not inserted in the window");
  ok(!helper.getTextContentForElement("child-element"),
    "No text content is returned");

  gBrowser.removeCurrentTab();
});