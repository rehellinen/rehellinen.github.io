/**
 *  utils.js
 *  Create By rehellinen
 *  Create On 2018/9/26 10:21
 */
import {resolve} from 'path'

export const r = path => resolve(__dirname, path)

export const isEmptyObj = (obj) => {
  let keys = Object.keys(obj)
  return keys.length === 0;
}

