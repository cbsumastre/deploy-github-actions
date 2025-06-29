/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from '../../scenes/__root'
import { Route as ListImport } from '../../scenes/list'
import { Route as IndexImport } from '../../scenes/index'

// Create/Update Routes

const ListRoute = ListImport.update({
  id: '/list',
  path: '/list',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/list': {
      id: '/list'
      path: '/list'
      fullPath: '/list'
      preLoaderRoute: typeof ListImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/list': typeof ListRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/list': typeof ListRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/list': typeof ListRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/list'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/list'
  id: '__root__' | '/' | '/list'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ListRoute: typeof ListRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ListRoute: ListRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/list"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/list": {
      "filePath": "list.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
