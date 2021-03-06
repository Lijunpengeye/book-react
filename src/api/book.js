import request from '@/api/axiosConfig'
export function getBookDetail(params) {
  return request({
    url: '/api/book/detail',
    method: 'get',
    params
  })
}

export function getCollectionBook(params) {
  return request({
    url: '/api/book/collection',
    method: 'get',
    params
  })
}

export function getSearch(params) {
  return request({
    url: '/api/book/search',
    method: 'get',
    params
  })
}

export function spotLike(params) {
  return request({
    url: '/api/user/commentlike',
    method: 'post',
    data: params
  })
}

export function addBookshelf(params) {
  return request({
    url: '/api/book/addbookshelf',
    method: 'post',
    data: params
  })
}
export function addComment(params) {
  return request({
    url: '/api/book/addcomment',
    method: 'post',
    data: params
  })
}

export function deleteCollection(params) {
  return request({
    url: '/api/book/deletecollection',
    method: 'post',
    data: params
  })
}
export function getBookList(params) {
  return request({
    url: '/api/book/booklist',
    method: 'get',
    params
  })
}

export function getSortType(params) {
  return request({
    url: '/api/book/sort',
    method: 'get',
    params
  })
}

export function getChapter(params) {
  return request({
    url: '/api/book/chapter',
    method: 'get',
    params
  })
}

export function getChapterList(params) {
  return request({
    url: '/api/book/chapterlist',
    method: 'get',
    params
  })
}