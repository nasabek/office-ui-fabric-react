/* tslint:disable */
import { loadStyles } from '@microsoft/load-themed-styles';
loadStyles([{"rawString":"/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n.monaco-tree {\n\theight: 100%;\n\twidth: 100%;\n\twhite-space: nowrap;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: -moz-none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n\tposition: relative;\n}\n\n.monaco-tree > .monaco-scrollable-element {\n\theight: 100%;\n}\n\n.monaco-tree > .monaco-scrollable-element > .monaco-tree-wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n}\n\n.monaco-tree .monaco-tree-rows {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.monaco-tree .monaco-tree-rows > .monaco-tree-row {\n\t-moz-box-sizing:\tborder-box;\n\t-o-box-sizing:\t\tborder-box;\n\t-ms-box-sizing:\t\tborder-box;\n\tbox-sizing:\t\t\tborder-box;\n\tcursor: pointer;\n\toverflow: hidden;\n\twidth: 100%;\n\ttouch-action: none;\n}\n\n.monaco-tree .monaco-tree-rows > .monaco-tree-row > .content {\n\tposition: relative;\n\theight: 100%;\n}\n\n.monaco-tree-drag-image {\n\tdisplay: inline-block;\n\tpadding: 1px 7px;\n\tborder-radius: 10px;\n\tfont-size: 12px;\n\tposition: absolute;\n}\n\n/* for OS X ballistic scrolling */\n.monaco-tree .monaco-tree-rows > .monaco-tree-row.scrolling {\n\tdisplay: none;\n}\n\n/* Expansion */\n\n.monaco-tree .monaco-tree-rows.show-twisties > .monaco-tree-row.has-children > .content:before {\n\tcontent: ' ';\n\tposition: absolute;\n\tdisplay: block;\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4wNzE5IDcuOTk5OTlMNS43MTQ2MSAxMi4zNTczTDYuMzMzMzMgMTIuOTc2TDExIDguMzA5MzVWNy42OTA2M0w2LjMzMzMzIDMuMDIzOTZMNS43MTQ2MSAzLjY0MjY4TDEwLjA3MTkgNy45OTk5OVoiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg==\") 50% 50% no-repeat;\n\twidth: 16px;\n\theight: 100%;\n\ttop: 0;\n\tleft: -16px;\n}\n\n.monaco-tree .monaco-tree-rows.show-twisties > .monaco-tree-row.expanded > .content:before {\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljk3NjAyIDEwLjA3MTlMMTIuMzMzMyA1LjcxNDYxTDEyLjk1MiA2LjMzMzMzTDguMjg1MzggMTFMNy42NjY2NiAxMUwzIDYuMzMzMzNMMy42MTg3MiA1LjcxNDYxTDcuOTc2MDIgMTAuMDcxOVoiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg==\");\n}\n\n.monaco-tree .monaco-tree-rows > .monaco-tree-row.has-children.loading > .content:before {\n\tbackground-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubycgPz4KPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzEwcHgnIGhlaWdodD0nMTBweCc+Cgk8c3R5bGU+CiAgICBjaXJjbGUgewogICAgICBhbmltYXRpb246IGJhbGwgMC42cyBsaW5lYXIgaW5maW5pdGU7CiAgICB9CgogICAgY2lyY2xlOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogMC4wNzVzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjE1czsgfQogICAgY2lyY2xlOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogMC4yMjVzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDYpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjM3NXM7IH0KICAgIGNpcmNsZTpudGgtY2hpbGQoNykgeyBhbmltYXRpb24tZGVsYXk6IDAuNDVzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDgpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjUyNXM7IH0KCiAgICBAa2V5ZnJhbWVzIGJhbGwgewogICAgICBmcm9tIHsgb3BhY2l0eTogMTsgfQogICAgICB0byB7IG9wYWNpdHk6IDAuMzsgfQogICAgfQoJPC9zdHlsZT4KCTxnPgoJCTxjaXJjbGUgY3g9JzUnIGN5PScxJyByPScxJyBzdHlsZT0nb3BhY2l0eTowLjM7JyAvPgoJCTxjaXJjbGUgY3g9JzcuODI4NCcgY3k9JzIuMTcxNicgcj0nMScgc3R5bGU9J29wYWNpdHk6MC4zOycgLz4KCQk8Y2lyY2xlIGN4PSc5JyBjeT0nNScgcj0nMScgc3R5bGU9J29wYWNpdHk6MC4zOycgLz4KCQk8Y2lyY2xlIGN4PSc3LjgyODQnIGN5PSc3LjgyODQnIHI9JzEnIHN0eWxlPSdvcGFjaXR5OjAuMzsnIC8+CgkJPGNpcmNsZSBjeD0nNScgY3k9JzknIHI9JzEnIHN0eWxlPSdvcGFjaXR5OjAuMzsnIC8+CgkJPGNpcmNsZSBjeD0nMi4xNzE2JyBjeT0nNy44Mjg0JyByPScxJyBzdHlsZT0nb3BhY2l0eTowLjM7JyAvPgoJCTxjaXJjbGUgY3g9JzEnIGN5PSc1JyByPScxJyBzdHlsZT0nb3BhY2l0eTowLjM7JyAvPgoJCTxjaXJjbGUgY3g9JzIuMTcxNicgY3k9JzIuMTcxNicgcj0nMScgc3R5bGU9J29wYWNpdHk6MC4zOycgLz4KCTwvZz4KPC9zdmc+Cg==\");\n}\n\n/* Highlighted */\n\n.monaco-tree.highlighted .monaco-tree-rows > .monaco-tree-row:not(.highlighted) {\n\topacity: 0.3;\n}\n\n.vs-dark .monaco-tree .monaco-tree-rows.show-twisties > .monaco-tree-row.has-children > .content:before {\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4wNzE5IDcuOTk5OTlMNS43MTQ2MSAxMi4zNTczTDYuMzMzMzMgMTIuOTc2TDExIDguMzA5MzVWNy42OTA2NEw2LjMzMzMzIDMuMDIzOTdMNS43MTQ2MSAzLjY0MjY5TDEwLjA3MTkgNy45OTk5OVoiIGZpbGw9IiNDNUM1QzUiLz4KPC9zdmc+Cg==\");\n}\n\n.vs-dark .monaco-tree .monaco-tree-rows.show-twisties > .monaco-tree-row.expanded > .content:before {\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljk3NjAyIDEwLjA3MTlMMTIuMzMzMyA1LjcxNDYxTDEyLjk1MiA2LjMzMzMzTDguMjg1MzggMTFMNy42NjY2NiAxMUwzIDYuMzMzMzNMMy42MTg3MiA1LjcxNDYxTDcuOTc2MDIgMTAuMDcxOVoiIGZpbGw9IiNDNUM1QzUiLz4KPC9zdmc+Cg==\");\n}\n\n.vs-dark .monaco-tree .monaco-tree-rows > .monaco-tree-row.has-children.loading > .content:before {\n\tbackground-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubycgPz4KPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzEwcHgnIGhlaWdodD0nMTBweCc+Cgk8c3R5bGU+CiAgICBjaXJjbGUgewogICAgICBhbmltYXRpb246IGJhbGwgMC42cyBsaW5lYXIgaW5maW5pdGU7CiAgICB9CgogICAgY2lyY2xlOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogMC4wNzVzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjE1czsgfQogICAgY2lyY2xlOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogMC4yMjVzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDYpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjM3NXM7IH0KICAgIGNpcmNsZTpudGgtY2hpbGQoNykgeyBhbmltYXRpb24tZGVsYXk6IDAuNDVzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDgpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjUyNXM7IH0KCiAgICBAa2V5ZnJhbWVzIGJhbGwgewogICAgICBmcm9tIHsgb3BhY2l0eTogMTsgfQogICAgICB0byB7IG9wYWNpdHk6IDAuMzsgfQogICAgfQoJPC9zdHlsZT4KCTxnIHN0eWxlPSJmaWxsOmdyZXk7Ij4KCQk8Y2lyY2xlIGN4PSc1JyBjeT0nMScgcj0nMScgc3R5bGU9J29wYWNpdHk6MC4zOycgLz4KCQk8Y2lyY2xlIGN4PSc3LjgyODQnIGN5PScyLjE3MTYnIHI9JzEnIHN0eWxlPSdvcGFjaXR5OjAuMzsnIC8+CgkJPGNpcmNsZSBjeD0nOScgY3k9JzUnIHI9JzEnIHN0eWxlPSdvcGFjaXR5OjAuMzsnIC8+CgkJPGNpcmNsZSBjeD0nNy44Mjg0JyBjeT0nNy44Mjg0JyByPScxJyBzdHlsZT0nb3BhY2l0eTowLjM7JyAvPgoJCTxjaXJjbGUgY3g9JzUnIGN5PSc5JyByPScxJyBzdHlsZT0nb3BhY2l0eTowLjM7JyAvPgoJCTxjaXJjbGUgY3g9JzIuMTcxNicgY3k9JzcuODI4NCcgcj0nMScgc3R5bGU9J29wYWNpdHk6MC4zOycgLz4KCQk8Y2lyY2xlIGN4PScxJyBjeT0nNScgcj0nMScgc3R5bGU9J29wYWNpdHk6MC4zOycgLz4KCQk8Y2lyY2xlIGN4PScyLjE3MTYnIGN5PScyLjE3MTYnIHI9JzEnIHN0eWxlPSdvcGFjaXR5OjAuMzsnIC8+Cgk8L2c+Cjwvc3ZnPgo=\");\n}\n\n.hc-black .monaco-tree .monaco-tree-rows.show-twisties > .monaco-tree-row.has-children > .content:before\t{\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4wNzE5IDcuOTk5OTlMNS43MTQ2MSAxMi4zNTczTDYuMzMzMzMgMTIuOTc2TDExIDguMzA5MzVWNy42OTA2M0w2LjMzMzMzIDMuMDIzOTZMNS43MTQ2MSAzLjY0MjY4TDEwLjA3MTkgNy45OTk5OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=\");\n}\n\n.hc-black .monaco-tree .monaco-tree-rows.show-twisties > .monaco-tree-row.expanded > .content:before {\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljk3NjAyIDEwLjA3MTlMMTIuMzMzMyA1LjcxNDYxTDEyLjk1MiA2LjMzMzMzTDguMjg1MzggMTFMNy42NjY2NiAxMUwzIDYuMzMzMzNMMy42MTg3MiA1LjcxNDYxTDcuOTc2MDIgMTAuMDcxOVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=\");\n}\n\n.hc-black .monaco-tree .monaco-tree-rows > .monaco-tree-row.has-children.loading > .content:before {\n\tbackground-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubycgPz4KPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzEwcHgnIGhlaWdodD0nMTBweCc+Cgk8c3R5bGU+CiAgICBjaXJjbGUgewogICAgICBhbmltYXRpb246IGJhbGwgMC42cyBsaW5lYXIgaW5maW5pdGU7CiAgICB9CgogICAgY2lyY2xlOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogMC4wNzVzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjE1czsgfQogICAgY2lyY2xlOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogMC4yMjVzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDYpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjM3NXM7IH0KICAgIGNpcmNsZTpudGgtY2hpbGQoNykgeyBhbmltYXRpb24tZGVsYXk6IDAuNDVzOyB9CiAgICBjaXJjbGU6bnRoLWNoaWxkKDgpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjUyNXM7IH0KCiAgICBAa2V5ZnJhbWVzIGJhbGwgewogICAgICBmcm9tIHsgb3BhY2l0eTogMTsgfQogICAgICB0byB7IG9wYWNpdHk6IDAuMzsgfQogICAgfQoJPC9zdHlsZT4KCTxnIHN0eWxlPSJmaWxsOndoaXRlOyI+CgkJPGNpcmNsZSBjeD0nNScgY3k9JzEnIHI9JzEnIHN0eWxlPSdvcGFjaXR5OjAuMzsnIC8+CgkJPGNpcmNsZSBjeD0nNy44Mjg0JyBjeT0nMi4xNzE2JyByPScxJyBzdHlsZT0nb3BhY2l0eTowLjM7JyAvPgoJCTxjaXJjbGUgY3g9JzknIGN5PSc1JyByPScxJyBzdHlsZT0nb3BhY2l0eTowLjM7JyAvPgoJCTxjaXJjbGUgY3g9JzcuODI4NCcgY3k9JzcuODI4NCcgcj0nMScgc3R5bGU9J29wYWNpdHk6MC4zOycgLz4KCQk8Y2lyY2xlIGN4PSc1JyBjeT0nOScgcj0nMScgc3R5bGU9J29wYWNpdHk6MC4zOycgLz4KCQk8Y2lyY2xlIGN4PScyLjE3MTYnIGN5PSc3LjgyODQnIHI9JzEnIHN0eWxlPSdvcGFjaXR5OjAuMzsnIC8+CgkJPGNpcmNsZSBjeD0nMScgY3k9JzUnIHI9JzEnIHN0eWxlPSdvcGFjaXR5OjAuMzsnIC8+CgkJPGNpcmNsZSBjeD0nMi4xNzE2JyBjeT0nMi4xNzE2JyByPScxJyBzdHlsZT0nb3BhY2l0eTowLjM7JyAvPgoJPC9nPgo8L3N2Zz4K\");\n}\n\n.monaco-tree-action.collapse-all {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgOUg0VjEwSDlWOVoiIGZpbGw9IiM0MjQyNDIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDNMNiAySDEzTDE0IDNWMTBMMTMgMTFIMTFWMTNMMTAgMTRIM0wyIDEzVjZMMyA1SDVWM1pNNiA1SDEwTDExIDZWMTBIMTNWM0g2VjVaTTEwIDZIM1YxM0gxMFY2WiIgZmlsbD0iIzQyNDI0MiIvPgo8L3N2Zz4K\") center center no-repeat;\n}\n\n.vs-dark .monaco-tree-action.collapse-all {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgOUg0VjEwSDlWOVoiIGZpbGw9IiNDNUM1QzUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDNMNiAySDEzTDE0IDNWMTBMMTMgMTFIMTFWMTNMMTAgMTRIM0wyIDEzVjZMMyA1SDVWM1pNNiA1SDEwTDExIDZWMTBIMTNWM0g2VjVaTTEwIDZIM1YxM0gxMFY2WiIgZmlsbD0iI0M1QzVDNSIvPgo8L3N2Zz4K\") center center no-repeat;\n}\n\n.hc-black .monaco-tree-action.collapse-all {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgOUg0VjEwSDlWOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSAzTDYgMkgxM0wxNCAzVjEwTDEzIDExSDExVjEzTDEwIDE0SDNMMiAxM1Y2TDMgNUg1VjNaTTYgNUgxMEwxMSA2VjEwSDEzVjNINlY1Wk0xMCA2SDNWMTNIMTBWNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=\") center center no-repeat;\n}\n"}]);