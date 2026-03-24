// pdfjs-dist krkr pakage we have to import  
import fs from "fs"
import * as pdfjsLib from  "pdfjs-dist/legacy/build/pdf.mjs";
 export const analyzeResume = async(requestAnimationFrame,res)=>{
  try {
    if(!req.file){
      return res.status(400).json({message:"Resume required"});
    }
    const filepath = req.file.path 
    const fileBuffer = await fs.promises.readFile(filepath)
    const uint8Array = new Uint8Array(fileBuffer)

    const pdf = await pdfjsLib.getDocument({data:uint8Array}).promise;

    let resumeText =" "
    // Extract all 
    for (let pageNum =1 ;pageNum <= pdf.numPages;pageNum++){
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();

      const pageText = content.items.map(item => item.str).join( " ");
      resumeText += pageText + "/n";
    }

    resumeText = resumeText .replace(/\s+/g," ").trim();
  } catch (error) {
    
  }
 }