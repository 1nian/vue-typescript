type dataList = {}

export const axios = (url:string):Promise<dataList[]> => {
  return new Promise((resolve) => {
    let xhr:XMLHttpRequest = new XMLHttpRequest()

    xhr.open('GET',url)
  })
}