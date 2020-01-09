/* tslint:disable */
import { loadStyles } from '@microsoft/load-themed-styles';
loadStyles([{"rawString":"/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* ---------- Icon label ---------- */\n\n.monaco-icon-label {\n\tdisplay: flex; /* required for icons support :before rule */\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n\n.monaco-icon-label::before {\n\n\t/* svg icons rendered as background image */\n\tbackground-size: 16px;\n\tbackground-position: left center;\n\tbackground-repeat: no-repeat;\n\tpadding-right: 6px;\n\twidth: 16px;\n\theight: 22px;\n\tdisplay: inline-block;\n\n\t/* fonts icons */\n\t-webkit-font-smoothing: antialiased;\n\tvertical-align: top;\n\n\tflex-shrink: 0; /* fix for https://github.com/Microsoft/vscode/issues/13787 */\n}\n\n.monaco-icon-label > .monaco-icon-label-description-container {\n\toverflow: hidden; /* this causes the label/description to shrink first if decorations are enabled */\n\ttext-overflow: ellipsis;\n}\n\n.monaco-icon-label > .monaco-icon-label-description-container > .label-name {\n\tcolor: inherit;\n\twhite-space: pre; /* enable to show labels that include multiple whitespaces */\n}\n\n.monaco-icon-label > .monaco-icon-label-description-container > .label-description {\n\topacity: .7;\n\tmargin-left: 0.5em;\n\tfont-size: 0.9em;\n\twhite-space: pre; /* enable to show labels that include multiple whitespaces */\n}\n\n.monaco-icon-label.italic > .monaco-icon-label-description-container > .label-name,\n.monaco-icon-label.italic > .monaco-icon-label-description-container > .label-description {\n\tfont-style: italic;\n}\n\n.monaco-icon-label::after {\n\topacity: 0.75;\n\tfont-size: 90%;\n\tfont-weight: 600;\n\tpadding: 0 12px 0 5px;\n\tmargin-left: auto;\n\ttext-align: center;\n}\n\n/* make sure selection color wins when a label is being selected */\n.monaco-tree.focused .selected .monaco-icon-label, /* tree */\n.monaco-tree.focused .selected .monaco-icon-label::after,\n.monaco-list:focus .selected .monaco-icon-label, /* list */\n.monaco-list:focus .selected .monaco-icon-label::after\n{\n\tcolor: inherit !important;\n}\n\n.monaco-tree-row.focused.selected .label-description,\n.monaco-tree-row.selected .label-description,\n.monaco-list-row.focused.selected .label-description,\n.monaco-list-row.selected .label-description {\n\topacity: .8;\n}"}]);