
var fs = require('fs');
var str = "";

fs.readFile('./normal.txt', 'utf-8', function(err, data) {
    // 读取文件失败/错误
    if (err) {
        throw err;
    }
	var arrChinese = data.split(" ");
	
	WriteTxtFile(arrChinese);
	
	
});


function WriteTxtFile(arrChinese)
{
	for(let i = 0; i < 30000; i++)
	{
		var one = GetRandNum(0, arrChinese.length - 1);
		var two = GetRandNum(0, arrChinese.length - 1);
		str += (arrChinese[one]+arrChinese[two] + "平安, ");
	
		if(i%20 == 0)
		{
			str += "\n";
		}
	}
	
	
	fs.writeFile('./常用词平安经.txt', str, function(err) {
		if (err) {
			throw err;
		}
	
		console.log('Saved.');
	});

}


// 整数的随机数
function GetRandNum( nMin, nMax )
{
    if (nMin >= nMax) return nMin;
    return nMin + Math.floor(Math.random() * (nMax - nMin + 1));
};

