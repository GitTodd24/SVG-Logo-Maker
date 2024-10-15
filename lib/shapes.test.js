const Shape = require('./shapes');

describe("Shape", ()=>{

  describe("shapeColor", ()=>{
    it("test shapeColor", ()=>{
        const shape= new Shape("GB", "gold", "black")
        expect(shape.shapeColor).toEqual("color")
    })
  })

  describe("textColor", ()=>{
    it("test textColor", ()=>{
        const shape=new Shape("GB", "gold", "black")
        expect(shape.textColor).toEqual("gold")
    })
  })

  describe("text", ()=>{
    it("test text", ()=>{
        const shape=new Shape("GB", "gold", "black")
        expect(shape.text).toEqual("black")
    })
  })

  describe("render", ()=>{
    it ("test shape svg log", ()=>{
        const shape=new Shape ("GB", "gold", "black")
        expect(shape.render()).toEqual("Child is required to use its own render()")
    })
    })
   })
            
    
