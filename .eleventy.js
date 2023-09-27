const { minify } = require("terser");


module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy("./src/assets")
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
        code,
        callback
      ) {
        try {
          const minified = await minify(code);
          callback(null, minified.code);
        } catch (err) {
          console.error("Terser error: ", err);
          // Fail gracefully.
          callback(null, code);
        }
      });    
    return{
        dir:{
            input:"src",
            output:"public"
        }
    }


}


