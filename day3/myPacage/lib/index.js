//实现数组去重并排序
const fn = {
    handleArr(arr){
        //数组的排序
        var isSort = true;
        for(let i = 0; i < arr.length;i++){
            for(let j = 0; j < arr.length-i-1;j++){
                if(arr[j] > arr[j+1]){
                    let tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                    isSort = false;
                }
            }
            if (isSort) {
                break;
            }
           
        }
       /*   var tmpArr =[];
        for(let m =0; m < arr.length;m++){

            if (tmpArr.indexOf(arr[m]) == -1) {
                tmpArr.push(arr[m]);
            }

        } */
        //数组去重
        for(let m = 0; m < arr.length-1;m++){
            for(let n = m +1;n<arr.length-1;n++){
                if (arr[m] == arr[n]) {
                    arr.splice(n,1);
                    n--;
                }
            }
        }

        return arr;
       
    }
}
module.exports =fn;