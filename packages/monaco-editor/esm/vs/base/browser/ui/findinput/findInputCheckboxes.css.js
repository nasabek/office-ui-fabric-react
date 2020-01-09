/* tslint:disable */
import { loadStyles } from '@microsoft/load-themed-styles';
loadStyles([{"rawString":"/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.vs .monaco-custom-checkbox.monaco-case-sensitive {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjQ5NSA5LjA1Mkw4LjM4NiAxMS40MDJIOS40NzdMNi4yMzcgM0g1LjIxN0wyIDExLjQwMkgzLjA5NUwzLjkzMyA5LjA1Mkg3LjQ5NVpNNS44MTEgNC40NTNMNS44NTUgNC41ODhMNy4xNzMgOC4xNjJINC4yNTVMNS41NjIgNC41ODhMNS42MDYgNC40NTNMNS42NDQgNC4yOTdMNS42NzYgNC4xNDVMNS42OTcgNC4wMTlINS43Mkw1Ljc0NCA0LjE0NUw1Ljc3MyA0LjI5N0w1LjgxMSA0LjQ1M1pNMTMuNzk1IDEwLjQ2NFYxMS40SDE0Ljc1NVY3LjQ5OEMxNC43NTUgNi43NzkgMTQuNTc1IDYuMjI2IDE0LjIxNiA1LjgzN0MxMy44NTcgNS40NDggMTMuMzI3IDUuMjU0IDEyLjYyOCA1LjI1NEMxMi40MjkgNS4yNTQgMTIuMjI3IDUuMjczIDEyLjAyMiA1LjMxQzExLjgxNyA1LjM0NyAxMS42MjIgNS4zOTQgMTEuNDM5IDUuNDUxQzExLjI1NiA1LjUwOCAxMS4wOTEgNS41NjkgMTAuOTQ0IDUuNjM2QzEwLjc5NyA1LjcwMyAxMC42ODMgNS43NjUgMTAuNjAxIDUuODI0VjYuODA4QzEwLjg2NyA2LjU3OCAxMS4xNjcgNi4zOTcgMTEuNTA1IDYuMjY4QzExLjg0MyA2LjEzOSAxMi4xOTQgNi4wNzUgMTIuNTU3IDYuMDc1QzEyLjc0NSA2LjA3NSAxMi45MTUgNi4xMDMgMTMuMDcgNi4xNkMxMy4yMjUgNi4yMTcgMTMuMzU3IDYuMzA2IDEzLjQ2NiA2LjQyN0MxMy41NzUgNi41NDggMTMuNjU5IDYuNzA2IDEzLjcxOCA2Ljg5OUMxMy43NzcgNy4wOTIgMTMuODA2IDcuMzI2IDEzLjgwNiA3LjU5OUwxMS45OTUgNy44NTFDMTEuNjUxIDcuODk4IDExLjM1NSA3Ljk3NyAxMS4xMDcgOC4wODhDMTAuODU5IDguMTk5IDEwLjY1NCA4LjMzOSAxMC40OTIgOC41MDdDMTAuMzMgOC42NzUgMTAuMjEgOC44NjggMTAuMTMyIDkuMDg3QzEwLjA1NCA5LjMwNiAxMC4wMTUgOS41NDYgMTAuMDE1IDkuODA4QzEwLjAxNSAxMC4wNTQgMTAuMDU3IDEwLjI4MyAxMC4xMzkgMTAuNDk2QzEwLjIyMSAxMC43MDkgMTAuMzQyIDEwLjg5MyAxMC41MDIgMTEuMDQ3QzEwLjY2MiAxMS4yMDEgMTAuODYyIDExLjMyMyAxMS4xIDExLjQxM0MxMS4zMzggMTEuNTAzIDExLjYxMyAxMS41NDggMTEuOTI2IDExLjU0OEMxMi4zMjggMTEuNTQ4IDEyLjY4NiAxMS40NTYgMTMuMDAxIDExLjI3QzEzLjMxNiAxMS4wODQgMTMuNTczIDEwLjgxNiAxMy43NzIgMTAuNDY0SDEzLjc5NVpNMTEuNjY3IDguNzIxQzExLjg0MyA4LjY1NyAxMi4wNjggOC42MDcgMTIuMzQxIDguNTcyTDEzLjgwNiA4LjM2N1Y4Ljk3NkMxMy44MDYgOS4yMjIgMTMuNzY1IDkuNDUxIDEzLjY4MyA5LjY2NEMxMy42MDEgOS44NzcgMTMuNDg2IDEwLjA2MyAxMy4zNCAxMC4yMjFDMTMuMTk0IDEwLjM3OSAxMy4wMTkgMTAuNTAzIDEyLjgxNiAxMC41OTNDMTIuNjEzIDEwLjY4MyAxMi4zOSAxMC43MjggMTIuMTQ4IDEwLjcyOEMxMS45NjEgMTAuNzI4IDExLjc5NSAxMC43MDMgMTEuNjUzIDEwLjY1MkMxMS41MTEgMTAuNjAxIDExLjM5MiAxMC41MyAxMS4yOTYgMTAuNDQxQzExLjIgMTAuMzUyIDExLjEyNyAxMC4yNDcgMTEuMDc2IDEwLjEyNUMxMS4wMjUgMTAuMDAzIDExIDkuODczIDExIDkuNzMyQzExIDkuNTY4IDExLjAxOCA5LjQyMSAxMS4wNTUgOS4yOTJDMTEuMDkyIDkuMTYzIDExLjE2IDkuMDUxIDExLjI1NyA4Ljk1OEMxMS4zNTQgOC44NjUgMTEuNDkxIDguNzg1IDExLjY2NyA4LjcyMVoiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg==\") center center no-repeat;\n}\n\n.vs-dark .monaco-custom-checkbox.monaco-case-sensitive {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjQ5NSA5LjA1Mkw4LjM4NiAxMS40MDJIOS40NzdMNi4yMzcgM0g1LjIxN0wyIDExLjQwMkgzLjA5NUwzLjkzMyA5LjA1Mkg3LjQ5NVpNNS44MTEgNC40NTNMNS44NTUgNC41ODhMNy4xNzMgOC4xNjJINC4yNTVMNS41NjIgNC41ODhMNS42MDYgNC40NTNMNS42NDQgNC4yOTdMNS42NzYgNC4xNDVMNS42OTcgNC4wMTlINS43Mkw1Ljc0NCA0LjE0NUw1Ljc3MyA0LjI5N0w1LjgxMSA0LjQ1M1pNMTMuNzk1IDEwLjQ2NFYxMS40SDE0Ljc1NVY3LjQ5OEMxNC43NTUgNi43NzkgMTQuNTc1IDYuMjI2IDE0LjIxNiA1LjgzN0MxMy44NTcgNS40NDggMTMuMzI3IDUuMjU0IDEyLjYyOCA1LjI1NEMxMi40MjkgNS4yNTQgMTIuMjI3IDUuMjczIDEyLjAyMiA1LjMxQzExLjgxNyA1LjM0NyAxMS42MjIgNS4zOTQgMTEuNDM5IDUuNDUxQzExLjI1NiA1LjUwOCAxMS4wOTEgNS41NjkgMTAuOTQ0IDUuNjM2QzEwLjc5NyA1LjcwMyAxMC42ODMgNS43NjUgMTAuNjAxIDUuODI0VjYuODA4QzEwLjg2NyA2LjU3OCAxMS4xNjcgNi4zOTcgMTEuNTA1IDYuMjY4QzExLjg0MyA2LjEzOSAxMi4xOTQgNi4wNzUgMTIuNTU3IDYuMDc1QzEyLjc0NSA2LjA3NSAxMi45MTUgNi4xMDMgMTMuMDcgNi4xNkMxMy4yMjUgNi4yMTcgMTMuMzU3IDYuMzA2IDEzLjQ2NiA2LjQyN0MxMy41NzUgNi41NDggMTMuNjU5IDYuNzA2IDEzLjcxOCA2Ljg5OUMxMy43NzcgNy4wOTIgMTMuODA2IDcuMzI2IDEzLjgwNiA3LjU5OUwxMS45OTUgNy44NTFDMTEuNjUxIDcuODk4IDExLjM1NSA3Ljk3NyAxMS4xMDcgOC4wODhDMTAuODU5IDguMTk5IDEwLjY1NCA4LjMzOSAxMC40OTIgOC41MDdDMTAuMzMgOC42NzUgMTAuMjEgOC44NjggMTAuMTMyIDkuMDg3QzEwLjA1NCA5LjMwNiAxMC4wMTUgOS41NDYgMTAuMDE1IDkuODA4QzEwLjAxNSAxMC4wNTQgMTAuMDU3IDEwLjI4MyAxMC4xMzkgMTAuNDk2QzEwLjIyMSAxMC43MDkgMTAuMzQyIDEwLjg5MyAxMC41MDIgMTEuMDQ3QzEwLjY2MiAxMS4yMDEgMTAuODYyIDExLjMyMyAxMS4xIDExLjQxM0MxMS4zMzggMTEuNTAzIDExLjYxMyAxMS41NDggMTEuOTI2IDExLjU0OEMxMi4zMjggMTEuNTQ4IDEyLjY4NiAxMS40NTYgMTMuMDAxIDExLjI3QzEzLjMxNiAxMS4wODQgMTMuNTczIDEwLjgxNiAxMy43NzIgMTAuNDY0SDEzLjc5NVpNMTEuNjY3IDguNzIxQzExLjg0MyA4LjY1NyAxMi4wNjggOC42MDcgMTIuMzQxIDguNTcyTDEzLjgwNiA4LjM2N1Y4Ljk3NkMxMy44MDYgOS4yMjIgMTMuNzY1IDkuNDUxIDEzLjY4MyA5LjY2NEMxMy42MDEgOS44NzcgMTMuNDg2IDEwLjA2MyAxMy4zNCAxMC4yMjFDMTMuMTk0IDEwLjM3OSAxMy4wMTkgMTAuNTAzIDEyLjgxNiAxMC41OTNDMTIuNjEzIDEwLjY4MyAxMi4zOSAxMC43MjggMTIuMTQ4IDEwLjcyOEMxMS45NjEgMTAuNzI4IDExLjc5NSAxMC43MDMgMTEuNjUzIDEwLjY1MkMxMS41MTEgMTAuNjAxIDExLjM5MiAxMC41MyAxMS4yOTYgMTAuNDQxQzExLjIgMTAuMzUyIDExLjEyNyAxMC4yNDcgMTEuMDc2IDEwLjEyNUMxMS4wMjUgMTAuMDAzIDExIDkuODczIDExIDkuNzMyQzExIDkuNTY4IDExLjAxOCA5LjQyMSAxMS4wNTUgOS4yOTJDMTEuMDkyIDkuMTYzIDExLjE2IDkuMDUxIDExLjI1NyA4Ljk1OEMxMS4zNTQgOC44NjUgMTEuNDkxIDguNzg1IDExLjY2NyA4LjcyMVoiIGZpbGw9IiNDNUM1QzUiLz4KPC9zdmc+Cg==\") center center no-repeat;\n}\n\n.hc-black .monaco-custom-checkbox.monaco-case-sensitive,\n.hc-black .monaco-custom-checkbox.monaco-case-sensitive:hover {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjQ5NSA5LjA1Mkw4LjM4NiAxMS40MDJIOS40NzdMNi4yMzcgM0g1LjIxN0wyIDExLjQwMkgzLjA5NUwzLjkzMyA5LjA1Mkg3LjQ5NVpNNS44MTEgNC40NTNMNS44NTUgNC41ODhMNy4xNzMgOC4xNjJINC4yNTVMNS41NjIgNC41ODhMNS42MDYgNC40NTNMNS42NDQgNC4yOTdMNS42NzYgNC4xNDVMNS42OTcgNC4wMTlINS43Mkw1Ljc0NCA0LjE0NUw1Ljc3MyA0LjI5N0w1LjgxMSA0LjQ1M1pNMTMuNzk1IDEwLjQ2NFYxMS40SDE0Ljc1NVY3LjQ5OEMxNC43NTUgNi43NzkgMTQuNTc1IDYuMjI2IDE0LjIxNiA1LjgzN0MxMy44NTcgNS40NDggMTMuMzI3IDUuMjU0IDEyLjYyOCA1LjI1NEMxMi40MjkgNS4yNTQgMTIuMjI3IDUuMjczIDEyLjAyMiA1LjMxQzExLjgxNyA1LjM0NyAxMS42MjIgNS4zOTQgMTEuNDM5IDUuNDUxQzExLjI1NiA1LjUwOCAxMS4wOTEgNS41NjkgMTAuOTQ0IDUuNjM2QzEwLjc5NyA1LjcwMyAxMC42ODMgNS43NjUgMTAuNjAxIDUuODI0VjYuODA4QzEwLjg2NyA2LjU3OCAxMS4xNjcgNi4zOTcgMTEuNTA1IDYuMjY4QzExLjg0MyA2LjEzOSAxMi4xOTQgNi4wNzUgMTIuNTU3IDYuMDc1QzEyLjc0NSA2LjA3NSAxMi45MTUgNi4xMDMgMTMuMDcgNi4xNkMxMy4yMjUgNi4yMTcgMTMuMzU3IDYuMzA2IDEzLjQ2NiA2LjQyN0MxMy41NzUgNi41NDggMTMuNjU5IDYuNzA2IDEzLjcxOCA2Ljg5OUMxMy43NzcgNy4wOTIgMTMuODA2IDcuMzI2IDEzLjgwNiA3LjU5OUwxMS45OTUgNy44NTFDMTEuNjUxIDcuODk4IDExLjM1NSA3Ljk3NyAxMS4xMDcgOC4wODhDMTAuODU5IDguMTk5IDEwLjY1NCA4LjMzOSAxMC40OTIgOC41MDdDMTAuMzMgOC42NzUgMTAuMjEgOC44NjggMTAuMTMyIDkuMDg3QzEwLjA1NCA5LjMwNiAxMC4wMTUgOS41NDYgMTAuMDE1IDkuODA4QzEwLjAxNSAxMC4wNTQgMTAuMDU3IDEwLjI4MyAxMC4xMzkgMTAuNDk2QzEwLjIyMSAxMC43MDkgMTAuMzQyIDEwLjg5MyAxMC41MDIgMTEuMDQ3QzEwLjY2MiAxMS4yMDEgMTAuODYyIDExLjMyMyAxMS4xIDExLjQxM0MxMS4zMzggMTEuNTAzIDExLjYxMyAxMS41NDggMTEuOTI2IDExLjU0OEMxMi4zMjggMTEuNTQ4IDEyLjY4NiAxMS40NTYgMTMuMDAxIDExLjI3QzEzLjMxNiAxMS4wODQgMTMuNTczIDEwLjgxNiAxMy43NzIgMTAuNDY0SDEzLjc5NVpNMTEuNjY3IDguNzIxQzExLjg0MyA4LjY1NyAxMi4wNjggOC42MDcgMTIuMzQxIDguNTcyTDEzLjgwNiA4LjM2N1Y4Ljk3NkMxMy44MDYgOS4yMjIgMTMuNzY1IDkuNDUxIDEzLjY4MyA5LjY2NEMxMy42MDEgOS44NzcgMTMuNDg2IDEwLjA2MyAxMy4zNCAxMC4yMjFDMTMuMTk0IDEwLjM3OSAxMy4wMTkgMTAuNTAzIDEyLjgxNiAxMC41OTNDMTIuNjEzIDEwLjY4MyAxMi4zOSAxMC43MjggMTIuMTQ4IDEwLjcyOEMxMS45NjEgMTAuNzI4IDExLjc5NSAxMC43MDMgMTEuNjUzIDEwLjY1MkMxMS41MTEgMTAuNjAxIDExLjM5MiAxMC41MyAxMS4yOTYgMTAuNDQxQzExLjIgMTAuMzUyIDExLjEyNyAxMC4yNDcgMTEuMDc2IDEwLjEyNUMxMS4wMjUgMTAuMDAzIDExIDkuODczIDExIDkuNzMyQzExIDkuNTY4IDExLjAxOCA5LjQyMSAxMS4wNTUgOS4yOTJDMTEuMDkyIDkuMTYzIDExLjE2IDkuMDUxIDExLjI1NyA4Ljk1OEMxMS4zNTQgOC44NjUgMTEuNDkxIDguNzg1IDExLjY2NyA4LjcyMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=\") center center no-repeat;\n}\n\n.vs .monaco-custom-checkbox.monaco-preserve-case {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTM0MzcgMTIuNDY3M0g3LjQzNjFMNi41Mzg1OSAxMC4wOTM2SDIuOTQ4NTRMMi4xMDQxOCAxMi40NjczSDFMNC4yNDc1NyA0SDUuMjc0OTlMOC41MzQzNyAxMi40NjczWk02LjIxMzgzIDkuMjAyMDJMNC44ODUyOCA1LjU5NDI2QzQuODQxOTggNS40NzYxNyA0Ljc5ODY4IDUuMjg3MjIgNC43NTUzOCA1LjAyNzQxSDQuNzMxNzZDNC42OTIzOSA1LjI2NzU0IDQuNjQ3MTMgNS40NTY0OSA0LjU5NTk1IDUuNTk0MjZMMy4yNzkyMSA5LjIwMjAySDYuMjEzODNaIiBmaWxsPSIjNDI0MjQyIi8+CjxwYXRoIGQ9Ik05Ljc4NjE3IDEyLjQ2NzNWNEgxMi4xOTUzQzEyLjkyNzUgNCAxMy41MDgxIDQuMTc5MTEgMTMuOTM3MiA0LjUzNzMzQzE0LjM2NjIgNC44OTU1NCAxNC41ODA4IDUuMzYyMDEgMTQuNTgwOCA1LjkzNjc0QzE0LjU4MDggNi40MTY5OCAxNC40NTA5IDYuODM0MjUgMTQuMTkxMSA3LjE4ODUzQzEzLjkzMTMgNy41NDI4MSAxMy41NzMgNy43OTQ3NCAxMy4xMTY0IDcuOTQ0MzNWNy45Njc5NUMxMy42ODcyIDguMDM0ODcgMTQuMTQzOCA4LjI1MTM3IDE0LjQ4NjMgOC42MTc0NkMxNC44Mjg4IDguOTc5NjEgMTUgOS40NTE5OSAxNSAxMC4wMzQ2QzE1IDEwLjc1ODkgMTQuNzQwMiAxMS4zNDU0IDE0LjIyMDYgMTEuNzk0MkMxMy43MDEgMTIuMjQyOSAxMy4wNDU2IDEyLjQ2NzMgMTIuMjU0MyAxMi40NjczSDkuNzg2MTdaTTEwLjc3ODIgNC44OTc1MVY3LjYzMTM4SDExLjc5MzhDMTIuMzM3IDcuNjMxMzggMTIuNzY0MSA3LjUwMTQ4IDEzLjA3NTEgNy4yNDE2N0MxMy4zODYxIDYuOTc3OTMgMTMuNTQxNSA2LjYwNzkgMTMuNTQxNSA2LjEzMTU5QzEzLjU0MTUgNS4zMDg4NyAxMy4wMDAzIDQuODk3NTEgMTEuOTE3OCA0Ljg5NzUxSDEwLjc3ODJaTTEwLjc3ODIgOC41MjI5OVYxMS41Njk4SDEyLjEyNDRDMTIuNzA3IDExLjU2OTggMTMuMTU3NyAxMS40MzIgMTMuNDc2NiAxMS4xNTY1QzEzLjc5OTQgMTAuODgwOSAxMy45NjA4IDEwLjUwMyAxMy45NjA4IDEwLjAyMjhDMTMuOTYwOCA5LjAyMjkyIDEzLjI3OTggOC41MjI5OSAxMS45MTc4IDguNTIyOTlIMTAuNzc4MloiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg==\") center center no-repeat;\n}\n\n.vs-dark .monaco-custom-checkbox.monaco-preserve-case {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTM0MzcgMTIuNDY3M0g3LjQzNjFMNi41Mzg1OSAxMC4wOTM2SDIuOTQ4NTRMMi4xMDQxOCAxMi40NjczSDFMNC4yNDc1NyA0SDUuMjc0OTlMOC41MzQzNyAxMi40NjczWk02LjIxMzgzIDkuMjAyMDJMNC44ODUyOCA1LjU5NDI2QzQuODQxOTggNS40NzYxNyA0Ljc5ODY4IDUuMjg3MjIgNC43NTUzOCA1LjAyNzQxSDQuNzMxNzZDNC42OTIzOSA1LjI2NzU0IDQuNjQ3MTMgNS40NTY0OSA0LjU5NTk1IDUuNTk0MjZMMy4yNzkyMSA5LjIwMjAySDYuMjEzODNaIiBmaWxsPSIjQzVDNUM1Ii8+CjxwYXRoIGQ9Ik05Ljc4NjE3IDEyLjQ2NzNWNEgxMi4xOTUzQzEyLjkyNzUgNCAxMy41MDgxIDQuMTc5MTEgMTMuOTM3MiA0LjUzNzMzQzE0LjM2NjIgNC44OTU1NCAxNC41ODA4IDUuMzYyMDEgMTQuNTgwOCA1LjkzNjc0QzE0LjU4MDggNi40MTY5OCAxNC40NTA5IDYuODM0MjUgMTQuMTkxMSA3LjE4ODUzQzEzLjkzMTMgNy41NDI4MSAxMy41NzMgNy43OTQ3NCAxMy4xMTY0IDcuOTQ0MzNWNy45Njc5NUMxMy42ODcyIDguMDM0ODcgMTQuMTQzOCA4LjI1MTM3IDE0LjQ4NjMgOC42MTc0NkMxNC44Mjg4IDguOTc5NjEgMTUgOS40NTE5OSAxNSAxMC4wMzQ2QzE1IDEwLjc1ODkgMTQuNzQwMiAxMS4zNDU0IDE0LjIyMDYgMTEuNzk0MkMxMy43MDEgMTIuMjQyOSAxMy4wNDU2IDEyLjQ2NzMgMTIuMjU0MyAxMi40NjczSDkuNzg2MTdaTTEwLjc3ODIgNC44OTc1MVY3LjYzMTM4SDExLjc5MzhDMTIuMzM3IDcuNjMxMzggMTIuNzY0MSA3LjUwMTQ4IDEzLjA3NTEgNy4yNDE2N0MxMy4zODYxIDYuOTc3OTMgMTMuNTQxNSA2LjYwNzkgMTMuNTQxNSA2LjEzMTU5QzEzLjU0MTUgNS4zMDg4NyAxMy4wMDAzIDQuODk3NTEgMTEuOTE3OCA0Ljg5NzUxSDEwLjc3ODJaTTEwLjc3ODIgOC41MjI5OVYxMS41Njk4SDEyLjEyNDRDMTIuNzA3IDExLjU2OTggMTMuMTU3NyAxMS40MzIgMTMuNDc2NiAxMS4xNTY1QzEzLjc5OTQgMTAuODgwOSAxMy45NjA4IDEwLjUwMyAxMy45NjA4IDEwLjAyMjhDMTMuOTYwOCA5LjAyMjkyIDEzLjI3OTggOC41MjI5OSAxMS45MTc4IDguNTIyOTlIMTAuNzc4MloiIGZpbGw9IiNDNUM1QzUiLz4KPC9zdmc+Cg==\") center center no-repeat;\n}\n\n.hc-black .monaco-custom-checkbox.monaco-preserve-case,\n.hc-black .monaco-custom-checkbox.monaco-preserve-case:hover {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTM0MzcgMTIuNDY3M0g3LjQzNjFMNi41Mzg1OSAxMC4wOTM2SDIuOTQ4NTRMMi4xMDQxOCAxMi40NjczSDFMNC4yNDc1NyA0SDUuMjc0OTlMOC41MzQzNyAxMi40NjczWk02LjIxMzgzIDkuMjAyMDJMNC44ODUyOCA1LjU5NDI2QzQuODQxOTggNS40NzYxNyA0Ljc5ODY4IDUuMjg3MjIgNC43NTUzOCA1LjAyNzQxSDQuNzMxNzZDNC42OTIzOSA1LjI2NzU0IDQuNjQ3MTMgNS40NTY0OSA0LjU5NTk1IDUuNTk0MjZMMy4yNzkyMSA5LjIwMjAySDYuMjEzODNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOS43ODYxNyAxMi40NjczVjRIMTIuMTk1M0MxMi45Mjc1IDQgMTMuNTA4MSA0LjE3OTExIDEzLjkzNzIgNC41MzczM0MxNC4zNjYyIDQuODk1NTQgMTQuNTgwOCA1LjM2MjAxIDE0LjU4MDggNS45MzY3NEMxNC41ODA4IDYuNDE2OTggMTQuNDUwOSA2LjgzNDI1IDE0LjE5MTEgNy4xODg1M0MxMy45MzEzIDcuNTQyODEgMTMuNTczIDcuNzk0NzQgMTMuMTE2NCA3Ljk0NDMzVjcuOTY3OTVDMTMuNjg3MiA4LjAzNDg3IDE0LjE0MzggOC4yNTEzNyAxNC40ODYzIDguNjE3NDZDMTQuODI4OCA4Ljk3OTYxIDE1IDkuNDUxOTkgMTUgMTAuMDM0NkMxNSAxMC43NTg5IDE0Ljc0MDIgMTEuMzQ1NCAxNC4yMjA2IDExLjc5NDJDMTMuNzAxIDEyLjI0MjkgMTMuMDQ1NiAxMi40NjczIDEyLjI1NDMgMTIuNDY3M0g5Ljc4NjE3Wk0xMC43NzgyIDQuODk3NTFWNy42MzEzOEgxMS43OTM4QzEyLjMzNyA3LjYzMTM4IDEyLjc2NDEgNy41MDE0OCAxMy4wNzUxIDcuMjQxNjdDMTMuMzg2MSA2Ljk3NzkzIDEzLjU0MTUgNi42MDc5IDEzLjU0MTUgNi4xMzE1OUMxMy41NDE1IDUuMzA4ODcgMTMuMDAwMyA0Ljg5NzUxIDExLjkxNzggNC44OTc1MUgxMC43NzgyWk0xMC43NzgyIDguNTIyOTlWMTEuNTY5OEgxMi4xMjQ0QzEyLjcwNyAxMS41Njk4IDEzLjE1NzcgMTEuNDMyIDEzLjQ3NjYgMTEuMTU2NUMxMy43OTk0IDEwLjg4MDkgMTMuOTYwOCAxMC41MDMgMTMuOTYwOCAxMC4wMjI4QzEzLjk2MDggOS4wMjI5MiAxMy4yNzk4IDguNTIyOTkgMTEuOTE3OCA4LjUyMjk5SDEwLjc3ODJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K\") center center no-repeat;\n}\n\n.vs .monaco-custom-checkbox.monaco-whole-word {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDJIMTVWM0gxVjJaTTE0IDRIMTNWMTJIMTRWNFpNMTEuMjcyIDguMzg3QzExLjE5NCA4LjA4OCAxMS4wNzMgNy44MjUgMTAuOTEyIDcuNjAxQzEwLjc1MSA3LjM3NyAxMC41NDcgNy4yIDEwLjMwMyA3LjA3MUMxMC4wNTkgNi45NDIgOS43NjkgNi44NzggOS40MzcgNi44NzhDOS4yMzkgNi44NzggOS4wNTcgNi45MDIgOC44OSA2Ljk1MUM4LjcyNSA3IDguNTc0IDcuMDY4IDguNDM3IDcuMTU2QzguMzAxIDcuMjQ0IDguMTggNy4zNSA4LjA3MiA3LjQ3NEw3Ljg5MyA3LjczMlY0LjU3OEg3VjEySDcuODkzVjExLjQyNUw4LjAxOSAxMS42QzguMTA2IDExLjcwMiA4LjIwOCAxMS43OSA4LjMyMyAxMS44NjlDOC40NCAxMS45NDcgOC41NzIgMTIuMDA5IDguNzIxIDEyLjA1NUM4Ljg3IDEyLjEwMSA5LjAzNSAxMi4xMjMgOS4yMTkgMTIuMTIzQzkuNTcyIDEyLjEyMyA5Ljg4NSAxMi4wNTIgMTAuMTU2IDExLjkxMUMxMC40MjggMTEuNzY4IDEwLjY1NSAxMS41NzMgMTAuODM4IDExLjMyNUMxMS4wMjEgMTEuMDc1IDExLjE1OSAxMC43ODIgMTEuMjUyIDEwLjQ0NkMxMS4zNDUgMTAuMTA4IDExLjM5MiA5Ljc0MyAxMS4zOTIgOS4zNDlDMTEuMzkxIDkuMDA3IDExLjM1MiA4LjY4NiAxMS4yNzIgOC4zODdaTTkuNzkzIDcuNzhDOS45NDQgNy44NTEgMTAuMDc1IDcuOTU2IDEwLjE4MyA4LjA5NEMxMC4yOTIgOC4yMzQgMTAuMzc3IDguNDA3IDEwLjQzOCA4LjYxMUMxMC40ODkgOC43ODUgMTAuNTIgOC45ODIgMTAuNTI3IDkuMTk4TDEwLjUyIDkuMzIzQzEwLjUyIDkuNjUgMTAuNDg3IDkuOTQzIDEwLjQyIDEwLjE5MkMxMC4zNTMgMTAuNDM4IDEwLjI1OSAxMC42NDUgMTAuMTQyIDEwLjgwNkMxMC4wMjUgMTAuOTY4IDkuODgyIDExLjA5MSA5LjcyMSAxMS4xNzJDOS4zOTkgMTEuMzM0IDguOTYxIDExLjMzOCA4LjY1MiAxMS4xODdDOC40OTkgMTEuMTEyIDguMzY2IDExLjAxMiA4LjI1OSAxMC44OTFDOC4xNzQgMTAuNzk1IDguMTAzIDEwLjY3NSA4LjA0MSAxMC41MjRDOC4wNDEgMTAuNTI0IDcuODYyIDEwLjA3NyA3Ljg2MiA5LjU3N0M3Ljg2MiA5LjA3NyA4LjA0MSA4LjU3NSA4LjA0MSA4LjU3NUM4LjEwMyA4LjM5OCA4LjE3NyA4LjI1NyA4LjI2NSA4LjE0NUM4LjM3OSA4LjAwMiA4LjUyMSA3Ljg4NiA4LjY4OSA3LjhDOC44NTcgNy43MTQgOS4wNTQgNy42NzEgOS4yNzYgNy42NzFDOS40NjYgNy42NzEgOS42NCA3LjcwOCA5Ljc5MyA3Ljc4Wk0xNSAxM0gxVjE0SDE1VjEzWk0yLjgxMyAxMEwyLjA4NSAxMi4wMzFIMUwxLjAyNSAxMS45NTlMMy40NjYgNC44NzMwNUg0LjQwN0w2Ljg5MiAxMi4wMzFINS44MUw1LjAzMiAxMEgyLjgxM1pNMy45MzQgNi40MjIwNUgzLjkxMkwzLjAwNyA5LjE3NTA1SDQuODQ4TDMuOTM0IDYuNDIyMDVaIiBmaWxsPSIjNDI0MjQyIi8+Cjwvc3ZnPgo=\") center center no-repeat;\n}\n\n.vs-dark .monaco-custom-checkbox.monaco-whole-word {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDJIMTVWM0gxVjJaTTE0IDRIMTNWMTJIMTRWNFpNMTEuMjcyIDguMzg3QzExLjE5NCA4LjA4OCAxMS4wNzMgNy44MjUgMTAuOTEyIDcuNjAxQzEwLjc1MSA3LjM3NyAxMC41NDcgNy4yIDEwLjMwMyA3LjA3MUMxMC4wNTkgNi45NDIgOS43NjkgNi44NzggOS40MzcgNi44NzhDOS4yMzkgNi44NzggOS4wNTcgNi45MDIgOC44OSA2Ljk1MUM4LjcyNSA3IDguNTc0IDcuMDY4IDguNDM3IDcuMTU2QzguMzAxIDcuMjQ0IDguMTggNy4zNSA4LjA3MiA3LjQ3NEw3Ljg5MyA3LjczMlY0LjU3OEg3VjEySDcuODkzVjExLjQyNUw4LjAxOSAxMS42QzguMTA2IDExLjcwMiA4LjIwOCAxMS43OSA4LjMyMyAxMS44NjlDOC40NCAxMS45NDcgOC41NzIgMTIuMDA5IDguNzIxIDEyLjA1NUM4Ljg3IDEyLjEwMSA5LjAzNSAxMi4xMjMgOS4yMTkgMTIuMTIzQzkuNTcyIDEyLjEyMyA5Ljg4NSAxMi4wNTIgMTAuMTU2IDExLjkxMUMxMC40MjggMTEuNzY4IDEwLjY1NSAxMS41NzMgMTAuODM4IDExLjMyNUMxMS4wMjEgMTEuMDc1IDExLjE1OSAxMC43ODIgMTEuMjUyIDEwLjQ0NkMxMS4zNDUgMTAuMTA4IDExLjM5MiA5Ljc0MyAxMS4zOTIgOS4zNDlDMTEuMzkxIDkuMDA3IDExLjM1MiA4LjY4NiAxMS4yNzIgOC4zODdaTTkuNzkzIDcuNzhDOS45NDQgNy44NTEgMTAuMDc1IDcuOTU2IDEwLjE4MyA4LjA5NEMxMC4yOTIgOC4yMzQgMTAuMzc3IDguNDA3IDEwLjQzOCA4LjYxMUMxMC40ODkgOC43ODUgMTAuNTIgOC45ODIgMTAuNTI3IDkuMTk4TDEwLjUyIDkuMzIzQzEwLjUyIDkuNjUgMTAuNDg3IDkuOTQzIDEwLjQyIDEwLjE5MkMxMC4zNTMgMTAuNDM4IDEwLjI1OSAxMC42NDUgMTAuMTQyIDEwLjgwNkMxMC4wMjUgMTAuOTY4IDkuODgyIDExLjA5MSA5LjcyMSAxMS4xNzJDOS4zOTkgMTEuMzM0IDguOTYxIDExLjMzOCA4LjY1MiAxMS4xODdDOC40OTkgMTEuMTEyIDguMzY2IDExLjAxMiA4LjI1OSAxMC44OTFDOC4xNzQgMTAuNzk1IDguMTAzIDEwLjY3NSA4LjA0MSAxMC41MjRDOC4wNDEgMTAuNTI0IDcuODYyIDEwLjA3NyA3Ljg2MiA5LjU3N0M3Ljg2MiA5LjA3NyA4LjA0MSA4LjU3NSA4LjA0MSA4LjU3NUM4LjEwMyA4LjM5OCA4LjE3NyA4LjI1NyA4LjI2NSA4LjE0NUM4LjM3OSA4LjAwMiA4LjUyMSA3Ljg4NiA4LjY4OSA3LjhDOC44NTcgNy43MTQgOS4wNTQgNy42NzEgOS4yNzYgNy42NzFDOS40NjYgNy42NzEgOS42NCA3LjcwOCA5Ljc5MyA3Ljc4Wk0xNSAxM0gxVjE0SDE1VjEzWk0yLjgxMyAxMEwyLjA4NSAxMi4wMzFIMUwxLjAyNSAxMS45NTlMMy40NjYgNC44NzMwNUg0LjQwN0w2Ljg5MiAxMi4wMzFINS44MUw1LjAzMiAxMEgyLjgxM1pNMy45MzQgNi40MjIwNUgzLjkxMkwzLjAwNyA5LjE3NTA1SDQuODQ4TDMuOTM0IDYuNDIyMDVaIiBmaWxsPSIjQzVDNUM1Ii8+Cjwvc3ZnPgo=\") center center no-repeat;\n}\n\n.hc-black .monaco-custom-checkbox.monaco-whole-word,\n.hc-black .monaco-custom-checkbox.monaco-whole-word:hover {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDJIMTVWM0gxVjJaTTE0IDRIMTNWMTJIMTRWNFpNMTEuMjcyIDguMzg3QzExLjE5NCA4LjA4OCAxMS4wNzMgNy44MjUgMTAuOTEyIDcuNjAxQzEwLjc1MSA3LjM3NyAxMC41NDcgNy4yIDEwLjMwMyA3LjA3MUMxMC4wNTkgNi45NDIgOS43NjkgNi44NzggOS40MzcgNi44NzhDOS4yMzkgNi44NzggOS4wNTcgNi45MDIgOC44OSA2Ljk1MUM4LjcyNSA3IDguNTc0IDcuMDY4IDguNDM3IDcuMTU2QzguMzAxIDcuMjQ0IDguMTggNy4zNSA4LjA3MiA3LjQ3NEw3Ljg5MyA3LjczMlY0LjU3OEg3VjEySDcuODkzVjExLjQyNUw4LjAxOSAxMS42QzguMTA2IDExLjcwMiA4LjIwOCAxMS43OSA4LjMyMyAxMS44NjlDOC40NCAxMS45NDcgOC41NzIgMTIuMDA5IDguNzIxIDEyLjA1NUM4Ljg3IDEyLjEwMSA5LjAzNSAxMi4xMjMgOS4yMTkgMTIuMTIzQzkuNTcyIDEyLjEyMyA5Ljg4NSAxMi4wNTIgMTAuMTU2IDExLjkxMUMxMC40MjggMTEuNzY4IDEwLjY1NSAxMS41NzMgMTAuODM4IDExLjMyNUMxMS4wMjEgMTEuMDc1IDExLjE1OSAxMC43ODIgMTEuMjUyIDEwLjQ0NkMxMS4zNDUgMTAuMTA4IDExLjM5MiA5Ljc0MyAxMS4zOTIgOS4zNDlDMTEuMzkxIDkuMDA3IDExLjM1MiA4LjY4NiAxMS4yNzIgOC4zODdaTTkuNzkzIDcuNzhDOS45NDQgNy44NTEgMTAuMDc1IDcuOTU2IDEwLjE4MyA4LjA5NEMxMC4yOTIgOC4yMzQgMTAuMzc3IDguNDA3IDEwLjQzOCA4LjYxMUMxMC40ODkgOC43ODUgMTAuNTIgOC45ODIgMTAuNTI3IDkuMTk4TDEwLjUyIDkuMzIzQzEwLjUyIDkuNjUgMTAuNDg3IDkuOTQzIDEwLjQyIDEwLjE5MkMxMC4zNTMgMTAuNDM4IDEwLjI1OSAxMC42NDUgMTAuMTQyIDEwLjgwNkMxMC4wMjUgMTAuOTY4IDkuODgyIDExLjA5MSA5LjcyMSAxMS4xNzJDOS4zOTkgMTEuMzM0IDguOTYxIDExLjMzOCA4LjY1MiAxMS4xODdDOC40OTkgMTEuMTEyIDguMzY2IDExLjAxMiA4LjI1OSAxMC44OTFDOC4xNzQgMTAuNzk1IDguMTAzIDEwLjY3NSA4LjA0MSAxMC41MjRDOC4wNDEgMTAuNTI0IDcuODYyIDEwLjA3NyA3Ljg2MiA5LjU3N0M3Ljg2MiA5LjA3NyA4LjA0MSA4LjU3NSA4LjA0MSA4LjU3NUM4LjEwMyA4LjM5OCA4LjE3NyA4LjI1NyA4LjI2NSA4LjE0NUM4LjM3OSA4LjAwMiA4LjUyMSA3Ljg4NiA4LjY4OSA3LjhDOC44NTcgNy43MTQgOS4wNTQgNy42NzEgOS4yNzYgNy42NzFDOS40NjYgNy42NzEgOS42NCA3LjcwOCA5Ljc5MyA3Ljc4Wk0xNSAxM0gxVjE0SDE1VjEzWk0yLjgxMyAxMEwyLjA4NSAxMi4wMzFIMUwxLjAyNSAxMS45NTlMMy40NjYgNC44NzMwNUg0LjQwN0w2Ljg5MiAxMi4wMzFINS44MUw1LjAzMiAxMEgyLjgxM1pNMy45MzQgNi40MjIwNUgzLjkxMkwzLjAwNyA5LjE3NTA1SDQuODQ4TDMuOTM0IDYuNDIyMDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K\") center center no-repeat;\n}\n\n.vs .monaco-custom-checkbox.monaco-regex {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4wMTIyIDJIMTAuOTg3OVY1LjExMzQ2TDEzLjU0ODkgMy41NTYwOUwxNC4wMzQgNC40NDA5NUwxMS40NzAyIDZMMTQuMDM0IDcuNTU5MDVMMTMuNTQ4OSA4LjQ0MzkxTDEwLjk4NzkgNi44ODY1NFYxMEgxMC4wMTIyVjYuODg2NTRMNy40NTExNCA4LjQ0MzkxTDYuOTY2MDYgNy41NTkwNUw5LjUyOTkgNkw2Ljk2NjA2IDQuNDQwOTVMNy40NTExNCAzLjU1NjA5TDEwLjAxMjIgNS4xMTM0NlYyWk0yIDEwSDZWMTRIMlYxMFoiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg==\") center center no-repeat;\n}\n\n.vs-dark .monaco-custom-checkbox.monaco-regex {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4wMTIyIDJIMTAuOTg3OVY1LjExMzQ2TDEzLjU0ODkgMy41NTYwOUwxNC4wMzQgNC40NDA5NUwxMS40NzAyIDZMMTQuMDM0IDcuNTU5MDVMMTMuNTQ4OSA4LjQ0MzkxTDEwLjk4NzkgNi44ODY1NFYxMEgxMC4wMTIyVjYuODg2NTRMNy40NTExNCA4LjQ0MzkxTDYuOTY2MDYgNy41NTkwNUw5LjUyOTkgNkw2Ljk2NjA2IDQuNDQwOTVMNy40NTExNCAzLjU1NjA5TDEwLjAxMjIgNS4xMTM0NlYyWk0yIDEwSDZWMTRIMlYxMFoiIGZpbGw9IiNDNUM1QzUiLz4KPC9zdmc+Cg==\") center center no-repeat;\n}\n\n.hc-black .monaco-custom-checkbox.monaco-regex,\n.hc-black .monaco-custom-checkbox.monaco-regex:hover {\n\tbackground: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4wMTIyIDJIMTAuOTg3OVY1LjExMzQ2TDEzLjU0ODkgMy41NTYwOUwxNC4wMzQgNC40NDA5NUwxMS40NzAyIDZMMTQuMDM0IDcuNTU5MDVMMTMuNTQ4OSA4LjQ0MzkxTDEwLjk4NzkgNi44ODY1NFYxMEgxMC4wMTIyVjYuODg2NTRMNy40NTExNCA4LjQ0MzkxTDYuOTY2MDYgNy41NTkwNUw5LjUyOTkgNkw2Ljk2NjA2IDQuNDQwOTVMNy40NTExNCAzLjU1NjA5TDEwLjAxMjIgNS4xMTM0NlYyWk0yIDEwSDZWMTRIMlYxMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=\") center center no-repeat;\n}\n"}]);