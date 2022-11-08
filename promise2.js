// promises are asynchronuos
//primises may be fulfilled and there is a chaance of getting rejected

async function dadmakespromise(){
    const a=1;
    const dadspromise = await new Promise((resolve, reject) => {


        new setTimeout(() => {
            //after 10 days = 10*24*60*60*1000 milliseconds
            var salaryCredited = true;
            var salary = 100000
            var costofps5 = 40000
            var costofps4 = 30000
     
            if(salaryCredited === true && salary > costofps5){
              resolve('By him a ps3')
            }else if(salaryCredited === true && salary > costofps4){
             reject('By him a ps4')
            }else {
               reject('sorry son, i will try next month')
            }
         }, 10000)
     })
     console.log(dadspromise);
}

dadmakespromise();