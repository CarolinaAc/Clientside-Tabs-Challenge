jest.mock('./http')
const { getArticles } = require("./util")


// Using mock functions for fetch testing to avoid calling the api every time we test
describe('GetArticles', () =>{
    const rtr = el => el
    it('should return an array', () => {
      
      getArticles('football',rtr).then(articles => {
         expect(articles).toBe(Array.isArray(articles))
      })       
    })
    it('that array should contain at least one object', () => {
      getArticles('football',rtr).then(articles => {
        expect(articles[0]).toBe(typeof 'object')
     })   
    })
    it('the object should have the keys webTitle and webUrl', () =>{
      getArticles('football',rtr).then(articles => {
        const keys = Object.keys(articles[0])
        console.log(keys)
        expect(keys).toBe(['webTitle', 'webUrl'])
      })   
    })
  })