 //import $ from 'jquery';
 import fabric from '../Fabric/fabric';

  export const addImage = (node,IMAGES) => {
      console.log(node,IMAGES)
  let c  = node.querySelector('#c')
    let canvas = new fabric.Canvas(c);
   fabric.Image.fromURL(IMAGES,(imgInstance)=>{
    canvas.add(imgInstance);
   })
  
  };
  