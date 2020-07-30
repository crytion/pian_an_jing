// u4E00 u9FA5
// 19968 - 40869

// 遍历整个中文字符串码的10进制范围
// 转为16进制字符串,再转成中文

var fs = require('fs');
var str = "";
//所有中文的合集
var arrChinese = [];
// 中文的uni码范围
for(var i = 19968; i <= 40869;i++)
{
	// 10进制转16进制字符串
	var sss = i.toString(16).toUpperCase();
	
	arrChinese.push(toChinese("\\u" + sss));
	
	str += (toChinese("\\u" + sss) + "平安, ");
	
	if(i%20 == 0)
	{
		str += "\n";
	}
}

// 两字词语, 随便写写, 反正随机生成的
str += "\n";
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

// 三字词语, 随便写写, 反正随机生成的
str += "\n";
for(let i = 0; i < 40000; i++)
{
	var one = GetRandNum(0, arrChinese.length - 1);
	var two = GetRandNum(0, arrChinese.length - 1);
	var three = GetRandNum(0, arrChinese.length - 1);
	str += (arrChinese[one]+arrChinese[two]+arrChinese[three] + "平安, ");
	
	if(i%20 == 0)
	{
		str += "\n";
	}
}

fs.writeFile('./AI_平安经.txt', str, function(err) {
    if (err) {
        throw err;
    }

    console.log('Saved.');
});

// 16进制码转成中文
function toChinese(str)
{
	str = eval("'" + str + "'");
	return str;
};

// 整数的随机数
function GetRandNum( nMin, nMax )
{
    if (nMin >= nMax) return nMin;
    return nMin + Math.floor(Math.random() * (nMax - nMin + 1));
};

