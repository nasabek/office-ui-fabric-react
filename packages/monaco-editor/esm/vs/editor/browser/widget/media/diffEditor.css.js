/* tslint:disable */
import { loadStyles } from '@microsoft/load-themed-styles';
loadStyles([{"rawString":"/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n/* ---------- DiffEditor ---------- */\n\n.monaco-diff-editor .diffOverview {\n\tz-index: 9;\n}\n\n/* colors not externalized: using transparancy on background */\n.monaco-diff-editor.vs\t\t\t.diffOverview { background: rgba(0, 0, 0, 0.03); }\n.monaco-diff-editor.vs-dark\t\t.diffOverview { background: rgba(255, 255, 255, 0.01); }\n\n.monaco-diff-editor .diffViewport {\n\tbox-shadow: inset 0px 0px 1px 0px #B9B9B9;\n\tbackground: rgba(0, 0, 0, 0.10);\n}\n\n.monaco-diff-editor.vs-dark .diffViewport,\n.monaco-diff-editor.hc-black .diffViewport {\n\tbackground: rgba(255, 255, 255, 0.10);\n}\n.monaco-scrollable-element.modified-in-monaco-diff-editor.vs\t\t.scrollbar { background: rgba(0,0,0,0); }\n.monaco-scrollable-element.modified-in-monaco-diff-editor.vs-dark\t.scrollbar { background: rgba(0,0,0,0); }\n.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-black\t.scrollbar { background: none; }\n\n.monaco-scrollable-element.modified-in-monaco-diff-editor .slider {\n\tz-index: 10;\n}\n.modified-in-monaco-diff-editor\t\t\t\t.slider.active { background: rgba(171, 171, 171, .4); }\n.modified-in-monaco-diff-editor.hc-black\t.slider.active { background: none; }\n\n/* ---------- Diff ---------- */\n\n.monaco-editor .insert-sign,\n.monaco-diff-editor .insert-sign,\n.monaco-editor .delete-sign,\n.monaco-diff-editor .delete-sign {\n\tbackground-size: 60%;\n\topacity: 0.7;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 75% center;\n\tbackground-size: 11px 11px;\n}\n.monaco-editor.hc-black .insert-sign,\n.monaco-diff-editor.hc-black .insert-sign,\n.monaco-editor.hc-black .delete-sign,\n.monaco-diff-editor.hc-black .delete-sign {\n\topacity: 1;\n}\n.monaco-editor .insert-sign,\n.monaco-diff-editor .insert-sign {\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDdWOEg4VjE0SDdWOEgxVjdIN1YxSDhWN0gxNFoiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg==\");\n}\n.monaco-editor .delete-sign,\n.monaco-diff-editor .delete-sign {\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDhIMVY3SDE1VjhaIiBmaWxsPSIjNDI0MjQyIi8+Cjwvc3ZnPgo=\");\n}\n\n.monaco-editor.vs-dark .insert-sign,\n.monaco-diff-editor.vs-dark .insert-sign,\n.monaco-editor.hc-black .insert-sign,\n.monaco-diff-editor.hc-black .insert-sign {\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDdWOEg4VjE0SDdWOEgxVjdIN1YxSDhWN0gxNFoiIGZpbGw9IiNDNUM1QzUiLz4KPC9zdmc+Cg==\");\n}\n.monaco-editor.vs-dark .delete-sign,\n.monaco-diff-editor.vs-dark .delete-sign,\n.monaco-editor.hc-black .delete-sign,\n.monaco-diff-editor.hc-black .delete-sign {\n\tbackground-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDhIMVY3SDE1VjhaIiBmaWxsPSIjQzVDNUM1Ii8+Cjwvc3ZnPgo=\");\n}\n\n.monaco-editor .inline-deleted-margin-view-zone {\n\ttext-align: right;\n}\n.monaco-editor .inline-added-margin-view-zone {\n\ttext-align: right;\n}\n\n.monaco-editor .diagonal-fill {\n\tbackground: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAChJREFUKFNjOH/+fAMDDgCSu3Dhwn9c8gwwBTgNGR4KQP4HhQOhsAIAZCBTkhtqePcAAAAASUVORK5CYII=\");\n}\n.monaco-editor.vs-dark .diagonal-fill {\n\topacity: 0.2;\n}\n.monaco-editor.hc-black .diagonal-fill {\n\tbackground: none;\n}\n\n/* ---------- Inline Diff ---------- */\n\n.monaco-editor .view-zones .view-lines .view-line span {\n\tdisplay: inline-block;\n}\n\n.monaco-editor .margin-view-zones .inline-deleted-margin-view-zone .lightbulb-glyph {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS42NzA4IDguNjU4MDZDMTEuMzMxOSA4Ljk5MTYgMTEuMDcxNiA5LjM2Mjc4IDEwLjg4ODYgOS43NzE3MkMxMC43MTA1IDEwLjE3OTIgMTAuNjIxIDEwLjYyMTkgMTAuNjIxIDExLjEwMDlWMTIuNzAxMkMxMC42MjEgMTIuODgwNyAxMC41ODcyIDEzLjA1MDMgMTAuNTE4OSAxMy4yMDkxQzEwLjQ1MTMgMTMuMzY2MSAxMC4zNTg2IDEzLjUwMzggMTAuMjQwNyAxMy42MjEzQzEwLjEyMjggMTMuNzM4OCA5Ljk4NDY0IDEzLjgzMTEgOS44MjcyMyAxMy44OTg0QzkuNjY4MDYgMTMuOTY2MyA5LjQ5ODA2IDE0IDkuMzE4MjMgMTRINy43MTIwNUM3LjUzMjIzIDE0IDcuMzYyMjMgMTMuOTY2MyA3LjIwMzA2IDEzLjg5ODRDNy4wNDU2NCAxMy44MzExIDYuOTA3NTMgMTMuNzM4OCA2Ljc4OTYxIDEzLjYyMTNDNi42NzE2OCAxMy41MDM4IDYuNTc4OTUgMTMuMzY2MSA2LjUxMTQxIDEzLjIwOTFDNi40NDMxMSAxMy4wNTAzIDYuNDA5MjcgMTIuODgwNyA2LjQwOTI3IDEyLjcwMTJWMTEuMTAwOUM2LjQwOTI3IDEwLjYyMiA2LjMxNzcyIDEwLjE3OTUgNi4xMzU1MyA5Ljc3MjA5QzUuOTU2ODMgOS4zNjMzNiA1LjY5ODMyIDguOTkxNTYgNS4zNTk1MyA4LjY1ODA2QzQuOTI0NjggOC4yMjkwMyA0LjU4ODk2IDcuNzUwMDMgNC4zNTM2MSA3LjIyMTM0QzQuMTE3NTYgNi42OTEwNyA0IDYuMTE2NzIgNCA1LjQ5OTUzQzQgNS4wODY2NCA0LjA1MzQyIDQuNjg4MDIgNC4xNjA0OCA0LjMwMzk3QzQuMjY3MjggMy45MjA4OSA0LjQxOTA3IDMuNTYyODYgNC42MTU5NSAzLjIzMDE4QzQuODEyNTcgMi44OTM3NyA1LjA0Nzc3IDIuNTg5MTEgNS4zMjE0NiAyLjMxNjQxQzUuNTk1MDMgMi4wNDM4MyA1Ljg5ODU4IDEuODA5NTMgNi4yMzE5NSAxLjYxMzY0QzYuNTY5NzkgMS40MTc2NCA2LjkzMTQ2IDEuMjY2MiA3LjMxNTc4IDEuMTU5ODNDNy43MDEwNiAxLjA1MzIgOC4xMDA5NCAxIDguNTE1MTQgMUM4LjkyOTM0IDEgOS4zMjkyMyAxLjA1MzIgOS43MTQ1MSAxLjE1OTgzQzEwLjA5ODggMS4yNjYyIDEwLjQ1OCAxLjQxNzM5IDEwLjc5MTggMS42MTM1MUMxMS4xMjk0IDEuODA5MzggMTEuNDM1MSAyLjA0MzcgMTEuNzA4OCAyLjMxNjQxQzExLjk4MjUgMi41ODkxIDEyLjIxNzcgMi44OTM3NiAxMi40MTQzIDMuMjMwMTZDMTIuNjExMiAzLjU2Mjg1IDEyLjc2MyAzLjkyMDg4IDEyLjg2OTggNC4zMDM5N0MxMi45NzY5IDQuNjg4MDIgMTMuMDMwMyA1LjA4NjY0IDEzLjAzMDMgNS40OTk1M0MxMy4wMzAzIDYuMTE2NzIgMTIuOTEyNyA2LjY5MTA3IDEyLjY3NjcgNy4yMjEzNEMxMi40NDEzIDcuNzUwMDMgMTIuMTA1NiA4LjIyOTAzIDExLjY3MDggOC42NTgwNlpNOS42MjE2MiAxMC41SDcuNDA4NjdWMTIuNzAxMkM3LjQwODY3IDEyLjc4MjMgNy40MzcyIDEyLjg1MTIgNy40OTg4OCAxMi45MTI3QzcuNTYwNTggMTIuOTc0MSA3LjYzMDA3IDEzLjAwMjggNy43MTIwNSAxMy4wMDI4SDkuMzE4MjNDOS40MDAyMiAxMy4wMDI4IDkuNDY5NzEgMTIuOTc0MSA5LjUzMTQgMTIuOTEyN0M5LjU5MzA5IDEyLjg1MTIgOS42MjE2MiAxMi43ODIzIDkuNjIxNjIgMTIuNzAxMlYxMC41WiIgZmlsbD0iIzQyNDI0MiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY3MDggOC42NTgwNkMxMS4zMzE5IDguOTkxNiAxMS4wNzE2IDkuMzYyNzggMTAuODg4NiA5Ljc3MTcyQzEwLjcxMDUgMTAuMTc5MiAxMC42MjEgMTAuNjIxOSAxMC42MjEgMTEuMTAwOVYxMi43MDEyQzEwLjYyMSAxMi44ODA3IDEwLjU4NzIgMTMuMDUwMyAxMC41MTg5IDEzLjIwOTFDMTAuNDUxMyAxMy4zNjYxIDEwLjM1ODYgMTMuNTAzOCAxMC4yNDA3IDEzLjYyMTNDMTAuMTIyOCAxMy43Mzg4IDkuOTg0NjQgMTMuODMxMSA5LjgyNzIzIDEzLjg5ODRDOS42NjgwNiAxMy45NjYzIDkuNDk4MDYgMTQgOS4zMTgyMyAxNEg3LjcxMjA1QzcuNTMyMjMgMTQgNy4zNjIyMyAxMy45NjYzIDcuMjAzMDYgMTMuODk4NEM3LjA0NTY0IDEzLjgzMTEgNi45MDc1MyAxMy43Mzg4IDYuNzg5NjEgMTMuNjIxM0M2LjY3MTY4IDEzLjUwMzggNi41Nzg5NSAxMy4zNjYxIDYuNTExNDEgMTMuMjA5MUM2LjQ0MzExIDEzLjA1MDMgNi40MDkyNyAxMi44ODA3IDYuNDA5MjcgMTIuNzAxMlYxMS4xMDA5QzYuNDA5MjcgMTAuNjIyIDYuMzE3NzIgMTAuMTc5NSA2LjEzNTUzIDkuNzcyMDlDNS45NTY4MyA5LjM2MzM2IDUuNjk4MzIgOC45OTE1NiA1LjM1OTUzIDguNjU4MDZDNC45MjQ2OCA4LjIyOTAzIDQuNTg4OTYgNy43NTAwMyA0LjM1MzYxIDcuMjIxMzRDNC4xMTc1NiA2LjY5MTA3IDQgNi4xMTY3MiA0IDUuNDk5NTNDNCA1LjA4NjY0IDQuMDUzNDIgNC42ODgwMiA0LjE2MDQ4IDQuMzAzOTdDNC4yNjcyOCAzLjkyMDg5IDQuNDE5MDcgMy41NjI4NiA0LjYxNTk1IDMuMjMwMThDNC44MTI1NyAyLjg5Mzc3IDUuMDQ3NzcgMi41ODkxMSA1LjMyMTQ2IDIuMzE2NDFDNS41OTUwMyAyLjA0MzgzIDUuODk4NTggMS44MDk1MyA2LjIzMTk1IDEuNjEzNjRDNi41Njk3OSAxLjQxNzY0IDYuOTMxNDYgMS4yNjYyIDcuMzE1NzggMS4xNTk4M0M3LjcwMTA2IDEuMDUzMiA4LjEwMDk0IDEgOC41MTUxNCAxQzguOTI5MzQgMSA5LjMyOTIzIDEuMDUzMiA5LjcxNDUxIDEuMTU5ODNDMTAuMDk4OCAxLjI2NjIgMTAuNDU4IDEuNDE3MzkgMTAuNzkxOCAxLjYxMzUxQzExLjEyOTQgMS44MDkzOCAxMS40MzUxIDIuMDQzNyAxMS43MDg4IDIuMzE2NDFDMTEuOTgyNSAyLjU4OTEgMTIuMjE3NyAyLjg5Mzc2IDEyLjQxNDMgMy4yMzAxNkMxMi42MTEyIDMuNTYyODUgMTIuNzYzIDMuOTIwODggMTIuODY5OCA0LjMwMzk3QzEyLjk3NjkgNC42ODgwMiAxMy4wMzAzIDUuMDg2NjQgMTMuMDMwMyA1LjQ5OTUzQzEzLjAzMDMgNi4xMTY3MiAxMi45MTI3IDYuNjkxMDcgMTIuNjc2NyA3LjIyMTM0QzEyLjQ0MTMgNy43NTAwMyAxMi4xMDU2IDguMjI5MDMgMTEuNjcwOCA4LjY1ODA2Wk05LjYyMTYyIDEwLjVINy40MDg2N1YxMi43MDEyQzcuNDA4NjcgMTIuNzgyMyA3LjQzNzIgMTIuODUxMiA3LjQ5ODg4IDEyLjkxMjdDNy41NjA1OCAxMi45NzQxIDcuNjMwMDcgMTMuMDAyOCA3LjcxMjA1IDEzLjAwMjhIOS4zMTgyM0M5LjQwMDIyIDEzLjAwMjggOS40Njk3MSAxMi45NzQxIDkuNTMxNCAxMi45MTI3QzkuNTkzMDkgMTIuODUxMiA5LjYyMTYyIDEyLjc4MjMgOS42MjE2MiAxMi43MDEyVjEwLjVaIiBmaWxsPSIjNDI0MjQyIi8+Cjwvc3ZnPgo=\") center center no-repeat;\n}\n\n.monaco-editor.vs-dark .margin-view-zones .inline-deleted-margin-view-zone .lightbulb-glyph,\n.monaco-editor.hc-dark .margin-view-zones .inline-deleted-margin-view-zone .lightbulb-glyph {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS42NzA4IDguNjU4MDZDMTEuMzMxOSA4Ljk5MTYgMTEuMDcxNiA5LjM2Mjc4IDEwLjg4ODYgOS43NzE3MkMxMC43MTA1IDEwLjE3OTIgMTAuNjIxIDEwLjYyMTkgMTAuNjIxIDExLjEwMDlWMTIuNzAxMkMxMC42MjEgMTIuODgwNyAxMC41ODcyIDEzLjA1MDMgMTAuNTE4OSAxMy4yMDkxQzEwLjQ1MTMgMTMuMzY2MSAxMC4zNTg2IDEzLjUwMzggMTAuMjQwNyAxMy42MjEzQzEwLjEyMjggMTMuNzM4OCA5Ljk4NDY0IDEzLjgzMTEgOS44MjcyMyAxMy44OTg0QzkuNjY4MDYgMTMuOTY2MyA5LjQ5ODA2IDE0IDkuMzE4MjMgMTRINy43MTIwNUM3LjUzMjIzIDE0IDcuMzYyMjMgMTMuOTY2MyA3LjIwMzA2IDEzLjg5ODRDNy4wNDU2NCAxMy44MzExIDYuOTA3NTMgMTMuNzM4OCA2Ljc4OTYxIDEzLjYyMTNDNi42NzE2OCAxMy41MDM4IDYuNTc4OTUgMTMuMzY2MSA2LjUxMTQxIDEzLjIwOTFDNi40NDMxMSAxMy4wNTAzIDYuNDA5MjcgMTIuODgwNyA2LjQwOTI3IDEyLjcwMTJWMTEuMTAwOUM2LjQwOTI3IDEwLjYyMiA2LjMxNzcyIDEwLjE3OTUgNi4xMzU1MyA5Ljc3MjA5QzUuOTU2ODMgOS4zNjMzNiA1LjY5ODMyIDguOTkxNTYgNS4zNTk1MyA4LjY1ODA2QzQuOTI0NjggOC4yMjkwMyA0LjU4ODk2IDcuNzUwMDMgNC4zNTM2MSA3LjIyMTM0QzQuMTE3NTYgNi42OTEwNyA0IDYuMTE2NzIgNCA1LjQ5OTUzQzQgNS4wODY2NCA0LjA1MzQyIDQuNjg4MDIgNC4xNjA0OCA0LjMwMzk3QzQuMjY3MjggMy45MjA4OSA0LjQxOTA3IDMuNTYyODYgNC42MTU5NSAzLjIzMDE4QzQuODEyNTcgMi44OTM3NyA1LjA0Nzc3IDIuNTg5MTEgNS4zMjE0NiAyLjMxNjQxQzUuNTk1MDMgMi4wNDM4MyA1Ljg5ODU4IDEuODA5NTMgNi4yMzE5NSAxLjYxMzY0QzYuNTY5NzkgMS40MTc2NCA2LjkzMTQ2IDEuMjY2MiA3LjMxNTc4IDEuMTU5ODNDNy43MDEwNiAxLjA1MzIgOC4xMDA5NCAxIDguNTE1MTQgMUM4LjkyOTM0IDEgOS4zMjkyMyAxLjA1MzIgOS43MTQ1MSAxLjE1OTgzQzEwLjA5ODggMS4yNjYyIDEwLjQ1OCAxLjQxNzM5IDEwLjc5MTggMS42MTM1MUMxMS4xMjk0IDEuODA5MzggMTEuNDM1MSAyLjA0MzcgMTEuNzA4OCAyLjMxNjQxQzExLjk4MjUgMi41ODkxIDEyLjIxNzcgMi44OTM3NiAxMi40MTQzIDMuMjMwMTZDMTIuNjExMiAzLjU2Mjg1IDEyLjc2MyAzLjkyMDg4IDEyLjg2OTggNC4zMDM5N0MxMi45NzY5IDQuNjg4MDIgMTMuMDMwMyA1LjA4NjY0IDEzLjAzMDMgNS40OTk1M0MxMy4wMzAzIDYuMTE2NzIgMTIuOTEyNyA2LjY5MTA3IDEyLjY3NjcgNy4yMjEzNEMxMi40NDEzIDcuNzUwMDMgMTIuMTA1NiA4LjIyOTAzIDExLjY3MDggOC42NTgwNlpNOS42MjE2MiAxMC41SDcuNDA4NjdWMTIuNzAxMkM3LjQwODY3IDEyLjc4MjMgNy40MzcyIDEyLjg1MTIgNy40OTg4OCAxMi45MTI3QzcuNTYwNTggMTIuOTc0MSA3LjYzMDA3IDEzLjAwMjggNy43MTIwNSAxMy4wMDI4SDkuMzE4MjNDOS40MDAyMiAxMy4wMDI4IDkuNDY5NzEgMTIuOTc0MSA5LjUzMTQgMTIuOTEyN0M5LjU5MzA5IDEyLjg1MTIgOS42MjE2MiAxMi43ODIzIDkuNjIxNjIgMTIuNzAxMlYxMC41WiIgZmlsbD0iI0MyQzJDMiIvPgo8L3N2Zz4K\") center center no-repeat;\n}\n\n.monaco-editor .margin-view-zones .lightbulb-glyph:hover {\n\tcursor: pointer;\n}\n"}]);